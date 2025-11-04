import { Box, Container, Typography, Link, IconButton, Divider } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

// Tip: If you have a dedicated footer image in public/images, replace the path below.
const FOOTER_BG_IMAGE = "/images/solar-house.jpeg"; // e.g. "/images/solar-footer.jpeg"

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        overflow: "hidden",
        color: "#ffffff",
        backgroundImage: `linear-gradient( to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.75) ), url(${FOOTER_BG_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Subtle animated sheen overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 20% 80%, rgba(123,218,87,0.12) 0%, transparent 40%), radial-gradient(circle at 80% 20%, rgba(123,218,87,0.08) 0%, transparent 40%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl" sx={{ pt: { xs: 4, md: 5 }, pb: { xs: 3, md: 4 }, position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
          {/* Brand */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {/* <Box
                  component="img"
                  src="/images/Keenray-removebg.png"
                  alt="Keenray Logo"
                  sx={{
                    height: { xs: 32, sm: 36, md: 40 },
                    width: "auto",
                    borderRadius: "8px",
                    backgroundColor: "rgba(255,255,255,0.9)",
                    p: 0.5,
                    border: "1px solid rgba(0,0,0,0.06)",
                    boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
                  }}
                /> */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 900,
                    mb: 0.5,
                    background: "linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Keenray
                </Typography>
              </Box>
              <Typography sx={{ color: "#e0e0e0", lineHeight: 1.6, fontSize: { xs: 12.5, sm: 13 } }}>
                Sustainable energy solutions engineered for long-term performance. We help homes and businesses adopt clean, reliable solar power.
              </Typography>
              <Box sx={{ mt: 1.5, display: "flex", gap: 1 }}>
                {[{
                  icon: <InstagramIcon fontSize="small" />, href: "#"
                }, {
                  icon: <FacebookIcon fontSize="small" />, href: "#"
                }, {
                  icon: <LinkedInIcon fontSize="small" />, href: "#"
                }, {
                  icon: <TwitterIcon fontSize="small" />, href: "#"
                }].map((item, idx) => (
                  <IconButton
                    key={idx}
                    component={Link}
                    href={item.href}
                    sx={{
                      color: "#ffffff",
                      backgroundColor: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      transition: "all 0.25s ease",
                      p: 0.5,
                      "&:hover": {
                        backgroundColor: "rgba(123,218,87,0.15)",
                        transform: "translateY(-2px)",
                        color: "#7bda57",
                      },
                    }}
                  >
                    {item.icon}
                  </IconButton>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.05 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                Quick Links
              </Typography>
              <Box sx={{ display: "grid", gap: 0.75 }}>
                {[
                  { label: "Home", to: "/" },
                  { label: "About", to: "/about" },
                  { label: "Services", to: "/services" },
                  { label: "Projects", to: "/projects" },
                  { label: "Our Team", to: "/team" },
                  { label: "Contact", to: "/contact#contact-form" }
                ].map((link) => (
                  <Link
                    key={link.label}
                    component={RouterLink}
                    to={link.to}
                    underline="none"
                    sx={{
                      color: "#e0e0e0",
                      position: "relative",
                      width: "fit-content",
                      transition: "color 0.25s ease",
                      fontSize: { xs: 13, sm: 13.5 },
                      "&:hover": { color: "#7bda57" },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        bottom: -2,
                        height: 2,
                        width: 0,
                        background: "linear-gradient(90deg, #7bda57, #6bc84a)",
                        transition: "width 0.3s ease",
                      },
                      "&:hover::after": { width: "100%" },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Contact */}
          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                Contact
              </Typography>
              <Box sx={{ color: "#e0e0e0", display: "grid", gap: 0.5 }}>
                <Typography sx={{ fontSize: { xs: 13, sm: 13.5 } }}>keenray.energies@gmail.com</Typography>
                <Typography sx={{ fontSize: { xs: 13, sm: 13.5 } }}>+917020587907</Typography>
                <Typography sx={{ fontSize: { xs: 13, sm: 13.5 } }}> 2nd Floor, Sable House, Rajendra Nagar, Near Sipna College Road, Gopal Nagar, Amravati 444607</Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ my: { xs: 2, md: 3 }, borderColor: "rgba(255,255,255,0.15)" }} />

        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 1, justifyContent: "space-between", alignItems: "center" }}>
          <Typography sx={{ color: "#cfd8dc", fontSize: { xs: 12.5, sm: 13 } }}>
            © {new Date().getFullYear()} Keenray. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, color: "#cfd8dc", fontSize: { xs: 12.5, sm: 13 } }}>
            <Link href="#" underline="none" sx={{ color: "inherit", "&:hover": { color: "#7bda57" } }}>Privacy</Link>
            <Link href="#" underline="none" sx={{ color: "inherit", "&:hover": { color: "#7bda57" } }}>Terms</Link>
            <Link href="#" underline="none" sx={{ color: "inherit", "&:hover": { color: "#7bda57" } }}>Sustainability</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
