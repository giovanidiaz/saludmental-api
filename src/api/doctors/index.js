import express from 'express';
import { celebrate } from 'celebrate';

import {
  getDoctors,
  createDoctor,
  getDoctor,
  updateDoctor,
  deleteDoctor,
} from './doctors.controllers.js';

import { doctorSchema } from './doctors.validators.js';

const router = express.Router();

// Retorna todos los operadores
router.get('/', getDoctors);
router.post('/', celebrate({ body: doctorSchema }), createDoctor);
router.get('/:id', getDoctor);
router.put('/:id', celebrate({ body: doctorSchema }), updateDoctor);
router.delete('/:id', deleteDoctor);

export default router;
