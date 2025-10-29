import { Box, Grid, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(20px)",
        pt: { xs: 4, sm: 8, md: 10 },
        pb: { xs: 10, sm: 12, md: 14 },
        px: { xs: 2, sm: 4, md: 8 },
        overflow: "hidden",
      }}
    >
      <Grid
        container
        spacing={{ xs: 4, md: 6 }}
        alignItems="stretch"
        justifyContent="space-between"
        sx={{
          flexWrap: { xs: "wrap", sm: "nowrap" },
          "@media (max-width:500px)": {
            flexDirection: "column",
            textAlign: "center",
          },
        }}
      >
        {/* RIGHT : ABOUT CONTENT (shows first on phone) */}
        <Grid
          item
          xs={12}
          sm={6}
          order={{ xs: 1, sm: 2 }} // 👈 text first on mobile, second on larger screens
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ width: "100%" }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "28px", sm: "36px", md: "48px", lg: "54px" },
                fontWeight: 700,
                color: "#1d1d1f",
                lineHeight: 1.15,
                mb: 2,
                background: "linear-gradient(135deg, #1d1d1f 0%, #4a4a4a 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
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
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
                color: "#4a4a4a",
                maxWidth: 520,
                mb: 3,
                mx: { xs: "auto", sm: 0 },
                lineHeight: 1.6,
              }}
            >
              With over 25 years of experience in renewable energy solutions,
              Keenray has been at the forefront of sustainable technology
              innovation. Our dedicated team of experts combines technical
              excellence with environmental responsibility to deliver
              cutting-edge solar solutions.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
                color: "#4a4a4a",
                maxWidth: 520,
                mb: 4,
                mx: { xs: "auto", sm: 0 },
                lineHeight: 1.6,
              }}
            >
              We believe in empowering communities through clean energy,
              reducing carbon footprints, and creating a sustainable future for
              generations to come. Our commitment to quality and customer
              satisfaction has made us a trusted partner in the renewable energy
              industry.
            </Typography>

            {/* Key Stats */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: 2, sm: 4 },
                mb: 4,
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              {[
                { number: "500+", label: "Projects Completed" },
                { number: "25+", label: "Years Experience" },
                { number: "98%", label: "Customer Satisfaction" },
              ].map((stat, index) => (
                <Box key={index} sx={{ textAlign: { xs: "center", sm: "left" } }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "24px", sm: "28px", md: "32px" },
                      fontWeight: 800,
                      color: "#7bda57",
                      lineHeight: 1,
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
                Learn More About Us
              </Button>
            </Box>
          </motion.div>
        </Grid>

        {/* LEFT : TEAM IMAGE (shows after text on phone) */}
        <Grid
          item
          xs={12}
          sm={6}
          order={{ xs: 2, sm: 1 }} // 👈 image second on mobile, first on larger screens
          sx={{
            textAlign: { xs: "center", sm: "left" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "@media (max-width:500px)": {
              mt: 4,
            },
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ width: "100%" }}
          >
            <Box
              component="img"
              src="/images/solar-house.jpeg"
              alt="Our Team"
              sx={{
                width: { xs: "90%", sm: "85%", md: "90%" },
                maxWidth: { xs: "340px", sm: "440px", md: "520px" },
                height: "100%",
                maxHeight: { xs: "auto", sm: "100%", md: "480px" },
                borderRadius: "16px",
                objectFit: "cover",
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
