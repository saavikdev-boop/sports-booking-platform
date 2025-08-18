# 🚀 Push Sports Booking Platform to GitHub

## Step 1: Create GitHub Repository

First, go to [GitHub](https://github.com) and:
1. Click "New Repository" (+ icon)
2. Name it: `sports-booking-platform` (or your preferred name)
3. Make it Public (so others can access)
4. **DON'T** initialize with README (we'll push our own)
5. Click "Create Repository"

## Step 2: Initialize Git and Create .gitignore

```bash
# Navigate to your project directory
cd sports-booking

# Initialize git repository
git init

# Create comprehensive .gitignore file
cat > .gitignore << 'EOF'
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
package-lock.json
yarn.lock
pnpm-lock.yaml

# Next.js
frontend/.next/
frontend/out/
frontend/build/
frontend/*.log

# Production
dist/
build/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
.env*.local

# Database
*.sqlite
*.sqlite3
*.db
backend/prisma/*.db
backend/prisma/*.db-journal
postgres_data/

# IDE
.vscode/
.idea/
*.swp
*.swo
.DS_Store
Thumbs.db

# Docker volumes
docker-volumes/
postgres_data/

# Logs
logs/
*.log

# Testing
coverage/
.nyc_output/

# Temporary files
tmp/
temp/
*.tmp

# Backup files
*.backup
*.bak
backup*.sql

# OS files
.DS_Store
Thumbs.db
EOF

echo "✅ .gitignore created"
```

## Step 3: Create a Polished README.md

```bash
cat > README.md << 'EOF'
# 🏆 Sports Booking Platform

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Docker](https://img.shields.io/badge/docker-ready-brightgreen.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

**A modern, production-ready sports venue booking platform**

[Features](#-features) • [Quick Start](#-quick-start) • [Tech Stack](#-tech-stack) • [Screenshots](#-screenshots) • [Contributing](#-contributing)

</div>

---

## 🌟 Features

✅ **Venue Discovery** - Browse and search sports facilities  
✅ **Real-time Booking** - Instant availability and slot booking  
✅ **User Management** - Secure authentication and profiles  
✅ **Admin Dashboard** - Comprehensive venue management  
✅ **Payment Ready** - Integrated payment processing setup  
✅ **Responsive Design** - Beautiful UI on all devices  
✅ **Docker Deployment** - One-command setup and deployment  

## 🚀 Quick Start

### Prerequisites
- Docker & Docker Compose installed
- Git installed
- 8GB RAM minimum
- Ports 3000, 5000, 5432, 6379, 80 available

### 30-Second Setup

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/sports-booking-platform.git
cd sports-booking-platform

# Run automated setup
chmod +x setup.sh
./setup.sh

# Access the application
# Frontend: http://localhost:3000
# Backend API: http://localhost:5000
```

That's it! 🎉 The platform is now running on your machine.

## 🛠️ Tech Stack

<table>
<tr>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="48" height="48" alt="Next.js" />
<br>Next.js
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="48" height="48" alt="TypeScript" />
<br>TypeScript
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width="48" height="48" alt="Tailwind" />
<br>Tailwind
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="48" height="48" alt="Node.js" />
<br>Node.js
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" width="48" height="48" alt="PostgreSQL" />
<br>PostgreSQL
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" width="48" height="48" alt="Redis" />
<br>Redis
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" width="48" height="48" alt="Docker" />
<br>Docker
</td>
</tr>
</table>

## 📁 Project Structure

```
sports-booking-platform/
├── 🎨 frontend/          # Next.js frontend application
├── ⚙️ backend/           # Node.js Express API
├── 🔧 nginx/            # Nginx reverse proxy
├── 📦 docker-compose.yml # Docker orchestration
├── 🚀 setup.sh          # One-click setup script
├── ▶️ start.sh          # Daily start script
└── 📋 sports.sh         # Interactive control panel
```

## 🔧 Management Scripts

| Script | Purpose | Usage |
|--------|---------|-------|
| `setup.sh` | First-time installation | `./setup.sh` |
| `start.sh` | Start all services | `./start.sh` |
| `stop.sh` | Stop all services | `./stop.sh` |
| `restart.sh` | Restart services | `./restart.sh` |
| `status.sh` | Check health status | `./status.sh` |
| `logs.sh` | View service logs | `./logs.sh` |
| `db.sh` | Database operations | `./db.sh` |
| `sports.sh` | Interactive menu | `./sports.sh` |

## 🎯 Daily Usage

```bash
# Morning - Start services
./start.sh

# Check status anytime
./status.sh

# Evening - Stop services
./stop.sh

# Or use interactive menu
./sports.sh
```

## 📸 Screenshots

<details>
<summary>Click to view screenshots</summary>

### Homepage
Beautiful landing page with venue discovery

### Booking Flow
Seamless booking experience

### Admin Dashboard
Comprehensive management interface

</details>

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL=postgresql://sports_user:sports_pass@localhost:5432/sports_booking

# Redis
REDIS_URL=redis://localhost:6379

# JWT
JWT_SECRET=your-secret-key-change-in-production

# API
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## 🐛 Troubleshooting

<details>
<summary>Port already in use?</summary>

```bash
# Run the restart script with port cleanup
./restart.sh
```
</details>

<details>
<summary>Database connection issues?</summary>

```bash
# Check database status
./status.sh

# Reset database
./db.sh  # Select option 3
```
</details>

<details>
<summary>Need fresh installation?</summary>

```bash
# Clean everything and start fresh
./clean.sh
./setup.sh
```
</details>

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Prisma for the excellent ORM
- Docker for containerization
- All contributors and supporters

## 📞 Support

- 📧 Email: support@sportsbooking.com
- 💬 Discord: [Join our community](https://discord.gg/sportsbooking)
- 🐛 Issues: [GitHub Issues](https://github.com/YOUR_USERNAME/sports-booking-platform/issues)

---

<div align="center">

**If you find this project useful, please ⭐ star this repository!**

Made with ❤️ by the Sports Booking Team

</div>
EOF

echo "✅ README.md created"
```

## Step 4: Create LICENSE file

```bash
cat > LICENSE << 'EOF'
MIT License

Copyright (c) 2024 Sports Booking Platform

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
EOF

echo "✅ LICENSE created"
```

## Step 5: Create CONTRIBUTING.md

```bash
cat > CONTRIBUTING.md << 'EOF'
# Contributing to Sports Booking Platform

First off, thank you for considering contributing to Sports Booking Platform! 🎉

## How Can I Contribute?

### Reporting Bugs
- Check if the bug has already been reported
- Open a new issue with a clear title and description
- Include steps to reproduce the issue

### Suggesting Enhancements
- Open an issue with the `enhancement` label
- Clearly describe the feature and its benefits
- Include mockups or examples if applicable

### Pull Requests
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Test thoroughly
5. Commit with clear messages: `git commit -m 'Add: your feature'`
6. Push to your fork: `git push origin feature/your-feature`
7. Open a Pull Request

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/sports-booking-platform.git
cd sports-booking-platform

# Run setup
./setup.sh

# Make your changes
# Test with ./start.sh
```

## Code Style
- Use TypeScript
- Follow ESLint rules
- Write meaningful commit messages
- Add comments for complex logic

Thank you for contributing! 🙏
EOF

echo "✅ CONTRIBUTING.md created"
```

## Step 6: First Commit - README and Setup Scripts

```bash
# Add README and setup scripts first (for easy access)
git add README.md
git add LICENSE
git add CONTRIBUTING.md
git add setup.sh
git add start.sh
git add stop.sh
git add restart.sh
git add status.sh
git add logs.sh
git add db.sh
git add clean.sh
git add sports.sh
git add .gitignore

# Create first commit
git commit -m "🎉 Initial commit: README and setup scripts for easy installation"
```

## Step 7: Second Commit - Application Code

```bash
# Add all application code
git add docker-compose.yml
git add .env.example  # Rename .env to .env.example first
mv .env .env.example
git add .env.example

# Add backend
git add backend/

# Add frontend
git add frontend/

# Add nginx
git add nginx/

# Commit application code
git commit -m "✨ Add: Complete sports booking platform with Docker setup"
```

## Step 8: Connect to GitHub and Push

```bash
# Add your GitHub repository as origin
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/sports-booking-platform.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 9: Create GitHub Release (Optional)

After pushing, go to your GitHub repository:
1. Click on "Releases" → "Create a new release"
2. Tag version: `v1.0.0`
3. Release title: "Sports Booking Platform v1.0.0 - Initial Release"
4. Description:
```markdown
## 🎉 Initial Release

### Features
- ✅ Complete venue booking system
- ✅ User authentication
- ✅ Admin dashboard
- ✅ Docker deployment
- ✅ One-click setup with `setup.sh`

### Quick Start
```bash
git clone https://github.com/YOUR_USERNAME/sports-booking-platform.git
cd sports-booking-platform
./setup.sh
```

### Requirements
- Docker & Docker Compose
- 8GB RAM
- Available ports: 3000, 5000, 5432, 6379, 80
```

## Step 10: Update Repository Settings

On GitHub, go to Settings and:
1. Add topics: `sports`, `booking`, `nextjs`, `docker`, `typescript`, `postgresql`
2. Add description: "🏆 Modern sports venue booking platform with Next.js, Node.js, and Docker"
3. Add website: `http://localhost:3000` (or your deployed URL)
4. Enable Issues and Discussions

## Complete Push Script

Save this as `push-to-github.sh`:

```bash
#!/bin/bash

echo "📦 Preparing to push to GitHub..."

# Initialize git if not already
if [ ! -d .git ]; then
    git init
fi

# Create .gitignore
cat > .gitignore << 'GITIGNORE'
node_modules/
.env
.env.local
*.log
.next/
dist/
build/
postgres_data/
.DS_Store
*.backup
*.sql
GITIGNORE

# Rename .env to .env.example
if [ -f .env ]; then
    cp .env .env.example
fi

# Add files in order
echo "📝 Adding README and scripts..."
git add README.md LICENSE CONTRIBUTING.md *.sh .gitignore
git commit -m "🎉 Initial commit: README and setup scripts for easy installation"

echo "💻 Adding application code..."
git add .
git commit -m "✨ Add: Complete sports booking platform with Docker setup"

# Get GitHub username
read -p "Enter your GitHub username: " username
read -p "Enter repository name (default: sports-booking-platform): " repo_name
repo_name=${repo_name:-sports-booking-platform}

# Add remote and push
git remote add origin https://github.com/$username/$repo_name.git
git branch -M main
git push -u origin main

echo "✅ Successfully pushed to GitHub!"
echo "🔗 Visit: https://github.com/$username/$repo_name"
echo ""
echo "Next steps:"
echo "1. Add topics and description in GitHub settings"
echo "2. Create a release if desired"
echo "3. Share the link with others!"
```

Make it executable and run:
```bash
chmod +x push-to-github.sh
./push-to-github.sh
```

## 🎉 Share Your Repository

After pushing, share your repository link:
```
https://github.com/YOUR_USERNAME/sports-booking-platform
```

Users can now simply:
```bash
git clone https://github.com/YOUR_USERNAME/sports-booking-platform.git
cd sports-booking-platform
./setup.sh
```

And they'll have the entire platform running in seconds! 🚀
