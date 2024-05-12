import Joi from 'joi';

export const doctorSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  specialty: Joi.string().required(),
  availableSlots: Joi.array()
    .items(
      Joi.object({
        appointmentDate: Joi.date().required(),
        isAvailable: Joi.boolean().required(),
      }),
    )
    .optional(),
});
