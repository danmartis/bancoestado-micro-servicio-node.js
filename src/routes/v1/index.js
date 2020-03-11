import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

import healthcheck from "./healthcheck.routes";
import registroBiller from "./registro-biller.routes";
import login from "./login.routes";

const swaggerDocument = YAML.load('./ms_spec.yaml');
const router = Router();

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.use("/healthcheck", healthcheck);
router.use("/registro-biller", registroBiller);
router.use("/login", login);

export default router;