import { Box, Container, Typography, Paper } from "@mui/material";

const ITEMS = [
  { image: "/images/solar-house.jpeg", title: "2GW Manufacturing", subtitle: "High‑capacity production" },
  { image: "/images/Solar-panel-footer.jpeg", title: "Tier‑1 Panels", subtitle: "High efficiency output" },
  { image: "/images/Keenray.jpeg", title: "Trusted Installs", subtitle: "Residential & commercial" },
  { image: "/images/Keenray2.png", title: "Quality Components", subtitle: "Global brand partners" },
];

export default function IntroCarouselSection() {
  return (
    <Box sx={{ backgroundColor: "#F5F5F7", py: { xs: 5, md: 10 } }}>
      <Container maxWidth="md">
        {/* Heading */}
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mb: { xs: 2, md: 3 },
            fontWeight: 800,
            color: "#1d1d1f",
          }}
        >
          Solar – Powering a Smarter, Greener Tomorrow
        </Typography>
        {/* Intro paragraph (≈50 words) */}
        <Typography
          sx={{
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            color: "#4a4a4a",
            lineHeight: 1.7,
            maxWidth: 900,
            mx: "auto",
            textAlign: "center",
            mb: { xs: 3, md: 4 },
          }}
        >
          We design and deliver reliable solar solutions tailored to your needs. From assessing your site and handling approvals to seamless installation and support, our team focuses on safety, performance, and long‑term savings. Discover how clean energy can power your everyday life beautifully and efficiently.
        </Typography>

        {/* Running carousel inside a box */}
        <Paper elevation={0} sx={{ p: { xs: 2, sm: 3 }, borderRadius: 3, border: '1px solid rgba(0,0,0,0.06)', backgroundColor: '#ffffff' }}>
          <Box sx={{ position: "relative", overflow: "hidden" }}>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                width: "max-content",
                animation: "slideLeft 28s linear infinite",
                "@keyframes slideLeft": {
                  from: { transform: "translateX(0)" },
                  to: { transform: "translateX(-50%)" },
                },
              }}
            >
              {[...ITEMS, ...ITEMS].map((item, idx) => (
                <Box
                  key={idx}
                  sx={{
                    width: { xs: 140, sm: 150 },
                    height: { xs: 150, sm: 150 },
                    borderRadius: 2,
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(0,0,0,0.06)',
                    p: 1.5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: 1,
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      width: { xs: 56, sm: 64 },
                      height: { xs: 56, sm: 64 },
                      objectFit: 'cover',
                      borderRadius: 1.5,
                      boxShadow: '0 6px 14px rgba(0,0,0,0.12)',
                      mb: {xs: 3},
                    }}
                  />
                  <Box sx={{ width: '100%' }}>
                    <Typography noWrap sx={{ fontWeight: 800, color: '#1d1d1f', fontSize: { xs: 12.5, sm: 13.5 }, lineHeight: 1.2 }}>
                      {item.title}
                    </Typography>
                    <Typography noWrap sx={{ color: '#6b6b6b', fontSize: { xs: 11.5, sm: 12.5 }, mt: 0.5 }}>
                      {item.subtitle}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}


