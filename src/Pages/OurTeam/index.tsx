import { Box, Container } from "@mui/material";
import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import HeroSection from "./HeroSection.tsx";
import TeamSection from "./TeamSection.tsx";
import ContactSidebar from "../../components/ContactSidebar.tsx";

export default function OurTeam() {
  return (
    <>
      <Box sx={{ overflowX: "hidden" }}>
        <Header />
        <Container maxWidth="lg">
          <ContactSidebar />
          <Box sx={{ paddingTop: { xs: "65px", sm: "70px" } }}>
            <HeroSection />
            <TeamSection />
          </Box>
        </Container>
        <Footer />
      </Box>
    </>
  );
}

