const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-600 via-gray-400 to-gray-200 shadow-md p-5 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold font-serif text-shadow-md">
          EV395
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/about" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="/download" className="hover:text-gray-300">
                Download
              </a>
            </li>
            <li>
              <a href="/features" className="hover:text-gray-300">
                Features
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-gray-300">
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
