# Web App

## Run locally

From the repository root:

```bash
cd apps/web
npm install
copy .env.example .env.local
npm run dev
```

The app will be available at:

```text
http://localhost:3000
```

## Current scope

Implemented in this first step:

- public welcome page
- `Auth.js` authentication with Google OAuth only
- no local password storage
- authenticated session state in the header
- base Next.js app structure for further development

## Google OAuth setup

Create a Google OAuth client and add these values to `.env.local`:

```text
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/creator_lab
AUTH_SECRET=your-random-secret
AUTH_GOOGLE_ID=your-google-client-id
AUTH_GOOGLE_SECRET=your-google-client-secret
```

For local development, add this redirect URI in Google Cloud:

```text
http://localhost:3000/api/auth/callback/google
```

## Local Postgres with Drizzle

Start PostgreSQL locally:

```bash
docker compose up -d
```

Generate migrations from the schema:

```bash
npm run db:generate
```

Apply migrations:

```bash
npm run db:migrate
```

The initial Drizzle schema lives in `src/db/schema.ts` and includes a starter `users` table for Google-authenticated users.
