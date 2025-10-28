import { Box, Grid, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    
    <Box 
      sx={{
        backgroundColor: "#F5F5F7",
        pt: { xs: 4, sm: 8, md: 10 },
        pb: { xs: 10, sm: 12, md: 14 },
        px: { xs: 2, sm: 4, md: 8 }
      }}
    >
      <Grid
        container
        spacing={{ xs: 4, md: 6 }}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* LEFT : TEXT */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "30px", sm: "38px", md: "50px" },
                fontWeight: 700,
                color: "#1d1d1f",
                lineHeight: 1.15,
                mb: 2
              }}
            >
              Sustainable Energy
              <br />
              <Box component="span" sx={{ color: "#7bda57" }}>
                Solutions
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "15px", md: "18px" },
                color: "#4a4a4a",
                maxWidth: 520,
                mb: 4
              }}
            >
              Power your home or business with clean, renewable, and cost-effective solar systems designed for long-term performance.
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#7bda57",
                color: "#ffffff",
                textTransform: "none",
                fontSize: "17px",
                fontWeight: 600,
                px: 4,
                py: 1.6,
                borderRadius: "10px",
                boxShadow: "0px 6px 18px rgba(123,218,87,0.35)",
                "&:hover": {
                  backgroundColor: "#68c54b",
                  boxShadow: "0px 8px 24px rgba(123,218,87,0.45)",
                  transform: "translateY(-2px)"
                },
                transition: "all 0.3s ease"
              }}
            >
              Get a Free Site Visit
            </Button>
          </motion.div>
        </Grid>

        {/* RIGHT : IMAGE */}
        <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "right" } }}>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <Box
              component="img"
              src="/images/solar-house.jpeg" // Update path if needed
              alt="Solar Panel House"
              sx={{
                width: { xs: "100%", sm: "80%", md: "90%" },
                maxWidth: "540px",
                borderRadius: "16px",
                objectFit: "cover",
                boxShadow: "0px 12px 30px rgba(0,0,0,0.15)",
                transition: "transform 0.4s ease",
                "&:hover": {
                  transform: "scale(1.02)"
                }
              }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}
