import express from "express";
import {
  HandleUpdateKey,
  UserAuthenticated,
  HandleRemoveKey,
} from "./controllers/auth.js";
import { HandleFeedBack } from "./controllers/feedback.js";
import { getEvents, createEvent, deleteEvent } from "./controllers/event.js";

const router = express.Router();

router.get("/auth/access-key", UserAuthenticated);
router.put("/auth/access-key", HandleUpdateKey);
router.delete("/auth/access-key", HandleRemoveKey);

router.get("/feedback", HandleFeedBack);

// Events routes
router.get("/events", getEvents);
router.post("/events", createEvent);
router.delete("/events/:id", deleteEvent);

export default router;

