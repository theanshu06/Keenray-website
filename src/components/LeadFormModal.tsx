import { useState, useEffect, type FormEvent } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  TextField,
  Button,
  Tabs,
  Tab,
  Grid,
  IconButton,
  InputAdornment,
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion, AnimatePresence } from "framer-motion";

interface LeadFormModalProps {
  open: boolean;
  onClose: () => void;
  initialTab?: "home" | "commercial" | "housing";
}

export default function LeadFormModal({ open, onClose, initialTab = "home" }: LeadFormModalProps) {
  const [activeTab, setActiveTab] = useState<"home" | "commercial" | "housing">(initialTab);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update activeTab when initialTab changes or modal opens
  useEffect(() => {
    if (open && initialTab) {
      setActiveTab(initialTab);
    }
  }, [open, initialTab]);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: "home" | "commercial" | "housing") => {
    setActiveTab(newValue);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = {};
    
    formData.forEach((value, key) => {
      data[key] = String(value).trim();
    });

    // Prepare email content
    const subject = encodeURIComponent(`Solar Enquiry - ${activeTab === "home" ? "Residential" : activeTab === "commercial" ? "Commercial" : "Housing Society"}`);
    const bodyLines = [
      `Type: ${activeTab === "home" ? "Residential" : activeTab === "commercial" ? "Commercial" : "Housing Society"}`,
      ...Object.entries(data).map(([key, value]) => value && `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`).filter(Boolean),
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));
    
    // Open email client
    window.location.href = `mailto:keenray.energies@gmail.com?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      }}
      PaperProps={{
        sx: {
          borderRadius: { xs: 0, sm: 3 },
          maxHeight: { xs: "calc(100vh - 65px)", sm: "calc(100vh - 80px - 4px)", md: "calc(100vh - 85px - 4px)" },
          height: { xs: "calc(100vh - 65px)", sm: "calc(100vh - 80px - 4px)", md: "calc(100vh - 85px - 4px)" },
          margin: { xs: 0, sm: 0 },
          marginTop: { xs: 0, sm: "80px", md: "85px" },
          marginBottom: { xs: 0, sm: "16px", md: "16px" },
          marginLeft: { xs: 0, sm: "auto" },
          marginRight: { xs: 0, sm: "auto" },
          width: { xs: "100%", sm: "95%" },
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          border: { xs: "1px solid #e0e0e0", sm: "2px solid #e0e0e0" },
          boxShadow: { xs: "none", sm: "0 8px 32px rgba(0,0,0,0.12)" },
        },
      }}
      sx={{
        "& .MuiDialog-container": {
          alignItems: { xs: "flex-start", sm: "center" },
          paddingTop: { xs: "65px", sm: 0 },
          justifyContent: { xs: "flex-start", sm: "center" },
        },
      }}
      
    >
      <DialogContent sx={{ p: 0, position: "relative", display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }}>
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            zIndex: 10,
            backgroundColor: "rgba(0,0,0,0.05)",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.1)" },
          }}
        >
          <CloseIcon />
        </IconButton>

        <Grid container sx={{ height: "100%", maxHeight: "100%", overflow: "hidden", flex: 1, minHeight: 0 }}>
          {/* Left Side - Image */}
          <Grid
            size={{ xs: 0, sm: 5 }}
            sx={{
              display: { xs: "none", sm: "block" },
              position: "relative",
              overflow: "hidden",
              height: "100%",
            }}
          >
            <Box
              component="img"
              src="/images/solar-house.jpeg"
              alt="Solar Solutions"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, rgba(29,29,31,0.7) 0%, rgba(123,218,87,0.3) 100%)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                p: 4,
                color: "#ffffff",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 900,
                  mb: 2,
                  fontSize: { sm: "32px", md: "40px" },
                  textAlign: "center",
                  textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                }}
              >
                Get a Free Quote for Rooftop Solar
              </Typography>
              <Typography
                sx={{
                  fontSize: { sm: "16px", md: "18px" },
                  textAlign: "center",
                  opacity: 0.95,
                  maxWidth: "400px",
                }}
              >
                Schedule a FREE consultation with us today!
              </Typography>
            </Box>
          </Grid>

          {/* Right Side - Form */}
          <Grid
            size={{ xs: 12, sm: 7 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              maxHeight: "100%",
              overflow: "hidden",
              position: "relative",
              minHeight: 0,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                p: { xs: 2.5, sm: 4, md: 5 },
                pb: { xs: 4, sm: 4, md: 5 },
                backgroundColor: "#ffffff",
                overflowY: "auto",
                height: "100%",
                maxHeight: "100%",
                minHeight: 0,
                flex: 1,
                "&::-webkit-scrollbar": {
                  width: "8px",
                },
                "&::-webkit-scrollbar-track": {
                  background: "#f1f1f1",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#7bda57",
                  borderRadius: "4px",
                  "&:hover": {
                    background: "#68c54b",
                  },
                },
              }}
            >
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 900,
                  mb: 1,
                  fontSize: { xs: "24px", sm: "28px", md: "32px" },
                  background: "linear-gradient(135deg, #1d1d1f 0%, #7bda57 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Get a Free Quote
              </Typography>
              <Typography
                sx={{
                  color: "#6b6b6b",
                  fontSize: { xs: "14px", sm: "15px" },
                  mb: 2,
                }}
              >
                Please fill the form and we will get in touch with you for the consultation
              </Typography>

              {/* Tabs */}
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                sx={{
                  mb: 3,
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#7bda57",
                    height: 3,
                    borderRadius: "3px 3px 0 0",
                  },
                  "& .MuiTab-root": {
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: { xs: "13px", sm: "14px" },
                    minHeight: 48,
                    "&.Mui-selected": {
                      color: "#7bda57",
                    },
                  },
                }}
              >
                <Tab label="Residential" value="home" />
                <Tab label="Commercial" value="commercial" />
                <Tab label="Housing Society" value="housing" />
              </Tabs>

              {/* Info Chips */}
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 3 }}>
                <Chip
                  label="Free quote"
                  size="small"
                  sx={{
                    backgroundColor: "rgba(123,218,87,0.15)",
                    fontWeight: 700,
                    fontSize: "11px",
                  }}
                />
                <Chip
                  label="24h response"
                  size="small"
                  sx={{
                    backgroundColor: "rgba(0,0,0,0.05)",
                    fontWeight: 700,
                    fontSize: "11px",
                  }}
                />
                <Chip
                  label="No spam"
                  size="small"
                  sx={{
                    backgroundColor: "rgba(0,0,0,0.05)",
                    fontWeight: 700,
                    fontSize: "11px",
                  }}
                />
              </Box>
            </Box>

            {/* Form */}
            <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              <AnimatePresence mode="wait">
                {activeTab === "home" && (
                  <motion.div
                    key="home"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TextField
                      name="name"
                      label="Full Name"
                      fullWidth
                      required
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "10px",
                        },
                      }}
                    />
                    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2, mt: 2 }}>
                      <TextField
                        name="phone"
                        label="WhatsApp number"
                        fullWidth
                        required
                        type="tel"
                        variant="outlined"
                        InputProps={{
                          startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "10px",
                          },
                        }}
                      />
                      <TextField
                        name="pincode"
                        label="Pin code"
                        fullWidth
                        required
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "10px",
                          },
                        }}
                      />
                    </Box>
                    <TextField
                      name="city"
                      label="City"
                      fullWidth
                      required
                      variant="outlined"
                      sx={{
                        mt: 2,
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "10px",
                        },
                      }}
                    />
                    <FormControl fullWidth required sx={{ mt: 2 }}>
                      <InputLabel>What is your average monthly bill?</InputLabel>
                      <Select
                        name="bill"
                        label="What is your average monthly bill?"
                        defaultValue=""
                        sx={{
                          borderRadius: "10px",
                        }}
                      >
                        <MenuItem value="Less than ₹1500">Less than ₹1500</MenuItem>
                        <MenuItem value="₹1500 - ₹2500">₹1500 - ₹2500</MenuItem>
                        <MenuItem value="₹2500 - ₹4000">₹2500 - ₹4000</MenuItem>
                        <MenuItem value="₹4000 - ₹8000">₹4000 - ₹8000</MenuItem>
                        <MenuItem value="More than ₹8000">More than ₹8000</MenuItem>
                      </Select>
                    </FormControl>
                  </motion.div>
                )}

                {activeTab === "commercial" && (
                  <motion.div
                    key="commercial"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TextField
                      name="name"
                      label="Full Name"
                      fullWidth
                      required
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "10px",
                        },
                      }}
                    />
                    <TextField
                      name="company"
                      label="Company Name"
                      fullWidth
                      required
                      variant="outlined"
                      sx={{
                        mt: 2,
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "10px",
                        },
                      }}
                    />
                    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2, mt: 2 }}>
                      <TextField
                        name="city"
                        label="City"
                        fullWidth
                        required
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "10px",
                          },
                        }}
                      />
                      <TextField
                        name="pincode"
                        label="Pin code"
                        fullWidth
                        required
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "10px",
                          },
                        }}
                      />
                    </Box>
                    <TextField
                      name="phone"
                      label="WhatsApp number"
                      fullWidth
                      required
                      type="tel"
                      variant="outlined"
                      InputProps={{
                        startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                      }}
                      sx={{
                        mt: 2,
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "10px",
                        },
                      }}
                    />
                    <TextField
                      name="bill"
                      label="Average Monthly Bill"
                      fullWidth
                      required
                      type="number"
                      variant="outlined"
                      InputProps={{
                        startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                      }}
                      sx={{
                        mt: 2,
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "10px",
                        },
                      }}
                    />
                  </motion.div>
                )}

                {activeTab === "housing" && (
                  <motion.div
                    key="housing"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TextField
                      name="name"
                      label="Full Name"
                      fullWidth
                      required
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "10px",
                        },
                      }}
                    />
                    <TextField
                      name="society"
                      label="Name of Housing Society"
                      fullWidth
                      required
                      variant="outlined"
                      sx={{
                        mt: 2,
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "10px",
                        },
                      }}
                    />
                    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2, mt: 2 }}>
                      <TextField
                        name="pincode"
                        label="Pin code"
                        fullWidth
                        required
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "10px",
                          },
                        }}
                      />
                      <TextField
                        name="city"
                        label="City"
                        fullWidth
                        required
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "10px",
                          },
                        }}
                      />
                    </Box>
                    <TextField
                      name="phone"
                      label="WhatsApp number"
                      fullWidth
                      required
                      type="tel"
                      variant="outlined"
                      InputProps={{
                        startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                      }}
                      sx={{
                        mt: 2,
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "10px",
                        },
                      }}
                    />
                    <FormControl fullWidth required sx={{ mt: 2 }}>
                      <InputLabel>Monthly Electricity Bill</InputLabel>
                      <Select
                        name="bill"
                        label="Monthly Electricity Bill"
                        defaultValue=""
                        sx={{
                          borderRadius: "10px",
                        }}
                      >
                        <MenuItem value="0 - 50000">0 - ₹50,000</MenuItem>
                        <MenuItem value="50000 - 2lacs">₹50,000 - ₹2 Lacs</MenuItem>
                        <MenuItem value="> 2lacs">More than ₹2 Lacs</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl fullWidth required sx={{ mt: 2 }}>
                      <InputLabel>What is your designation in Housing Society?</InputLabel>
                      <Select
                        name="designation"
                        label="What is your designation in Housing Society?"
                        defaultValue=""
                        sx={{
                          borderRadius: "10px",
                        }}
                      >
                        <MenuItem value="Management committee member">Management committee member</MenuItem>
                        <MenuItem value="Resident">Resident</MenuItem>
                        <MenuItem value="Builder">Builder</MenuItem>
                        <MenuItem value="Facility Manager">Facility Manager</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl fullWidth required sx={{ mt: 2 }}>
                      <InputLabel>AGM approval status</InputLabel>
                      <Select
                        name="agmStatus"
                        label="AGM approval status"
                        defaultValue=""
                        sx={{
                          borderRadius: "10px",
                        }}
                      >
                        <MenuItem value="We already have AGM approval">We already have AGM approval</MenuItem>
                        <MenuItem value="We don't have an AGM approval yet">We don't have an AGM approval yet</MenuItem>
                        <MenuItem value="We want help in preparing for our AGM">We want help in preparing for our AGM</MenuItem>
                      </Select>
                    </FormControl>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Terms Checkbox */}
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1, mt: 1 }}>
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  required
                  style={{
                    marginTop: "4px",
                    accentColor: "#7bda57",
                    cursor: "pointer",
                  }}
                />
                <Typography
                  component="label"
                  htmlFor="terms"
                  sx={{
                    fontSize: "12px",
                    color: "#6b6b6b",
                    cursor: "pointer",
                    lineHeight: 1.5,
                  }}
                >
                  I agree to Keenray's{" "}
                  <Box component="span" sx={{ color: "#7bda57", textDecoration: "underline" }}>
                    terms of service
                  </Box>{" "}
                  &{" "}
                  <Box component="span" sx={{ color: "#7bda57", textDecoration: "underline" }}>
                    privacy policy
                  </Box>
                </Typography>
              </Box>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                endIcon={<ArrowForwardIcon />}
                sx={{
                  background: "linear-gradient(135deg, #7bda57 0%, #68c54b 100%)",
                  color: "#ffffff",
                  fontWeight: 700,
                  textTransform: "none",
                  borderRadius: "12px",
                  px: 3,
                  py: { xs: 1.8, sm: 1.5 },
                  mt: { xs: 3, sm: 2 },
                  mb: { xs: 2, sm: 0 },
                  fontSize: { xs: "15px", sm: "16px" },
                  boxShadow: "0 8px 20px rgba(123,218,87,0.3)",
                  width: "100%",
                  "&:hover": {
                    background: "linear-gradient(135deg, #68c54b 0%, #5ab83a 100%)",
                    boxShadow: "0 10px 24px rgba(123,218,87,0.4)",
                    transform: "translateY(-2px)",
                  },
                  "&:disabled": {
                    background: "rgba(123,218,87,0.5)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                {isSubmitting ? "Sending..." : "Submit Details"}
              </Button>
            </Box>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

