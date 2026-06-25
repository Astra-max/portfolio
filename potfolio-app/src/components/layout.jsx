import { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../view/footer";
import Navbar from "./navbar";
import Section from "../view/section";
import Projects from "../view/projects";
import AboutMe from "../view/section2";
import MyServices from "../view/service";
import Testimonials from "../view/testimonials";
import Contact from "../view/contact";

export default function RootLayout({ children }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let targetId = "";
    if (hash) {
      targetId = hash.replace("#", "");
    } else if (pathname && pathname !== "/" && pathname !== "/Home" && pathname !== "/Blog") {
      targetId = pathname.replace("/", "");
    }

    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [pathname, hash]);

  return (
    <Fragment>
      <Navbar />
      <main style={{ minHeight: "80vh" }}>
        {children}
      </main>
      <Footer />
    </Fragment>
  );
}

export function Home() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let targetId = "";
    if (hash) {
      targetId = hash.replace("#", "");
    } else if (pathname && pathname !== "/" && pathname !== "/Home" && pathname !== "/Blog") {
      targetId = pathname.replace("/", "");
    }

    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return (
    <Fragment>
      <div id="Home"><Section /></div>
      <div id="About"><AboutMe /></div>
      <div id="Services"><MyServices /></div>
      <div id="Projects"><Projects /></div>
      <div id="Testimonials"><Testimonials /></div>
      <div id="Contact"><Contact /></div>
    </Fragment>
  );
}
