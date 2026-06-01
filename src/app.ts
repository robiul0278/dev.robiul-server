import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { globalErrorHandler } from './app/middleware/globalErrorHandler';
import router from './app/routes';
import cookieParser  from "cookie-parser";
import config from './config';

// Rate limiting configuration
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again after 15 minutes',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Stricter rate limit for auth routes
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 requests per windowMs
  message: {
    success: false,
    message: 'Too many authentication attempts, please try again after 15 minutes',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// CORS configuration
const corsOptions = {
  origin: config.node_env === 'production'
    ? ['https://dev.robiul.com', 'https://www.dev.robiul.com']
    : ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// parsers
const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(cors(corsOptions));

// Apply rate limiting to all routes
app.use('/api/v1', apiLimiter);

// Apply stricter rate limiting to auth routes
app.use('/api/v1/auth', authLimiter);
app.use('/api/v1/admin-auth', authLimiter);

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send(`OK! Mongoose is running at ${new Date().toLocaleTimeString()}!`);
});

// Catch-all route for unsupported methods
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Can't find this ${req.originalUrl} on the server!`);
  (error as any).statusCode = 405;
  next(error); // Pass global error handler
});


// Global error handling middleware
app.use(globalErrorHandler)

export default app;
