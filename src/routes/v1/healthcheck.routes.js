import { Router } from "express";
import { healthcheck } from "../../app/controllers/v1/healthcheck.controller";

const router = Router();

router.get("/", healthcheck);

export default router;