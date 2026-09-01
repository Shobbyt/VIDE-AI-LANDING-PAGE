import { motion } from "motion/react";

const drops = [
  { left: "5%", delay: 0, duration: 7, size: 12 },
  { left: "12%", delay: 2, duration: 9, size: 9 },
  { left: "19%", delay: 4, duration: 8, size: 11 },
  { left: "27%", delay: 1, duration: 10, size: 13 },
  { left: "34%", delay: 5, duration: 7, size: 9 },
  { left: "41%", delay: 2, duration: 9, size: 11 },
  { left: "48%", delay: 6, duration: 8, size: 13 },
  { left: "55%", delay: 3, duration: 10, size: 9 },
  { left: "62%", delay: 1, duration: 7, size: 11 },
  { left: "69%", delay: 5, duration: 9, size: 13 },
  { left: "76%", delay: 2, duration: 8, size: 9 },
  { left: "83%", delay: 4, duration: 10, size: 11 },
  { left: "90%", delay: 0, duration: 7, size: 13 },
  { left: "96%", delay: 6, duration: 9, size: 9 },
];

const AnimatedBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">

      {drops.map((drop, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-[#006251]"
          style={{
            left: drop.left,
            width: drop.size,
            height: drop.size,
          }}
          animate={{
            top: ["-5%", "105%"],
            opacity: [0, 0.25, 0.25, 0],
            scale: [0.8, 1, 1.15, 0.8],
          }}
          transition={{
            duration: drop.duration,
            delay: drop.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

    </div>
  );
};

export default AnimatedBackground;