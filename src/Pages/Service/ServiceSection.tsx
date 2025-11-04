import { Box, Container,  Typography, Paper } from "@mui/material";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import BusinessIcon from "@mui/icons-material/Business";
import HomeIcon from "@mui/icons-material/Home";
import EngineeringIcon from "@mui/icons-material/Engineering";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AssessmentIcon from "@mui/icons-material/Assessment";

const services = [
  {
    icon: <HomeIcon sx={{ fontSize: 40, color: "#7bda57" }} />,
    title: "Residential Solar",
    description: "Custom solar systems for homes with expert installation and reliable support."
  },
  {
    icon: <BusinessIcon sx={{ fontSize: 40, color: "#7bda57" }} />,
    title: "Commercial Solutions",
    description: "Large-scale solar installations for businesses to reduce operational costs."
  },
  {
    icon: <AssessmentIcon sx={{ fontSize: 40, color: "#7bda57" }} />,
    title: "Site Assessment",
    description: "Professional evaluation of your property to design the optimal solar system."
  },
  {
    icon: <EngineeringIcon sx={{ fontSize: 40, color: "#7bda57" }} />,
    title: "Installation & Setup",
    description: "Expert installation with premium components and quality assurance."
  },
  {
    icon: <SolarPowerIcon sx={{ fontSize: 40, color: "#7bda57" }} />,
    title: "Maintenance Support",
    description: "Ongoing monitoring and maintenance to ensure peak system performance."
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 40, color: "#7bda57" }} />,
    title: "Consultation Services",
    description: "Expert guidance on solar options, financing, and energy optimization."
  }
];

export default function ServiceSection() {
  return (
    <Box sx={{ backgroundColor: "#F5F5F7", py: { xs: 5, md: 8 } }}>
      <Container maxWidth="lg">
        <Box sx={{ position: "relative", py: { xs: 3, md: 4 } }}>
          {/* Central rope line */}
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "4px",
              transform: "translateX(-50%)",
              background: "linear-gradient(180deg, transparent 0%, #7bda57 5%, #7bda57 95%, transparent 100%)",
              zIndex: 0,
              display: { xs: "none", md: "block" },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '0%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#7bda57',
                boxShadow: '0 0 12px rgba(123,218,87,0.8)'
              }
            }}
          />
          
          {services.map((service, index) => {
            const isLeft = index % 2 === 0;
            const isEvenIndex = index % 2 === 0;
            // Vary sizes: larger boxes on left, smaller on right, alternating sizes
            const boxWidth = isEvenIndex 
              ? { xs: "100%", md: "45%" }
              : { xs: "100%", md: "38%" };
            const boxPadding = isEvenIndex ? { xs: 2.5, md: 3 } : { xs: 2, md: 2.5 };
            const iconSize = isEvenIndex ? 44 : 36;
            
            return (
              <Box
                key={index}
                sx={{
                  width: boxWidth,
                  ml: isLeft ? { xs: 0, md: 0 } : { xs: 0, md: "auto" },
                  mr: isLeft ? { xs: 0, md: "auto" } : { xs: 0, md: 0 },
                  mb: { xs: 3, md: 4 },
                  position: "relative",
                  zIndex: 1
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: boxPadding,
                    borderRadius: { xs: 3, md: isEvenIndex ? 4 : 3 },
                    backgroundColor: isEvenIndex ? "#ffffff" : "rgba(123,218,87,0.06)",
                    border: `2px solid ${isEvenIndex ? "rgba(123,218,87,0.25)" : "rgba(123,218,87,0.4)"}`,
                    display: "flex",
                    flexDirection: { xs: "column", md: isLeft ? "row" : "row-reverse" },
                    alignItems: { xs: "flex-start", md: "center" },
                    gap: 2.5,
                    position: "relative",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-6px) scale(1.02)",
                      boxShadow: isEvenIndex 
                        ? "0 16px 40px rgba(123,218,87,0.3)" 
                        : "0 16px 40px rgba(123,218,87,0.4)",
                      borderColor: "#7bda57"
                    }
                  }}
                >
                  {/* Rope connector point */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: { xs: "50%", md: "50%" },
                      [isLeft ? "right" : "left"]: { xs: 0, md: "-20px" },
                      [isLeft ? "left" : "right"]: { xs: "50%", md: "auto" },
                      transform: { xs: "translate(-50%, -50%)", md: "translateY(-50%)" },
                      width: { xs: "20px", md: "40px" },
                      height: { xs: "40px", md: "20px" },
                      display: { xs: "none", md: "flex" },
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 2
                    }}
                  >
                    <Box
                      sx={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        backgroundColor: "#7bda57",
                        boxShadow: "0 0 12px rgba(123,218,87,0.8)",
                        border: "3px solid #ffffff"
                      }}
                    />
                    {isLeft && (
                      <Box
                        sx={{
                          position: "absolute",
                          right: "-12px",
                          width: "12px",
                          height: "3px",
                          background: "linear-gradient(90deg, #7bda57, transparent)",
                          borderRadius: "2px"
                        }}
                      />
                    )}
                    {!isLeft && (
                      <Box
                        sx={{
                          position: "absolute",
                          left: "-12px",
                          width: "12px",
                          height: "3px",
                          background: "linear-gradient(90deg, transparent, #7bda57)",
                          borderRadius: "2px"
                        }}
                      />
                    )}
                  </Box>
                  
                  <Box 
                    sx={{ 
                      p: 1.5,
                      borderRadius: 2,
                      backgroundColor: isEvenIndex ? "rgba(123,218,87,0.12)" : "rgba(123,218,87,0.18)",
                      flexShrink: 0
                    }}
                  >
                    <Box sx={{ fontSize: iconSize, color: "#7bda57" }}>
                      {service.icon}
                    </Box>
                  </Box>
                  
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 800,
                        color: "#1d1d1f",
                        mb: 1,
                        fontSize: { xs: "18px", sm: isEvenIndex ? "22px" : "20px" }
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", sm: isEvenIndex ? "16px" : "15px" },
                        color: isEvenIndex ? "#4a4a4a" : "#2c2c2c",
                        lineHeight: 1.6
                      }}
                    >
                      {service.description}
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
