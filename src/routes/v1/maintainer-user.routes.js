import { Router } from "express";
import {
  personalInformation,
  registerNewUser,
  updatePerfilUser,
  getUsers,
  updateUser
} from "../../app/controllers/v1/maintainer-user.controller";

const router = Router();

router.post("/informacion-personal", personalInformation);
router.post("/registerNewUser", registerNewUser);
router.put("/editar-perfil", updatePerfilUser);
router.post("/listar-usuarios", getUsers);
router.put("/editar-usuario", updateUser);
export default router;
