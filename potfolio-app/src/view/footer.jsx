import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../src/styles/footer.css";
import {
  faAddressBook,
  faEarthAfrica,
  faEnvelope,
  faLaptopCode,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDeploydog,
  faFigma,
  faLinkedin,
  faWebflow,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="main-contain">
        <div className="services">
          <p className="contacts-me">My amazing services</p>
          <p>
            <FontAwesomeIcon
              icon={faLaptopCode}
              style={{ paddingRight: "0.5rem" }}
            />
            Responsive design
          </p>
          <p>
            <FontAwesomeIcon
              icon={faDeploydog}
              style={{ paddingRight: "0.5rem" }}
            />
            websites deployment
          </p>
          <p>
            <FontAwesomeIcon
              icon={faFigma}
              style={{ paddingRight: "0.5rem" }}
            />
            Translating figma designs
          </p>
          <p>
            <FontAwesomeIcon
              icon={faWebflow}
              style={{ paddingRight: "0.5rem" }}
            />
            Web development
          </p>
        </div>
        <div className="contacts">
          <p className="contacts-me">Contact me</p>
          <p>
            <FontAwesomeIcon
              icon={faPhone}
              style={{ paddingRight: "0.5rem" }}
            />
            0796066170
          </p>
          <p>
            <FontAwesomeIcon
              icon={faPhone}
              style={{ paddingRight: "0.5rem" }}
            />
            0738904067
          </p>
          <p>
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ paddingRight: "0.5rem" }}
            />
            Waore Maxwel
          </p>
          <p>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ paddingRight: "0.5rem" }}
            />
            Waoremaxwel17@gmail.com
          </p>
        </div>
        <div className="address">
          <p className="contacts-me">Developer's address</p>
          <address>
            <p>
              <FontAwesomeIcon
                icon={faAddressBook}
                style={{ paddingRight: "0.5rem" }}
              />
              3078-00100 westlands
            </p>
            <p>
              <FontAwesomeIcon
                icon={faAddressBook}
                style={{ paddingRight: "0.5rem" }}
              />
              3078-40100 Kisumu
            </p>
            <p>
              <FontAwesomeIcon
                icon={faAddressBook}
                style={{ paddingRight: "0.5rem" }}
              />
              2078-40100 milimani
            </p>
            <p>
              <FontAwesomeIcon
                icon={faEarthAfrica}
                style={{ paddingRight: "0.5rem" }}
              />
              Nairobi Kenya
            </p>
          </address>
        </div>
      </div>
      <div className="copywrite">
        <p>&copy;WaoreMaxwel @2024 Nairobi</p>
      </div>
    </footer>
  );
}
