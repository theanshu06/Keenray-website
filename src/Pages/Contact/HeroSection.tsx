import { Box, Container, Typography, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function ContactHeroSection() {

  return (
    <Box sx={{
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #F5F5F7 0%, rgba(123,218,87,0.03) 50%, #F5F5F7 100%)',
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: { xs: "25vh",sm:"30vh", md: "30vh" },
      py: { xs:1, md: 4 },
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
                mb: 3,
                lineHeight: 1.7
              }}>
                Ready to go solar? Let's discuss your energy needs and create a customized solution for you.
              </Typography>
            </motion.div>

            {/* Down Arrow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <IconButton
                    onClick={() => {
                      const formSection = document.getElementById('contact-form');
                      if (formSection) {
                        formSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    sx={{
                      color: "#7bda57",
                      backgroundColor: "rgba(123,218,87,0.1)",
                      "&:hover": {
                        backgroundColor: "rgba(123,218,87,0.2)",
                        transform: "scale(1.1)"
                      },
                      transition: "all 0.3s ease"
                    }}
                  >
                    <KeyboardArrowDownIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />
                  </IconButton>
                </motion.div>
              </Box>
            </motion.div>

            {/* <Stack 
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
            </Stack> */}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

