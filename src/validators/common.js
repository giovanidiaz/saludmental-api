import Joi from 'joi';

// Validación de ObjectId para MongoDB
export const objectIdSchema = Joi.object({
  id: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required(),
});

// Esquema de paginación común para reutilización
export const paginateValidationSchema = Joi.object({
  sort: Joi.string().default('-createdAt').optional(),
  page: Joi.number().greater(0).default(1).positive().optional(),
  limit: Joi.number().greater(0).default(25).positive().optional(),
  filter: Joi.string().optional(),
});

// Validación de email común
export const emailSchema = Joi.object({
  email: Joi.string().email().required(),
});
