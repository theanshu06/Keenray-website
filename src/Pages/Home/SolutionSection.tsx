import React, { useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const SOLUTIONS = [
  { title: "Homes", image: "/images/solar-house.jpeg" },
  { title: "Commercial", image: "/images/solar-house.jpeg" },
  { title: "Housing Societies", image: "/images/solar-house.jpeg" },
];

export default function SolarSolutionsSection() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
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

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden", // ✅ Prevent any horizontal scroll entirely
        py: { xs: 6, sm: 8 },
        px: { xs: 2, sm: 4, md: 8 },
        backgroundColor: "#ffffff",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mb: { xs: 3, sm: 5 },
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
          gap: { xs: 2, sm: 3 },
          alignItems: "stretch",
          minHeight: { xs: "auto", md: 400 },
          overflow: "hidden", // ✅ Crops expanded images without adding scroll
          position: "relative",
          transition: "all 0.4s ease",
        }}
      >
        {SOLUTIONS.map((item, idx) => {
          const isActive = idx === activeIdx;
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
                overflow: "hidden", // ✅ ensures inner content doesn’t overflow grid cell
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden", // ✅ clip image edges
                  cursor: "pointer",
                  height: "100%",
                  minHeight: { xs: 220, sm: 280, md: 360 },
                  boxShadow: isActive
                    ? "0 12px 36px rgba(123,218,87,0.35)"
                    : "0 8px 24px rgba(0,0,0,0.08)",
                  transition: "all 0.4s ease",
                  transform: isActive ? "scale(1.03)" : "scale(1)",
                }}
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  initial={{ scale: 1 }}
                  animate={{ scale: isActive ? 1.05 : 1 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center", // ✅ keeps center focus while cropping edges
                    filter: isActive ? "brightness(1.05)" : "brightness(0.85)",
                  }}
                />

                {/* Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background:
                      "linear-gradient(180deg, transparent 10%, rgba(0,0,0,0.6) 100%)",
                    py: { xs: 1.5, sm: 2 },
                    px: { xs: 2, sm: 3 },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: { xs: 16, sm: 18, md: 22 },
                      fontWeight: 700,
                      textAlign: "center",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          );
        })}
      </Box>
    </Box>
  );
}
