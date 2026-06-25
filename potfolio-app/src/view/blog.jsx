import React, { useState, useEffect } from "react";
import "../../src/styles/blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faLocationDot,
  faPlus,
  faXmark,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import useAuth from "../context/auth";

export default function Blog() {
  const { token } = useAuth();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);

  // Form State
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Conference");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:6500/events");
      if (response.ok) {
        const data = await response.json();
        setEvents(data);
        localStorage.setItem("blog_events", JSON.stringify(data));
      } else {
        throw new Error("Server response not ok");
      }
    } catch (error) {
      console.log("Using LocalStorage events fallback:", error);
      const localData = localStorage.getItem("blog_events");
      if (localData) {
        setEvents(JSON.parse(localData));
      } else {
        // Seed initial portfolio activities/events attended
        const defaultEvents = [
          {
            id: "1",
            title: "M-Pesa API Developers & Hackathon",
            category: "Hackathon",
            date: "2025-05-12",
            location: "Safaricom HQ, Nairobi",
            description: "Developed and demonstrated a secure Express checkout flow with real-time transactional Webhook callbacks, winning 2nd place in utility application design.",
            imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop"
          },
          {
            id: "2",
            title: "Nairobi Tech Summit 2025",
            category: "Conference",
            date: "2025-11-22",
            location: "Nairobi Convention Centre",
            description: "Attended multiple workshops on AWS Cloud hosting, scalable Node.js microservices, and modern database replication patterns.",
            imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop"
          },
          {
            id: "3",
            title: "DevFest Nairobi 2025",
            category: "Meetup",
            date: "2025-10-14",
            location: "USIU-Africa, Nairobi",
            description: "Participated in local Google Developer Group tracks focused on progressive web application enhancements, layout design, and WebAssembly.",
            imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600&auto=format&fit=crop"
          },
          {
            id: "4",
            title: "Advanced React & Next.js Workshop",
            category: "Workshop",
            date: "2026-02-05",
            location: "Metta Nairobi, Westlands",
            description: "Led a hands-on session on advanced state routing, performance profiling React applications, and writing semantic modular CSS modules.",
            imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop"
          }
        ];
        setEvents(defaultEvents);
        localStorage.setItem("blog_events", JSON.stringify(defaultEvents));
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCreateEvent = async (e) => {
    e.preventDefault();
    if (!title || !date || !location || !description) {
      alert("Please fill in all required fields.");
      return;
    }

    const newEvent = {
      title,
      category,
      date,
      location,
      description,
      imageUrl: imageUrl || "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=600&auto=format&fit=crop"
    };

    try {
      const response = await fetch("http://localhost:6500/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(newEvent)
      });
      
      if (response.ok) {
        const saved = await response.json();
        const updated = [saved, ...events];
        setEvents(updated);
        localStorage.setItem("blog_events", JSON.stringify(updated));
      } else {
        throw new Error("API post rejected");
      }
    } catch (err) {
      console.log("Saving locally to fallback due to:", err);
      const offlineEvent = {
        ...newEvent,
        id: Date.now().toString(),
      };
      const updated = [offlineEvent, ...events];
      setEvents(updated);
      localStorage.setItem("blog_events", JSON.stringify(updated));
    }

    // Reset Form
    setTitle("");
    setCategory("Conference");
    setDate("");
    setLocation("");
    setDescription("");
    setImageUrl("");
    setShowModal(false);
  };

  const handleDeleteEvent = async (id) => {
    if (!window.confirm("Are you sure you want to delete this activity/event?")) return;
    try {
      const response = await fetch(`http://localhost:6500/events/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (response.ok) {
        const updated = events.filter((ev) => ev.id !== id && ev._id !== id);
        setEvents(updated);
        localStorage.setItem("blog_events", JSON.stringify(updated));
      } else {
        throw new Error("Failed to delete from server");
      }
    } catch (err) {
      console.log("Deleting locally (offline mode)", err);
      const updated = events.filter((ev) => ev.id !== id && ev._id !== id);
      setEvents(updated);
      localStorage.setItem("blog_events", JSON.stringify(updated));
    }
  };

  const filteredEvents = filter === "All" 
    ? events 
    : events.filter(e => e.category.toLowerCase() === filter.toLowerCase());

  return (
    <div className="blog-section">
      <div className="blog-header">
        <h1 className="blog-title">Attended Activities & Events</h1>
        <p className="blog-subtitle">
          Timeline of professional developer events, hackathons, workshops, and community activities I have participated in.
        </p>
        
        {token && (
          <button className="add-event-btn" onClick={() => setShowModal(true)}>
            <FontAwesomeIcon icon={faPlus} style={{ marginRight: "0.5rem" }} />
            Add Event / Activity
          </button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="blog-filters">
        {["All", "Conference", "Hackathon", "Workshop", "Meetup"].map((cat) => (
          <button
            key={cat}
            className={`filter-tab ${filter === cat ? "active-tab" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}s
          </button>
        ))}
      </div>

      {/* Grid of Events */}
      {loading ? (
        <div className="blog-loading">Loading activities...</div>
      ) : filteredEvents.length === 0 ? (
        <div className="blog-empty">
          <p>No activities or events found under the "{filter}" category.</p>
        </div>
      ) : (
        <div className="blog-grid">
          {filteredEvents.map((item) => {
            const itemId = item._id || item.id;
            return (
              <div className="event-card" key={itemId}>
                <div className="event-image-container">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="event-card-img"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=600&auto=format&fit=crop";
                    }}
                  />
                  <span className={`event-tag ${item.category.toLowerCase()}`}>
                    {item.category}
                  </span>
                </div>
                <div className="event-details">
                  <h3 className="event-card-title">{item.title}</h3>
                  
                  <div className="event-meta">
                    <span>
                      <FontAwesomeIcon icon={faCalendarDays} className="meta-icon" />
                      {item.date}
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faLocationDot} className="meta-icon" />
                      {item.location}
                    </span>
                  </div>

                  <p className="event-description">{item.description}</p>
                  
                  {token && (
                    <button 
                      className="delete-event-btn" 
                      onClick={() => handleDeleteEvent(itemId)}
                      title="Delete event"
                    >
                      <FontAwesomeIcon icon={faTrash} /> Delete
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Add Event Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-header">
              <h2>Add New Activity or Event</h2>
              <button className="close-modal-btn" onClick={() => setShowModal(false)}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            
            <form onSubmit={handleCreateEvent} className="modal-form">
              <div className="form-group">
                <label>Event Title *</label>
                <input
                  type="text"
                  placeholder="e.g. M-Pesa Developers Workshop"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Category *</label>
                  <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="Conference">Conference</option>
                    <option value="Hackathon">Hackathon</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Meetup">Meetup</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Date *</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Location *</label>
                <input
                  type="text"
                  placeholder="e.g. Westlands, Nairobi"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Image URL</label>
                <input
                  type="url"
                  placeholder="e.g. https://images.unsplash.com/... (optional)"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Description *</label>
                <textarea
                  placeholder="Describe your activity, details, what you built or learned..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-event-btn">
                Save Event
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
