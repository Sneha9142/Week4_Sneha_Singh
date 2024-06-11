import { Router } from "express";
import * as sowController from "../controllers/sowController";

const router = Router();

router.post("/", sowController.createSow);
router.get("/", sowController.getSows);

export default router;