import React from "react";
import { motion } from "framer-motion";

const TransitionSection = () => {
  return (
    <motion.div
      className="relative w-full h-32 bg-gray-900 overflow-hidden flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Fondo animado */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 opacity-50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      ></motion.div>
      
      {/* Líneas animadas */}
      <motion.div
        className="absolute w-2/3 h-[1px] bg-gray-400 opacity-30"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      ></motion.div>
      
      <motion.h2
        className="relative text-white text-3xl md:text-4xl font-bold tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Explora Nuestro Parque Industrial
      </motion.h2>
    </motion.div>
  );
};

export default TransitionSection;
