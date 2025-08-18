#!/bin/bash

echo "🚀 Setting up Sports Booking Platform..."

# Create all directories
echo "📁 Creating directory structure..."
mkdir -p frontend/src/{app,components,lib,types}
mkdir -p backend/src/{routes,controllers,middleware,utils}
mkdir -p backend/prisma
mkdir -p nginx

# Create all files (copy all the cat commands from above)
# ... (include all file creation commands here)

echo "📦 Installing dependencies..."
cd backend && npm install && cd ..
cd frontend && npm install && cd ..

echo "🐳 Starting Docker services..."
docker-compose up --build -d

echo "⏳ Waiting for database to be ready..."
sleep 10

echo "🗄️ Running database migrations..."
docker-compose exec backend npx prisma migrate dev --name init

echo "✅ Setup complete!"
echo "📱 Frontend: http://localhost:3000"
echo "🔧 Backend: http://localhost:5000"
echo "🌐 App: http://localhost"
