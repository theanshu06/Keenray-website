import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  Drawer,
  List,
  ListItemButton,
  Typography,
  Container
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link as RouterLink } from "react-router-dom";

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Our Team", path: "/team" },
  { name: "Contact", path: "/contact" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <Container maxWidth='lg'>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          color: "#1d1d1f",
          borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
          zIndex: 1200,
          transition: "all 0.3s ease-in-out"
        }}
      >
        <Toolbar sx={{
    display: "flex",
    justifyContent: "space-between",
    py: 0.5,
    px: { xs: 2, sm: 3, md: 2 }, // 👈 add padding on small devices
  }}>

          {/* Logo */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)"
              }
            }}
          >
            <Box
              component="img"
              src="/images/Keenray.jpeg"
              alt="Keenray Logo"
              sx={{
                height: { xs: 42, sm: 50, md: 55 },
                width: "auto",
                objectFit: "contain",
                cursor: "pointer",
                borderRadius: "8px"
              }}
            />
          </Box>

          {/* Desktop Bar: logo + 6 pages + CTA evenly spaced */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", width: "100%", justifyContent: "space-evenly" }}>
            {/* Spacer to balance spacing visually with left logo */}
            <Box sx={{ width: 36 }} />

            {pages.map((page) => (
              <Button
                key={page.name}
                component={RouterLink}
                to={page.path}
                sx={{
                  textTransform: "none",
                  fontSize: "15px",
                  fontWeight: 800,
                  position: "relative",
                  px: 1.2,
                  py: 0.6,
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #2c2c2c 0%, #4a4a4a 50%, #2c2c2c 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 1px 2px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "linear-gradient(135deg, #7bda57 0%, #6bc84a 50%, #7bda57 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundColor: "rgba(123, 218, 87, 0.08)",
                    transform: "translateY(-1px)",
                    textShadow: "0 2px 4px rgba(123, 218, 87, 0.3)"
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "-2px",
                    left: "50%",
                    width: "0",
                    height: "2px",
                    background: "linear-gradient(90deg, #7bda57, #6bc84a)",
                    borderRadius: "1px",
                    transition: "all 0.3s ease",
                    transform: "translateX(-50%)"
                  },
                  "&:hover::after": { width: "70%" }
                }}
              >
                {page.name}
              </Button>
            ))}

            {/* CTA */}
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
              component={RouterLink}
              to="/contact#contact-form"
              sx={{
                position: "relative",
                overflow: "hidden",
                background: "linear-gradient(135deg, #1d1d1f 0%, #2c2c2c 30%, #7bda57 70%, #6bc84a 85%, #5ab83a 100%)",
                backgroundSize: "200% 200%",
                animation: "gradientShift 6s ease infinite",
                color: "#ffffff",
                textTransform: "none",
                fontSize: "15px",
                fontWeight: 800,
                px: 2.8,
                py: 1,
                borderRadius: "12px",
                boxShadow: "0 8px 26px rgba(123, 218, 87, 0.35)",
                transition: "all 0.3s ease",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: -140,
                  width: 110,
                  height: "100%",
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)",
                  transform: "skewX(-20deg)",
                  transition: "left 0.6s ease",
                },
                "&:hover::before": { left: 220 },
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 14px 34px rgba(123, 218, 87, 0.45)"
                },
                "@keyframes gradientShift": {
                  "0%": { backgroundPosition: "0% 50%" },
                  "50%": { backgroundPosition: "100% 50%" },
                  "100%": { backgroundPosition: "0% 50%" }
                }
              }}
            >
              Get Started
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            onClick={() => setOpen(true)}
            sx={{ 
              display: { xs: "flex", md: "none" }, 
              color: "#1d1d1f",
              backgroundColor: "rgba(0, 0, 0, 0.04)",
              borderRadius: "10px",
              p: 1,
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "rgba(123, 218, 87, 0.08)",
                transform: "scale(1.05)"
              }
            }}
          >
            <MenuIcon sx={{ fontSize: 24 }} />
          </IconButton>

        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            border:"1 px solid red",
            width: { xs: "75%", sm: "45%" },
            backgroundColor: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(20px)",
            borderLeft: "1px solid rgba(0, 0, 0, 0.08)",
            p: 3,
            
          }
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#1d1d1f",
              background: "linear-gradient(135deg, #7bda57 0%, #6bc84a 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Menu
          </Typography>
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              color: "#1d1d1f",
              backgroundColor: "rgba(0, 0, 0, 0.05)",
              borderRadius: "12px",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "rgba(123, 218, 87, 0.1)",
                transform: "scale(1.05)"
              }
            }}
          >
            <MenuIcon sx={{ fontSize: 24 }} />
          </IconButton>
        </Box>

        <List sx={{ gap: 0.5 }}>
          {pages.map((page) => (
            <ListItemButton
              key={page.name}
              component={RouterLink}
              to={page.path}
              onClick={() => setOpen(false)}
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                justifyContent: "flex-start",
                borderRadius: "8px",
                mb: 0.5,
                py: 1.2,
                px: 2,
                background: "linear-gradient(135deg, #2c2c2c 0%, #4a4a4a 50%, #2c2c2c 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 1px 2px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "linear-gradient(135deg, #7bda57 0%, #6bc84a 50%, #7bda57 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundColor: "rgba(123, 218, 87, 0.08)",
                  transform: "translateX(6px)",
                  textShadow: "0 2px 4px rgba(123, 218, 87, 0.3)"
                }
              }}
            >
              {page.name}
            </ListItemButton>
          ))}
          
          {/* Mobile Get Started Button */}
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
            component={RouterLink}
            to="/contact#contact-form"
            onClick={() => setOpen(false)}
            sx={{
              position: "relative",
              overflow: "hidden",
              background: "linear-gradient(135deg, #1d1d1f 0%, #2c2c2c 30%, #7bda57 70%, #6bc84a 85%, #5ab83a 100%)",
              backgroundSize: "200% 200%",
              animation: "gradientShift 6s ease infinite",
              color: "#ffffff",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 600,
              px: 3,
              py: 1.5,
              borderRadius: "12px",
              boxShadow: "0 12px 30px rgba(123, 218, 87, 0.45)",
              transition: "all 0.3s ease",
              mt: 2,
              width: "100%",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: -160,
                width: 120,
                height: "100%",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)",
                transform: "skewX(-20deg)",
                transition: "left 0.6s ease",
              },
              "&:hover::before": { left: 320 },
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 16px 38px rgba(123, 218, 87, 0.5)"
              },
              "@keyframes gradientShift": {
                "0%": { backgroundPosition: "0% 50%" },
                "50%": { backgroundPosition: "100% 50%" },
                "100%": { backgroundPosition: "0% 50%" }
              }
            }}
          >
            Get Started
          </Button>
        </List>
      </Drawer>
      </Container>
    </>
  );
}
