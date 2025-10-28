import HeroSection from "./HeroSection.tsx";
import Header from "../../components/Header.tsx";
export default function Home() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "70px" }}>  
        <HeroSection />
      </div>
    </>
  );
}