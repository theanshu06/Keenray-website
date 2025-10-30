import HeroSection from "./HeroSection.tsx";
import { Box } from "@mui/material";
import Header from "../../components/Header.tsx";
import AboutSection from "./AboutSection.tsx";
import AboutSection2 from "./AboutSection2.tsx";
import Footer from "../../components/Footer.tsx";
import ProjectsCarousel from "./ProjectsCarousel.tsx";
import KPISection from "./KpiSection.tsx";
import SolarSolutionsSection from "./SolutionSection.tsx";
export default function Home() {
  return (
    <><Box sx={{ overflowX: "hidden" }}>
      <Header />
      <div style={{ paddingTop: "70px" }}>  
        <HeroSection />
        <KPISection />
        <AboutSection />
        <SolarSolutionsSection />
        {/* <AboutSection2 /> */}
        <ProjectsCarousel />
        <Footer />
        
      </div>
      </Box>
    </>
  );
}