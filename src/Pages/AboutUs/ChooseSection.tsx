import { useState } from "react";
import { Box, Typography, Button, Stack, Container } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState<"vision" | "mission" | "values">("vision");

  const tabs = [
    { id: "vision" as const, label: "Our Vision" },
    { id: "mission" as const, label: "Our Mission" },
    { id: "values" as const, label: "Our Values" },
  ];

  const content = {
    vision:
      "Empower Through Education: We guide every customer through informed, confident decision-making.",
    mission:
      "Commitment to Excellence: From design to installation, we ensure quality at every touchpoint.",
    values:
      "Sustainability at the Core: We believe solar isn't just a product—it's a path to a better future.",
  } as const;

  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 6, md: 10 },
        textAlign: "center",
        color: "white",
        backgroundImage: `url("/images/solar-house.jpeg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
        overflow: "hidden",
      }}
    >
      {/* Overlay for better text contrast */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.55)", // dark overlay
          zIndex: 1,
        }}
      />

      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 2, // ensures text stays above overlay
        }}
      >
        {/* Header */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "28px", sm: "36px", md: "48px", lg: "54px" },
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.15,
            mb: 2,
          }}
        >
          Why Choose Us
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            color: "rgba(255,255,255,0.9)",
            mb: 4,
            mx: "auto",
            maxWidth: 700,
          }}
        >
          Your Trusted Partner in Solar Power
        </Typography>

        {/* Tabs */}
        <Stack
          direction="row"
          justifyContent="center"
          spacing={3}
          sx={{ mb: 4, flexWrap: "wrap" }}
        >
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              sx={{
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                fontWeight: 600,
                borderBottom:
                  activeTab === tab.id
                    ? "3px solid #7bda57"
                    : "3px solid transparent",
                borderRadius: 0,
                color: activeTab === tab.id ? "#7bda57" : "rgba(255,255,255,0.9)",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#7bda57",
                  background: "transparent",
                },
              }}
            >
              {tab.label}
            </Button>
          ))}
        </Stack>

        {/* Animated Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
                maxWidth: "700px",
                mx: "auto",
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.6,
              }}
            >
              {content[activeTab]}
            </Typography>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
}
