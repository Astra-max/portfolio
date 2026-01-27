import React from "react";
import "../../src/styles/section.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import TextSwitcher from "../components/coolIntroduction";

export default function Section() {
  return (
    <section>
      <div className="about-me-container">
        <div className="about-me">
          <div className="profile-display">
            <div className="contain">
              <TextSwitcher />
              <p className="bio">
                I'm Waore Maxwel, a full-stack web developer specializing in
                front-end development. With expertise in React, HTML5, CSS, and
                REST API, I craft visually appealing and user-friendly websites
                and web applications. My background in backend technologies like
                MongoDB, MySQL, Express, and Node.js enables me to create
                seamless, end-to-end solutions that meet your needs and exceed
                your expectation. Hire me to bring your digital projects to life
                with creativity, precision, and professionalism.
              </p>
              <div className="social-media">
                <div className="icon-facebook">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="1x"
                    className="social-facebook"
                  />
                </div>
                <div className="icon-twitter">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="1x"
                    className="social-twitter"
                  />
                </div>
                <div className="icon-instagram">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="1x"
                    className="social-instagram"
                  />
                </div>
                <div className="icon-github">
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="1x"
                    className="social-github"
                  />
                </div>
              </div>
              <div className="documents">
                <button className="cv">
                  <FontAwesomeIcon
                    icon={faDownload}
                    size="1x"
                    className="social-icon"
                    style={{ paddingRight: "0.5rem" }}
                  />
                  Download cv
                </button>
              </div>
            </div>
            <div className="profile-photo">
              <img src="my-photo.jpg" alt="profile" className="profile-pic" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
