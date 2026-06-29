import "../../src/styles/service.css";
import { front, backend, other } from "../util/skills";

export default function MyServices() {
  return (
    <div className="service-container">
      <div className="second-container">
        <div className="service-text">
          <p className="what-i-do">My skills and level of experience</p>
        </div>
        <div className="display-skills">
          <Skills skill={front} />
          <Skills skill={backend} />
          <Skills skill={other} />
        </div>
      </div>
    </div>
  );
}

/**
 * Handles skills
 */
export function Skills({ skill }) {
  return (
    <div className="display-progress">
      {skill.map((val, index) => {
        return (
          <div className="progress-div" key={index}>
            <p className="level">{val.skill}</p>
            <div className="display-level">
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${val.level}%` }}></div>
              </div>
              <p className="level-per">{val.level}%</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

