import { Fragment } from "react";
import Footer from "../view/footer";
import Navbar from "./navbar";
import Section from "../view/section";
import Projects from "../view/projects";
import AboutMe from "../view/section2";
import MyServices from "../view/service";
import Testimonials from "../view/testimonials";
import Contact from "../view/contact";

export default function RootLayout({ children }) {
  return (
    <Fragment>
      <Navbar />
      {children}
      <AboutMe />
      <MyServices />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export function Home() {
  return (
    <Fragment>
      <Section />
      <AboutMe />
      <MyServices />
      <Projects />
      <Testimonials />
    </Fragment>
  );
}
