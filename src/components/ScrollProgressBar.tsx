import { Box } from "@mui/material";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "4px",
        zIndex: 9999,
        transformOrigin: "0%",
        backgroundColor: "rgba(123,218,87,0.2)",
      }}
    >
      <motion.div
        style={{
          scaleX,
          transformOrigin: "0%",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(90deg, #7bda57, #68c54b)",
          boxShadow: "0 0 10px rgba(123,218,87,0.5)",
        }}
      />
    </Box>
  );
}

