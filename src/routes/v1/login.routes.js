import { Router } from "express";
import {
  login,
  changePassword,
  recoverPassword
} from "../../app/controllers/v1/login.controller";

const router = Router();

router.post("/", login);
router.put("/cambio-contrasenia", changePassword);
router.post("/recover-password", recoverPassword);

export default router;
