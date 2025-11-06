import { Box} from "@mui/material";
import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import ChooseSection from "./ChooseSection.tsx";
import IntroCarouselSection from "./IntroCarouselSection.tsx";
import AboutSection from "./AboutSection.tsx";
import ContactSidebar from "../../components/ContactSidebar.tsx";

export default function AboutUs() {
  return (
    <><Box sx={{ overflowX: "hidden" }}>
    <Header />
    <ContactSidebar />

    {/* 👇 Use Box instead of div, and sx for responsive padding */}
    <Box sx={{ paddingTop: { xs: "65px", sm: "70px" } }}>
      {/* <AboutUsHeroSection /> */}
      <AboutSection />
      <ChooseSection />
      <IntroCarouselSection />
      </Box>
      <Footer />
    
  </Box>
    </>
  );
}