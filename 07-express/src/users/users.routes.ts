import express, { Router } from "express";
import {
  createNewUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUserById,
} from "./users.controller";

const router = Router();
// Create Read (ALL of the resource)
router.route("/").get(getAllUsers).post(createNewUser);

router.route("/:id").get(getUserById).patch(updateUserById).delete(deleteUser);
export default router;
