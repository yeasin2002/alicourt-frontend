# Alicourt Frontend

A modern React + TypeScript + Vite project using Bun as the package manager. Includes Redux Toolkit, RTK Query, Zod, and Radix UI for building scalable, type-safe web applications.

## Features

- ⚡️ Vite for fast development
- 🦄 React 18 + TypeScript
- 🍞 Redux Toolkit & RTK Query for state management and API calls
- 🔒 Authentication flows
- 🎨 Radix UI & custom UI components
- 🧪 ESLint & code quality tools
- 🚀 Bun for ultra-fast installs and scripts

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed globally (`curl -fsSL https://bun.sh/install | bash`)

### Setup

Clone the repository and install dependencies:

```sh
git clone <your-repo-url>
cd alicourt-frontend
bun install
```

### Development

Start the development server:

```sh
bun run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build

To build for production:

```sh
bun run build
```

### Lint

To check code quality:

```sh
bun run lint
```

## Project Structure

- `src/` — Main source code
  - `components/` — UI and layout components
  - `data/` — Schemas and static data
  - `hooks/` — Custom React hooks
  - `lib/` — Utilities and base queries
  - `page/` — Route pages
  - `store/` — Redux slices and API logic
  - `types/` — TypeScript types

## Environment

- Configure API endpoints and secrets in `src/lib/rtk-base-query.ts` or via environment variables as needed.

---

Made with ❤️ using React, Vite, and Bun.
