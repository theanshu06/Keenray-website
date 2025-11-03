import { Box } from "@mui/material";
import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import ChooseSection from "./ChooseSection.tsx";
import IntroCarouselSection from "./IntroCarouselSection.tsx";
import AboutUsHeroSection from "./HeroSection.tsx";
import AboutSection from "./AboutSection.tsx";
import ContactSidebar from "../../components/ContactSidebar.tsx";

export default function AboutUs() {
  return (
    <><Box sx={{ overflowX: "hidden" }}>
      <Header />
      <ContactSidebar />
      <div style={{ paddingTop: "70px" }}> 
        {/* <AboutUsHeroSection /> */}
        <AboutSection />
        <ChooseSection />
        <IntroCarouselSection />
        
      <Footer />
        
      </div>
      </Box>
    </>
  );
}