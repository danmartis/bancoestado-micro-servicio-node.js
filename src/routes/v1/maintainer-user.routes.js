import { Router } from "express";
import {
  personalInformation,
  registerNewUser
} from "../../app/controllers/v1/maintainer-user.controller";

const router = Router();

router.post("/informacion-personal", personalInformation);
router.post("/registerNewUser", registerNewUser);

export default router;
