import express from "express";
import {
  HandleUpdateKey,
  UserAuthenticated,
  HandleRemoveKey,
} from "./controllers/auth.js";
import { HandleFeedBack } from "./controllers/feedback.js";

const router = express.Router();

router.get("/auth/access-key", UserAuthenticated);
router.put("/auth/access-key", HandleUpdateKey);
router.delete("/auth/access-key", HandleRemoveKey);

router.get("/feedback", HandleFeedBack);

export default router;
