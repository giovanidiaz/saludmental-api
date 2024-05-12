import Joi from 'joi';

export const patientSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
  dateOfBirth: Joi.date().required(),
  gender: Joi.string().valid('Male', 'Female', 'Other').required(),
  mentalHealthRecord: Joi.object({
    diagnosis: Joi.string().required(),
    treatments: Joi.array().items(Joi.string()).optional(),
    notes: Joi.string().optional(),
  }).required(),
  bookedAppointments: Joi.array()
    .items(
      Joi.object({
        doctorId: Joi.string().required(), // Assuming doctorId is a string. If using MongoDB ObjectIds, use Joi.objectId() (requires joi-objectid plugin)
        appointmentDate: Joi.date().required(),
      }),
    )
    .optional(),
});
