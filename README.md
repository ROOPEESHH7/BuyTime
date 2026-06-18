# BuyTime — E-Commerce Platform

A production-ready e-commerce foundation built with Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, Prisma, Neon PostgreSQL, Auth.js, and Cloudinary.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Animation | Framer Motion |
| Database | Neon PostgreSQL + Prisma ORM |
| Auth | Auth.js (NextAuth v5) |
| Media | Cloudinary |
| Linting | ESLint + Prettier |

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

Copy the example env file and fill in your credentials:

```bash
cp .env.example .env
```

Required variables:

- `DATABASE_URL` / `DIRECT_URL` — from [Neon](https://neon.tech)
- `AUTH_SECRET` — generate with `openssl rand -base64 32`
- `CLOUDINARY_*` — from [Cloudinary](https://cloudinary.com)

### 3. Set up the database

```bash
npm run db:push      # Push schema to Neon (dev)
npm run db:migrate   # Create migrations (recommended for prod)
npm run db:studio    # Open Prisma Studio
```

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/                # API route handlers
│   │   ├── auth/           # Auth.js endpoints
│   │   ├── health/         # Health check
│   │   └── upload/         # Cloudinary upload
│   ├── layout.tsx          # Root layout + providers
│   ├── page.tsx            # Placeholder home (dev only)
│   ├── loading.tsx
│   ├── error.tsx
│   └── not-found.tsx
├── components/
│   ├── ui/                 # shadcn/ui primitives
│   ├── layout/             # Header, Footer, MainLayout
│   ├── shared/             # Container, Section, Motion, Spinner
│   └── providers/          # Session, Theme, Toast providers
├── config/                 # App, auth, and env configuration
├── constants/              # Shared constants
├── hooks/                  # Custom React hooks
├── lib/                    # Core utilities (db, auth, cloudinary)
├── services/               # Business logic / data access layer
├── types/                  # Shared TypeScript types
└── middleware.ts           # Auth route protection
prisma/
└── schema.prisma           # Database schema
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |
| `npm run db:generate` | Generate Prisma client |
| `npm run db:push` | Push schema to database |
| `npm run db:migrate` | Run migrations |
| `npm run db:studio` | Open Prisma Studio |

## Next Steps

Pages to build (not included in this scaffold):

- `/shop` — Product catalog
- `/products/[slug]` — Product detail
- `/cart` — Shopping cart
- `/checkout` — Checkout flow
- `/login` / `/register` — Authentication
- `/account` — User dashboard
- `/admin` — Admin panel

## License

Private — All rights reserved.
