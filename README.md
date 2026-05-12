# CI/CD Learning Project (Minimal)

This is a tiny full-stack project meant for learning Docker, GitHub Actions, AWS deployments, and CI/CD. It's intentionally minimal and not production-ready.

Project layout:

```
cloud-cicd-learning/
├── frontend/
└── backend/
```

Quick start (each in a separate terminal):

- Backend

```bash
cd backend
npm install
npm start
# server runs on http://localhost:5000
```

- Frontend

```bash
cd frontend
npm install
npm run dev
# open the shown Vite URL (usually http://localhost:5173)
```

What the app does:

- Frontend page shows title "CI/CD Learning Project", a button "Fetch Backend Message", and a textarea.
- Clicking the button sends a GET to `/api/message` on the backend and displays the JSON `message` value.

Backend endpoints:

- GET `/api/health` → { "status": "Backend running" }
- GET `/api/message` → { "message": "Hello from backend 🚀" }

Next steps you may want to try:

- Dockerize frontend and backend
- Add GitHub Actions workflow for CI (install & test/build)
- Deploy containers to AWS (ECS, EKS, or EC2) behind a load balancer

Enjoy learning CI/CD!

Docker (local)

Build and run with Docker Compose (from project root):

```bash
docker compose build
docker compose up
```

- Frontend will be available at http://localhost:8080
- Backend will be available at http://localhost:5000

If you prefer building single images:

```bash
# Backend image
docker build -t cicd-backend:local -f backend/Dockerfile ./backend

# Frontend image
docker build -t cicd-frontend:local -f frontend/Dockerfile ./frontend
```
# abcd
