import { Box, Container, Typography, Stack, Chip } from "@mui/material";
import { motion } from "framer-motion";
import SpeedIcon from "@mui/icons-material/Speed";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

export default function ContactHeroSection() {
  const features = [
    { 
      icon: <SpeedIcon sx={{ fontSize: 32 }} />, 
      title: "24h Response", 
      description: "Quick reply guarantee"
    },
    { 
      icon: <VerifiedUserIcon sx={{ fontSize: 32 }} />, 
      title: "Expert Team", 
      description: "Certified professionals"
    },
    { 
      icon: <SupportAgentIcon sx={{ fontSize: 32 }} />, 
      title: "Free Consultation", 
      description: "No obligation quotes"
    },
  ];

  return (
    <Box sx={{
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #F5F5F7 0%, rgba(123,218,87,0.03) 50%, #F5F5F7 100%)',
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: { xs: "40vh", md: "45vh" },
      py: { xs: 6, md: 8 },
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(123,218,87,0.08) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(123,218,87,0.06) 0%, transparent 50%)
        `,
      }
    }}>
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "36px", sm: "50px", md: "68px", lg: "80px" },
                  fontWeight: 900,
                  background: "linear-gradient(135deg, #1d1d1f 0%, #7bda57 50%, #1d1d1f 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundSize: "200% 200%",
                  animation: "gradientShift 4s ease infinite",
                  lineHeight: 1.1,
                  mb: 3,
                  letterSpacing: "-2px",
                  '@keyframes gradientShift': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' }
                  }
                }}
              >
                Get In Touch
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Typography sx={{ 
                fontSize: { xs: "16px", sm: "18px" }, 
                color: "#6b6b6b", 
                maxWidth: 700, 
                mx: "auto",
                mb: 4,
                lineHeight: 1.7
              }}>
                Ready to go solar? Let's discuss your energy needs and create a customized solution for you.
              </Typography>
            </motion.div>

            <Stack 
              direction={{ xs: "column", sm: "row" }} 
              spacing={2} 
              sx={{ 
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 2
              }}
            >
              <Chip 
                label="Free Quote" 
                sx={{ 
                  backgroundColor: "rgba(123,218,87,0.15)", 
                  color: "#1d1d1f",
                  fontWeight: 700,
                  fontSize: "13px",
                  height: "36px",
                  px: 1
                }} 
              />
              <Chip 
                label="Expert Consultation" 
                sx={{ 
                  backgroundColor: "rgba(123,218,87,0.15)", 
                  color: "#1d1d1f",
                  fontWeight: 700,
                  fontSize: "13px",
                  height: "36px",
                  px: 1
                }} 
              />
              <Chip 
                label="24/7 Support" 
                sx={{ 
                  backgroundColor: "rgba(123,218,87,0.15)", 
                  color: "#1d1d1f",
                  fontWeight: 700,
                  fontSize: "13px",
                  height: "36px",
                  px: 1
                }} 
              />
            </Stack>
          </Box>
        </motion.div>

        <Stack 
          direction={{ xs: "column", sm: "row" }} 
          spacing={3}
          sx={{ justifyContent: "center", alignItems: "stretch" }}
        >
          {features.map((feature, index) => (
            <Box
              key={index}
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
              sx={{ flex: 1, maxWidth: { xs: "100%", sm: "300px" } }}
            >
              <Box
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 4,
                  backgroundColor: "rgba(255,255,255,0.9)",
                  border: "2px solid rgba(123,218,87,0.2)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 20px 50px rgba(123,218,87,0.25)",
                    borderColor: "#7bda57",
                    backgroundColor: "rgba(123,218,87,0.05)",
                    "& .feature-icon": {
                      transform: "scale(1.2) rotate(10deg)",
                      color: "#7bda57"
                    }
                  }
                }}
              >
                <Box
                  className="feature-icon"
                  sx={{
                    color: "#1d1d1f",
                    mb: 2.5,
                    transition: "all 0.4s ease",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 800,
                    color: "#1d1d1f",
                    mb: 1,
                    textTransform: "uppercase",
                    letterSpacing: "1px"
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#6b6b6b",
                    fontWeight: 500,
                    lineHeight: 1.6
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

