import { Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import Home from "./pages/Home.jsx";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

function AppRoutes() {
  const location = useLocation();
  const hideNavbarRoutes = ["/preview"]; // 특정 경로에서는 Navbar 숨김
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
