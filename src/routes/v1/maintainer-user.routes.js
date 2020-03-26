import { Router } from "express";
import {personalInformation, 
        registerNewUser, 
        updatePerfilUser
} from "../../app/controllers/v1/maintainer-user.controller";

const router = Router();

router.post("/informacion-personal", personalInformation);
router.post("/registerNewUser", registerNewUser);
router.put("/editar-perfil", updatePerfilUser);

export default router;