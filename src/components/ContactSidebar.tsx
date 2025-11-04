import { Box, Typography, Paper, Stack } from "@mui/material";
import { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function ContactSidebar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const contactItems = [
    {
      icon: <PhoneIcon sx={{ fontSize: 24, color: "#ffffff" }} />,
      label: "Phone",
      value: "+91 7020587907",
      link: "tel:+917020587907",
      color: "#7bda57",
    },
    {
      icon: <EmailIcon sx={{ fontSize: 24, color: "#ffffff" }} />,
      label: "Email",
      value: "keenray.energies@gmail.com",
      link: "mailto:keenray.energies@gmail.com",
      color: "#7bda57",
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 24, color: "#ffffff" }} />,
      label: "Location",
      value: "Amravati, India",
      link: "#",
      color: "#7bda57",
    },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        right: 0,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1000,
      }}
    >
      <Stack spacing={{ xs: 1, sm: 1.5, md: 2 }} sx={{ alignItems: "flex-end", pr: 0 }}>
        {contactItems.map((item, index) => (
          <Box
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            sx={{
              position: "relative",
            }}
          >
            {/* Main Icon Square */}
            <Paper
              elevation={hoveredIndex === index ? 8 : 2}
              component="a"
              href={item.link}
              sx={{
                width: { xs: 44, sm: 50, md: 60 },
                height: { xs: 44, sm: 50, md: 60 },
                borderRadius: { xs: "8px 0 0 8px", md: "12px 0 0 12px" },
                backgroundColor: item.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: hoveredIndex === index 
                  ? "0 8px 24px rgba(123,218,87,0.4)" 
                  : "0 4px 12px rgba(0,0,0,0.15)",
                textDecoration: "none",
                position: "relative",
                zIndex: 2,
                transform: hoveredIndex === index ? "translateX(-180px)" : "translateX(0)",
                ...(hoveredIndex === index && {
                  "@media (min-width: 600px)": {
                    transform: "translateX(-200px)",
                  },
                  "@media (min-width: 900px)": {
                    transform: "translateX(-220px)",
                  },
                }),
                opacity: hoveredIndex === index ? 0 : 0.85,
                visibility: hoveredIndex === index ? "hidden" : "visible",
                backdropFilter: "blur(4px)",
                "&:hover": {
                  backgroundColor: "#68c54b",
                  opacity: 1,
                },
                "& svg": {
                  fontSize: { xs: 18, sm: 20, md: 24 },
                },
              }}
            >
              {item.icon}
            </Paper>

            {/* Expanded Card */}
            <Paper
              elevation={8}
              sx={{
                position: "absolute",
                right: { xs: 44, sm: 50, md: 60 },
                top: "50%",
                transform: hoveredIndex === index 
                  ? "translateY(-50%) translateX(0)" 
                  : "translateY(-50%) translateX(44px)",
                ...(hoveredIndex !== index && {
                  "@media (min-width: 600px)": {
                    transform: "translateY(-50%) translateX(50px)",
                  },
                  "@media (min-width: 900px)": {
                    transform: "translateY(-50%) translateX(60px)",
                  },
                }),
                width: hoveredIndex === index ? { xs: 180, sm: 200, md: 220 } : 0,
                height: hoveredIndex === index ? "auto" : 0,
                p: hoveredIndex === index ? { xs: 2, sm: 2.5, md: 2.5 } : 0,
                borderRadius: { xs: 2, md: 3 },
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
                opacity: hoveredIndex === index ? 1 : 0,
                visibility: hoveredIndex === index ? "visible" : "hidden",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                pointerEvents: hoveredIndex === index ? "auto" : "none",
                border: "2px solid rgba(123,218,87,0.2)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                overflow: "hidden",
                whiteSpace: "nowrap",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  right: -10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 0,
                  height: 0,
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderLeft: "10px solid #ffffff",
                  filter: "drop-shadow(2px 0 2px rgba(0,0,0,0.1))",
                  transition: "opacity 0.3s ease 0.1s",
                  opacity: hoveredIndex === index ? 1 : 0,
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  right: -12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 0,
                  height: 0,
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderLeft: "10px solid rgba(123,218,87,0.2)",
                  transition: "opacity 0.3s ease 0.1s",
                  opacity: hoveredIndex === index ? 1 : 0,
                },
              }}
              >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box
                  sx={{
                    width: { xs: 32, sm: 36, md: 40 },
                    height: { xs: 32, sm: 36, md: 40 },
                    borderRadius: 1.5,
                    backgroundColor: item.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Box sx={{ color: "#ffffff", display: "flex", "& svg": { fontSize: { xs: 16, sm: 18, md: 24 } } }}>
                    {item.icon}
                  </Box>
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "10px", sm: "10px", md: "11px" },
                      fontWeight: 700,
                      color: "#7bda57",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      mb: 0.5,
                      lineHeight: 1.2,
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "13px", sm: "14px", md: "15px" },
                      fontWeight: 600,
                      color: "#1d1d1f",
                      lineHeight: 1.4,
                      wordBreak: "break-word",
                      whiteSpace: "normal",     // 👈 allows wrapping
    maxWidth: "100%", 
                    }}
                  >
                    {item.value}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

