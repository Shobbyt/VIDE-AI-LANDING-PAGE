import { motion } from "motion/react";
import viLogo from "../public/VI-LOGO.png";

const LoadingScreen = () => {
  const letters = ["V", "I", "D", "E"];

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#fdfaf0]"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{
        delay: 6,
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      }}
    >

      {/* GREEN CIRCLE */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#006251]"
        initial={{ scale: 0 }}
        animate={{ scale: 30 }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
        }}
      />

      {/* VI LOGO
          COMES FROM ABOVE
          STOPS ABOVE VIDE
      */}
      <motion.img
        src={viLogo}
        alt="VI Logo"
        className="absolute z-20 h-28 w-28 object-contain"
        initial={{
          opacity: 0,
          y: -300,
        }}
        animate={{
          opacity: 1,
          y: -55,
        }}
        transition={{
          opacity: {
            delay: 0.5,
            duration: 0,
          },
          y: {
            delay: 0.5,
            duration: 1,
            ease: "easeOut",
          },
        }}
      />

      {/* VIDE
          EACH LETTER COMES FROM THE RIGHT
      */}
      <div
        className="absolute z-20 flex items-center gap-2"
        style={{
          marginTop: "90px",
        }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={letter}
            style={{
              fontFamily: "Lastica, sans-serif",
              color: "#ffffff",
              fontSize: "56px",
              lineHeight: 1,
              display: "block",
            }}
            initial={{
              opacity: 0,
              x: 100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 1.8 + index * 0.4,
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

    </motion.div>
  );
};

export default LoadingScreen;