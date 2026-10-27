import { Link } from "react-router-dom";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/services/custom-software", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="bg-navy text-white border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          {/* Brand column */}
          <div>
            <Link
              to="/"
              className="inline-block mb-4 focus-visible:outline-2 focus-visible:outline-orange rounded-lg"
              aria-label="AIIDL Technologies — Home"
            >
              <div className="bg-white rounded-lg px-3 py-1.5 shadow-sm inline-flex items-center">
                <img
                  src="/aiidl-logo.png"
                  alt="AIIDL Technologies"
                  className="h-8 w-auto object-contain block"
                />
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Engineering custom software solutions with precision, purpose, and
              a commitment to lasting partnerships.
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-white/45 mb-4">
              Navigation
            </h3>
            <nav aria-label="Footer navigation" className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-white/70 hover:text-white text-sm transition-colors duration-200 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA column */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-white/45 mb-4">
              Get in Touch
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Have a project in mind? We'd love to hear about it.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-orange hover:text-orange-hover text-sm font-semibold transition-colors duration-200"
            >
              Start a conversation
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-12 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} AIIDL Technologies. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Designed & developed as a candidate assignment.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
