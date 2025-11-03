import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/index";
import { Box } from "@mui/material";
import Contact from "./Pages/Contact/index";
import AboutUs from "./Pages/AboutUs/index";
import Service from "./Pages/Service/index";
import Projects from "./Pages/Projects/index";

function App() {
  return (
  <><Box  sx={{}}> <BrowserRouter>
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
