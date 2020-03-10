import { Router } from "express";
import { registro } from "../../app/controllers/v1/registro-biller.controller";

const router = Router();

router.post( "/", registro);
export default router;