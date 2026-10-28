<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project. -->

# 🎓 Smart Campus Intelligence System

A Full-Stack Smart Campus Monitoring & Analytics Platform built with **FastAPI**, **SQLAlchemy**, **React**, and **Recharts**.

## 🚀 Key Features
- **Student Management**: CRUD endpoints to manage student profiles and departments.
- **Energy Analytics**: Real-time tracking of building energy consumption in kWh.
- **Canteen Waste Management**: Monitoring food prepared vs. wasted to optimize supply.
- **Interactive Dashboard**: Live graphs and visual metrics powered by React and Recharts.

## 🛠️ Tech Stack
- **Backend**: Python, FastAPI, SQLite, SQLAlchemy, Pydantic
- **Frontend**: React (Vite), JavaScript, Tailwind CSS / CSS, Recharts
- **Tooling**: Git, GitHub, Uvicorn

## 🔧 How to Run Locally

### 1. Backend Setup
```powershell
# Activate virtual environment
venv\Scripts\activate

# Start FastAPI server
uvicorn backend.main:app --reload
