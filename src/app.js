import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import morgan from 'morgan';
import routes from './api/index.js';
import connectDB from './config/db.js';
import logger from './utils/logger.js';
import errorHandler from './middlewares/errorHandler.js';

// Ruta del directorio env donde se encuentran los archivos .env
const ENV_PATH = path.resolve(process.cwd(), 'env');

// Cargar las variables de entorno según el entorno de ejecución
switch (process.env.NODE_ENV) {
  case 'production':
    dotenv.config({ path: path.join(ENV_PATH, '.env.production') });
    break;
  case 'staging':
    dotenv.config({ path: path.join(ENV_PATH, '.env.staging') });
    break;
  case 'development':
    dotenv.config({ path: path.join(ENV_PATH, '.env.development') });
    break;
  default:
    dotenv.config({ path: path.join(ENV_PATH, '.env') }); // Carga el archivo .env por defecto
}

// Crear la aplicación de Express
const app = express();

app.use(express.json()); // Middleware para parsear JSON
app.use(helmet()); // Seguridad
app.use(cors()); // CORS
app.use(morgan('dev')); // Logging de HTTP requests

// Montar las rutas principales
app.use('/api', routes);

// Error Handling Middleware
app.use(errorHandler);

// Conectar a la base de datos y arrancar el servidor
connectDB()
  .then(() => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      logger.info(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    logger.error('Database connection failed', error);
    process.exit(1);
  });
