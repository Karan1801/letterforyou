// src/App.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

function App() {
// src/App.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-red-200 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6 text-red-600">💌 A Special Note Awaits 💌</h1>

        {!isOpen && (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-red-200 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6 text-red-600">💌 A Special Note Awaits 💌</h1>

        {!isOpen && (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="cursor-pointer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3534/3534060.png"
              alt="Envelope"
              className="w-32 h-32 mx-auto"
            className="cursor-pointer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3534/3534060.png"
              alt="Envelope"
              className="w-32 h-32 mx-auto"
            />
            <p className="text-pink-700 mt-3 font-medium">Click to open</p>
            <p className="text-pink-700 mt-3 font-medium">Click to open</p>
          </motion.div>
        )}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
              className="mt-8 bg-white rounded-xl shadow-xl p-6 max-w-md mx-auto"
            >
              <h2 className="text-2xl font-bold text-red-500 mb-4">Will You Go on a Date With Me? 💖</h2>
              <p className="text-gray-700 text-lg">
                I’ve been thinking about you all day and was wondering if you’d like to go out with me sometime this week.
              </p>
              <p className="mt-4 text-gray-700 italic">Let me know… I’m already excited 💕</p>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="mt-6 bg-pink-500 text-white px-5 py-2 rounded-full shadow hover:bg-pink-600 transition"
                onClick={() => alert("Yay! Let's plan it soon ❤️")}
              >
                Yes, I’d love to!
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
        )}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
              className="mt-8 bg-white rounded-xl shadow-xl p-6 max-w-md mx-auto"
            >
              <h2 className="text-2xl font-bold text-red-500 mb-4">Will You Go on a Date With Me? 💖</h2>
              <p className="text-gray-700 text-lg">
                I’ve been thinking about you all day and was wondering if you’d like to go out with me sometime this week.
              </p>
              <p className="mt-4 text-gray-700 italic">Let me know… I’m already excited 💕</p>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="mt-6 bg-pink-500 text-white px-5 py-2 rounded-full shadow hover:bg-pink-600 transition"
                onClick={() => alert("Yay! Let's plan it soon ❤️")}
              >
                Yes, I’d love to!
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;

export default App;
