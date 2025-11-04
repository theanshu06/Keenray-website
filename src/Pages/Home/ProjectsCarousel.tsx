import { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  IconButton,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

interface FeedbackItem {
  id: string;
  name: string;
  role: string;
  image: string;
  feedback: string;
  rating: number;
}

const FEEDBACKS: FeedbackItem[] = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "Homeowner, Delhi",
    image: "/images/solar-house.jpeg",
    feedback:
      "Solar installation was seamless and efficient. My electricity bills have dropped by 60%! Highly recommend their team.",
    rating: 4.5,
  },
  {
    id: "2",
    name: "Amit Patel",
    role: "Factory Owner, Gujarat",
    image: "/images/solar-house.jpeg",
    feedback:
      "Their industrial solar setup runs flawlessly. Great ROI and excellent post-installation service!",
    rating: 4.0,
  },
  {
    id: "3",
    name: "Rohit Kumar",
    role: "School Principal, Lucknow",
    image: "/images/solar-house.jpeg",
    feedback:
      "Our campus now runs on clean energy. Students are more aware of sustainability thanks to their initiative.",
    rating: 5.0,
  },
  {
    id: "4",
    name: "Sneha Verma",
    role: "Apartment Society Secretary, Pune",
    image: "/images/solar-house.jpeg",
    feedback:
      "We switched to community solar and it’s saving us a lot. Transparent pricing and solid support.",
    rating: 4.2,
  },
  {
    id: "5",
    name: "Manoj Singh",
    role: "Hospital Administrator, Noida",
    image: "/images/solar-house.jpeg",
    feedback:
      "Reliable solar with backup integration—our critical equipment never faces downtime anymore!",
    rating: 3.5,
  },
];

// 🌟 Custom rating stars
const RatingStars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 0.6, mt: 1 }}>
      {[...Array(5)].map((_, i) => {
        const filled = i < fullStars || (i === fullStars && halfStar);
        const opacity = filled ? 1 : 0.25;
        return (
          <Star
            key={i}
            sx={{
              color: filled ? "#FFD700" : "#B0B0B0",
              filter: filled
                ? "drop-shadow(0 0 6px rgba(255,215,0,0.6))"
                : "drop-shadow(0 0 1px rgba(0,0,0,0.1))",
              opacity,
              fontSize: "20px",
              transition: "all 0.3s ease",
            }}
          />
        );
      })}
    </Box>
  );
};

export default function FeedbackCarousel() {
  const [openId, setOpenId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  

  // Detect active index while scrolling
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
        const dist = Math.abs(
          c.offsetLeft -
            el.scrollLeft -
            el.clientWidth / 2 +
            c.clientWidth / 2
        );
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

  // Scroll to card index
  const scrollToIndex = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const child = el.children[idx] as HTMLElement | undefined;
    if (!child) return;
    el.scrollTo({
      left:
        child.offsetLeft -
        el.clientWidth / 2 +
        child.clientWidth / 2,
      behavior: "smooth",
    });
  };

  const handlePrev = () => scrollToIndex(Math.max(activeIdx - 1, 0));
  const handleNext = () =>
    scrollToIndex(Math.min(activeIdx + 1, FEEDBACKS.length - 1));

  const current = FEEDBACKS.find((f) => f.id === openId) || null;

  return (
    <Box
      sx={{
        background: "linear-gradient(145deg, #f5f7fa, #dfe9f3)",
        pt: { xs: 4, sm: 6 },
        pb: { xs: 6, sm: 8 },
        px: { xs: 2, sm: 4, md: 8 },
        textAlign: "center",
        position: "relative",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "26px", sm: "34px", md: "42px" },
          fontWeight: 700,
          mb: 5,
          background: "linear-gradient(135deg, #111, #333)",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        What Our Customers Say
      </Typography>

      {/* Navigation Arrows */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          left: 10,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          backgroundColor: "rgba(255,255,255,0.8)",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          "&:hover": { backgroundColor: "#7bda57", color: "#fff" },
        }}
      >
        <ArrowBackIos fontSize="small" />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: 10,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          backgroundColor: "rgba(255,255,255,0.8)",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          "&:hover": { backgroundColor: "#7bda57", color: "#fff" },
        }}
      >
        <ArrowForwardIos fontSize="small" />
      </IconButton>

      {/* Scrollable Cards */}
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          gap: { xs: 2, sm: 3 },
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          pb: 2,
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {FEEDBACKS.map((item, idx) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            style={{
              scrollSnapAlign: "center",
              minWidth: 260,
              maxWidth: 280,
              flexShrink: 0,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                cursor: "pointer",
                borderRadius: "22px",
                backdropFilter: "blur(14px)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(245,245,245,0.65))",
                border: "1px solid rgba(255,255,255,0.4)",
                boxShadow:
                  idx === activeIdx
                    ? "0 12px 36px rgba(123,218,87,0.45)"
                    : "0 8px 20px rgba(0,0,0,0.1)",
                // transform: idx === activeIdx ? "scale(1.05)" : "scale(0.95)",
                transition: "all 0.35s ease",
                p: 2.5,
                textAlign: "center",
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.name}
                sx={{
                  width: idx === activeIdx ? 95 : 75,
                  height: idx === activeIdx ? 95 : 75,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px solid #7bda57",
                  mx: "auto",
                  mb: 1.5,
                  transition: "all 0.3s ease",
                }}
              />
              <Typography sx={{ fontWeight: 700, color: "#1d1d1f" }}>
                {item.name}
              </Typography>
              <Typography sx={{ fontSize: 13, color: "#6a6a6a", mb: 1 }}>
                {item.role}
              </Typography>
              <RatingStars rating={item.rating} />
              <Typography sx={{ fontSize: 14, color: "#444", mt: 1 }}>
                {item.feedback.length > 85
                  ? item.feedback.slice(0, 85) + "..."
                  : item.feedback}
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  mt: 2,
                  borderRadius: "10px",
                  textTransform: "none",
                  borderColor: "#7bda57",
                  color: "#7bda57",
                  "&:hover": { backgroundColor: "rgba(123,218,87,0.1)" },
                }}
                onClick={() => setOpenId(item.id)}
              >
                Learn More
              </Button>
            </Card>
          </motion.div>
        ))}
      </Box>

      {/* Dots */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3, gap: 0.75 }}>
        {FEEDBACKS.map((_, i) => (
          <Box
            key={i}
            onClick={() => scrollToIndex(i)}
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              cursor: "pointer",
              transition: "all 0.25s ease",
              backgroundColor: i === activeIdx ? "#7bda57" : "rgba(0,0,0,0.2)",
              boxShadow: i === activeIdx ? "0 2px 8px rgba(123,218,87,0.45)" : "none",
            }}
          />
        ))}
      </Box>

      {/* Expanded Modal  need responsiveness for phone or pixle less than 600*/}
      <AnimatePresence>
        {current && (
          <motion.div
            key={current.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 3000,
              padding: "20px",
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                sx={{
                  maxWidth: 420,
                  borderRadius: "26px",
                  backdropFilter: "blur(20px)",
                  backgroundColor: "rgba(255,255,255,0.9)",
                  boxShadow: "0 15px 50px rgba(0,0,0,0.25)",
                  p: 4,
                  textAlign: "center",
                }}
              >
                <Box
                  component="img"
                  src={current.image}
                  alt={current.name}
                  sx={{
                    width: 110,
                    height: 110,
                    borderRadius: "50%",
                    border: "5px solid #7bda57",
                    objectFit: "cover",
                    mb: 2,
                    mx: "auto",
                  }}
                />
                <Typography variant="h6" fontWeight="bold">
                  {current.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "#777", mb: 1 }}>
                  {current.role}
                </Typography>
                <RatingStars rating={current.rating} />
                <Typography sx={{ color: "#4a4a4a", mt: 2, fontSize: 15 }}>
                  “{current.feedback}”
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 3,
                    borderRadius: "10px",
                    backgroundColor: "#7bda57",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#6bc84a" },
                  }}
                  onClick={() => setOpenId(null)}
                >
                  Close
                </Button>
              </Card>a
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}
