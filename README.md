# 🛡️ Tabletop Plateforme

**Cyber Crisis Simulation Platform** — A web-based tabletop exercise platform for simulating cyber crisis scenarios, tracking team decisions in real-time, and generating AI-powered After-Action Reports.

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14+ (TypeScript, App Router, Tailwind CSS) |
| Backend | NestJS (TypeScript) |
| Real-Time | Socket.io |
| Database | PostgreSQL 16 |
| Cache/State | Redis 7 |
| AI | OpenAI API |
| ORM | TypeORM |
| Auth | JWT + Passport.js (RBAC) |
| DevOps | Docker Compose, GitHub Actions |

## 🚀 Getting Started

### Prerequisites

- Node.js v20+
- pnpm
- Docker Desktop
- Git

### Setup

```bash
# Clone the repo
git clone https://github.com/0xjiggy/tabletop-plateforme.git
cd tabletop-plateforme

# Start databases
docker compose up -d

# Install backend dependencies & start
cd backend
pnpm install
pnpm run start:dev

# Install frontend dependencies & start
cd ../frontend
pnpm install
pnpm run dev
```

## 📁 Project Structure

```
tabletop-plateforme/
├── backend/          # NestJS API server (port 3001)
├── frontend/         # Next.js frontend (port 3000)
├── docker-compose.yml
└── README.md
```

## 🗓️ Roadmap

- **Month 1** — Setup & Foundation (Auth, Docker, UI layout)
- **Month 2** — Scenario Builder (injects, templates, MITRE ATT&CK)
- **Month 3** — Live Exercise Engine (War Room, Socket.io)
- **Month 4** — Response Capture & Scoring
- **Month 5** — AI-Powered AARs (OpenAI, PDF export)
- **Month 6** — Testing & Demo

## 📄 License

MIT