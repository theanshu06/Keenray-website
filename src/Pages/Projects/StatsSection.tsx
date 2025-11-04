import { Box, Container, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const stats = [
  {
    icon: <TrendingUpIcon sx={{ fontSize: { xs: 32, md: 40 }, color: "#7bda57" }} />,
    value: "500+",
    label: "Projects Completed",
    description: "Successfully delivered installations"
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: { xs: 32, md: 40 }, color: "#7bda57" }} />,
    value: "98%",
    label: "Client Satisfaction",
    description: "Highly satisfied customers"
  },
  {
    icon: <CheckCircleIcon sx={{ fontSize: { xs: 32, md: 40 }, color: "#7bda57" }} />,
    value: "25+",
    label: "Cities Served",
    description: "Nationwide coverage"
  }
];

export default function ProjectsStatsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollLeft = container.scrollLeft;
          const cardWidth = 280 + 16; // card width + gap (280px card + 16px gap)
          
          // Calculate which card is currently most visible
          const centerPoint = scrollLeft + container.clientWidth / 2;
          let index = Math.round(centerPoint / cardWidth);
          
          // Ensure index stays within bounds
          index = Math.max(0, Math.min(index, stats.length - 1));
          
          setActiveIndex(index);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check
    handleScroll();

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const cardWidth = 280 + 16;
    container.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
  };

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
          background: "linear-gradient(90deg, transparent, #7bda57, transparent)"
        }
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: 800,
            color: "#1d1d1f",
            mb: { xs: 1, sm: 1.5 },
            fontSize: { xs: "22px", sm: "26px", md: "30px", lg: "34px" },
            lineHeight: 1.3,
            px: { xs: 1, sm: 0 }
          }}
        >
          Our Achievements in
          <Box component="span" sx={{ color: "#7bda57" }}>
            {" "}
            Numbers
          </Box>
        </Typography>

        <Box
          sx={{
            width: { xs: 60, sm: 80, md: 90 },
            height: { xs: 3, sm: 3.5, md: 4 },
            borderRadius: 2,
            background: "linear-gradient(90deg, #7bda57, #68c54b)",
            mx: "auto",
            mb: { xs: 3, sm: 4, md: 5 }
          }}
        />

        {/* --- Mobile Horizontal Scrollable Slider --- */}
        <Box
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        >
          <Box
            ref={scrollContainerRef}
            sx={{
              overflowX: "auto",
              overflowY: "hidden",
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(123,218,87,0.3) transparent",
              "&::-webkit-scrollbar": {
                height: "6px",
              },
              "&::-webkit-scrollbar-track": {
                background: "transparent",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "rgba(123,218,87,0.3)",
                borderRadius: "3px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                background: "rgba(123,218,87,0.5)",
              },
              pb: 2,
              mx: -2,
              px: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 2,
                width: "max-content",
                minWidth: "100%",
              }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ minWidth: "280px", flexShrink: 0 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2.5,
                      borderRadius: 3,
                      backgroundColor: "#fff",
                      border: "1.5px solid rgba(123,218,87,0.2)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      height: "100%",
                      transition: "all 0.3s ease",
                      "&:active": {
                        transform: "scale(0.98)",
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
                          mb: 1.5,
                          p: 1.2,
                          borderRadius: 2,
                          backgroundColor: "rgba(123,218,87,0.1)",
                          display: "inline-flex",
                        }}
                      >
                        {stat.icon}
                      </Box>
                    </motion.div>

                    <Typography
                      sx={{
                        fontWeight: 900,
                        fontSize: "24px",
                        mb: 0.5,
                        background:
                          "linear-gradient(135deg, #1d1d1f 0%, #4a4a4a 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {stat.value}
                    </Typography>

                    <Typography
                      sx={{
                        fontWeight: 800,
                        color: "#1d1d1f",
                        mb: 0.5,
                        fontSize: "14px",
                        lineHeight: 1.3,
                      }}
                    >
                      {stat.label}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#6b6b6b",
                        lineHeight: 1.4,
                      }}
                    >
                      {stat.description}
                    </Typography>
                  </Paper>
                </motion.div>
              ))}
            </Box>
          </Box>
          
          {/* Circular Dots Indicator */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1.5,
              mt: 3,
            }}
          >
            {stats.map((_, index) => (
              <Box
                key={index}
                onClick={() => scrollToIndex(index)}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: activeIndex === index ? "#7bda57" : "rgba(123,218,87,0.3)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  transform: activeIndex === index ? "scale(1.2)" : "scale(1)",
                  boxShadow: activeIndex === index ? "0 0 8px rgba(123,218,87,0.5)" : "none",
                  "&:hover": {
                    backgroundColor: activeIndex === index ? "#68c54b" : "rgba(123,218,87,0.5)",
                    transform: "scale(1.3)",
                  },
                }}
              />
            ))}
          </Box>
        </Box>

        {/* --- Desktop/Tablet Grid --- */}
        <Box
          sx={{
            display: { xs: "none", sm: "grid" },
            gridTemplateColumns: { sm: "repeat(3, 1fr)" },
            gap: { sm: 3, md: 4 },
            maxWidth: 900,
            mx: "auto"
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1], delay: (index % 3) * 0.15 }}
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
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "translateY(-5px) scale(1.03)",
                    boxShadow:
                      "0 12px 35px rgba(123,218,87,0.25), 0 0 0 1px rgba(123,218,87,0.1)",
                    borderColor: "#7bda57"
                  }
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    delay: index * 0.3
                  }}
                >
                  <Box
                    sx={{
                      mb: { xs: 1.5, sm: 2 },
                      p: { xs: 1.3, sm: 1.8 },
                      borderRadius: { xs: 2, sm: 3 },
                      backgroundColor: "rgba(123,218,87,0.1)",
                      display: "inline-flex"
                    }}
                  >
                    {stat.icon}
                  </Box>
                </motion.div>

                <Typography
                  sx={{
                    fontWeight: 900,
                    fontSize: {
                      xs: "26px",
                      sm: "30px",
                      md: "36px",
                      lg: "40px"
                    },
                    mb: { xs: 0.5, sm: 0.8 },
                    background: "linear-gradient(135deg, #1d1d1f 0%, #4a4a4a 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
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
                    lineHeight: 1.3
                  }}
                >
                  {stat.label}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "12px", sm: "13px", md: "14px" },
                    color: "#6b6b6b",
                    lineHeight: { xs: 1.4, sm: 1.5 },
                    maxWidth: { xs: "95%", sm: "90%" }
                  }}
                >
                  {stat.description}
                </Typography>
              </Paper>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

