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
        py: { xs: 4, sm: 4 },
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
      <Box
        component={motion.div}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: "24px", sm: "40px" },
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
              borderRadius: { xs: "12px", sm: "14px" },
              boxShadow: { xs: "0 3px 8px rgba(123,218,87,0.08)", sm: "0 4px 10px rgba(123,218,87,0.08)" },
              px: { xs: 2.5, sm: 3 },
              py: { xs: 2, sm: 2 },
              minWidth: { xs: 180, sm: 200, md: 220 },
              textAlign: "center",
              backdropFilter: "blur(4px)",
            }}
          >
            <Typography
              sx={{
                color: "#56B947",
                fontWeight: 800,
                fontSize: { xs: "24px", sm: "28px", md: "32px" },
                lineHeight: { xs: 1.2, sm: 1.1 },
                mb: { xs: 0.5, sm: 0 },
              }}
            >
              {item.number}
            </Typography>
            <Typography
              sx={{
                color: "#1d1d1f",
                fontWeight: 600,
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                lineHeight: { xs: 1.3, sm: 1.4 },
              }}
            >
              {item.label}
            </Typography>
            <Typography
              sx={{
                color: "#555",
                fontSize: { xs: "11.5px", sm: "13px" },
                mt: { xs: 0.5, sm: 0.3 },
                lineHeight: 1.3,
              }}
            >
              {item.sub}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
