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
          backgroundColor: "#F5F5F7",
          color: "#1d1d1f",
          borderBottom: "1px solid #e5e5e5",
          zIndex: 1200
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", py: 1 }}>

          {/* Logo */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none"
            }}
          >
            <Box
              component="img"
              src="/images/Keenray.jpeg"
              alt="WordsAgenda Logo"
              sx={{
                height: 42,
                width: "auto",
                objectFit: "contain",
                cursor: "pointer"
              }}
            />
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={RouterLink}
                to={page.path}
                sx={{
                  textTransform: "none",
                  fontSize: "15px",
                  color: "#1d1d1f",
                  fontWeight: 500,
                  position: "relative",
                  "&:hover": {
                    color: "#7bda57"
                  }
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", md: "none" }, color: "#1d1d1f" }}
          >
            <MenuIcon sx={{ fontSize: 28 }} />
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
            width: { xs: "65%", sm: "40%" }, // Responsive width
            backgroundColor: "#ffffff",
            borderLeft: "1px solid #e5e5e5",
            p: 2
          }
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontWeight: 700,
            color: "#1d1d1f",
            textAlign: "center"
          }}
        >
          Menu
        </Typography>

        <List>
          {pages.map((page) => (
            <ListItemButton
              key={page.name}
              component={RouterLink}
              to={page.path}
              onClick={() => setOpen(false)}
              sx={{
                fontSize: "16px",
                justifyContent: "center",
                "&:hover": {
                  color: "#7bda57",
                  backgroundColor: "rgba(123,218,87,0.08)"
                }
              }}
            >
              {page.name}
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      </Container>
    </>
  );
}
