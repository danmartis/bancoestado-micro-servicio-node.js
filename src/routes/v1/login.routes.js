import { Router } from "express";
import { login } from "../../app/controllers/v1/login.controller";

const router = Router();

router.post( "/", login);

export default router;