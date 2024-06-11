

import { Request, Response } from 'express';
import * as sowPaymentPlanService from '../services/sowPaymentPlan';

export const createSOWPaymentPlan = async (req: Request, res: Response) => {
  try {
    const paymentPlan = await sowPaymentPlanService.createSOWPaymentPlans();
    res.status(201).json(paymentPlan);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};