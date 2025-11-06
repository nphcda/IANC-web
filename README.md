# OptiCCS Project - Optimising Client-centered Services for ANC & Disease Management

![Project Logo](/public/images/Logo.png)

## Table of Contents

- [Introduction](#introduction)
- [System Overview](#system-overview)
- [Sections/Modules](#sectionsmodules)
- [Versions (v1 and v2)](#versions-v1-and-v2)
- [Access and Credentials](#access-and-credentials)
- [Environment Setup](#environment-setup)
- [Run the Project](#run-the-project)
- [Build and Preview](#build-and-preview)
- [Project Structure (Frontend)](#project-structure-frontend)
- [Authentication and Authorization](#authentication-and-authorization)
- [API and Configuration](#api-and-configuration)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The **OptiCCS Project** (Optimising Client-centered Services through an integrated ANC, Disease Detection & Mgt in PHCs) is a National Primary Healthcare project developed for the Nigerian government. It focuses on improving antenatal care (ANC) services for pregnant women, with a goal to streamline record-keeping and provide better care.

The project is dedicated to enhancing the quality of healthcare services available to pregnant women, ensuring a client-centered approach to their care, and effectively managing disease detection and treatment within Primary Healthcare Centers (PHCs).

![Project Screenshot](/public/images/inter2.png)

## System Overview

This repository contains the frontend client built with React + Vite and TailwindCSS. The application serves multiple administrative levels and facilities in Nigeria’s health system. It implements role-based access, protected routes, and data dashboards, with integrations for enumeration (data collection) and analytics.

- React application entry: `src/main.jsx` and `src/App.jsx`
- Role-scoped apps live under `src/screens/{national,state,lga,healthFacility}`
- Auth state is provided via `AuthProvider`; route guards via `Require*Auth` and `Persist*Login`
- API communication via Axios with a configurable domain (`VITE_DOMAIN`)

## Sections/Modules

The frontend is organized into four primary sections:

- **National**: National-level dashboards, indicators, enumeration management, account administration.
- **State**: State-level dashboards, data views, and operational tools for state users.
- **LGA**: LGA-level dashboards and activity views scoped to local government areas.
- **Health Facility**: Facility-level patient, schedule, and worker views and operations.

These sections are implemented as nested apps routed under the following base paths:

- National: `/national/*`
- State: `/state/*`
- LGA: `/lga/*`
- Health Facility: `/healthfacility/*`

## Versions (v1 and v2)

- **Version 1 (v1)**: The original dashboards and workflows across National, State, LGA, and Health Facility sections.
- **Version 2 (v2)**: The enhanced Enumeration module available under the National app.
  - Route: `/national/enumeration`
  - Entry component: `src/screens/national/pages/EnumerationModule.jsx`
  - Related code lives under `src/screens/national/{components,queries,services}` (e.g., `queries/enumeration.js`, `services/enumeration.service.js`, and components prefixed with `Enumeration*`).

Explicitly: the v2 experience is focused on the National Enumeration area and coexists alongside the v1 dashboards.

## Access and Credentials

- Each section has its own login route:
  - National: `/national/login`
  - State: `/state/login`
  - LGA: `/lga/login`
  - Health Facility: `/healthfacility/login`
- After authentication, users are redirected to their section’s dashboard under the corresponding base path.
- Sessions use HTTP-only cookies with refresh logic; protected routes require valid auth.
- Credentials are provisioned by the platform administrators. For local testing, coordinate with backend/admins to obtain:
  - A test server `VITE_DOMAIN` (see Environment Setup)
  - Role-specific test accounts for National, State, LGA, and Health Facility

Note: Do not hardcode credentials in the codebase. Use environment variables and admin-provided accounts.

## Environment Setup

1. Prerequisites:
   - Node.js 18+ and npm
2. Clone and install:
   - `npm install`
3. Configure environment variables (Vite): create a `.env` file at the project root with:

   ```env
   VITE_DOMAIN=https://your-api-domain.example.com
   ```

   The app will use `${VITE_DOMAIN}/api` as the Axios base URL.

## Run the Project

- Start the dev server:

  ```bash
  npm run dev
  ```

- By default Vite serves at `http://localhost:5173` (printed in the terminal). Use the login routes listed above to access role-specific areas.

## Build and Preview

- Production build:

  ```bash
  npm run build
  ```

  Output is written to `dist/`.

- Preview a production build locally:

  ```bash
  npm run preview
  ```

## Project Structure (Frontend)

- `src/App.jsx`: Top-level router configuring all sections and route guards
- `src/main.jsx`: App bootstrap, providers (`AuthProvider`, `ModalProvider`, React Query)
- `src/screens/national/*`: National app, including v2 Enumeration under `/national/enumeration`
- `src/screens/state/*`: State app
- `src/screens/lga/*`: LGA app
- `src/screens/healthFacility/*`: Health Facility app
- `src/utils/*`: Auth, routing guards, Axios instances, context, helpers
- `src/components/*`: Shared UI components (e.g., loaders, toasts, landing page)

## Authentication and Authorization

- Auth context: `src/utils/context/AuthProvider.jsx`
- Guards: `RequireAuth`, `RequireNationalAuth`, `RequireStateAuth`, `RequireLgaAuth`, `RequireHealthfacilityAuth`
- Session persistence: `PersistLogin` and role-specific persist wrappers
- Private API calls use `axiosPrivate` with `withCredentials: true` for cookie-based auth
- Refresh token logic is encapsulated in `useRefreshtoken` hooks

Login flows by role (entry points):

- National: `/national/login` ⇒ guarded routes under `/national/*`
- State: `/state/login` ⇒ guarded routes under `/state/*`
- LGA: `/lga/login` ⇒ guarded routes under `/lga/*`
- Health Facility: `/healthfacility/login` ⇒ guarded routes under `/healthfacility/*`

## API and Configuration

Axios configuration lives in `src/utils/axios.js`:

- `VITE_DOMAIN` is required and should point to the backend base domain
- Base URL is `${VITE_DOMAIN}/api`
- `axiosPrivate` sets `withCredentials: true` for authenticated requests

Example `.env` (development):

```env
VITE_DOMAIN=http://localhost:3000
```

Ensure the backend CORS configuration allows the Vite dev server origin and credentials.

## Technologies Used

Frontend: React.js, Vite, TailwindCSS, React Router, Axios, React Query, ApexCharts, Formik/Yup, React-Toastify

Backend (external service expected): Node.js/Express.js (or as provided by your deployment)

Database (external service expected): MySQL (or as provided by your deployment)

Cloud/Hosting: As configured by your environment (e.g., Vercel/DigitalOcean)

## Contributing

1. Create a feature branch
2. Follow the existing code style and lint rules: `npm run lint`
3. Open a PR with a clear description

## License

Proprietary/private unless stated otherwise by the project owners.
