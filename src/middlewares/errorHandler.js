export default function errorHandler(err, req, res, next) {
  let { statusCode, message } = err;

  // Errores de validación
  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = Object.values(err.errors)
      .map((val) => val.message)
      .join(', ');
  }

  // Errores de autenticación
  if (err.name === 'UnauthorizedError') {
    statusCode = 401;
    message = 'Unauthorized: No token provided or token is invalid';
  }

  // Errores de acceso prohibido
  if (err.name === 'ForbiddenError') {
    statusCode = 403;
    message = 'Forbidden: You do not have permission to access this resource';
  }

  // Errores de recurso no encontrado
  if (err.name === 'NotFoundError') {
    statusCode = 404;
    message = err.message || 'The requested resource was not found';
  }

  // Errores de base de datos
  if (err instanceof mongoose.Error) {
    statusCode = 500;
    message = 'Database error: ' + err.message;
  }

  // Capturar otros tipos de errores no específicos
  statusCode = statusCode || 500;
  message = message || 'An unexpected error occurred';

  res.status(statusCode).json({
    error: {
      message,
      statusCode,
    },
  });
}
