import express from 'express';
import { celebrate } from 'celebrate';

import {
  getAllPatient,
  createPatient,
  getPatient,
  updatePatient,
  deletePatient,
} from './patient.controllers.js';

import { patientSchema } from './patient.validators.js';

const router = express.Router();

// Retorna todos los operadores
router.get('/', getAllPatient);
router.post('/', celebrate({ body: patientSchema }), createPatient);
router.get('/:id', getPatient);
router.put('/:id', celebrate({ body: patientSchema }), updatePatient);
router.delete('/:id', deletePatient);

export default router;
