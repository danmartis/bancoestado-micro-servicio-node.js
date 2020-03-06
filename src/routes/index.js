import { Router } from "express";
import v1 from "./v1";

const router = Router();
const base = "/bff/se-bff-empresas";

router.use(`/v1`, v1);

export default app => {
  app.use(base, router);
};
