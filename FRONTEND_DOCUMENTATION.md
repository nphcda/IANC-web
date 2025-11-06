## OptiCCS Frontend Documentation

### System Overview

This repository contains the OptiCCS frontend client built with React (Vite + React Router + TailwindCSS). It supports multiple administrative levels in Nigeria’s health system with role-based access, protected routes, dashboards, and an enumeration module.

- Entry files: `src/main.jsx`, `src/App.jsx`
- Role-scoped apps under `src/screens/{national,state,lga,healthFacility}`
- Auth context via `AuthProvider`; route guards via `Require*Auth` and `Persist*Login`
- API access via Axios configured with `VITE_DOMAIN`

### Sections/Modules

The application is organized into four primary sections:

- **National**: National-level dashboards, indicators, enumeration management, accounts.
- **State**: State-level dashboards and operations for state users.
- **LGA**: LGA-level dashboards and local activity views.
- **Health Facility**: Facility-level patient, schedule, and worker management.

Base routes:

- National: `/national/*`
- State: `/state/*`
- LGA: `/lga/*`
- Health Facility: `/healthfacility/*`

### Versions (v1 and v2)

- **v1**: Legacy/original dashboards and workflows across National, State, LGA, and Health Facility sections.
- **v2**: Enhanced Enumeration experience available under the National app.
  - Route: `/national/enumeration`
  - Entry component: `src/screens/national/pages/EnumerationModule.jsx`
  - Related code: `src/screens/national/{components,queries,services}` (e.g., `queries/enumeration.js`, `services/enumeration.service.js`, components prefixed with `Enumeration*`).

v2 coexists with v1; only the National Enumeration area is considered v2.

### Access and Credentials

- Login routes per role:
  - National: `/national/login`
  - State: `/state/login`
  - LGA: `/lga/login`
  - Health Facility: `/healthfacility/login`
- After authentication, users are redirected to their section’s dashboard.
- Sessions use HTTP-only cookies with refresh logic; protected routes require valid auth.
- Credentials are issued by administrators. For local testing, request:
  - Backend base domain for `VITE_DOMAIN`
  - Role-specific test accounts (National, State, LGA, Health Facility)

Do not hardcode credentials in the codebase.

### Environment Setup

Prerequisites:

- Node.js 18+ and npm

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
VITE_DOMAIN=https://your-api-domain.example.com
```

Axios base URL resolves to `${VITE_DOMAIN}/api`.

### Run the Project

Development server:

```bash
npm run dev
```

Vite will print the local URL (typically `http://localhost:5173`). Use the role login routes above to access section-specific areas.

### Build and Preview

Production build:

```bash
npm run build
```

Artifacts are output to `dist/`.

Preview the production build locally:

```bash
npm run preview
```

### Project Structure (Frontend)

- `src/App.jsx`: Top-level router for all sections and route guards
- `src/main.jsx`: App bootstrap and providers (Auth, Modal, React Query)
- `src/screens/national/*`: National app, including v2 Enumeration under `/national/enumeration`
- `src/screens/state/*`: State app
- `src/screens/lga/*`: LGA app
- `src/screens/healthFacility/*`: Health Facility app
- `src/utils/*`: Auth, routing guards, Axios instances, context, helpers
- `src/components/*`: Shared UI components (loaders, toasts, etc.)

### Authentication and Authorization

- Auth context: `src/utils/context/AuthProvider.jsx`
- Guards: `RequireAuth`, `RequireNationalAuth`, `RequireStateAuth`, `RequireLgaAuth`, `RequireHealthfacilityAuth`
- Persistence: `PersistLogin` and role-specific `Persist*Login` wrappers
- Private API: `axiosPrivate` (cookie-based auth, `withCredentials: true`)
- Token refresh: `useRefreshtoken` hooks per section

Login flows:

- National → `/national/login` → guarded routes under `/national/*`
- State → `/state/login` → guarded routes under `/state/*`
- LGA → `/lga/login` → guarded routes under `/lga/*`
- Health Facility → `/healthfacility/login` → guarded routes under `/healthfacility/*`

### API and Configuration

Axios configuration: `src/utils/axios.js`

- `VITE_DOMAIN` must be set to the backend base domain
- Requests use base `${VITE_DOMAIN}/api`
- `axiosPrivate` enables `withCredentials: true` for cookie-based auth

Example `.env` for local development:

```env
VITE_DOMAIN=http://localhost:3000
```

Ensure backend CORS allows the dev server origin and credentials.

### Technologies Used

- React, Vite, TailwindCSS
- React Router, Axios, React Query
- ApexCharts, Formik, Yup, React-Toastify
