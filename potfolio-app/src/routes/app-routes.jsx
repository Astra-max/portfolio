import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import RootLayout, { Home } from "../components/layout";
import Blog from "../view/blog";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <RootLayout>
             <Home />
            </RootLayout>
          }
        />
        <Route
          path="/Home"
          element={
            <RootLayout>
             <Home />
            </RootLayout>
          }
        />
        <Route path="/About" element={
          <RootLayout>
             <Home />
          </RootLayout>
        } />
        <Route path="/Projects" element={
          <RootLayout>
             <Home />
          </RootLayout>
        } />
        <Route path="/Services" element={
          <RootLayout>
             <Home />
          </RootLayout>
        } />
        <Route path="/Contact" element={
          <RootLayout>
             <Home />
          </RootLayout>
        } />
        <Route path="/Blog" element={
          <RootLayout>
             <Blog />
          </RootLayout>
        } />
        <Route path="*" element={<p>Page Not Found</p>} />
      </Routes>
      <Outlet />
    </Router>
  );
}