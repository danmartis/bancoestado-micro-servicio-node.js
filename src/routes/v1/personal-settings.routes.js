import { Router } from "express";
import {
    personalInformation,
} from "../../app/controllers/v1/personal-settings.controller";

const router = Router();

router.get("/informacion-personal", personalInformation);

export default router;