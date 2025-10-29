import HeroSection from "./HeroSection.tsx";
import Header from "../../components/Header.tsx";
import AboutSection from "./AboutSection.tsx";
import AboutSection2 from "./AboutSection2.tsx";
import Footer from "../../components/Footer.tsx";
import ProjectsCarousel from "./ProjectsCarousel.tsx";
export default function Home() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "70px" }}>  
        <HeroSection />
        <AboutSection />
        {/* <AboutSection2 /> */}
        <ProjectsCarousel />
        <Footer />
        
      </div>
    </>
  );
}