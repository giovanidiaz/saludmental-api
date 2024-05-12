import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true },
  mentalHealthRecord: {
    diagnosis: { type: String, required: true },
    treatments: [{ type: String }],
    notes: { type: String },
  },
  bookedAppointments: [
    {
      doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
      appointmentDate: { type: Date, required: true },
    },
  ],
});

export default mongoose.model('Patient', patientSchema);
