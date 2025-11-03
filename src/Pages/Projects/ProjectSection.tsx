import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import { motion } from "framer-motion";

const Item = styled(Paper)(() => ({
  backgroundColor: "#fff",
  borderRadius: 16,
  overflow: "hidden",
  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
  border: "1px solid rgba(0,0,0,0.06)",
  textAlign: "left",
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 35px rgba(0,0,0,0.12)",
    "& img": {
      transform: "scale(1.05)",
    },
  },
}));

const projects = [
  {
    image: "/images/solar-house.jpeg",
    title: "Residential Complex",
    location: "Mumbai, Maharashtra",
    capacity: "50 kW",
    description:
      "Complete solar solution for a luxury residential complex with rooftop installation.",
    status: "Completed",
  },
  {
    image: "/images/solar-house.jpeg",
    title: "Commercial Warehouse",
    location: "Delhi NCR",
    capacity: "200 kW",
    description:
      "Large-scale commercial solar installation reducing operational costs by 60%.",
    status: "Completed",
  },
  {
    image: "/images/solar-house.jpeg",
    title: "Industrial Facility",
    location: "Bangalore, Karnataka",
    capacity: "500 kW",
    description:
      "Massive industrial solar project powering manufacturing operations sustainably.",
    status: "In Progress",
  },
  {
    image: "/images/solar-house.jpeg",
    title: "Educational Institution",
    location: "Pune, Maharashtra",
    capacity: "100 kW",
    description:
      "Solar-powered campus setting an example for sustainable education.",
    status: "Completed",
  },
  {
    image: "/images/solar-house.jpeg",
    title: "Hospital Complex",
    location: "Hyderabad, Telangana",
    capacity: "300 kW",
    description:
      "Reliable solar power ensuring uninterrupted critical operations.",
    status: "Completed",
  },
  {
    image: "/images/solar-house.jpeg",
    title: "Retail Mall",
    location: "Chennai, Tamil Nadu",
    capacity: "400 kW",
    description:
      "Shopping complex powered entirely by renewable solar energy.",
    status: "In Progress",
  },
];

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: "100%", py: { xs: 6, md: 10 }, backgroundColor: "#F5F5F7" }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: 800,
          color: "#1d1d1f",
          mb: 1,
          fontSize: { xs: "26px", sm: "30px", md: "34px" },
        }}
      >
        Featured
        <Box component="span" sx={{ color: "#7bda57" }}>
          {" "}
          Projects
        </Box>
      </Typography>
      <Box
        sx={{
          width: { xs: 80, md: 90 },
          height: { xs: 3.5, md: 4 },
          borderRadius: 2,
          background: "linear-gradient(90deg, #7bda57, #68c54b)",
          mx: "auto",
          mb: { xs: 4, md: 6 },
        }}
      />

      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 2, sm: 3, md: 4 }}
        margin={{ xs: 1, sm: 2, md: 3 }}
      >
        {projects.map((project, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ 
                  duration: 1.0, 
                  delay: (index % 2) * 0.2,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
              <Item>
                {/* Project Image */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 200, sm: 220, md: 240 },
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                  />
                  <Chip
                    label={project.status}
                    sx={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      backgroundColor:
                        project.status === "Completed"
                          ? "rgba(123,218,87,0.95)"
                          : "rgba(255,193,7,0.95)",
                      color: "#1d1d1f",
                      fontWeight: 700,
                      fontSize: "11px",
                      height: 28,
                    }}
                  />
                </Box>

                {/* Project Details */}
                <Box sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      color: "#1d1d1f",
                      mb: 1,
                      fontSize: { xs: "18px", md: "20px" },
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.8,
                      mb: 1.5,
                    }}
                  >
                    <LocationOnIcon sx={{ fontSize: 16, color: "#7bda57" }} />
                    <Typography sx={{ fontSize: "13px", color: "#6b6b6b" }}>
                      {project.location}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <SolarPowerIcon sx={{ fontSize: 18, color: "#7bda57" }} />
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: "#1d1d1f",
                        fontSize: "14px",
                      }}
                    >
                      {project.capacity}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#4a4a4a",
                      lineHeight: 1.6,
                    }}
                  >
                    {project.description}
                  </Typography>
                </Box>
              </Item>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

