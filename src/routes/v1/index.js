import { Router } from "express";

import healthcheck from "./healthcheck.routes";
import registroBiller from "./registro-biller.routes";
import login from "./login.routes";
import personalInformation from "./personal-settings.routes";
const router = Router();

router.use("/healthcheck", healthcheck);
router.use("/registro-biller", registroBiller);
router.use("/login", login);
router.use("/configuracion-personal", personalInformation);
export default router;