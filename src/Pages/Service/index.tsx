import { Box} from "@mui/material";
import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import ServiceHeroSection from "./HeroSection.tsx";
import ServiceSection from "./ServiceSection.tsx";
import StatsSection from "./StatsSection.tsx";
import CTASection from "./CTASection.tsx";
import ContactSidebar from "../../components/ContactSidebar.tsx";
import ScrollProgressBar from "../../components/ScrollProgressBar.tsx";

export default function Service() {
  return (
    <>
    <Box sx={{ overflowX: "hidden" }}>
      <ScrollProgressBar />
      <Header />
      <ContactSidebar />
      <Box sx={{ paddingTop: { xs: "65px", sm: "70px" } }}>
        <ServiceHeroSection />
        <ServiceSection />
        <StatsSection />
        <CTASection />
      </Box>
      <Footer />
    </Box>
    </>
  );
}
