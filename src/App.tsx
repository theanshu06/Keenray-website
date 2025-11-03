import React from "react";
import {BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/index";
import { Box } from "@mui/material";
import Contact from "./Pages/Contact/index";
import AboutUs from "./Pages/AboutUs/index";
import Service from "./Pages/Service/index";
import Projects from "./Pages/Projects/index";

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    // Defer to next frame so the new route content is mounted before scrolling
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  }, [pathname]);
  return null;
}

function App() {
  return (
  <><Box  sx={{}}> <BrowserRouter>
  <ScrollToTop />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/services" element={<Service />} />
    <Route path="/projects" element={<Projects />} />
  </Routes>
</BrowserRouter></Box> </>
  )
}

export default App
