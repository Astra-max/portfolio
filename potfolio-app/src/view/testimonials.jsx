import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../src/styles//testimonials.css";
import {
  faFacebook,
  faLinkedinIn,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDotCircle,
  faHeart,
  faPhone,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

export default function Testimonials() {
  return (
    <div className="main-container">
      <div className="clients-testimonials">
        <p>Testimonials</p>
      </div>
      <div className="container-display">
        <div className="testimonial-cards" style={{ display: "flex" }}>
          <div className="contains-image">
            <img
              src="blackwoman.jpg"
              className="testimonial-photos"
              alt="first-testimonial"
            />
          </div>
          <div className="text-social-media">
            <div className="client-details">
              <p className="name">Mercy Daniels</p>
              <p className="relationship">Client Astradev tech</p>
              <address>
                <p className="email">mercydaniels2@gmail.com</p>
              </address>
            </div>
            <p className="client-text">
              Am quite greateful to have maxwel in my team as a MERN stack
              developer Our company deals with digit marketing our focus being
              advertising and selling clients products eg electricals, clothing
              etc. Previous we were having issues with our website,customers
              were complaining about poor user experience our site wasn't
              resposive and clients couldn't make online payment that's were
              Maxwel assisted us in integrating mpesa and design our application
              to be responsive to all screen. He's the best developer am looking
              forward to work with incase we bumped into a technical issue.
            </p>
            <div className="btn">
              <button className="enquire">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ paddingRight: "0.8rem" }}
                />
                Make Enquiries
              </button>
            </div>
          </div>
          <div className="testimonial-social">
            <div className="facebook">
              <FontAwesomeIcon icon={faFacebook} style={{ height: "1.4rem" }} />
            </div>
            <div className="facebook">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                size="2x"
                style={{ height: "1.4rem" }}
              />
            </div>
            <div className="facebook">
              <FontAwesomeIcon
                icon={faTwitter}
                size="2x"
                style={{ height: "1.4rem" }}
              />
            </div>
            <div className="facebook">
              <FontAwesomeIcon
                icon={faWhatsapp}
                size="2x"
                style={{ height: "1.4rem" }}
              />
            </div>
          </div>
          <div className="clients-ratings">
            <FontAwesomeIcon
              icon={faThumbsUp}
              color="black"
              style={{ height: "1.6rem" }}
            />
            <FontAwesomeIcon
              icon={faHeart}
              color="white"
              style={{ height: "1.6rem" }}
            />
          </div>
        </div>
      </div>
      <div className="dot-nav">
        <FontAwesomeIcon icon={faDotCircle} color="rgb(250, 23, 61)" />
        <FontAwesomeIcon icon={faDotCircle} color="rgb(250, 23, 61)" />
        <FontAwesomeIcon icon={faDotCircle} color="rgb(250, 23, 61)" />
        <FontAwesomeIcon icon={faDotCircle} color="rgb(250, 23, 120)" />
      </div>
    </div>
  );
}
