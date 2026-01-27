import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import RootLayout from "../components/layout";
import Section from "../view/section";
import AboutMe from "../view/section2";
import Projects from "../view/projects";
import MyServices from "../view/service";
import Contact from "../view/contact";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <RootLayout>
             <Section />
            </RootLayout>
          }
        />
        <Route
          exact path="/Home"
          element={
            <RootLayout>
             <Section />
            </RootLayout>
          }
        />
        <Route path="/About" element={
          <RootLayout>
             <AboutMe />
          </RootLayout>
        } />
        <Route path="/Projects" element={
          <RootLayout>
             <Projects />
          </RootLayout>
        } />
        <Route path="/Services" element={
          <RootLayout>
             <MyServices />
          </RootLayout>
        } />
        <Route path="/Contact" element={
          <RootLayout>
             <Contact />
          </RootLayout>
        } />
        <Route path="*" element={<p>Page Not Found</p>} />
      </Routes>
      <Outlet />
    </Router>
  );
}