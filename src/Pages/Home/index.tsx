import HeroSection from "./HeroSection.tsx";
import { Box, Container } from "@mui/material";
import Header from "../../components/Header.tsx";
import AboutSection from "./AboutSection.tsx";
import Footer from "../../components/Footer.tsx";
import ProjectsCarousel from "./ProjectsCarousel.tsx";
import KPISection from "./KpiSection.tsx";
import SolarSolutionsSection from "./SolutionSection.tsx";
import ContactSidebar from "../../components/ContactSidebar.tsx";

export default function Home() {
  return (
    <>
    <Box sx={{ overflowX: "visible" }}>
      <Header />
      <ContactSidebar />
  
      {/* Main content area */}
      <Container maxWidth="lg">
        <Box sx={{ paddingTop: "70px" }}>
          <HeroSection />
          <KPISection />
          <AboutSection />
          <SolarSolutionsSection />
          {/* <AboutSection2 /> */}
          <ProjectsCarousel />
        </Box>
      </Container>
  
      {/* Footer (outside container for full width look) */}
      <Footer />
    </Box>
  </>
  
  );
}