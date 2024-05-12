import Patient from './patient.models.js';

class PatientService {
  static async getAllPatient() {
    return Patient.find();
  }

  static async createPatient(data) {
    return Patient.create(data);
  }

  static async getPatient(id) {
    return Patient.findById(id);
  }

  static async updatePatient(id, data) {
    return Patient.findByIdAndUpdate(id, data, { new: true });
  }

  static async deletePatient(id) {
    return Patient.findByIdAndDelete(id);
  }
}

export default PatientService;
