import { Box, Container, Typography } from "@mui/material";

export default function AboutUsHeroSection() {
  return (
    <Box sx={{
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: "#F5F5F7",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      minHeight: { xs: "22vh", md: "24vh" },
      maxHeight: "30vh",
      py: { xs: 1, md: 2 },
      '&::before': {
        content: '""',
        position: 'absolute',
        top: -60,
        right: -60,
        width: 200,
        height: 200,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(123,218,87,0.18), transparent 60%)',
        filter: 'blur(12px)'
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: -70,
        left: -70,
        width: 240,
        height: 240,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,0,0,0.06), transparent 60%)',
        filter: 'blur(14px)'
      }
    }}>
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "28px", sm: "36px", md: "48px", lg: "52px" },
            fontWeight: 700,
            color: "#1d1d1f",
            lineHeight: 1.15,
            mb: 1,
            letterSpacing: "-0.5px"
          }}
        >
          About
          {/* <br /> */}
          <Box component="span" sx={{ color: "#7bda57" }}> us</Box>
        </Typography>
        <Box sx={{
          position: "relative",
          width: 130,
          height: 5,
          mx: "auto",
          mb: 1.5,
          borderRadius: 999,
          background: "linear-gradient(90deg, #6fd354 0%, #7bda57 35%, #68c54b 65%, #5dbb44 100%)",
          overflow: "hidden",
          border: '1px solid rgba(0,0,0,0.35)',
          // glossy feel: inner highlight + soft glow (dark variant)
          boxShadow: "inset 0 1px 0 rgba(0,0,0,0.25), inset 0 -1px 0 rgba(0,0,0,0.12), 0 0 18px rgba(123,218,87,0.45)",
          // subtle segmented sheen using mask
          WebkitMaskImage: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
          maskImage: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: -16,
            width: 20,
            height: 20,
            borderRadius: '50%',
            transform: 'translateY(-50%)',
            background: 'radial-gradient(circle, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0) 65%)',
            filter: 'blur(0.5px)',
            animation: 'underlineDot 2.6s ease-in-out infinite'
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: -80,
            width: 70,
            height: '100%',
            background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0) 100%)',
            animation: 'underlineSheen 2.4s linear infinite'
          },
          '@keyframes underlineDot': {
            '0%': { left: -16, opacity: 0 },
            '15%': { opacity: 1 },
            '85%': { opacity: 1 },
            '100%': { left: 132, opacity: 0 }
          },
          '@keyframes underlineSheen': {
            '0%': { left: -80 },
            '100%': { left: 150 }
          }
        }} />
        <Typography sx={{ fontSize: { xs: "14px", sm: "16px" }, color: "#6b6b6b", maxWidth: 700, mx: "auto", lineHeight: 1.6 }}>
          Empowering communities with sustainable solar energy solutions. Our mission is to make clean energy accessible to everyone.
        </Typography>
      </Container>
    </Box>
  );
}

