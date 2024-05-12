import PatientService from './patient.services.js';

export async function getAllPatient(req, res) {
  try {
    const patient = await PatientService.getAllPatient();
    res.json(patient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function createPatient(req, res) {
  try {
    const patient = await PatientService.createPatient(req.body);
    res.status(201).json(patient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function getPatient(req, res) {
  try {
    const patient = await PatientService.getPatient(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.json(patient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function updatePatient(req, res) {
  try {
    const updatedPatient = await PatientService.updatePatient(req.params.id, req.body);
    if (!updatedPatient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.json(updatedPatient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function deletePatient(req, res) {
  try {
    const deletedPatient = await PatientService.deletePatient(req.params.id);
    if (!deletedPatient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
