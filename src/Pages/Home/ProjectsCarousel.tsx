import { useState, useRef, useEffect } from "react";
import { Box, Typography, Dialog, DialogTitle, DialogContent, Button } from "@mui/material";
import { motion } from "framer-motion";

interface SectorItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
}

const SECTORS: SectorItem[] = [
  {
    id: "homes",
    title: "Homes",
    subtitle: "Residential Solar",
    image: "/images/solar-house.jpeg",
    description:
      "High-efficiency rooftop solar designed for modern homes. Reduce bills, enjoy backup and long-term reliability.",
  },
  {
    id: "housing",
    title: "Housing Societies",
    subtitle: "Community Solar",
    image: "/images/solar-house.jpeg",
    description:
      "Shared solar for apartments and societies with optimized metering and scalable capacity.",
  },
  {
    id: "commercial",
    title: "Commercial",
    subtitle: "Business & Offices",
    image: "/images/solar-house.jpeg",
    description:
      "End-to-end solar plants for offices, malls and SMEs—maximize ROI with peak-hour savings.",
  },
  {
    id: "industrial",
    title: "Industrial",
    subtitle: "Factories & Warehouses",
    image: "/images/solar-house.jpeg",
    description:
      "MW-scale industrial solutions with robust engineering, safety and performance guarantees.",
  },
  {
    id: "schools",
    title: "Schools",
    subtitle: "Education Campuses",
    image: "/images/solar-house.jpeg",
    description:
      "Solar for schools and colleges to lower operating costs while promoting sustainability education.",
  },
  {
    id: "hospitals",
    title: "Hospitals",
    subtitle: "Healthcare Facilities",
    image: "/images/solar-house.jpeg",
    description:
      "Reliable solar with backup integration for critical healthcare infrastructure and steady operations.",
  },
  {
    id: "agriculture",
    title: "Agriculture",
    subtitle: "Farms & Irrigation",
    image: "/images/solar-house.jpeg",
    description:
      "Solar-powered pumps and barns to reduce diesel reliance and stabilize irrigation costs.",
  },
];

export default function ProjectsCarousel() {
  const [openId, setOpenId] = useState<string | null>(null);
  const current = SECTORS.find((s) => s.id === openId) || null;

  // Dots state
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handle = () => {
      const children = Array.from(el.children);
      if (!children.length) return;
      let bestIdx = 0;
      let bestDist = Infinity;
      children.forEach((child, idx) => {
        const c = child as HTMLElement;
        const dist = Math.abs(c.offsetLeft - el.scrollLeft);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = idx;
        }
      });
      setActiveIdx(bestIdx);
    };

    handle();
    el.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", handle);
    return () => {
      el.removeEventListener("scroll", handle as EventListener);
      window.removeEventListener("resize", handle);
    };
  }, []);

  const scrollToIndex = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const child = el.children[idx] as HTMLElement | undefined;
    if (!child) return;
    el.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
  };

  return (
    <Box sx={{ backgroundColor: "#F5F5F7", pt: { xs: 4, sm: 6 }, pb: { xs: 6, sm: 8 }, px: { xs: 2, sm: 4, md: 8 } }}>
      <Box sx={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", mb: 2 }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "26px", sm: "34px", md: "42px" },
            fontWeight: 700,
            lineHeight: 1.15,
            background: "linear-gradient(135deg, #1d1d1f 0%, #4a4a4a 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Projects & Sectors
        </Typography>
        {/* <Button
          variant="contained"
          sx={{
            backgroundColor: "#7bda57",
            color: "#fff",
            textTransform: "none",
            fontWeight: 600,
            borderRadius: "10px",
            px: 2,
            py: 1,
            boxShadow: "0px 6px 18px rgba(123,218,87,0.35)",
            "&:hover": { backgroundColor: "#6bc84a", transform: "translateY(-2px)" },
          }}
          onClick={() => setOpenId(SECTORS[0].id)}
        >
          View All
        </Button> */}
      </Box>

      {/* Horizontal scroll area */}
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          gap: { xs: 2, sm: 3 },
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          pb: 1,
          // Hide scrollbar and any track that may show as a vertical line at end
          msOverflowStyle: "none", // IE/Edge
          scrollbarWidth: "none", // Firefox
          "&::-webkit-scrollbar": { display: "none" }, // Chrome/Safari
        }}
      >
        {SECTORS.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            style={{ scrollSnapAlign: "start", minWidth: 280, maxWidth: 320, width: "80%" }}
            onClick={() => setOpenId(item.id)}
          >
            <Box
              sx={{
                cursor: "pointer",
                borderRadius: "16px",
                overflow: "hidden",
                backgroundColor: "#fff",
                boxShadow: "0 10px 24px rgba(0,0,0,0.1)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                "&:hover": { transform: "translateY(-4px)", boxShadow: "0 14px 32px rgba(0,0,0,0.14)" },
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{ width: "100%", height: 180, objectFit: "cover" }}
              />
              <Box sx={{ p: 2 }}>
                <Typography sx={{ fontSize: 14, color: "#6a6a6a", mb: 0.5 }}>{item.subtitle}</Typography>
                <Typography sx={{ fontWeight: 700, fontSize: 18, color: "#1d1d1f" }}>{item.title}</Typography>
                <Typography sx={{ fontSize: 13.5, color: "#555", mt: 0.75 }}>
                  {item.description}
                </Typography>
                <Box
                  sx={{
                    mt: 1.5,
                    color: "#7bda57",
                    fontWeight: 700,
                    fontSize: 14,
                    textDecoration: "underline",
                  }}
                >
                  Learn more
                </Box>
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>

      {/* Pagination dots */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2, gap: 0.75 }}>
        {SECTORS.map((_, i) => (
          <Box
            key={i}
            onClick={() => scrollToIndex(i)}
            sx={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              cursor: "pointer",
              transition: "all 0.25s ease",
              backgroundColor: i === activeIdx ? "#7bda57" : "rgba(0,0,0,0.18)",
              boxShadow: i === activeIdx ? "0 2px 8px rgba(123,218,87,0.45)" : "none",
            }}
          />
        ))}
      </Box>

      {/* Popup dialog */}
      <Dialog open={!!openId} onClose={() => setOpenId(null)} fullWidth maxWidth="sm">
        {current && (
          <>
            <DialogTitle sx={{ fontWeight: 800 }}>{current.title} — {current.subtitle}</DialogTitle>
            <DialogContent>
              <Box component="img" src={current.image} alt={current.title} sx={{ width: "100%", borderRadius: 2, mb: 2 }} />
              <Typography sx={{ color: "#4a4a4a", mb: 2 }}>{current.description}</Typography>
              <Typography sx={{ fontWeight: 700, mb: 0.5 }}>Ideal for:</Typography>
              <Typography sx={{ color: "#4a4a4a" }}>
                Cost reduction, energy independence, and fast ROI with clean power tailored to {current.title.toLowerCase()} needs.
              </Typography>
              <Box sx={{ display: "flex", gap: 1.5, mt: 2 }}>
                <Button variant="contained" sx={{ backgroundColor: "#7bda57", textTransform: "none", "&:hover": { backgroundColor: "#6bc84a" } }}>
                  See Projects
                </Button>
                <Button variant="outlined" sx={{ color: "#7bda57", borderColor: "#7bda57", textTransform: "none", "&:hover": { borderColor: "#6bc84a", color: "#6bc84a" } }}>
                  Get Consultation
                </Button>
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
}
