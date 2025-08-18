#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 Starting Sports Booking Platform...${NC}"

# Function to check port availability
check_port() {
    local port=$1
    if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null 2>&1; then
        return 1
    else
        return 0
    fi
}

# Check if containers exist
if [ "$(docker ps -aq -f name=sports-)" ]; then
    echo -e "${YELLOW}📦 Found existing containers${NC}"
    
    # Check if they're running
    if [ "$(docker ps -q -f name=sports-)" ]; then
        echo -e "${GREEN}✅ Services are already running${NC}"
        docker-compose ps
    else
        echo -e "${YELLOW}▶️  Starting stopped containers...${NC}"
        docker-compose start
    fi
else
    echo -e "${YELLOW}🐳 Starting new containers...${NC}"
    
    # Check ports before starting
    ports_in_use=""
    for port in 5432 6379 3000 5000 80; do
        if ! check_port $port; then
            ports_in_use="$ports_in_use $port"
        fi
    done
    
    if [ ! -z "$ports_in_use" ]; then
        echo -e "${RED}⚠️  Warning: Following ports are in use:$ports_in_use${NC}"
        echo -e "${YELLOW}Run './stop.sh' first or './restart.sh' to restart everything${NC}"
        exit 1
    fi
    
    docker-compose up -d
fi

# Wait a moment
sleep 3

# Show status
echo -e "${GREEN}📊 Service Status:${NC}"
docker-compose ps

# Check health
healthy=true
for service in sports-db sports-redis sports-backend sports-frontend; do
    if [ "$(docker inspect -f '{{.State.Running}}' $service 2>/dev/null)" != "true" ]; then
        echo -e "${RED}❌ $service is not running${NC}"
        healthy=false
    fi
done

if $healthy; then
    echo -e "${GREEN}✅ All services are healthy!${NC}"
    echo -e "${GREEN}📱 Frontend: http://localhost:3000${NC}"
    echo -e "${GREEN}🔧 Backend API: http://localhost:5000${NC}"
    echo -e "${GREEN}🌐 Main App: http://localhost${NC}"
    echo ""
    echo -e "${YELLOW}Useful commands:${NC}"
    echo "  ./logs.sh          - View logs"
    echo "  ./stop.sh          - Stop services"
    echo "  ./restart.sh       - Restart services"
    echo "  ./status.sh        - Check status"
else
    echo -e "${RED}⚠️  Some services failed to start. Check logs with: docker-compose logs${NC}"
fi
