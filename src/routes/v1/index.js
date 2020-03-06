import { Router } from "express";

import healthcheck from "./healthcheck.routes";
import registroBiller from "./registro-biller.routes";

const router = Router();

router.use("/healthcheck", healthcheck);
router.use("/registro-biller", registroBiller);

export default router;