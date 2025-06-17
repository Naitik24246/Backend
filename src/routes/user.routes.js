import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();

console.log("registerUser is:", registerUser); // Debug line

router.route("/register").post(
    upload.fields([
      { name: "avatar", maxCount: 1 },
      { name: "coverImage", maxCount: 1 },
    ]),
    registerUser
  );

export default router;
