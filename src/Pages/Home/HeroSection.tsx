import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F7",
        pt: { xs: 3, sm: 8, md: 10 },
        pb: { xs: 6, sm: 12, md: 14 },
        px: { xs: 2.5, sm: 4, md: 8 },
        overflow: "hidden",
      }}
    >
      <Grid
        container
        spacing={{ xs: 3, sm: 4, md: 6 }}
        alignItems="stretch"
        justifyContent="space-between"
        sx={{
          flexWrap: { xs: "wrap", sm: "nowrap" },
        }}
      >
        {/* LEFT : TEXT */}
        <Grid
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: { xs: "center", sm: "left" },
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
                fontSize: { xs: "32px", sm: "36px", md: "48px", lg: "54px" },
                fontWeight: 700,
                color: "#1d1d1f",
                lineHeight: { xs: 1.2, sm: 1.15 },
                mb: { xs: 2.5, sm: 2 },
                px: { xs: 0.5, sm: 0 },
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
                fontSize: { xs: "15px", sm: "16px", md: "18px" },
                color: "#4a4a4a",
                maxWidth: { xs: "100%", sm: 520 },
                mb: { xs: 3.5, sm: 4 },
                mx: { xs: "auto", sm: 0 },
                lineHeight: { xs: 1.7, sm: 1.6 },
                px: { xs: 1, sm: 0 },
              }}
            >
              At Keenray Energies, we believe every rooftop can generate power and every step toward solar takes us closer to a sustainable future.
            </Typography>

            <Box sx={{ display: "flex", justifyContent: { xs: "center", sm: "flex-start" } }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#7bda57",
                  color: "#ffffff",
                  textTransform: "none",
                  fontSize: { xs: "16px", sm: "16px", md: "17px" },
                  fontWeight: { xs: 700, sm: 600 },
                  px: { xs: 4, sm: 4 },
                  py: { xs: 1.6, sm: 1.6 },
                  borderRadius: "12px",
                  boxShadow: "0px 6px 18px rgba(123,218,87,0.35)",
                  width: { xs: "100%", sm: "auto" },
                  maxWidth: { xs: "320px", sm: "none" },
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
            </Box>
          </motion.div>
        </Grid>

        {/* RIGHT : IMAGE */}
        <Grid
          size={{ xs: 12, sm: 6 }}
          sx={{
            textAlign: { xs: "center", sm: "right" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: { xs: 3, sm: 0 },
          }}
        >
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            sx={{ width: "100%", display: "flex", justifyContent: { xs: "center", sm: "flex-end" } }}
          >
            <Box
              component="img"
              src="/images/solar-house.jpeg"
              alt="Solar Panel House"
              sx={{
                width: { xs: "100%", sm: "85%", md: "90%" },
                maxWidth: { xs: "100%", sm: "440px", md: "520px" },
                height: { xs: "280px", sm: "100%", md: "auto" },
                maxHeight: { xs: "280px", sm: "100%", md: "480px" },
                borderRadius: { xs: "12px", sm: "16px" },
                objectFit: "cover",
                boxShadow: { xs: "0px 8px 20px rgba(0,0,0,0.12)", sm: "0px 12px 30px rgba(0,0,0,0.15)" },
                transition: "transform 0.4s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
