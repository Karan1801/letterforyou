import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export default function RomanticLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 flex items-center justify-center relative overflow-hidden px-4">
      {/* Floating hearts */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-xl sm:text-3xl md:text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              color: 'red',
            }}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -100 }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
              delay: Math.random() * 2,
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="z-10 w-full max-w-md flex justify-center items-center">
        {!isOpen ? (
          <motion.div
            className="cursor-pointer bg-white shadow-xl rounded-2xl p-6 md:p-8 text-center transform transition-all duration-300"
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.05 }}
          >
            <FontAwesomeIcon
              icon={faEnvelopeOpenText}
              className="text-red-500 text-5xl md:text-6xl"
            />
            <p className="mt-4 text-base md:text-lg font-medium text-gray-700">
              Click to open
            </p>
          </motion.div>
        ) : (
          <motion.div
            className="bg-white shadow-xl rounded-2xl p-6 md:p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-pink-600 mb-4">
              To the one who makes my heart skip 💌
            </h1>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
              Would you like to go on a date with me? 💖 <br />
              I promise laughter, sweet moments, and a memory to cherish. 🌹
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
