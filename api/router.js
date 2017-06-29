'use strict';

import { Router } from 'express';
import variables from './routes/variables';
import order from './routes/order';


const router = Router();

router.use('/variables', variables);
router.use('/order', order);

export default router;
