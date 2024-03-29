import { motion } from "framer-motion";

export function MusicBars() {
  return (
    <div className="flex items-center justify-center space-x-1">
      <motion.div
        className="h-2 w-1 bg-brand-spotify-dark"
        initial={{ scaleY: 0.5, opacity: 1 }}
        animate={{
          scaleY: 0.5,
          opacity: 0.2,
          y: [0, -2, -1, 3],
          transition: {
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      ></motion.div>
      <motion.div
        className="h-3 w-1 bg-brand-spotify"
        initial={{ scaleY: 0.6, opacity: 1 }}
        animate={{
          scaleY: 0.6,
          opacity: 0.5,
          y: [3, 0, -3, 1],
          transition: {
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      ></motion.div>
      <motion.div
        className="h-2 w-1 bg-brand-spotify"
        initial={{ scaleY: 0.5, opacity: 1 }}
        animate={{
          scaleY: 0.8,
          opacity: 0.5,
          y: [3, -1, 2, -1],
          transition: {
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      ></motion.div>
    </div>
  );
}
