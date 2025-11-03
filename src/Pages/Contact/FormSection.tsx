import { Box, Container, Paper, TextField, Typography, Button, Chip, InputAdornment } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
    window.location.href = `mailto:hello@keenray.com?subject=${subject}&body=${body}`;
  };

  return (
    <Box sx={{ backgroundColor: "#F5F5F7", py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        {/* KPI cards */}
        <Box sx={{ maxWidth: { xs: '100%', md: 720 }, mx: 'auto', mb: 3 }}>
          <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' } }}>
            <Paper elevation={0} sx={{ p: { xs: 2, sm: 2.5 }, borderRadius: '14px', backgroundColor: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, flexWrap: { xs: 'wrap', sm: 'nowrap' }, transition: 'transform .2s ease, box-shadow .2s ease', '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 10px 24px rgba(0,0,0,0.08)' } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flex: 1, minWidth: 0 }}>
                <Box sx={{ backgroundColor: 'rgba(123,218,87,0.15)', p: 1.1, borderRadius: '10px' }}>
                  <CallIcon sx={{ color: '#1d1d1f' }} />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 800, color: '#1d1d1f', whiteSpace: 'nowrap' }}>Call us</Typography>
                  <Typography sx={{ color: '#4a4a4a' }}>+91 98765 43210</Typography>
                </Box>
              </Box>
              <Button href="tel:+919876543210" variant="contained" sx={{ textTransform: 'none', whiteSpace: 'nowrap', backgroundColor: '#7bda57', fontWeight: 700, borderRadius: '10px', px: 2.2, width: { xs: '100%', sm: 'auto' }, mt: { xs: 1.5, sm: 0 }, '&:hover': { backgroundColor: '#68c54b' } }}>
                Call Now
              </Button>
            </Paper>
            <Paper elevation={0} sx={{ p: { xs: 2, sm: 2.5 }, borderRadius: '14px', backgroundColor: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, flexWrap: { xs: 'wrap', sm: 'nowrap' }, transition: 'transform .2s ease, box-shadow .2s ease', '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 10px 24px rgba(0,0,0,0.08)' } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flex: 1, minWidth: 0 }}>
                <Box sx={{ backgroundColor: 'rgba(0,0,0,0.06)', p: 1.1, borderRadius: '10px' }}>
                  <EmailIcon sx={{ color: '#1d1d1f' }} />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 800, color: '#1d1d1f', whiteSpace: 'nowrap' }}>Email us</Typography>
                  <Typography sx={{ color: '#4a4a4a' }}>hello@keenray.com</Typography>
                </Box>
              </Box>
              <Button href="mailto:hello@keenray.com" variant="outlined" sx={{ textTransform: 'none', whiteSpace: 'nowrap', color: '#1d1d1f', borderColor: '#1d1d1f', fontWeight: 800, borderRadius: '10px', px: 2.2, width: { xs: '100%', sm: 'auto' }, mt: { xs: 1.5, sm: 0 }, '&:hover': { borderColor: '#7bda57', color: '#7bda57' } }}>
                Email Us
              </Button>
            </Paper>
          </Box>
        </Box>

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
      </Container>
    </Box>
  );
}


