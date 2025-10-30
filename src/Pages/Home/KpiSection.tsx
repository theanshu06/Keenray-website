import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const KPIs = [
  { number: "4.8★", label: "Rating on Google", sub: "6000+ Reviews" },
  { number: "10+", label: "Years of Experience", sub: "In Solar Industry" },
  { number: "25,000+", label: "Homes Solarised", sub: "Across India" },
];

export default function KPISection() {
  // Duplicate KPIs for infinite loop effect
  const runningKPIs = [...KPIs, ...KPIs, ...KPIs];

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        py: { xs: 3, sm: 4 },
        backgroundColor: "#ffffff",
        borderTop: "1px solid rgba(86,185,71,0.15)",
        borderBottom: "1px solid rgba(86,185,71,0.15)",
      }}
    >
      {/* Moving Gradient Background */}
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "200%",
          height: "100%",
          background:
            "linear-gradient(90deg, rgba(123,218,87,0.08) 0%, rgba(86,185,71,0.12) 50%, rgba(123,218,87,0.08) 100%)",
          zIndex: 0,
        }}
      />

      {/* Scrolling KPI Strip */}
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "40px",
          width: "200%",
          position: "relative",
          zIndex: 2,
        }}
      >
        {runningKPIs.map((item, idx) => (
          <Box
            key={idx}
            sx={{
              flexShrink: 0,
              background: "rgba(255,255,255,0.9)",
              border: "1px solid rgba(86,185,71,0.25)",
              borderRadius: "14px",
              boxShadow: "0 4px 10px rgba(123,218,87,0.08)",
              px: { xs: 2, sm: 3 },
              py: { xs: 1.5, sm: 2 },
              minWidth: { xs: 160, sm: 200, md: 220 },
              textAlign: "center",
              backdropFilter: "blur(4px)",
            }}
          >
            <Typography
              sx={{
                color: "#56B947",
                fontWeight: 800,
                fontSize: { xs: "22px", sm: "28px", md: "32px" },
                lineHeight: 1.1,
              }}
            >
              {item.number}
            </Typography>
            <Typography
              sx={{
                color: "#1d1d1f",
                fontWeight: 600,
                fontSize: { xs: "13px", sm: "15px", md: "16px" },
              }}
            >
              {item.label}
            </Typography>
            <Typography
              sx={{
                color: "#555",
                fontSize: { xs: "11px", sm: "13px" },
                mt: 0.3,
              }}
            >
              {item.sub}
            </Typography>
          </Box>
        ))}
      </motion.div>
    </Box>
  );
}
