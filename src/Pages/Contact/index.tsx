import HeroSection from "./HeroSection.tsx";
import { Box } from "@mui/material";
import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import ContactFormSection from "./FormSection";
import ContactSidebar from "../../components/ContactSidebar.tsx";

export default function Contact() {
  return (
    <><Box sx={{ overflowX: "hidden" }}>
      <Header />
      <ContactSidebar />
      <Box sx={{ paddingTop: { xs: "65px", sm: "70px" } }}>
        <HeroSection />
        
        <ContactFormSection />
       
        <Footer />
        
      </Box>
      </Box>
    </>
  );
}