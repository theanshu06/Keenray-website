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
  { name: "About", path: "/" },
  { name: "Services", path: "/" },
  { name: "Projects", path: "/" },
  { name: "Insights", path: "/" },
  { name: "Contact", path: "/" }
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
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", py: 0.5, px: 0 }}>

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
                height: 36,
                width: "auto",
                objectFit: "contain",
                cursor: "pointer",
                borderRadius: "8px"
              }}
            />
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 0.5 }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={RouterLink}
                to={page.path}
                sx={{
                  textTransform: "none",
                  fontSize: "14px",
                  fontWeight: 700,
                  position: "relative",
                  px: 1,
                  py: 0.5,
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
                  "&:hover::after": {
                    width: "70%"
                  }
                }}
              >
                {page.name}
              </Button>
            ))}
            
            {/* Get Started Button */}
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
              sx={{
                backgroundColor: "#7bda57",
                color: "#ffffff",
                textTransform: "none",
                fontSize: "14px",
                fontWeight: 600,
                px: 2.5,
                py: 0.9,
                borderRadius: "10px",
                boxShadow: "0 3px 16px rgba(123, 218, 87, 0.28)",
                transition: "all 0.3s ease-in-out",
                ml: 1.5,
                "&:hover": {
                  backgroundColor: "#6bc84a",
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 22px rgba(123, 218, 87, 0.35)"
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
              p: 0.5,
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
            width: { xs: "75%", sm: "45%" },
            backgroundColor: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(20px)",
            borderLeft: "1px solid rgba(0, 0, 0, 0.08)",
            p: 3
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
            sx={{
              backgroundColor: "#7bda57",
              color: "#ffffff",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 600,
              px: 3,
              py: 1.5,
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(123, 218, 87, 0.3)",
              transition: "all 0.3s ease-in-out",
              mt: 2,
              width: "100%",
              "&:hover": {
                backgroundColor: "#6bc84a",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 30px rgba(123, 218, 87, 0.4)"
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
