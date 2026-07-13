import { useEffect, useState } from "react";
import "../../src/styles/testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Mercy Daniels",
    role: "CEO · Astradev Tech",
    email: "mercydaniels2@gmail.com",
    photo: "blackwoman.jpg",
    text: "I'm quite grateful to have Maxwel in my team as a MERN stack developer. Our company focuses on digital marketing — advertising and selling client products. Previously we had serious issues with our website; customers complained about poor user experience. Maxwel stepped in, integrating M-Pesa payments and redesigning our application to be fully responsive. He's the best developer I've worked with.",
  },
  {
    id: 2,
    name: "Albert Kiprop",
    role: "Product Manager · CoreTech Solutions",
    email: "albert.kiprop@coretech.io",
    photo: "blackman.jpg",
    text: "Maxwel's proficiency in building highly responsive React applications exceeded our expectations. He optimized our front-end performance, reducing page load time by 40% and making user navigation incredibly smooth and fluid. His engineering approach and commitment to delivery were critical to our product launch.",
  },
  {
    id: 3,
    name: "Mahesh Patel",
    role: "CTO · Patel Logistics",
    email: "mahesh.patel@patellogistics.com",
    photo: "mahesh.jpg",
    text: "Working with Maxwel on our Go backend was a game changer. He restructured our database schema, wrote clean API endpoints, and integrated containerized services using Docker seamlessly. His systems design skills are top-tier and he writes highly maintainable, document-rich code.",
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    role: "Digital Lead · Creative Spark",
    email: "s.jenkins@creativespark.co",
    photo: "shorthair.jpg",
    text: "Maxwel helped us migrate our old legacy website to Next.js. His clean CSS, modern styling choices, and attention to user-experience micro-animations brought our brand to life. He is not only a talented developer but also a proactive communicator and creative thinker.",
  },
  {
    id: 5,
    name: "Emily Chen",
    role: "Founder · Bloom Wellness",
    email: "emily.chen@bloomwell.com",
    photo: "lonhair.jpg",
    text: "As a startup founder, I needed someone who could build a secure e-commerce application from scratch. Maxwel delivered an outstanding product, implementing JWT authentication, secure database storage, and a clean admin panel. I look forward to working with him on future projects.",
  },
  {
    id: 6,
    name: "David Mwangi",
    role: "Engineering Lead · SafiPay",
    email: "d.mwangi@safipay.com",
    photo: "black2.jpg",
    text: "Maxwel is an exceptional developer who brings both engineering skill and business logic to the table. His work on our payment gateway systems, RestAPI design, and third-party integrations was flawless, robust, and highly secure. He's a highly valued asset to any dev team.",
  }
];

export default function Testimonials() {
  const [activeSet, setActiveSet] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSet((prev) => (prev === 0 ? 1 : 0));
    }, 6000); // toggle every 6 seconds
    return () => clearInterval(timer);
  }, []);

  const group1 = testimonials.slice(0, 3);
  const group2 = testimonials.slice(3, 6);

  return (
    <div className="t-page">
      {/* ── section header ── */}
      <div className="t-header">
        <span className="t-eyebrow">What clients say</span>
        <h2 className="t-title">Testimonials</h2>
        <div className="t-title-line" />
      </div>

      {/* ── testimonials slider ── */}
      <div className="t-slider-outer">
        <div 
          className="t-slider-inner"
          style={{ transform: `translateX(-${activeSet * 50}%)` }}
        >
          {/* group 1 */}
          <div className="t-slide-group">
            {group1.map((t) => {
              const initials = t.name.split(" ").map((n) => n[0]).join("");
              return (
                <div className="t-card-premium" key={t.id}>
                  {/* Client image starts first */}
                  <div className="t-photo-container">
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="t-photo"
                    />
                  </div>

                  {/* Client details in the middle */}
                  <div className="t-details-container">
                    <div className="t-avatar" aria-hidden="true">{initials}</div>
                    <div className="t-meta">
                      <p className="t-name">{t.name}</p>
                      <p className="t-role">{t.role}</p>
                      <p className="t-email">{t.email}</p>
                    </div>
                  </div>

                  {/* Testimonial text at the bottom */}
                  <div className="t-body">
                    <span className="t-quote-mark" aria-hidden="true">“</span>
                    <p className="t-text">{t.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* group 2 */}
          <div className="t-slide-group">
            {group2.map((t) => {
              const initials = t.name.split(" ").map((n) => n[0]).join("");
              return (
                <div className="t-card-premium" key={t.id}>
                  {/* Client image starts first */}
                  <div className="t-photo-container">
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="t-photo"
                    />
                  </div>

                  {/* Client details in the middle */}
                  <div className="t-details-container">
                    <div className="t-avatar" aria-hidden="true">{initials}</div>
                    <div className="t-meta">
                      <p className="t-name">{t.name}</p>
                      <p className="t-role">{t.role}</p>
                      <p className="t-email">{t.email}</p>
                    </div>
                  </div>

                  {/* Testimonial text at the bottom */}
                  <div className="t-body">
                    <span className="t-quote-mark" aria-hidden="true">“</span>
                    <p className="t-text">{t.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── slider dots navigation ── */}
      <div className="t-dots" role="tablist" aria-label="Testimonial navigation">
        <button
          className={`t-dot ${activeSet === 0 ? "active" : ""}`}
          onClick={() => setActiveSet(0)}
          role="tab"
          aria-selected={activeSet === 0}
          aria-label="Testimonials Group 1"
        />
        <button
          className={`t-dot ${activeSet === 1 ? "active" : ""}`}
          onClick={() => setActiveSet(1)}
          role="tab"
          aria-selected={activeSet === 1}
          aria-label="Testimonials Group 2"
        />
      </div>
    </div>
  );
}