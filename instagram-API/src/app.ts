import express from 'express';
import cors from 'cors';
import routes from './app.routes';
import { errorHandler } from './error-handler';
import { dataBaseConnection } from './database';

const app = express();

// Database
dataBaseConnection.connect();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', routes);

// Error Handler
app.use(errorHandler.error);


export default app;