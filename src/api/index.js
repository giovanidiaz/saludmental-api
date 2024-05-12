import { Router } from 'express';

import Patient from './patient/index.js';
import Doctors from './doctors/index.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la API V1.0' });
});

router.use('/doctors', Doctors);
router.use('/patients', Patient);

export default router;
