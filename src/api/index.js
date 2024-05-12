import { Router } from 'express';
import Operators from './operators/index.js';
import Attendance from './attendances/index.js';
import Patient from './patient/index.js';
import Doctors from './doctors/index.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la API V1.0' });
});

router.use('/operators', Operators);
router.use('/attendances', Attendance);
router.use('/doctors', Doctors);

export default router;
