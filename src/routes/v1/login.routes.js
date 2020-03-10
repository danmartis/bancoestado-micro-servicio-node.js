import { Router } from "express";
import {
  login,
  changePassword
} from "../../app/controllers/v1/login.controller";

const router = Router();

router.post("/", login);
router.put("/cambio-contrasenia", changePassword);

export default router;
