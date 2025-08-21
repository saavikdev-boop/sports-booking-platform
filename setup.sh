#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 Starting Sports Booking Platform Setup...${NC}"

# Detect which docker compose command to use
if command -v docker-compose &> /dev/null; then
    DOCKER_COMPOSE="docker-compose"
elif docker compose version &> /dev/null; then
    DOCKER_COMPOSE="docker compose"
else
    echo -e "${RED}❌ Docker Compose is not installed!${NC}"
    echo "Installing Docker Compose..."
    sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    DOCKER_COMPOSE="docker-compose"
fi

echo -e "${GREEN}✅ Using: $DOCKER_COMPOSE${NC}"

# Function to check and free ports
check_and_free_port() {
    local port=$1
    local service=$2
    
    if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null 2>&1; then
        echo -e "${YELLOW}⚠️  Port $port is in use. Freeing it...${NC}"
        
        # Stop system services
        sudo systemctl stop $service 2>/dev/null || true
        sudo service $service stop 2>/dev/null || true
        
        # Force kill if still in use
        if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null 2>&1; then
            sudo kill -9 $(lsof -t -i:$port) 2>/dev/null || true
        fi
        
        echo -e "${GREEN}✅ Port $port freed${NC}"
    fi
}

# Check and free required ports
echo -e "${YELLOW}🔍 Checking ports...${NC}"
check_and_free_port 5432 postgresql
check_and_free_port 6379 redis-server
check_and_free_port 3000 node
check_and_free_port 5000 node
check_and_free_port 80 nginx

# Stop any existing containers
echo -e "${YELLOW}🛑 Stopping any existing containers...${NC}"
$DOCKER_COMPOSE down 2>/dev/null || true

# Build and start services
echo -e "${YELLOW}🐳 Building Docker images...${NC}"
$DOCKER_COMPOSE build --no-cache

echo -e "${YELLOW}🚀 Starting services...${NC}"
$DOCKER_COMPOSE up -d

# Wait for services to be ready
echo -e "${YELLOW}⏳ Waiting for services to be ready...${NC}"
sleep 15

# Check if PostgreSQL is ready
until $DOCKER_COMPOSE exec -T postgres pg_isready -U sports_user > /dev/null 2>&1; do
    echo "Waiting for PostgreSQL..."
    sleep 2
done

# Run database migrations
echo -e "${YELLOW}🗄️ Running database migrations...${NC}"
$DOCKER_COMPOSE exec -T backend npx prisma generate
$DOCKER_COMPOSE exec -T backend npx prisma migrate dev --name init || true

# Show status
echo -e "${YELLOW}📊 Service Status:${NC}"
$DOCKER_COMPOSE ps

echo -e "${GREEN}✅ Setup complete!${NC}"
echo -e "${GREEN}📱 Frontend: http://localhost:3000${NC}"
echo -e "${GREEN}🔧 Backend API: http://localhost:5000${NC}"
echo -e "${GREEN}🌐 Main App: http://localhost${NC}"
