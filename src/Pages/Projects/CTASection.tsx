import { Box, Container, Typography, Button, Paper } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CallIcon from "@mui/icons-material/Call";

export default function ProjectsCTASection() {
  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 8, md: 12 },
        overflow: "hidden",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("/images/Solar-panel-footer.jpeg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll"
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              textAlign: "center",
              border: "2px solid rgba(123,218,87,0.3)",
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: -50,
                right: -50,
                width: 200,
                height: 200,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(123,218,87,0.15), transparent)",
                filter: "blur(20px)"
              },
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -60,
                left: -60,
                width: 220,
                height: 220,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(123,218,87,0.12), transparent)",
                filter: "blur(22px)"
              }
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 900,
                color: "#1d1d1f",
                mb: 2,
                fontSize: { xs: "28px", sm: "32px", md: "36px" },
                position: "relative",
                zIndex: 1
              }}
            >
              Ready to Start Your
              <Box component="span" sx={{ color: "#7bda57" }}> Project?</Box>
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "15px", sm: "16px", md: "18px" },
                color: "#4a4a4a",
                mb: 4,
                maxWidth: 600,
                mx: "auto",
                position: "relative",
                zIndex: 1,
                lineHeight: 1.6
              }}
            >
              Join hundreds of satisfied customers who've made the switch to clean, renewable solar energy.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap", position: "relative", zIndex: 1 }}>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                href="/contact"
                sx={{
                  background: "linear-gradient(135deg, #1d1d1f 0%, #2c2c2c 35%, #7bda57 80%)",
                  color: "#ffffff",
                  fontWeight: 800,
                  textTransform: "none",
                  borderRadius: "12px",
                  px: 4,
                  py: 1.5,
                  boxShadow: "0 10px 24px rgba(123,218,87,0.3)",
                  "&:hover": {
                    filter: "brightness(1.05)",
                    boxShadow: "0 14px 30px rgba(123,218,87,0.38)"
                  }
                }}
              >
                Get Free Quote
              </Button>
              <Button
                variant="outlined"
                startIcon={<CallIcon />}
                href="tel:+919876543210"
                sx={{
                  color: "#1d1d1f",
                  borderColor: "#1d1d1f",
                  borderWidth: 2,
                  fontWeight: 700,
                  textTransform: "none",
                  borderRadius: "12px",
                  px: 4,
                  py: 1.5,
                  "&:hover": {
                    borderColor: "#7bda57",
                    color: "#7bda57",
                    backgroundColor: "rgba(123,218,87,0.05)"
                  }
                }}
              >
                Call Us Now
              </Button>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}

