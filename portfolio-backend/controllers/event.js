import Event from "../model/event.js";

export const getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: -1 });
    return res.json(events);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const createEvent = async (req, res) => {
  try {
    const { title, category, date, location, description, imageUrl } = req.body;
    
    // Verify auth header is present
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: "Access Denied: No Token Provided" });
    }

    const event = new Event({
      title,
      category,
      date,
      location,
      description,
      imageUrl
    });

    await event.save();
    return res.status(201).json(event);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: "Access Denied: No Token Provided" });
    }

    const deleted = await Event.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: "Event not found" });
    }
    return res.json({ message: "Event deleted successfully", id });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
