import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/index";
import { Box } from "@mui/material";

function App() {
  return (
  <><Box  sx={{}}> <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</BrowserRouter></Box> </>
  )
}

export default App
