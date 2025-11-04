import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function OurTeamHeroSection() {
  return (
    <Box sx={{
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #F5F5F7 0%, #ffffff 50%, #F5F5F7 100%)',
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: { xs: "22vh", sm: "30vh", md: "35vh" },
      paddingTop: { xs: 1, sm: 2, md: 4 },
      py: { xs: 0, sm: 2, md: 4 },
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 30%, rgba(123,218,87,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(123,218,87,0.08) 0%, transparent 50%)',
      }
    }}>
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Typography
              sx={{
                fontSize: { xs: "18px", sm: "16px" },
                color: "#1d1d1f",
                fontWeight: { xs: 800, sm: 600 },
                mb: { xs: 2, sm: 1.5 },
                textTransform: "uppercase",
                letterSpacing: { xs: "2px", sm: "1px" },
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: { xs: -8, sm: -6 },
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: { xs: "60px", sm: "40px" },
                  height: { xs: "3px", sm: "2px" },
                  background: "linear-gradient(90deg, #7bda57, #68c54b)",
                  borderRadius: "2px",
                  display: { xs: "block", sm: "none" }
                }
              }}
            >
              Our Team
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "32px", sm: "42px", md: "56px", lg: "64px" },
                fontWeight: 900,
                background: "linear-gradient(135deg, #1d1d1f 0%, #7bda57 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1.2,
                mb: 2,
                letterSpacing: "-1px",
                display: { xs: "none", sm: "block" }
              }}
            >
              Founders who fuel our future
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          >
            <Typography sx={{ 
              fontSize: { xs: "14px", sm: "16px" }, 
              color: "#6b6b6b", 
              maxWidth: 700, 
              mx: "auto", 
              mb: { xs:0, sm: 4 },
              lineHeight: 1.6
            }}>
              Meet the visionary leaders driving Keenray Solar's mission to power India with clean, sustainable solar energy.
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

