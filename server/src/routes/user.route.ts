import { Router } from "express";
import { createUser, getUser, getUsers } from "../controllers/user.controller";

const router = Router();

router.get("/", getUsers);
router.post("/", createUser);
router.get("/:cognitoId", getUser);


export default router;
