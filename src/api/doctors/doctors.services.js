import Doctor from './doctors.models.js';

class DoctorService {
  static async getDoctors() {
    return Doctor.find();
  }

  static async createDoctor(data) {
    return Doctor.create(data);
  }

  static async getDoctor(id) {
    return Doctor.findById(id);
  }

  static async updateDoctor(id, data) {
    return Doctor.findByIdAndUpdate(id, data, { new: true });
  }

  static async deleteDoctor(id) {
    return Doctor.findByIdAndDelete(id);
  }
}

export default DoctorService;
