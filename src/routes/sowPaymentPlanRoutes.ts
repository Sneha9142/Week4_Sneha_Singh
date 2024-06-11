import { Router } from 'express';
import * as sowPaymentPlanController from '../controllers/sowPaymentPlanController';

const router = Router();

router.get('/', sowPaymentPlanController.createSOWPaymentPlan);


export default router;