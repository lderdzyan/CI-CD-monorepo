# CI/CD Monorepo (Backend + Frontend + GitHub Actions)

This repository is a CI/CD-centered monorepo that automates build, test, security checks, and deployment for backend and frontend applications using GitHub Actions and AWS CLI.

---

##  Overview

This repo contains:
- Backend services (serverless functions)
- Frontend monorepo (Turborepo-based apps)
- CI/CD pipelines using GitHub Actions
- Automated deployment to AWS using AWS CLI

The main goal is to provide:
- Automated builds
- Consistent deployments
- Security checks (npm/pnpm audit)
- Multi-app frontend orchestration

---

##  Repository Structure

```
.github/workflows/ # CI/CD pipelines (GitHub Actions)
backend/ # Serverless backend services
  function1/
  function2/
  function3/
  serverless.yaml

frontend/ # Turborepo frontend monorepo
  apps/
    auth/
    mwi/
  packages/
  turbo.json
  pnpm-workspace.yaml
  .tool-versions # Version manager config
  pnpm-lock.yaml
  package.json

```
---

##  Backend

The backend is built using serverless functions (Node.js/TypeScript).

### Features:
- Multiple independent functions
- Serverless deployment model
- AWS CLI-based deployment
- Configured via `serverless.yaml`

### Example functions:
- function1
- function2
- function3

---

##  Frontend

The frontend uses a **Turborepo-based monorepo**.

### Structure:
- `apps/auth` → Authentication app
- `apps/mwi` → Main web interface
- Shared packages in `/packages`

### Features:
- PNPM workspace
- Turbo caching for fast builds
- Modular apps architecture

---

##  CI/CD Pipelines

Located in `.github/workflows/`

### Backend Pipelines:
- `backend-build.yaml` → builds backend functions
- `backend-deploy.yaml` → deploys backend to AWS

### Frontend Pipelines:
- `build-frontend-turborepo.yaml` → builds all frontend apps
- `deploy-frontend-turborepo.yaml` → deploys frontend apps

### Additional Workflows:
- `npm-audit.yaml` → npm dependency security scan
- `pnpm-audit.yaml` → pnpm dependency security scan
- `milestones-copy.yaml` → project tracking automation
- `project-status-change.yaml` → workflow automation for project state

---

##  Deployment

Deployment is done using **AWS CLI** (no Terraform/CDK/Pulumi).

Typical flow:

### Backend
1. Build TypeScript functions
2. Package artifacts
3. Deploy using AWS CLI (Lambda / related services)

### Frontend
1. Build via Turborepo
2. Output static assets
3. Deploy to AWS (commonly S3 / CloudFront)

---

##  Security

This repo includes automated dependency scanning:
- npm audit
- pnpm audit

Triggered via GitHub Actions.

---

##  Key Technologies

- Node.js / TypeScript
- PNPM + Turborepo
- GitHub Actions
- AWS CLI
- Serverless architecture

---

##  CI/CD Flow


Push / PR
↓
GitHub Actions
↓
Build (backend / frontend)
↓
Security checks (audit)
↓
Deploy via AWS CLI


---

##  Purpose

This repository is designed to:
- Automate full-stack deployments
- Maintain consistent CI/CD pipelines
- Support scalable frontend + backend architecture
- Reduce manual deployment effort

---

##  Notes

- Backend is serverless-based
- Frontend uses monorepo architecture (Turborepo)
- Deployment is fully AWS CLI-driven (no IaC tools)

---

## 👤 Author

Maintained as part of CI/CD infrastructure automation.
