import { Box, Container, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";

export default function ProjectsHeroSection() {
  const stats = [
    { number: "500+", label: "Projects" },
    { number: "50MW+", label: "Capacity" },
    { number: "98%", label: "Satisfaction" },
  ];

  return (
    <Box sx={{
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(180deg, #1d1d1f 0%, #2c2c2c 100%)',
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: { xs: "35vh", md: "40vh" },
      py: { xs: 5, md: 7 },
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(123,218,87,0.15) 1px, transparent 0)',
        backgroundSize: '40px 40px',
        opacity: 0.3
      }
    }}>
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", color: "#ffffff" }}>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "36px", sm: "48px", md: "64px", lg: "72px" },
                fontWeight: 900,
                color: "#ffffff",
                lineHeight: 1.1,
                mb: 2,
                letterSpacing: "-2px",
                textShadow: "0 4px 20px rgba(123,218,87,0.3)"
              }}
            >
              Our{" "}
              <Box component="span" sx={{ 
                color: "#7bda57",
                position: "relative",
                display: "inline-block",
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 8,
                  left: 0,
                  right: 0,
                  height: '8px',
                  background: 'linear-gradient(90deg, transparent, rgba(123,218,87,0.4), transparent)',
                  borderRadius: '4px',
                  animation: 'pulse 2s ease-in-out infinite'
                },
                '@keyframes pulse': {
                  '0%, 100%': { opacity: 0.3 },
                  '50%': { opacity: 0.8 }
                }
              }}>
                Projects
              </Box>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          >
            <Typography sx={{ 
              fontSize: { xs: "15px", sm: "17px" }, 
              color: "rgba(255,255,255,0.8)", 
              maxWidth: 700, 
              mx: "auto", 
              mb: 4,
              lineHeight: 1.6
            }}>
              Discover our successful solar installations transforming energy consumption across India.
            </Typography>
          </motion.div>

          <Stack 
            direction={{ xs: "column", sm: "row" }} 
            spacing={3} 
            sx={{ 
              justifyContent: "center", 
              alignItems: "center",
              mt: 4,
              display: { xs: "none", sm: "flex" } 
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Box sx={{
                  textAlign: "center",
                  px: 3,
                  py: 2,
                  borderRadius: 2,
                  backgroundColor: "rgba(123,218,87,0.1)",
                  border: "1px solid rgba(123,218,87,0.3)",
                  backdropFilter: "blur(10px)",
                  minWidth: { xs: "100%", sm: "140px" }
                }}>
                  <Typography sx={{
                    fontSize: { xs: "28px", md: "36px" },
                    fontWeight: 900,
                    color: "#7bda57",
                    mb: 0.5
                  }}>
                    {stat.number}
                  </Typography>
                  <Typography sx={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.7)",
                    textTransform: "uppercase",
                    letterSpacing: "1px"
                  }}>
                    {stat.label}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

