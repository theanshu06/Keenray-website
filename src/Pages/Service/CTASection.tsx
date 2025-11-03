import { Box, Container, Typography, Button, Paper } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CallIcon from "@mui/icons-material/Call";

export default function CTASection() {
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
                bottom: -50,
                left: -50,
                width: 200,
                height: 200,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(123,218,87,0.15), transparent)",
                filter: "blur(20px)"
              }
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                color: "#1d1d1f",
                mb: 2,
                fontSize: { xs: "28px", sm: "32px", md: "40px" },
                position: "relative",
                zIndex: 1
              }}
            >
              Ready to Go
              <Box component="span" sx={{ color: "#7bda57" }}> Solar?</Box>
            </Typography>
            
            <Box
              sx={{
                width: 90,
                height: 4,
                borderRadius: 2,
                background: "linear-gradient(90deg, #7bda57, #68c54b)",
                mx: "auto",
                mb: 2,
                position: "relative",
                zIndex: 1
              }}
            />
            
            <Typography
              sx={{
                fontSize: { xs: "15px", sm: "17px", md: "19px" },
                color: "#4a4a4a",
                mb: 4,
                maxWidth: 700,
                mx: "auto",
                lineHeight: 1.7,
                position: "relative",
                zIndex: 1
              }}
            >
              Start your solar journey today. Get a free consultation and discover how much you can save with our premium solar solutions.
            </Typography>
            
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                flexWrap: "wrap",
                position: "relative",
                zIndex: 1
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    background: "linear-gradient(135deg, #1d1d1f 0%, #2c2c2c 35%, #7bda57 80%)",
                    color: "#ffffff",
                    fontWeight: 800,
                    textTransform: "none",
                    fontSize: { xs: "15px", sm: "16px" },
                    px: { xs: 3, md: 4 },
                    py: { xs: 1.4, md: 1.6 },
                    borderRadius: "12px",
                    boxShadow: "0 12px 30px rgba(123,218,87,0.4)",
                    "&:hover": {
                      boxShadow: "0 16px 40px rgba(123,218,87,0.5)",
                      filter: "brightness(1.05)"
                    }
                  }}
                >
                  Get Free Quote
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outlined"
                  startIcon={<CallIcon />}
                  href="tel:+919876543210"
                  sx={{
                    color: "#1d1d1f",
                    borderColor: "#1d1d1f",
                    fontWeight: 800,
                    textTransform: "none",
                    fontSize: { xs: "15px", sm: "16px" },
                    px: { xs: 3, md: 4 },
                    py: { xs: 1.4, md: 1.6 },
                    borderRadius: "12px",
                    borderWidth: "2px",
                    "&:hover": {
                      borderColor: "#7bda57",
                      color: "#7bda57",
                      backgroundColor: "rgba(123,218,87,0.05)",
                      borderWidth: "2px"
                    }
                  }}
                >
                  Call Us Now
                </Button>
              </motion.div>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}
