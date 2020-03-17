import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

import v1 from "./v1";

const swaggerDocument = YAML.load('./ms_spec.yaml');
const router = Router();
const base = "/bff/se-bff-empresas";

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.use(`/v1`, v1);

export default app => {
  app.use(base, router);
};
