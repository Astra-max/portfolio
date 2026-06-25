import mongoose from "./model.js";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: String,
      required: true,
      enum: ["Conference", "Hackathon", "Workshop", "Meetup"],
      trim: true
    },
    date: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    imageUrl: {
      type: String,
      default: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=600&auto=format&fit=crop"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
