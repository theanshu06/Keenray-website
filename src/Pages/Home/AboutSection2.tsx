import { Box, Grid, Typography, Button, Stack, Paper } from "@mui/material";
import { motion } from "framer-motion";

export default function AboutSection2() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, #F5F5F7 0%, #ffffff 100%)",
        py: { xs: 8, sm: 10, md: 12 },
        px: { xs: 2, sm: 4, md: 8 },
      }}
    >
      {/* Decorative floating background circles */}
      <Box
        sx={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "250px",
          height: "250px",
          background: "rgba(123,218,87,0.15)",
          borderRadius: "50%",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: "200px",
          height: "200px",
          background: "rgba(123,218,87,0.12)",
          borderRadius: "50%",
          filter: "blur(50px)",
          zIndex: 0,
        }}
      />

      <Grid
        container
        spacing={{ xs: 6, md: 10 }}
        alignItems="center"
        justifyContent="space-between"
        sx={{ position: "relative", zIndex: 1 }}
      >
        {/* === LEFT SIDE - CONTENT === */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "30px", sm: "38px", md: "48px" },
                lineHeight: 1.2,
                color: "#1d1d1f",
                mb: 2,
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
                color: "#4a4a4a",
                fontSize: { xs: "15px", sm: "17px", md: "18px" },
                lineHeight: 1.7,
                maxWidth: "550px",
                mb: 4,
              }}
            >
              At <strong>Keenray</strong>, we redefine how sustainable energy empowers modern living. 
              With over 25 years of industry expertise, we specialize in building efficient, 
              affordable, and future-ready solar solutions for homes and businesses alike.
            </Typography>

            {/* Stats cards */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 3 }}
              sx={{ mb: 4 }}
            >
              {[
                { number: "25+", label: "Years Experience" },
                { number: "600+", label: "Projects Delivered" },
                { number: "98%", label: "Client Satisfaction" },
              ].map((stat, i) => (
                <Paper
                  key={i}
                  elevation={3}
                  sx={{
                    px: 3,
                    py: 2,
                    borderRadius: "16px",
                    background: "#fff",
                    border: "1px solid rgba(0,0,0,0.05)",
                    textAlign: "center",
                    flex: 1,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 25px rgba(123,218,87,0.25)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#7bda57",
                      fontWeight: 800,
                      fontSize: { xs: "22px", sm: "26px", md: "30px" },
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#1d1d1f",
                      fontSize: { xs: "12px", sm: "13px", md: "14px" },
                      textTransform: "uppercase",
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Paper>
              ))}
            </Stack>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#7bda57",
                color: "#ffffff",
                textTransform: "none",
                fontSize: { xs: "15px", sm: "16px", md: "17px" },
                fontWeight: 600,
                px: { xs: 3, sm: 4 },
                py: { xs: 1.3, sm: 1.5 },
                borderRadius: "12px",
                boxShadow: "0px 8px 24px rgba(123,218,87,0.35)",
                "&:hover": {
                  backgroundColor: "#68c54b",
                  boxShadow: "0px 10px 28px rgba(123,218,87,0.45)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Explore Our Journey
            </Button>
          </motion.div>
        </Grid>

        {/* === RIGHT SIDE - IMAGE / VISUAL === */}
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            style={{ position: "relative" }}
          >
            {/* Floating overlay card */}
            <Box
              sx={{
                position: "absolute",
                top: "12%",
                right: "10%",
                background: "rgba(255,255,255,0.9)",
                borderRadius: "12px",
                px: 2,
                py: 1.5,
                boxShadow: "0px 6px 18px rgba(0,0,0,0.1)",
                display: { xs: "none", sm: "flex" },
                flexDirection: "column",
                alignItems: "center",
                zIndex: 2,
              }}
            >
              <Typography sx={{ fontWeight: 700, color: "#1d1d1f" }}>
                ☀️ Solar Power
              </Typography>
              <Typography sx={{ fontSize: "12px", color: "#4a4a4a" }}>
                Clean • Smart • Sustainable
              </Typography>
            </Box>

            {/* Main Image */}
            <Box
              component="img"
              src="/images/solar-house.jpeg"
              alt="Keenray Solar Installation"
              sx={{
                width: { xs: "100%", sm: "85%", md: "90%" },
                maxWidth: "550px",
                borderRadius: "20px",
                objectFit: "cover",
                boxShadow: "0px 16px 40px rgba(0,0,0,0.15)",
                transition: "transform 0.5s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}
