import { Router } from "express";
import { registro } from "../../app/controllers/v1/registro-biller.controller";

const router = Router();

router.post( "/registro", registro);

export default router;