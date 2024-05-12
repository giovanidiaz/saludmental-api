import DoctorService from './doctors.services.js';

export async function getDoctors(req, res) {
  try {
    const doctors = await DoctorService.getDoctors();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function createDoctor(req, res) {
  try {
    const operator = await DoctorService.createDoctor(req.body);
    res.status(201).json(operator);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function getDoctor(req, res) {
  try {
    const operator = await DoctorService.getDoctor(req.params.id);
    if (!operator) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.json(operator);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function updateDoctor(req, res) {
  try {
    const updatedDoctor = await DoctorService.updateDoctor(req.params.id, req.body);
    if (!updatedDoctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.json(updatedDoctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function deleteDoctor(req, res) {
  try {
    const deletedDoctor = await DoctorService.deleteDoctor(req.params.id);
    if (!deletedDoctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
