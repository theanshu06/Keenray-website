import { Box, Container, Paper, TextField, Typography, Button, Chip, InputAdornment, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SpeedIcon from "@mui/icons-material/Speed";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

export default function ContactFormSection() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const pincode = String(formData.get('pincode') || '').trim();
    const bill = String(formData.get('bill') || '').trim();
    const message = String(formData.get('message') || '').trim();

    const subject = encodeURIComponent(`Solar enquiry from ${name || 'Website Visitor'}`);
    const bodyLines = [
      name && `Name: ${name}`,
      email && `Email: ${email}`,
      phone && `Phone: ${phone}`,
      pincode && `Pincode: ${pincode}`,
      bill && `Monthly Electricity Bill: ${bill}`,
      message && `Message: ${message}`,
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:keenray.energies@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <Box id="contact-form" sx={{ backgroundColor: "#F5F5F7", py: { xs: 4, md: 6 }, pb: { xs: 3, md: 10 } }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: hasScrolled ? 1 : 0, y: hasScrolled ? 0 : -80 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Paper elevation={0} sx={{ maxWidth: { xs: '100%', md: 720 }, mx: 'auto', p: { xs: 3, md: 4 }, borderRadius: "16px", backgroundColor: "#ffffff", border: "1px solid rgba(0,0,0,0.06)", transition: 'box-shadow .2s ease, transform .2s ease', '&:hover': { boxShadow: '0 16px 40px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' } }}>
            <Typography variant="h6" sx={{
              fontWeight: 900,
              mb: 1,
              background: "linear-gradient(90deg, #1d1d1f, #7bda57)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>Get in touch</Typography>
            <Box sx={{ width: 88, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #7bda57, #68c54b)", mb: 1.5 }} />
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
              <Chip label="Free quote" size="small" sx={{ backgroundColor: 'rgba(123,218,87,0.15)', fontWeight: 700 }} />
              <Chip label="24h response" size="small" sx={{ backgroundColor: 'rgba(0,0,0,0.05)', fontWeight: 700 }} />
              <Chip label="No spam" size="small" sx={{ backgroundColor: 'rgba(0,0,0,0.05)', fontWeight: 700 }} />
            </Box>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gap: 2 }}>
              <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}>
                <TextField name="name" fullWidth label="Name" variant="outlined" />
                <TextField name="phone" fullWidth label="Phone" variant="outlined" InputProps={{ startAdornment: <InputAdornment position='start'>+91</InputAdornment> }} />
              </Box>
              <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' } }}>
                <TextField name="email" fullWidth label="Email" type="email" variant="outlined" />
                <TextField name="pincode" fullWidth label="Pincode" variant="outlined" />
                <TextField name="bill" fullWidth label="Monthly Electricity Bill" variant="outlined" InputProps={{ startAdornment: <InputAdornment position='start'>₹</InputAdornment> }} />
              </Box>
              <TextField name="message" fullWidth label="Message" variant="outlined" multiline minRows={4} placeholder="Tell us about your site, roof type, or preferred time to call" />
              <Button
                type="submit"
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  background: "linear-gradient(135deg, #1d1d1f 0%, #2c2c2c 35%, #7bda57 80%)",
                  color: "#ffffff",
                  fontWeight: 800,
                  textTransform: "none",
                  borderRadius: "12px",
                  px: 3,
                  py: 1.2,
                  width: '100%',
                  boxShadow: "0 10px 24px rgba(123,218,87,0.3)",
                  '&:hover': {
                    filter: 'brightness(1.05)',
                    boxShadow: "0 14px 30px rgba(123,218,87,0.38)"
                  }
                }}
              >
                Submit
              </Button>
            </Box>
          </Paper>
        </motion.div>


 {/* Trust strip */}
 <Box sx={{ maxWidth: { xs: '100%', md: 720 }, mx: 'auto', mt: 2, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr 1fr' }, gap: 1.5 }}>
          <Box sx={{ p: 1, borderRadius: 1, textAlign: 'center', color: '#4a4a4a', backgroundColor: 'rgba(0,0,0,0.03)' }}>Certified components</Box>
          <Box sx={{ p: 1, borderRadius: 1, textAlign: 'center', color: '#4a4a4a', backgroundColor: 'rgba(0,0,0,0.03)' }}>Hassle‑free paperwork</Box>
          <Box sx={{ p: 1, borderRadius: 1, textAlign: 'center', color: '#4a4a4a', backgroundColor: 'rgba(0,0,0,0.03)' }}>Dedicated support</Box>
        </Box>



        {/* Contact & Feature Cards Section */}
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: hasScrolled ? 1 : 0, y: hasScrolled ? 0 : -80 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        >
          <Box sx={{ maxWidth: { xs: '100%', md: 720 }, mx: 'auto', mt: { xs: 3, md: 4 } }}>
            {/* KPI Cards */}
            <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, mb: { xs: 0, md: 4 } }}>
              <Paper elevation={0} sx={{ p: { xs: 2.5, sm: 3 }, borderRadius: '12px', backgroundColor: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: 2, transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 28px rgba(0,0,0,0.1)', borderColor: 'rgba(123,218,87,0.3)' } }}>
                <Box sx={{ backgroundColor: 'rgba(123,218,87,0.15)', p: 1.5, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CallIcon sx={{ color: '#7bda57', fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography sx={{ fontWeight: 700, color: '#1d1d1f', fontSize: { xs: 14, sm: 15 }, mb: 0.5 }}>Call us</Typography>
                  <Typography sx={{ color: '#6b6b6b', fontSize: { xs: 13, sm: 14 }, mb: 1 }}>+917020587907</Typography>
                  <Button href="tel:+917020587907" variant="contained" size="small" sx={{ textTransform: 'none', backgroundColor: '#7bda57', fontWeight: 600, borderRadius: '8px', px: 2, fontSize: 13, '&:hover': { backgroundColor: '#68c54b' } }}>
                    Call Now
                  </Button>
                </Box>
              </Paper>
              
              <Paper elevation={0} sx={{ p: { xs: 2.5, sm: 3 }, borderRadius: '12px', backgroundColor: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: 2, transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 28px rgba(0,0,0,0.1)', borderColor: 'rgba(123,218,87,0.3)' } }}>
                <Box sx={{ backgroundColor: 'rgba(0,0,0,0.06)', p: 1.5, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <EmailIcon sx={{ color: '#1d1d1f', fontSize: 24 }} />
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography sx={{ fontWeight: 700, color: '#1d1d1f', fontSize: { xs: 14, sm: 15 }, mb: 0.5 }}>Email us</Typography>
                  <Typography sx={{ color: '#6b6b6b', fontSize: { xs: 12, sm: 13 }, mb: 1, wordBreak: 'break-word' }}>keenray.energies@gmail.com</Typography>
                  <Button href="mailto:keenray.energies@gmail.com" variant="outlined" size="small" sx={{ textTransform: 'none', color: '#1d1d1f', borderColor: '#1d1d1f', fontWeight: 600, borderRadius: '8px', px: 2, fontSize: 13, '&:hover': { borderColor: '#7bda57', color: '#7bda57' } }}>
                    Email Us
                  </Button>
                </Box>
              </Paper>
            </Box>

            {/* Feature Cards - Original Design */}
            <Stack 
              direction={{ xs: "column", sm: "row" }} 
              spacing={3}
              sx={{ 
                justifyContent: "center", 
                alignItems: "stretch", 
                mt: 4,
                display: { xs: "none", sm: "flex" }
              }}
            >
              {[
                { 
                  icon: <SpeedIcon sx={{ fontSize: 32 }} />, 
                  title: "24h Response", 
                  description: "Quick reply guarantee"
                },
                { 
                  icon: <VerifiedUserIcon sx={{ fontSize: 32 }} />, 
                  title: "Expert Team", 
                  description: "Certified professionals"
                },
                { 
                  icon: <SupportAgentIcon sx={{ fontSize: 32 }} />, 
                  title: "Free Consultation", 
                  description: "No obligation quotes"
                },
              ].map((feature, index) => (
                <Box
                  key={index}
                  component={motion.div}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: hasScrolled ? 1 : 0, y: hasScrolled ? 0 : 30 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                  sx={{ flex: 1, maxWidth: { xs: "100%", sm: "300px" } }}
                >
                  <Box
                    sx={{
                      p: 4,
                      textAlign: "center",
                      borderRadius: 4,
                      backgroundColor: "rgba(255,255,255,0.9)",
                      border: "2px solid rgba(123,218,87,0.2)",
                      backdropFilter: "blur(10px)",
                      transition: "all 0.4s ease",
                      cursor: "pointer",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "0 20px 50px rgba(123,218,87,0.25)",
                        borderColor: "#7bda57",
                        backgroundColor: "rgba(123,218,87,0.05)",
                        "& .feature-icon": {
                          transform: "scale(1.2) rotate(10deg)",
                          color: "#7bda57"
                        }
                      }
                    }}
                  >
                    <Box
                      className="feature-icon"
                      sx={{
                        color: "#1d1d1f",
                        mb: 2.5,
                        transition: "all 0.4s ease",
                        display: "flex",
                        justifyContent: "center"
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 800,
                        color: "#1d1d1f",
                        mb: 1,
                        textTransform: "uppercase",
                        letterSpacing: "1px"
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#6b6b6b",
                        fontWeight: 500,
                        lineHeight: 1.6
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>
        </motion.div>

       
      </Container>
    </Box>
  );
}


