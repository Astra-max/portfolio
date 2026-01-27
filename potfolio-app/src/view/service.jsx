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

export function Skills({ skill }) {
  var progressBar = {
    width: "19rem",
    height: "0.4rem",
    backgroundColor: "#c73030",
    borderRadius: "0.4rem",
  };
  return (
    <div className="display-progress">
      {skill.map((val, index) => {
        const width = (val.level / 100) * 19;
        progressBar = { ...progressBar, width: `${width}rem` };
        return (
          <div className="progress-div" key={index}>
            <p className="level">{val.skill}</p>
            <div className="display-level">
              <div style={progressBar}></div>
              <p className="level-per">{val.level}%</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
