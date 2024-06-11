import { Router } from 'express';
import * as customerController from '../controllers/customerController';

const router = Router();

router.post('/', customerController.createCustomer);
router.get('/', customerController.getCustomers);



export default router;