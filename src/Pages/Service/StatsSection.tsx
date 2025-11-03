import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SpeedIcon from "@mui/icons-material/Speed";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SupportIcon from "@mui/icons-material/Support";

const stats = [
  {
    icon: (
      <TrendingUpIcon
        sx={{ fontSize: { xs: 36, sm: 42, md: 48 }, color: "#7bda57" }}
      />
    ),
    value: "500+",
    label: "Projects Completed",
    description: "Successful installations across India",
  },
  {
    icon: (
      <SpeedIcon
        sx={{ fontSize: { xs: 36, sm: 42, md: 48 }, color: "#7bda57" }}
      />
    ),
    value: "98%",
    label: "Efficiency Rate",
    description: "High-performance solar systems",
  },
  {
    icon: (
      <WorkspacePremiumIcon
        sx={{ fontSize: { xs: 36, sm: 42, md: 48 }, color: "#7bda57" }}
      />
    ),
    value: "25+",
    label: "Years Experience",
    description: "Trusted solar expertise",
  },
  {
    icon: (
      <SupportIcon
        sx={{ fontSize: { xs: 36, sm: 42, md: 48 }, color: "#7bda57" }}
      />
    ),
    value: "24/7",
    label: "Support Available",
    description: "Round-the-clock assistance",
  },
];

export default function StatsSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F7",
        py: { xs: 4, sm: 6, md: 8, lg: 10 },
        px: { xs: 2, sm: 3 },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, #7bda57, transparent)",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {/* --- Heading --- */}
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: 800,
            color: "#1d1d1f",
            mb: { xs: 1, sm: 1.5 },
            fontSize: { xs: "22px", sm: "26px", md: "30px", lg: "34px" },
            lineHeight: 1.3,
            px: { xs: 1, sm: 0 },
          }}
        >
          Our Achievements in
          <Box component="span" sx={{ color: "#7bda57" }}>
            {" "}
            Numbers
          </Box>
        </Typography>

        {/* --- Divider line --- */}
        <Box
          sx={{
            width: { xs: 60, sm: 80, md: 90 },
            height: { xs: 3, sm: 3.5, md: 4 },
            borderRadius: 2,
            background: "linear-gradient(90deg, #7bda57, #68c54b)",
            mx: "auto",
            mb: { xs: 3, sm: 4, md: 5 },
          }}
        />

        {/* --- Stats Grid --- */}
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 4 }}
          justifyContent="center"
          alignItems="stretch"
        >
          {stats.map((stat, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              sx={{ display: "flex" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{ flexGrow: 1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 2.2, sm: 3, md: 3.5 },
                    borderRadius: { xs: 3, sm: 3.5, md: 4 },
                    backgroundColor: "#fff",
                    border: "1.5px solid rgba(123,218,87,0.2)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    flexGrow: 1,
                    transition: "all 0.4s ease",
                    "&:hover": {
                      transform: "translateY(-5px) scale(1.03)",
                      boxShadow:
                        "0 12px 35px rgba(123,218,87,0.25), 0 0 0 1px rgba(123,218,87,0.1)",
                      borderColor: "#7bda57",
                    },
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                      delay: index * 0.3,
                    }}
                  >
                    <Box
                      sx={{
                        mb: { xs: 1.5, sm: 2 },
                        p: { xs: 1.3, sm: 1.8 },
                        borderRadius: { xs: 2, sm: 3 },
                        backgroundColor: "rgba(123,218,87,0.1)",
                        display: "inline-flex",
                      }}
                    >
                      {stat.icon}
                    </Box>
                  </motion.div>

                  <Typography
                    className="stat-value"
                    sx={{
                      fontWeight: 900,
                      fontSize: {
                        xs: "26px",
                        sm: "30px",
                        md: "36px",
                        lg: "40px",
                      },
                      mb: { xs: 0.5, sm: 0.8 },
                      background:
                        "linear-gradient(135deg, #1d1d1f 0%, #4a4a4a 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      transition: "color 0.3s ease, transform 0.3s ease",
                    }}
                  >
                    {stat.value}
                  </Typography>

                  <Typography
                    sx={{
                      fontWeight: 800,
                      color: "#1d1d1f",
                      mb: { xs: 0.5, sm: 0.8 },
                      fontSize: { xs: "15px", sm: "16px", md: "18px" },
                      lineHeight: 1.3,
                    }}
                  >
                    {stat.label}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: "12px", sm: "13px", md: "14px" },
                      color: "#6b6b6b",
                      lineHeight: { xs: 1.4, sm: 1.5 },
                      maxWidth: { xs: "95%", sm: "90%" },
                    }}
                  >
                    {stat.description}
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
