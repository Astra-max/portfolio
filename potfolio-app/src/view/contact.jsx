import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Notification from "../context/notificationContext";
import "../styles/contact.css";

function Contact() {
  const { setNotice } = useContext(Notification);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", message: "",
  });

  const links = [
    { id: 1, label: "Phone",      info: "0796066170",             icon: faPhone,    href: "tel:0796066170" },
    { id: 2, label: "LinkedIn",   info: "Waore Maxwel",           icon: faLinkedin, href: "https://linkedin.com/in/waore-maxwel-222297204" },
    { id: 3, label: "Twitter / X",info: "Maxwel Waore",           icon: faTwitter,  href: "https://x.com/Maxwel-Waore" },
    { id: 4, label: "GitHub",     info: "Astra-max",              icon: faGithub,   href: "https://github.com/Astra-max" },
    { id: 5, label: "Email",      info: "waoremaxwel17@gmail.com",icon: faEnvelope, href: "mailto:waoremaxwel17@gmail.com" },
  ];

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.message) return;
    setNotice((s) => ({ ...s, notice: s.notice + 1 }));
    setSent(true);
    setForm({ firstName: "", lastName: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <div className="contact-page">
      <div className="contact-flex">

        {/* ── left: contact info ── */}
        <aside className="contact-info">
          <p className="contact-eyebrow">Get in touch</p>
          <h2 className="contact-heading">Let's link up</h2>
          <p className="contact-sub">
            Open to opportunities, collabs, and good conversations.
          </p>
          <hr className="contact-divider" />
          <ul className="contact-links" aria-label="Contact channels">
            {links.map((l) => (
              <li key={l.id}>
                <Link
                  className="contact-link"
                  to={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <span className="contact-link-icon" aria-hidden="true">
                    <FontAwesomeIcon icon={l.icon} />
                  </span>
                  <span className="contact-link-text">
                    <span className="contact-link-label">{l.label}</span>
                    <span className="contact-link-value">{l.info}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* ── right: message form ── */}
        <section className="contact-form-panel" aria-label="Send a message">
          <h2 className="form-heading">Send a message</h2>
          <p className="form-sub">I'll get back to you within 24 hours.</p>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-field">
                <label className="form-label" htmlFor="firstName">First name</label>
                <input
                  className="form-input"
                  id="firstName" name="firstName" type="text"
                  placeholder="John" value={form.firstName}
                  onChange={handleChange} autoComplete="given-name" required
                />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="lastName">Last name</label>
                <input
                  className="form-input"
                  id="lastName" name="lastName" type="text"
                  placeholder="Doe" value={form.lastName}
                  onChange={handleChange} autoComplete="family-name"
                />
              </div>
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="email">Email</label>
              <input
                className="form-input"
                id="email" name="email" type="email"
                placeholder="someone@gmail.com" value={form.email}
                onChange={handleChange} autoComplete="email" required
              />
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                className="form-textarea"
                id="message" name="message"
                placeholder="What's on your mind…"
                value={form.message} onChange={handleChange}
                rows={5} required
              />
            </div>

            <button className="form-submit" type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2.2"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
              Send message
            </button>

            {sent && (
              <div className="form-success" role="status">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2.2"
                  strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>Sent — I'll be in touch!</span>
              </div>
            )}
          </form>
        </section>

      </div>
    </div>
  );
}

export default Contact;