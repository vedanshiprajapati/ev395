import image from "../Utils/illustration.png";

// Body.js
import React from "react";
import { useSpring, animated } from "react-spring";

const Body = () => {
  // Parallax animation for the illustration
  const parallaxAnimation = useSpring({
    from: { transform: "translateY(10%)" },
    to: { transform: "translateY(0%)" },
    config: { tension: 50 },
  });

  // Spring animation for the text
  const textAnimation = useSpring({
    opacity: 1,
    marginLeft: "0%",
    from: { opacity: 0, marginLeft: "5%" },
    config: { duration: 1000 },
  });

  return (
    <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between p-8 bg-gray-100 h-[90vh]">
      {/* Parallax effect on the illustration */}
      <animated.img
        src={image}
        alt="Illustration"
        className="w-full md:w-1/2 h-auto mb-8 md:mb-0"
        style={parallaxAnimation}
      />

      {/* Text with enhanced spring animation */}
      <animated.div style={{ ...textAnimation }} className="md:w-1/2">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-blue-700 mb-6 text-gradient-blue">
          Welcome to X-TASY Prerelease
        </h2>
        <p className="text-sm md:text-lg lg:text-xl text-gray-800 mb-4">
          Discover the latest features and innovations in our upcoming app. Be
          part of the excitement and join us on this journey.
        </p>
        <p className="text-sm md:text-lg lg:text-xl text-gray-800 mb-4">
          With X-TASY, experience a new level of convenience and functionality.
          Stay tuned for more updates!
        </p>
      </animated.div>
    </div>
  );
};

export default Body;
