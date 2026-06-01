# Portfolio Server — dev.robiul

Express.js REST API backend for the dev.robiul portfolio. Handles authentication, project CRUD, and CMS content management.

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Express.js | 4.21.2 | Web framework |
| TypeScript | 5.7.3 | Static types |
| Mongoose | 8.10.1 | MongoDB ODM |
| MongoDB Atlas | — | Database |
| JWT | 9.0.2 | Authentication |
| bcrypt | 5.1.1 | Password hashing |
| Zod | 3.24.2 | Request validation |
| Nodemailer | 7.0.3 | Password reset emails |
| express-rate-limit | — | Rate limiting |

## API Endpoints

### Auth (`/api/v1/auth`)

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/register` | Public | Create user account |
| POST | `/login` | Public | Login, get JWT tokens |
| POST | `/refresh-token` | Cookie | Refresh access token |
| POST | `/forget-password` | Public | Send reset email |
| POST | `/reset-password` | Bearer | Reset password |

### Admin Auth (`/api/v1/admin-auth`)

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/login` | Public | Password-only admin login |

### Projects (`/api/v1/project`)

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/create` | Admin | Create project |
| GET | `/` | Public | Get all projects |
| GET | `/single/:id` | Public | Get single project |
| PATCH | `/update/:id` | Admin | Update project |
| DELETE | `/delete/:id` | Admin | Delete project |

### Content (`/api/v1/content`)

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/` | Public | Get site content |
| POST | `/seed` | Admin | Seed default content |
| PUT | `/` | Admin | Update site content |

## Project Structure

```
portfolio-server/
├── src/
│   ├── server.ts               Entry point — connects MongoDB, starts server
│   ├── app.ts                  Express app — middleware, routes, error handler
│   ├── config/index.ts         Environment variables
│   ├── app/
│   │   ├── modules/
│   │   │   ├── auth/           User auth (register, login, JWT, password reset)
│   │   │   ├── content/        CMS: single-document site content
│   │   │   └── project/        Project CRUD
│   │   ├── middleware/
│   │   │   ├── authGard.ts     JWT verification + role check
│   │   │   ├── validateRequest.ts  Zod validation middleware
│   │   │   └── globalErrorHandler.ts  Centralized error mapping
│   │   ├── errors/             AppError, CastError, DuplicateError, ValidationError, ZodError
│   │   ├── interface/error.ts  Shared error types
│   │   └── types/express.d.ts  Augment Express Request with user payload
│   ├── helper/QueryBuilder.ts  Mongoose chainable: search, filter, sort, paginate
│   ├── shared/
│   │   ├── catchAsync.ts       Async wrapper
│   │   ├── sendResponse.ts     Standardized response format
│   │   └── sendEmail.ts        Nodemailer SMTP
│   └── __tests__/              Jest unit tests
│       ├── auth.validation.test.ts
│       └── project.validation.test.ts
├── vercel.json                 Vercel deployment config
├── jest.config.ts              Jest configuration
└── tsconfig.json               TypeScript config
```

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB Atlas account (or local MongoDB)

### Installation

```bash
git clone https://github.com/robiul0278/portfolio.git
cd portfolio/portfolio-server
npm install
```

### Environment Variables

Create `.env`:

```env
NODE_ENV=development
PORT=5000
DATABASE_URL=mongodb+srv://user:pass@cluster.mongodb.net/Portfolio?retryWrites=true&w=majority

BCRYPT_SALT_ROUNDS=16

JWT_SECRET_TOKEN=your_secret_token
JWT_REFRESH_TOKEN=your_refresh_token
JWT_SECRET_EXPIRATION=1d
JWT_REFRESH_EXPIRATION=30d

ADMIN_PASSWORD=your_admin_password
RESET_PASSWORD_UI_LINK=http://localhost:3000

CORS_ORIGINS=http://localhost:3000,http://localhost:5173

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM=your_email@gmail.com
```

### Run Development Server

```bash
npm run dev
# Server runs on http://localhost:5000
```

### Build & Start

```bash
npm run build
npm run start
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with ts-node-dev |
| `npm run build` | Compile TypeScript |
| `npm run start` | Run compiled server |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Jest tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage report |

## Error Response Format

```json
{
  "success": false,
  "message": "Error message",
  "errorSources": [
    { "path": "field_name", "message": "Validation error detail" }
  ],
  "stack": "Error stack (development only)"
}
```

## Security

- Passwords hashed with bcrypt (configurable salt rounds)
- JWT access token (1-day expiry)
- JWT refresh token (30-day expiry, httpOnly cookie)
- Rate limiting: 100 req/15min (general), 10 req/15min (auth)
- CORS origin whitelist
- Zod validation on all inputs

## Deployment

Vercel is recommended. See [DEPLOYMENT.md](../DEPLOYMENT.md) for full guide.

## Contact

- **Email** — robiul0278@gmail.com
- **GitHub** — https://github.com/robiul0278
