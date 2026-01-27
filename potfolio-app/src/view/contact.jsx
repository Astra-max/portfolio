import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Notification from "../context/notificationContext";
import "../styles/index.css";
//import useNotification from "../context/handleContext";
import { useContext } from "react";

function Contact() {
  const { notice, setNotice } = useContext(Notification)

  const data = [
    { id: 1, info: "0796066170", icon: faPhone, link: "" },
    {
      id: 2,
      info: "Waore Maxwel",
      icon: faLinkedin,
      link: "https://linkedIn/in/Waore-Maxwel",
    },
    {
      id: 3,
      info: "Waore Maxwel",
      icon: faTwitter,
      link: "https://x.com/Maxwel-Waore",
    },
    {
      id: 4,
      info: "Astra-max",
      icon: faGithub,
      link: "http://github.com/Astra-max",
    },
    { id: 5, info: "waoremaxwel17@gmail.com", icon: faEnvelope, link: "" },
  ];

  function HandleSubmit(e) {
    e.preventDefault()
    setNotice((state)=>({...state, notice: state.notice + 1}))
  }

  return (
    <div className="contact-main">
      <div className="contact-data">
        <div>
          <p className="contact-message">For More Let's Link up</p>
        </div>
        <div>
          {data.map((dt) => {
            return (
              <div key={dt.id}>
                <Link className="links" to={dt.link} key={dt.id}>
                  <FontAwesomeIcon
                    icon={dt.icon}
                    className="icon"
                    style={{ paddingRight: "0.5rem" }}
                  />
                  {dt.info}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <form className="contact-submit" onSubmit={HandleSubmit}>
        <div className="user-name">
          <input className="inputs" type="text" placeholder="John" />
          <input className="inputs" type="text" placeholder="Doe" />
        </div>
        <div className="email">
          <input
            className="email-i"
            type="email"
            placeholder="someone@gmail.com"
          />
        </div>
        <div className="text">
          <textarea
            className="text-area"
            placeholder="Leave a message..."
          ></textarea>
        </div>
        <div className="b-message">
          <button className="leave-message">Leave a Message</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
