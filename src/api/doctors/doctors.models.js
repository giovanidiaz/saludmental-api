import mongoose from 'mongoose';

// Definir el esquema de la colección de operadores
const doctorSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  specialty: { type: String, required: true },
  availableSlots: [
    {
      appointmentDate: { type: Date, required: true },
      isAvailable: { type: Boolean, default: true },
    },
  ],
});

export default mongoose.model('Doctor', doctorSchema);
