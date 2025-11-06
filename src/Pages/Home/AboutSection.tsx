import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import { Container } from "@mui/material";

export default function AboutSection() {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(20px)",
        pt: { xs: 5, sm: 8, md: 10 },
        pb: { xs: 2, sm: 3, md: 3},
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
      <Grid
        container
        spacing={{ xs: 3, sm: 4, md: 6 }}
        alignItems="stretch"
        justifyContent="space-between"
        sx={{
          flexWrap: { xs: "wrap", sm: "nowrap" },
        }}
      >
        {/* RIGHT : ABOUT CONTENT (shows first on phone) */}
        <Grid size={{ xs: 12, sm: 6 }} sx={{ order: { xs: 1, sm: 2 }, display: "flex", alignItems: "center", textAlign: { xs: "center", sm: "left" } }}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ width: "100%" }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "32px", sm: "36px", md: "48px", lg: "54px" },
                fontWeight: 700,
                color: "#1d1d1f",
                lineHeight: { xs: 1.2, sm: 1.15 },
                mb: { xs: 2.5, sm: 2 },
                background: "linear-gradient(135deg, #1d1d1f 0%, #4a4a4a 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                px: { xs: 0.5, sm: 0 },
              }}
            >
              About{" "}
              <Box component="span" sx={{ color: "#7bda57" }}>
                Keenray
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "15px", sm: "16px", md: "18px" },
                color: "#4a4a4a",
                maxWidth: { xs: "100%", sm: 520 },
                mb: { xs: 2.5, sm: 3 },
                mx: { xs: "auto", sm: 0 },
                lineHeight: { xs: 1.7, sm: 1.6 },
                px: { xs: 0.5, sm: 0 },
              }}
            >
              Keenray Energies Pvt. Ltd. is a leading solar energy company in Amravati, empowering homes, businesses, and industries with reliable rooftop solar installations and sustainable energy solutions.
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
                px: { xs: 0.5, sm: 0 },
              }}
            >
              Founded by Mr. Suraj Yeole and Mr. Yogesh Sable, our mission is simple — to make clean, affordable, and efficient solar power accessible to everyone. From design to installation and maintenance, we deliver end-to-end solar solutions that help reduce electricity bills and promote a greener tomorrow.

            </Typography>

            {/* Key Stats */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", sm: "row" },
                flexWrap: { xs: "wrap", sm: "nowrap" },
                gap: { xs: 3, sm: 4 },
                mb: { xs: 3.5, sm: 4 },
                justifyContent: { xs: "center", sm: "flex-start" },
                px: { xs: 1, sm: 0 },
              }}
            >
              {[
                { number: "500+", label: "Projects Completed" },
                { number: "25+", label: "Years Experience" },
                { number: "98%", label: "Customer Satisfaction" },
              ].map((stat, index) => (
                <Box key={index} sx={{ textAlign: { xs: "center", sm: "left" }, flex: { xs: "1 1 calc(33.333% - 16px)", sm: "none" }, minWidth: { xs: "80px", sm: "auto" } }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "26px", sm: "28px", md: "32px" },
                      fontWeight: 800,
                      color: "#7bda57",
                      lineHeight: { xs: 1.2, sm: 1 },
                      mb: { xs: 0.5, sm: 0 },
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "12px", sm: "13px", md: "14px" },
                      color: "#8a8a8a",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      lineHeight: { xs: 1.3, sm: 1.4 },
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
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
                Learn More About Us
              </Button>
            </Box>
          </motion.div>
        </Grid>

        {/* LEFT : TEAM IMAGE (shows after text on phone) */}
        <Grid size={{ xs: 12, sm: 6 }} sx={{ order: { xs: 2, sm: 1 }, textAlign: { xs: "center", sm: "left" }, display: "flex", alignItems: "center", justifyContent: "center", mt: { xs:0, sm: 0 } }}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ width: "100%", display: "flex", justifyContent: { xs: "center", sm: "flex-start" } }}
          >
            <Box
              component="img"
              src="/images/solar-house.jpeg"
              alt="Our Team"
              sx={{
                width: { xs: "100%", sm: "85%", md: "90%" },
                maxWidth: { xs: "100%", sm: "440px", md: "520px" },
                height: { xs: "280px", sm: "400px", md: "450px" },
                maxHeight: { xs: "280px", sm: "100%", md: "520px" },
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
      </Container>
    </Box>
  );
}
