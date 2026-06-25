import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedinIn,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faThumbsUp, faHeart } from "@fortawesome/free-solid-svg-icons";
import "../../src/styles/testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Mercy Daniels",
    role: "Client · Astradev Tech",
    email: "mercydaniels2@gmail.com",
    photo: "blackwoman.jpg",
    text: `I'm quite grateful to have Maxwel in my team as a MERN stack developer.
           Our company focuses on digital marketing — advertising and selling client
           products like electricals and clothing. Previously we had serious issues
           with our website; customers complained about poor user experience, the
           site wasn't responsive, and clients couldn't make online payments. That's
           where Maxwel stepped in — integrating M-Pesa and redesigning our
           application to be fully responsive across all screens. He's the best
           developer I've worked with, and I look forward to collaborating again.`,
    likes: 142,
    hearts: 89,
  },
];

export default function Testimonials() {
  const t = testimonials[0];
  const initials = t.name.split(" ").map((n) => n[0]).join("");

  return (
    <div className="t-page">
      {/* ── section header ── */}
      <div className="t-header">
        <span className="t-eyebrow">What clients say</span>
        <h2 className="t-title">Testimonials</h2>
        <div className="t-title-line" />
      </div>

      {/* ── card ── */}
      <div className="t-card">
        {/* photo */}
        <div className="t-photo-col">
          <img
            src={t.photo}
            alt={t.name}
            className="t-photo"
          />
          <div className="t-photo-fade" />
        </div>

        {/* body */}
        <div className="t-body">
          <span className="t-quote-mark" aria-hidden="true">"</span>
          <p className="t-text">{t.text}</p>

          {/* client meta */}
          <div className="t-meta">
            <div className="t-avatar" aria-hidden="true">{initials}</div>
            <div>
              <p className="t-name">{t.name}</p>
              <p className="t-role">{t.role}</p>
              <p className="t-email">{t.email}</p>
            </div>
          </div>

          {/* bottom row */}
          <div className="t-actions">
            <div className="t-socials">
              {[
                { icon: faFacebook,   label: "Facebook"  },
                { icon: faLinkedinIn, label: "LinkedIn"  },
                { icon: faTwitter,    label: "Twitter"   },
                { icon: faWhatsapp,   label: "WhatsApp"  },
              ].map(({ icon, label }) => (
                <button key={label} className="t-soc" aria-label={label}>
                  <FontAwesomeIcon icon={icon} />
                </button>
              ))}
            </div>
            <button className="t-enquire">
              <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
              Make enquiry
            </button>
          </div>
        </div>

        {/* ratings sidebar */}
        <div className="t-ratings" aria-label="Ratings">
          <div className="t-rat">
            <FontAwesomeIcon icon={faThumbsUp} aria-hidden="true" />
            <span>{t.likes}</span>
          </div>
          <div className="t-rat">
            <FontAwesomeIcon icon={faHeart} aria-hidden="true" />
            <span>{t.hearts}</span>
          </div>
        </div>
      </div>

      {/* ── dot nav ── */}
      <div className="t-dots" role="tablist" aria-label="Testimonial navigation">
        {[0, 1, 2, 3].map((i) => (
          <button
            key={i}
            className={`t-dot ${i === 0 ? "active" : ""}`}
            role="tab"
            aria-selected={i === 0}
            aria-label={`Testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}