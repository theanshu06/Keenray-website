import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";

const founders = [
  {
    name: "MR. PARESH SINGHALA",
    role: "CHAIRMAN & MD",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies, magna ut vulputate dictum, nunc sem finibus eros, sit amet mattis neque justo in elit. Nullam vitae bibendum tortor. Curabitur vulputate, sem et ultrices sagittis, lorem ligula eleifend urna, ut tincidunt eros ante vel felis. Mauris tincidunt, lorem sed maximus sodales, orci justo pharetra metus, a malesuada libero sem at erat. Donec vel dui nec tortor dictum iaculis. Integer lacinia neque vel magna vehicula, vel varius purus malesuada. Suspendisse id justo in ex convallis mattis ac vel erat. Etiam porttitor tortor sit amet mauris porta, in efficitur erat convallis. Aliquam faucibus arcu ac sapien consequat, in facilisis lectus elementum. Vivamus suscipit arcu eu mauris egestas, sit amet accumsan leo bibendum. Cras convallis erat id mauris feugiat, nec luctus est dictum. Sed cursus est vel ex gravida, a rutrum nibh sodales. Nulla ac sapien lacus. Donec a convallis purus, in vehicula ante.",
    descriptionMobile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet risus ac lectus varius, in aliquam tortor dignissim. Vestibulum quis mauris nec nisl sodales faucibus. Integer condimentum lorem id lorem varius, ac aliquam neque feugiat. Aliquam erat volutpat. Morbi facilisis quam ac diam blandit, vel commodo ligula maximus. Sed gravida ligula at massa ultrices, ac cursus mi rhoncus.",
    image: "/images/TeamSection-image.jpg"
  },
  {
    name: "MR. MANISH SHINGALA",
    role: "DIRECTOR",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse blandit ante vel elit pharetra, at elementum felis aliquam. Sed dignissim, sapien in blandit dictum, ligula eros lobortis nisi, ut feugiat lacus lorem a nulla. Donec dapibus, neque vel maximus dapibus, turpis ante feugiat turpis, nec sodales urna lectus et sem. Proin fermentum sapien a sem interdum laoreet. Fusce aliquet, metus vel lacinia ornare, lorem mi tincidunt nisl, eu rutrum arcu mi ac justo. Mauris ac sagittis nisl. Sed a tortor sit amet magna dictum sagittis. Donec venenatis orci ut ex ultrices cursus. Nulla facilisi. Integer tempus leo non justo cursus posuere. Aenean dignissim libero vitae mauris tincidunt, a bibendum lacus blandit. Proin eget ante eget orci convallis commodo et sed velit.",
    descriptionMobile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus felis et elit suscipit, at rhoncus mauris tincidunt. Proin blandit felis vel nulla malesuada, nec suscipit purus fermentum. Morbi ut dignissim nunc, vel tincidunt diam. Suspendisse potenti. Phasellus rhoncus nunc vel velit gravida, sit amet dictum nisl condimentum.",
    image: "/images/TeamSection-image.jpg"
  },
  {
    name: "MR. NITIN BARVALIYA",
    role: "VICE PRESIDENT",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat magna nec tincidunt congue. Phasellus quis nulla id mauris dapibus ullamcorper. Cras sodales lacus ut justo efficitur, ut facilisis leo pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris porttitor, velit nec posuere dictum, lorem nibh sodales nibh, nec malesuada risus magna nec purus. Nulla vitae dui in arcu bibendum feugiat sit amet nec arcu. Ut suscipit lectus eu sapien tempor, id porttitor leo laoreet. Suspendisse potenti. Mauris id tellus vitae ligula sodales laoreet. Aliquam imperdiet risus in arcu ultricies, a tempor felis aliquam. Nam ut dictum sapien. In tincidunt, nulla non tempor dapibus, justo enim aliquet arcu, sed fringilla nisi lorem et sapien.",
    descriptionMobile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit eros at leo viverra, at vulputate sapien commodo. Nullam aliquam risus sit amet mattis aliquam. In eu arcu ut enim fermentum elementum. Vestibulum gravida lacus in sem feugiat, non pulvinar lectus rhoncus. Sed non nunc vel erat tincidunt vehicula. Duis in sapien nec purus ultrices placerat.",
    image: "/images/TeamSection-image.jpg"
  }
  
];

export default function TeamSection() {
  return (
    <Box
      sx={{
        py: { xs: 4, sm: 6, md: 8, lg: 10 },
        px: { xs: 2, sm: 3, md: 4 },
        backgroundColor: "#F5F5F7",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2, md: 4 } }}>
        {/* Team Members */}
        {founders.map((founder, index) => {
          // Index 0 (Paresh): image left, text right
          // Index 1 (Manish): image right, text left
          // Index 2 (Nitin): image left, text right
          const isManish = index === 1;
          
          return (
            <Box
              key={index}
              sx={{
                mb: { xs: 6, sm: 8, md: 10 },
                border: { xs: "2px solid rgba(123,218,87,0.3)", sm: "none" },
                borderRadius: { xs: 3, sm: 0 },
                p: { xs: 3, sm: 0 },
                backgroundColor: { xs: "#ffffff", sm: "transparent" },
                boxShadow: { xs: "0 4px 20px rgba(0,0,0,0.08)", sm: "none" },
              }}
            >
              <Grid
                container
                spacing={{ xs: 3, sm: 4, md: 6 }}
                alignItems="stretch"
                sx={{
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                {/* Image */}
                <Grid
                  size={{ xs: 12, sm: 5, md: 5 }}
                  sx={{
                    order: { xs: 1, sm: isManish ? 2 : 1 },
                    display: "flex",
                    alignItems: "stretch",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isManish ? 60 : -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ width: "100%", display: "flex" }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: { xs: "400px", sm: "100%" },
                        minHeight: { xs: "400px", sm: "500px", md: "600px" },
                        borderRadius: { xs: 3, sm: 4, md: 5 },
                        overflow: "hidden",
                        boxShadow: {
                          xs: "0 8px 24px rgba(0,0,0,0.12)",
                          sm: "0 12px 40px rgba(0,0,0,0.15)",
                        },
                        border: { xs: "3px solid rgba(123,218,87,0.4)", sm: "none" },
                      }}
                    >
                      <Box
                        component="img"
                        src={founder.image}
                        alt={founder.name}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                          transition: "transform 0.5s ease",
                          "&:hover": {
                            transform: "scale(1.05)",
                          },
                        }}
                        onError={(e) => {
                          // Fallback to a placeholder if image doesn't exist
                          const target = e.target as HTMLImageElement;
                          target.src = "https://via.placeholder.com/600x800/7bda57/ffffff?text=" + encodeURIComponent(founder.name);
                        }}
                      />
                      {/* Gradient overlay for better text readability if needed */}
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: "30%",
                          background: "linear-gradient(to top, rgba(0,0,0,0.3), transparent)",
                          display: { xs: "none", sm: "block" },
                        }}
                      />
                    </Box>
                  </motion.div>
                </Grid>

                {/* Text Content */}
                <Grid
                  size={{ xs: 12, sm: 7, md: 7 }}
                  sx={{
                    order: { xs: 2, sm: isManish ? 1 : 2 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    py: { xs: 2, sm: 3, md: 4 },
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.0, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ 
                      width: "100%", 
                      display: "flex", 
                      flexDirection: "column", 
                      height: "100%",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "12px", sm: "13px", md: "14px" },
                        color: "#7bda57",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        mb: { xs: 1, sm: 1.5 },
                      }}
                    >
                      {founder.role}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "24px", sm: "28px", md: "36px", lg: "42px" },
                        fontWeight: 900,
                        color: "#1d1d1f",
                        mb: { xs: 2, sm: 2.5, md: 3 },
                        lineHeight: 1.2,
                      }}
                    >
                      {founder.name}
                    </Typography>
                    {/* Mobile Description */}
                    <Typography
                      sx={{
                        display: { xs: "block", sm: "none" },
                        fontSize: "15px",
                        color: "#4a4a4a",
                        lineHeight: 1.7,
                      }}
                    >
                      {founder.descriptionMobile}
                    </Typography>
                    
                    {/* Desktop/Tablet Description */}
                    <Typography
                      sx={{
                        display: { xs: "none", sm: "block" },
                        fontSize: { sm: "16px", md: "18px" },
                        color: "#4a4a4a",
                        lineHeight: 1.6,
                      }}
                    >
                      {founder.description}
                    </Typography>
                  </motion.div>
                </Grid>
              </Grid>
            </Box>
          );
        })}
      </Container>
    </Box>
  );
}

