import React, { useState } from 'react';
import './App.css'; // Optional if you have additional CSS styles

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLetter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 h-screen flex justify-center items-center">
      <div className="relative">
        <div
          className={`transition-all duration-500 transform ${isOpen ? 'rotate-0' : 'rotate-12'} cursor-pointer`}
          onClick={toggleLetter}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Envelope_icon.svg"
            alt="Envelope"
            className="w-32 h-32"
          />
        </div>

        {isOpen && (
          <div className="absolute top-0 left-0 mt-16 bg-white p-6 rounded-xl shadow-xl w-96 max-w-full">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-pink-600 mb-4">A Letter for You</h2>
              <p className="text-lg text-gray-800">
                Hey there! I was wondering if you'd like to go on a date with me sometime. 😊
                Let me know if you're interested!
              </p>
              <div className="mt-4 text-right">
                <button
                  className="bg-pink-500 text-white px-4 py-2 rounded-lg"
                  onClick={toggleLetter}
                >
                  Close Letter
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
