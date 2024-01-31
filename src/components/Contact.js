import { useSpring, animated } from "react-spring";

const Contact = () => {
  const movementAnimation = useSpring({
    from: { transform: "translateY(20px)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
    config: { duration: 800 },
  });

  return (
    <animated.div
      className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4 md:p-8 lg:p-12"
      style={movementAnimation}
    >
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-700 mb-6">
        Contact Us
      </h2>

      <p className="text-base md:text-lg lg:text-lg text-gray-800 mb-4">
        We'd love to hear from you! Feel free to reach out with any questions,
        suggestions, or just to say hello.
      </p>

      <div className="flex items-center mt-4">
        <p className="text-base md:text-lg lg:text-lg text-gray-800">
          Email: xtasy.social@gmail.com
        </p>
      </div>
    </animated.div>
  );
};

export default Contact;
