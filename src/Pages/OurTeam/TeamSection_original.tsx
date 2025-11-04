import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";

const founders = [
  {
    name: "Founder Name 1",
    role: "CEO & Co-Founder",
    description: "With over 15 years of experience in renewable energy, our founder has been instrumental in bringing solar power to thousands of homes and businesses across India. His vision and leadership have shaped Keenray into a trusted name in the solar industry.",
    image: "/images/team/founder1.jpg",
    achievements: [
      "Led 500+ successful solar installations",
      "Expert in residential and commercial solar solutions",
      "Passionate advocate for sustainable energy"
    ]
  },
  {
    name: "Founder Name 2",
    role: "CTO & Co-Founder",
    description: "A technology innovator with deep expertise in solar engineering and system optimization. Our co-founder has developed cutting-edge solutions that maximize energy efficiency and reduce costs for our clients. His technical expertise ensures every installation performs at peak efficiency.",
    image: "/images/team/founder2.jpg",
    achievements: [
      "Designed innovative solar system architectures",
      "Expert in solar technology and efficiency optimization",
      "Committed to advancing renewable energy solutions"
    ]
  },
  {
    name: "Founder Name 3",
    role: "COO & Co-Founder",
    description: "Bringing operational excellence and strategic vision to Keenray, our co-founder ensures seamless project execution from conception to completion. With a focus on quality and customer satisfaction, they have built lasting relationships with clients and partners across the country.",
    image: "/images/team/founder3.jpg",
    achievements: [
      "Managed operations for 1000+ projects",
      "Expert in project management and customer relations",
      "Dedicated to delivering exceptional service quality"
    ]
  }
];

export default function TeamSection() {
  return (
    <Box
      sx={{
        py: { xs: 4, sm: 6, md: 8, lg: 10 },
        px: { xs: 2, sm: 3, md: 4 },
        backgroundColor: "#F5F5F7",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2, md: 4 } }}>
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, sm: 5, md: 6 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "28px", sm: "36px", md: "48px", lg: "54px" },
              fontWeight: 800,
              color: "#1d1d1f",
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            Our{" "}
            <Box component="span" sx={{ color: "#7bda57" }}>
              Team
            </Box>
          </Typography>
          <Box
            sx={{
              width: { xs: 60, sm: 80, md: 90 },
              height: { xs: 3, sm: 3.5, md: 4 },
              borderRadius: 2,
              background: "linear-gradient(90deg, #7bda57, #68c54b)",
              mx: "auto",
              mb: 2,
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: "15px", sm: "16px", md: "18px" },
              color: "#6b6b6b",
              maxWidth: 700,
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            Meet the visionary leaders driving Keenray's mission to power India with clean, sustainable solar energy.
          </Typography>
        </Box>

        {/* Team Members */}
        {founders.map((founder, index) => {
          const isEven = index % 2 === 1; // Second item (index 1) has image on right
          
          return (
            <Box
              key={index}
              sx={{
                mb: { xs: 6, sm: 8, md: 10 },
                border: { xs: "2px solid rgba(123,218,87,0.3)", sm: "none" },
                borderRadius: { xs: 3, sm: 0 },
                p: { xs: 3, sm: 0 },
                backgroundColor: { xs: "#ffffff", sm: "transparent" },
                boxShadow: { xs: "0 4px 20px rgba(0,0,0,0.08)", sm: "none" },
              }}
            >
              <Grid
                container
                spacing={{ xs: 3, sm: 4, md: 6 }}
                alignItems="center"
                direction={isEven ? "row-reverse" : "row"}
                sx={{
                  flexDirection: { xs: "column", sm: isEven ? "row-reverse" : "row" },
                }}
              >
                {/* Image */}
                <Grid
                  size={{ xs: 12, sm: 5, md: 5 }}
                  sx={{
                    order: { xs: 1, sm: isEven ? 2 : 1 },
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: { xs: "400px", sm: "500px", md: "600px" },
                        borderRadius: { xs: 3, sm: 4, md: 5 },
                        overflow: "hidden",
                        boxShadow: {
                          xs: "0 8px 24px rgba(0,0,0,0.12)",
                          sm: "0 12px 40px rgba(0,0,0,0.15)",
                        },
                        border: { xs: "3px solid rgba(123,218,87,0.4)", sm: "none" },
                      }}
                    >
                      <Box
                        component="img"
                        src={founder.image}
                        alt={founder.name}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                          transition: "transform 0.5s ease",
                          "&:hover": {
                            transform: "scale(1.05)",
                          },
                        }}
                        onError={(e) => {
                          // Fallback to a placeholder if image doesn't exist
                          const target = e.target as HTMLImageElement;
                          target.src = "https://via.placeholder.com/600x800/7bda57/ffffff?text=" + encodeURIComponent(founder.name);
                        }}
                      />
                      {/* Gradient overlay for better text readability if needed */}
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: "30%",
                          background: "linear-gradient(to top, rgba(0,0,0,0.3), transparent)",
                          display: { xs: "none", sm: "block" },
                        }}
                      />
                    </Box>
                  </motion.div>
                </Grid>

                {/* Text Content */}
                <Grid
                  size={{ xs: 12, sm: 7, md: 7 }}
                  sx={{
                    order: { xs: 2, sm: isEven ? 1 : 2 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "12px", sm: "13px", md: "14px" },
                        color: "#7bda57",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        mb: 1,
                      }}
                    >
                      {founder.role}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "24px", sm: "28px", md: "36px", lg: "42px" },
                        fontWeight: 900,
                        color: "#1d1d1f",
                        mb: { xs: 2, sm: 2.5 },
                        lineHeight: 1.2,
                      }}
                    >
                      {founder.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "15px", sm: "16px", md: "18px" },
                        color: "#4a4a4a",
                        lineHeight: { xs: 1.7, sm: 1.6 },
                        mb: { xs: 3, sm: 4 },
                      }}
                    >
                      {founder.description}
                    </Typography>
                    
                    {/* Achievements */}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: { xs: 1.5, sm: 2 },
                      }}
                    >
                      {founder.achievements.map((achievement, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 1.5,
                          }}
                        >
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              backgroundColor: "#7bda57",
                              mt: { xs: 0.8, sm: 1 },
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            sx={{
                              fontSize: { xs: "14px", sm: "15px", md: "16px" },
                              color: "#6b6b6b",
                              lineHeight: 1.6,
                            }}
                          >
                            {achievement}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </motion.div>
                </Grid>
              </Grid>
            </Box>
          );
        })}
      </Container>
    </Box>
  );
}

