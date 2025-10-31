import { Router } from "express";
import { verifyJwt } from "../../middleware/auth.js";
import * as userController from "./user.controller.js";

const router = Router();

router.get("/", verifyJwt, userController.getAllUsers);
router.post("/", userController.createUser);

export default router;
