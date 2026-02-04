import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false)
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            onClick={handleLogoClick}
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <motion.svg
              viewBox="0 0 24 24"
              className="w-5 h-5 sm:w-6 sm:h-6 text-foreground"
              fill="currentColor"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* A minimalist combination of a bracket and a pixel square */}
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2-9.2L19.2 12l-4.6 4.6L16 18l6-6-6-6-1.4 1.4zM11 11h2v2h-2v-2z" />
            </motion.svg>
            <span className="text-lg sm:text-xl font-bold tracking-tight">
              Pixel2code
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            {/* Login option disable for sometime */}
            {/* <Link
              to="/auth"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors rounded-full border border-border bg-card"
            >
              Login
            </Link> */}
            <a
              href="#book"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors rounded-full border border-border bg-card"
            >
              <Phone className="w-4 h-4" />
              Book a call
            </a>
            <a
              href="#pricing"
              className="px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
            >
              See pricing
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border mt-3 animate-fade-in min-h-screen">
            <div className="flex flex-col gap-3">
              {/* Login option disable for sometime */}
              {/* <Link
                to="/auth"
                className="px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors rounded-xl border border-border bg-card text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link> */}
              <a
                href="#book"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors rounded-xl border border-border bg-card"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="w-4 h-4" />
                Book a call
              </a>
              <a
                href="#pricing"
                className="px-5 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                See pricing
              </a>
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
