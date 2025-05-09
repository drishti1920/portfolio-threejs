import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrollPosition > 50
          ? "bg-white/90 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <motion.a
          href="#hero"
          className="text-2xl font-bold text-[#626F47]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          drishti<span className="text-[#d4a373]">Portfolio</span>
        </motion.a>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="font-medium text-gray-700 hover:text-[#626F47] transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item.name}
            </motion.a>
          ))}

          <div className="flex items-center space-x-4">
            <motion.a
              href="https://github.com/drishti1920"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Github className="h-5 w-5 text-gray-700 hover:text-[#626F47]" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/drishti-saraf/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Linkedin className="h-5 w-5 text-gray-700 hover:text-[#626F47]" />
            </motion.a>
          </div>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-white z-50 flex flex-col p-5"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-between items-center mb-10">
            <a href="#hero" className="text-2xl font-bold text-[#626F47]">
              drishti<span className="text-[#d4a373]">Portfolio</span>
            </a>
            <button onClick={() => setIsMenuOpen(false)}>
              <X className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          <nav className="flex flex-col space-y-6 items-center text-xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-medium text-gray-700 hover:text-[#626F47] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="mt-auto flex justify-center space-x-8 py-6">
            <a
              href="https://github.com/drishti1920"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6 text-gray-700 hover:text-[#626F47]" />
            </a>
            <a
              href="https://www.linkedin.com/in/drishti-saraf/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6 text-gray-700 hover:text-[#626F47]" />
            </a>
            <a href="mailto:hello@example.com">
              <Mail className="h-6 w-6 text-gray-700 hover:text-[#626F47]" />
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
