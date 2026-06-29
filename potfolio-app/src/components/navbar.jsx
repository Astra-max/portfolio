import "../../src/styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { faBell, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import Notification from "../context/notificationContext";
import AccessControl from "./auth";
import useAuth from "../context/auth";
import Notifications from "./notifications";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { notice } = useContext(Notification);
  const { token, setToken } = useAuth();
  const push = useNavigate();

  const navElements = ["Home", "About", "Projects", "Services", "Blog", "Contact"];
  
  const element = navElements.map((elem, id) => {
    const isActive = pathname === `/${elem}` ? "active" : "nav-elem";
    const toPath = `/${elem}`;
    
    return (
      <Link 
        key={id} 
        to={toPath} 
        className={isActive}
        onClick={() => setMenuOpen(false)}
      >
        {elem}
      </Link>
    );
  });

  /**
   * Handles handle click
   */
  function HandleClick() {
    if (notice.notice > 0) return setClicked(!clicked);
  }

  return (
    <header>
      <div className="App">
        <div className="logo-section">
          <h1 className="logo-name" onClick={() => push("/")}>
            Max<span className="go">wel</span>
          </h1>
        </div>

        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <ul className="display">{element}</ul>
        </nav>

        <div className="nav-controls">
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
            <button className="hire-btn" onClick={() => { push("/Contact"); setMenuOpen(false); }}>
              Hire me
            </button>
          </div>

          <button className="menu-toggle-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} size="lg" />
          </button>
        </div>
      </div>
    </header>
  );
}
