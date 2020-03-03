import { Router } from "express";
import v1 from "./v1";

const router = Router();
const base = process.env.NODE_ENV || "/bff/se-bff-empresas";

router.use(`/v1`, v1);

export default app => {
  app.use(base, router);
};
