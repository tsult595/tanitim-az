# Contact API

The API stores contact form submissions in the `contact_messages` D1 table.

## Local development

```bash
bun install
bun run db:generate
bun run db:migrate
bun run dev
```

Deploy the generated migration to D1 with Wrangler before deploying the worker:

```bash
bunx wrangler d1 migrations apply tanidim-db --remote
```

The frontend reads `PUBLIC_API_URL`; set it to the deployed API URL (or use
`http://localhost:8787` locally). Replies are stored by the API and opened in
the administrator's mail client through `mailto:`.

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.3.14. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.

## API structure

The API is organized by responsibility:

```text
src/
├── routes/       # URL definitions
├── controllers/  # HTTP request/response handling
├── services/     # business logic and database operations
├── schemas/      # Zod request validation
├── db/schema/    # Drizzle table definitions
└── app.ts        # middleware and route registration
```

Add new domains such as `blogs` or `services` by creating their route,
controller, service, validation schema, and database schema modules without
putting domain logic in `index.ts`.
