# Enterprise Microfrontend Shell & Module Federation Container

[![Webpack 5](https://img.shields.io/badge/Webpack-5.90+-8DD6F9?logo=webpack&logoColor=black)](https://webpack.js.org/)
[![React](https://img.shields.io/badge/React-18.2+-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Zustand](https://img.shields.io/badge/State-Zustand%20Singleton-443e38)](https://github.com/pmndrs/zustand)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

> **Architected by [Ashutosh Moralwar](https://linkedin.com/in/ashutosh-moralwar)**  
> *Senior Software Engineer | Microfrontend Architecture, React & Frontend Performance*

A battle-tested Host Shell container engineered for distributed enterprise systems (reinsurance, banking, multi-team portals). Enables autonomous feature squads to build, test, and release independent remotes with zero deployment lock-in and zero release downtime.

---

## 🏛️ Architectural Topology

```
┌───────────────────────────────────────────────────────────────┐
│                    HOST SHELL CONTAINER                      │
│             (Root Routing, Auth, Global Navigation)            │
└───────────────┬───────────────────────────────┬───────────────┘
                │                               │
       Module Federation               Module Federation
       Remote Boundary                 Remote Boundary
                ▼                               ▼
┌───────────────────────────────┐ ┌───────────────────────────────┐
│    Reinsurance Policy Remote  │ │     Claims Intake Remote      │
│  - Underwriting Stepper       │ │  - Document Scanner           │
│  - Premium Risk Calculator    │ │  - Incident Audit Trail       │
│  - Independent CI/CD Pipeline │ │  - Independent CI/CD Pipeline │
└───────────────────────────────┘ └───────────────────────────────┘
                ▲                               ▲
                └───────────────┬───────────────┘
                                │
                    Shared Singleton Layer
               (React, React-DOM, Zustand Store)
```

---

## ⚡ Key Architectural Capabilities

- **Bidirectional Module Federation**: Remotes are consumed dynamically via asynchronous script injection without recompiling the host shell.
- **Shared Singleton Memory**: `react` and `react-dom` singletons guarantee zero dual-React hook collision across federated boundaries.
- **Fault-Tolerant Circuit Breaker**: If an individual micro-remote fails to load or experiences an unhandled runtime exception, an isolated `RemoteErrorBoundary` renders a graceful fallback without crashing neighboring modules.
- **Lightweight Event Sync**: Cross-remote state communication is mediated through a typed Zustand singleton store and custom window event dispatchers.
- **42% Payload Reduction**: Initial document paint only downloads the lightweight shell; heavy business domains are streamed on-demand.

---

## 🚀 Quick Start

### 1. Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/ashutosh232/microfrontend-shell-federation.git
cd microfrontend-shell-federation

# Install dependencies
npm install
```

### 3. Development Mode
```bash
# Start host shell on http://localhost:3000
npm run start
```

---

## 🛠️ Tech Stack & Dependencies
- **Core**: React 18.2, TypeScript 5.3
- **Bundler**: Webpack 5.90, ModuleFederationPlugin
- **State**: Zustand (Singleton cross-mfe bus)
- **Styling**: Tailwind CSS
- **Testing**: Jest, React Testing Library

---

## 📄 License
MIT © [Ashutosh Moralwar](https://linkedin.com/in/ashutosh-moralwar)
