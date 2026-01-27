import "../../src/styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation, useNavigate } from "react-router";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import Notification from "../context/notificationContext";
import AccessControl from "./auth";
import useAuth from "../context/auth";
import Notifications from "./notifications";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const { pathname } = useLocation();
  const { notice } = useContext(Notification);
  const { token, setToken } = useAuth();
  const push = useNavigate();

  const navElements = ["Home", "About", "Projects", "Services", "Contact"];
  const element = navElements.map((elem, id) => {
    const isActive = pathname === `/${elem}` ? "active" : "nav-elem";
    if (pathname === "/" && pathname !== elem && elem === "Home") {
      return (
        <Link key={10} to={`/${elem}`} className={"active"}>
          {elem}
        </Link>
      );
    } else {
      return (
        <Link key={id} to={`/${elem}`} className={isActive}>
          {elem}
        </Link>
      );
    }
  });

  function HandleClick() {
    if (notice.notice > 0) return setClicked(!clicked);
  }

  return (
    <header>
      <div className="App">
        <div className="logo">
          <h1 className="logo-name">
            Ast<span className="go">ra</span>
          </h1>
          <ul className="display">{element}</ul>
        </div>
        <div className="notification">
          <span className="icon-number" onClick={HandleClick}>
            <FontAwesomeIcon icon={faBell} size="1x" className="social-icon" />
            {notice.notice > 0 && (
              <span className="number">{notice?.notice}</span>
            )}
          </span>
          {clicked && token && notice.notice > 0 && <Notifications />}
          {clicked && !token && notice.notice > 0 && (
            <AccessControl setToken={setToken} />
          )}
        </div>
        <div className="hire">
          <button className="hire-btn" onClick={() => push("/Contact")}>
            Hire me
          </button>
        </div>
      </div>
    </header>
  );
}
