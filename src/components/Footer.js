const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Connect with us</h3>
            <p className="text-gray-400">Stay updated on social media</p>
          </div>

          <div className="flex space-x-4">
            <a
              href="/"
              className="hover:text-blue-500 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="/"
              className="hover:text-blue-500 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="/"
              className="hover:text-blue-500 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} EV395. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
