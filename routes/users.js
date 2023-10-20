import express from "express";
const router = express.Router();
import { createUser, deleteUser, getUserDetail, getUsers, updateUser } from "../controllers/users.js";

router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUserDetail);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
