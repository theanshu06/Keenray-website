import { Box } from "@mui/material";
import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import ProjectsHeroSection from "./HeroSection.tsx";
import ProjectSection from "./ProjectSection.tsx";
import ProjectsStatsSection from "./StatsSection.tsx";
import ProjectsCTASection from "./CTASection.tsx";

export default function Projects() {
  return (
    <>
    <Box sx={{ overflowX: "hidden" }}>
      <Header />
      <Box sx={{ paddingTop: { xs: "65px", sm: "70px" } }}>
        <ProjectsHeroSection />
        <ProjectSection />
        <ProjectsStatsSection />
        <ProjectsCTASection />
      </Box>
      <Footer />
    </Box>
    </>
  );
}

