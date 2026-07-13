import { useEffect, useRef, useState } from "react";
import "../../src/styles/service.css";
import { front, backend, other } from "../util/skills";

export default function MyServices() {
  return (
    <div className="service-container">
      <div className="second-container">
        <div className="service-text">
          <p className="what-i-do">My Skills & Experience</p>
        </div>
        <div className="display-skills">
          <Skills categoryTitle="Frontend Dev" skill={front} />
          <Skills categoryTitle="Backend & Database" skill={backend} />
          <Skills categoryTitle="Systems & Tools" skill={other} />
        </div>
      </div>
    </div>
  );
}

/**
 * Handles rendering list of skills for a category
 */
export function Skills({ categoryTitle, skill }) {
  return (
    <div className="display-progress">
      <h3 className="category-title">{categoryTitle}</h3>
      <div className="skills-grid-circular">
        {skill.map((val, index) => {
          return (
            <CircularSkill key={index} name={val.skill} level={val.level} />
          );
        })}
      </div>
    </div>
  );
}

/**
 * Handles individual circular skill progress ring
 */
export function CircularSkill({ name, level }) {
  const [offset, setOffset] = useState(251.2); // 2 * PI * r (r = 40) -> 251.2
  const ref = useRef(null);

  useEffect(() => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius; // 251.327
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const progressOffset = circumference - (level / 100) * circumference;
          setOffset(progressOffset);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [level]);

  return (
    <div className="circular-skill-card" ref={ref}>
      <div className="circular-svg-container">
        <svg className="progress-ring" width="100" height="100">
          <circle
            className="progress-ring-bg"
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth="6"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
          />
          <circle
            className="progress-ring-fill"
            stroke="var(--main-color)"
            strokeWidth="6"
            strokeLinecap="round"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
            style={{
              strokeDasharray: 251.327,
              strokeDashoffset: offset,
              transition: "stroke-dashoffset 1.5s cubic-bezier(0.1, 0.8, 0.2, 1)"
            }}
          />
        </svg>
        <span className="skill-level-per">{level}%</span>
      </div>
      <p className="circular-skill-name">{name}</p>
    </div>
  );
}


