import  { useState } from "react";
import { Box, Typography, useMediaQuery, useTheme, Container } from "@mui/material";
import { motion } from "framer-motion";
import LeadFormModal from "../../components/LeadFormModal.tsx";

const SOLUTIONS = [
  { title: "Homes", image: "/images/solar-house.jpeg", tab: "home" as const },
  { title: "Commercial", image: "/images/solar-house.jpeg", tab: "commercial" as const },
  { title: "Housing Societies", image: "/images/solar-house.jpeg", tab: "housing" as const },
];

export default function SolarSolutionsSection() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState<"home" | "commercial" | "housing">("home");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const getGridColumn = (idx: number) => {
    if (isMobile || isTablet) return "auto";

    if (activeIdx === 0) {
      if (idx === 0) return "1 / span 2";
      if (idx === 1) return "3 / span 1";
      if (idx === 2) return "4 / span 1";
    }
    if (activeIdx === 1) {
      if (idx === 0) return "1 / span 1";
      if (idx === 1) return "2 / span 2";
      if (idx === 2) return "4 / span 1";
    }
    if (activeIdx === 2) {
      if (idx === 0) return "1 / span 1";
      if (idx === 1) return "2 / span 1";
      if (idx === 2) return "3 / span 2";
    }
    return "auto";
  };

  const handleCardClick = (idx: number) => {
    setSelectedTab(SOLUTIONS[idx].tab);
    setModalOpen(true);
    // On mobile, also toggle active state for visual feedback
    if (isMobile) {
      setActiveIdx(activeIdx === idx ? -1 : idx);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#ffffff",
      
        pt: { xs: 2, sm: 6 },
        pb: { xs: 6, sm: 8 },
      }}
    >
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "32px", sm: "36px", md: "48px", lg: "54px" },
            textAlign: "center",
            mb: { xs: 4, sm:8},
            fontWeight: 800,
            color: "#1d1d1f",
          }}
        >
          Our <span style={{ color: "#7bda57" }}>Solar Solutions</span>
        </Typography>

        {/* Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: { xs: 2.5, sm: 3 },
            alignItems: "stretch",
            minHeight: { xs: "auto", md: 400 },
            overflow: "visible",
            position: "relative",
            transition: "all 0.4s ease",
          }}
        >
          {SOLUTIONS.map((item, idx) => {
            const isActive = idx === activeIdx && activeIdx !== -1;
            return (
              <motion.div
                key={idx}
                layout
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onMouseEnter={() => !isMobile && setActiveIdx(idx)}
                onMouseLeave={() => !isMobile && setActiveIdx(0)}
                style={{
                  gridColumn: getGridColumn(idx),
                  display: "flex",
                  overflow: "visible",
                }}
              >
                <Box
                  onClick={() => handleCardClick(idx)}
                  sx={{
                    position: "relative",
                    borderRadius: { xs: "16px", sm: "20px" },
                    overflow: "hidden",
                    cursor: "pointer",
                    height: "100%",
                    minHeight: { xs: isActive ? 280 : 240, sm: 280, md: 360 },
                    boxShadow: isActive
                      ? { xs: "0 12px 32px rgba(123,218,87,0.4)", sm: "0 12px 36px rgba(123,218,87,0.4)", md: "0 12px 36px rgba(123,218,87,0.4)" }
                      : { xs: "0 6px 20px rgba(0,0,0,0.1)", sm: "0 8px 24px rgba(0,0,0,0.08)", md: "0 8px 24px rgba(0,0,0,0.08)" },
                    transform: isActive 
                      ? (isMobile ? "scale(1.02) translateY(-8px)" : "scale(1.04)")
                      : "scale(1)",
                    zIndex: isActive ? 10 : 1,
                    border: isActive 
                      ? "2px solid rgba(123,218,87,0.5)" 
                      : "2px solid transparent",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    initial={{ scale: 1 }}
                    animate={{ scale: isActive ? (isMobile ? 1.08 : 1.08) : 1 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      filter: isActive
                        ? (isMobile ? "brightness(1.1) saturate(1.1)" : "brightness(1.1) saturate(1.1)")
                        : (isMobile ? "brightness(0.8)" : "brightness(0.85)"),
                    }}
                  />

                  {/* Overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: isActive
                        ? { xs: "linear-gradient(180deg, transparent 0%, rgba(123,218,87,0.15) 30%, rgba(0,0,0,0.75) 100%)", sm: "linear-gradient(180deg, transparent 0%, rgba(123,218,87,0.15) 30%, rgba(0,0,0,0.75) 100%)", md: "linear-gradient(180deg, transparent 0%, rgba(123,218,87,0.15) 30%, rgba(0,0,0,0.75) 100%)" }
                        : "linear-gradient(180deg, transparent 10%, rgba(0,0,0,0.6) 100%)",
                      py: { xs: 2, sm: 2 },
                      px: { xs: 2.5, sm: 3 },
                      transition: "all 0.4s ease",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        fontSize: { xs: isActive ? 18 : 17, sm: isActive ? 20 : 18, md: isActive ? 24 : 22 },
                        fontWeight: { xs: isActive ? 800 : 700, sm: isActive ? 800 : 700, md: isActive ? 800 : 700 },
                        textAlign: "center",
                        textShadow: isActive 
                          ? "0 2px 8px rgba(0,0,0,0.5), 0 0 12px rgba(123,218,87,0.3)" 
                          : "0 2px 4px rgba(0,0,0,0.3)",
                        transition: "all 0.4s ease",
                      }}
                    >
                      {item.title}
                    </Typography>
                    {isActive && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: -30,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: { xs: 60, sm: 70, md: 80 },
                          height: 4,
                          borderRadius: 2,
                          background: "linear-gradient(90deg, #7bda57, #68c54b)",
                          boxShadow: "0 0 12px rgba(123,218,87,0.6)",
                        }}
                      />
                    )}
                  </Box>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Container>
      <LeadFormModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        initialTab={selectedTab}
      />
    </Box>
  );
}
