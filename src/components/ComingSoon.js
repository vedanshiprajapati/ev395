// ComingSoon.js
import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const ComingSoon = () => {
  // Background gradient animation
  const backgroundAnimation = useSpring({
    from: { background: "linear-gradient(135deg, #667eea, #764ba2, #6B8E23)" },
    to: { background: "linear-gradient(135deg, #E55D87, #5FC3E4, #74CF68)" },
    config: { duration: 6000, loop: true },
  });

  // Rocket and text animations
  const rocketAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 800 },
  });

  const textAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 800, delay: 300 },
  });

  return (
    <animated.div
      className="flex flex-col items-center justify-center h-screen text-white"
      style={backgroundAnimation}
    >
      <animated.div style={rocketAnimation}>
        <div className="bg-white text-blue-900 p-4 rounded-full mb-6 transform hover:scale-110 transition duration-300">
          <span role="img" aria-label="Rocket" className="text-4xl">
            🚀
          </span>
        </div>
      </animated.div>

      <animated.div style={textAnimation} className="text-center">
        <h1 className="text-5xl font-bold mb-4">Exciting News!</h1>
        <p className="text-lg mb-8">
          We're launching something incredible. Get ready for an amazing
          experience!
        </p>

        <p className="text-lg mt-8">
          <strong className="animate__animated animate__fadeIn animate__delay-1s">
            Stay tuned
          </strong>{" "}
          for updates and sneak peeks.
        </p>

        <p className="text-sm mt-4 animate__animated animate__fadeIn animate__delay-2s">
          In the meantime, explore our{" "}
          <Link to="/about" className="underline">
            about page
          </Link>{" "}
          for more information.
        </p>
        <Link
          to="/"
          className="bg-white text-blue-500 py-2 px-4 mt-8 rounded-full inline-block hover:bg-blue-500 hover:text-white transition-all"
        >
          Go Back to Home
        </Link>
      </animated.div>
    </animated.div>
  );
};

export default ComingSoon;
