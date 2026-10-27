import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services/custom-software", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 relative bg-navy/95 backdrop-blur-md border-b border-white/[0.08]">
      <nav
        className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo in warm-white container for high contrast */}
        <Link
          to="/"
          className="flex items-center gap-3 shrink-0 focus-visible:outline-2 focus-visible:outline-orange rounded-lg"
          aria-label="AIIDL Technologies — Home"
        >
          <div className="bg-white rounded-lg px-3 py-1.5 shadow-sm border border-white/20 flex items-center transition-transform hover:scale-[1.02]">
            <img
              src="/aiidl-logo.png"
              alt="AIIDL Technologies"
              className="h-8 w-auto object-contain block"
            />
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-orange bg-orange/10 font-semibold"
                    : "text-white/80 hover:text-white hover:bg-white/[0.06]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-3 bg-orange hover:bg-orange-hover text-white text-sm font-semibold px-4.5 py-2 rounded-xl transition-all duration-200 shadow-sm shadow-orange/25 hover:shadow-orange/40 hover:-translate-y-0.5"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden text-white/85 hover:text-white p-2 -mr-2 rounded-lg transition-colors cursor-pointer"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div
          id="mobile-nav"
          className="absolute top-full left-0 right-0 md:hidden bg-navy border-t border-white/[0.08] px-6 pb-6 pt-3 shadow-xl"
          role="navigation"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block py-3 text-[0.95rem] font-medium border-b border-white/[0.06] transition-colors duration-200 ${
                  isActive ? "text-orange font-semibold" : "text-white/80"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={closeMenu}
            className="block mt-5 bg-orange hover:bg-orange-hover text-white text-center font-semibold px-5 py-3 rounded-xl transition-colors duration-200 shadow-md shadow-orange/20"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
