import { Box, Grid, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F7",
        pt: { xs: 4, sm: 8, md: 10 },
        pb: { xs: 10, sm: 12, md: 14 },
        px: { xs: 2, sm: 4, md: 8 },
        overflow: "hidden",
      }}
    >
      <Grid
        container
        spacing={{ xs: 4, md: 6 }}
        alignItems="stretch" // 👈 ensures both columns align vertically
        justifyContent="space-between"
        sx={{
          flexWrap: { xs: "wrap", sm: "nowrap" }, // Stack only below 500px
          "@media (max-width:500px)": {
            flexDirection: "column",
            textAlign: "center",
          },
        }}
      >
        {/* LEFT : TEXT */}
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ width: "100%" }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "28px", sm: "36px", md: "48px", lg: "54px" },
                fontWeight: 700,
                color: "#1d1d1f",
                lineHeight: 1.15,
                mb: 2,
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
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
                color: "#4a4a4a",
                maxWidth: 520,
                mb: 4,
                mx: { xs: "auto", sm: 0 },
              }}
            >
              Power your home or business with clean, renewable, and cost-effective
              solar systems designed for long-term performance.
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#7bda57",
                color: "#ffffff",
                textTransform: "none",
                fontSize: { xs: "15px", sm: "16px", md: "17px" },
                fontWeight: 600,
                px: { xs: 3, sm: 4 },
                py: { xs: 1.4, sm: 1.6 },
                borderRadius: "10px",
                boxShadow: "0px 6px 18px rgba(123,218,87,0.35)",
                "&:hover": {
                  backgroundColor: "#68c54b",
                  boxShadow: "0px 8px 24px rgba(123,218,87,0.45)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Get a Free Site Visit
            </Button>
          </motion.div>
        </Grid>

        {/* RIGHT : IMAGE */}
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            textAlign: { xs: "center", sm: "right" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "@media (max-width:500px)": {
              mt: 4,
            },
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            style={{ width: "100%" }}
          >
            <Box
              component="img"
              src="/images/solar-house.jpeg"
              alt="Solar Panel House"
              sx={{
                width: { xs: "90%", sm: "85%", md: "90%" },
                maxWidth: { xs: "340px", sm: "440px", md: "520px" },
                height: "100%", // 👈 allows image to stretch with grid height
                maxHeight: { xs: "auto", sm: "100%", md: "480px" },
                borderRadius: "16px",
                objectFit: "cover", // keeps image clean
                boxShadow: "0px 12px 30px rgba(0,0,0,0.15)",
                transition: "transform 0.4s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}
