import { Router } from "express";
import { healthcheck } from "../../app/controller/v1/healthcheck.controller";

const router = Router();

router.get("/", healthcheck);

export default router;