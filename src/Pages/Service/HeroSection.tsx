import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import EngineeringIcon from "@mui/icons-material/Engineering";

export default function ServiceHeroSection() {
  const services = [
    { icon: <HomeIcon sx={{ fontSize: 32 }} />, label: "Residential" },
    { icon: <BusinessIcon sx={{ fontSize: 32 }} />, label: "Commercial" },
    { icon: <SolarPowerIcon sx={{ fontSize: 32 }} />, label: "Industrial" },
    { icon: <EngineeringIcon sx={{ fontSize: 32 }} />, label: "Installation" },
  ];

  return (
    <Box sx={{
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #F5F5F7 0%, #ffffff 50%, #F5F5F7 100%)',
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: { xs: "30vh", md: "35vh" },
      py: { xs: 4, md: 6 },
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
        <Box sx={{ textAlign: "center", mb: 4 }}>
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
              letterSpacing: "-1px"
            }}
          >
            Our Services
          </Typography>
          <Typography sx={{ fontSize: { xs: "14px", sm: "16px" }, color: "#6b6b6b", maxWidth: 600, mx: "auto", mb: 4 }}>
            Comprehensive solar solutions for homes, businesses, and communities.
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          {services.map((service, index) => (
            <Grid size={{ xs: 6, sm: 3 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    textAlign: "center",
                    borderRadius: 3,
                    backgroundColor: "rgba(255,255,255,0.8)",
                    border: "1px solid rgba(123,218,87,0.2)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 32px rgba(123,218,87,0.25)",
                      borderColor: "#7bda57",
                      backgroundColor: "rgba(123,218,87,0.05)",
                      "& .service-icon": {
                        transform: "scale(1.2) rotate(5deg)",
                        color: "#7bda57"
                      }
                    }
                  }}
                >
                  <Box
                    className="service-icon"
                    sx={{
                      color: "#1d1d1f",
                      mb: 1.5,
                      transition: "all 0.3s ease",
                      display: "flex",
                      justifyContent: "center"
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#1d1d1f",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px"
                    }}
                  >
                    {service.label}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
