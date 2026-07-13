import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../assets/TakumiLogo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/greenhouse", label: "Our Greenhouse" },
  { href: "/quality", label: "Quality" },
  { href: "/careers", label: "Careers" },
];

export default function Header() {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll ke atas saat pindah halaman
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Tutup menu mobile saat pindah halaman
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarActive = scrolled || isOpen;

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        transition-colors
        duration-300
        ${
          navbarActive
            ? "bg-white shadow-sm"
            : "bg-transparent"
        }
      `}
    >
      <nav
        className="
          max-w-[1440px]
          mx-auto
          h-20
          px-6
          lg:px-12
          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}

        <Link to="/">
          <img
            src={logo}
            alt="Takumi Greenhouse"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* ==========================
            Desktop Menu
        =========================== */}

        <div className="hidden lg:flex items-center gap-8">

          {navLinks.map(({ href, label }) => (

            <NavLink
              key={href}
              to={href}
            >
              {({ isActive }) => (

                <div className="relative">

                  <span
                    className={`
                      text-sm
                      font-medium
                      transition-colors
                      duration-300
                      ${
                        navbarActive
                          ? isActive
                            ? "text-primary"
                            : "text-text-dark hover:text-primary"
                          : isActive
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                      }
                    `}
                  >
                    {label}
                  </span>

                  <span
                    className={`
                      absolute
                      left-0
                      -bottom-2
                      h-[2px]
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "w-full opacity-100"
                          : "w-0 opacity-0"
                      }
                      ${
                        navbarActive
                          ? "bg-primary"
                          : "bg-white"
                      }
                    `}
                  />

                </div>

              )}
            </NavLink>

          ))}

          <Link
            to="/contact"
            className={`
              px-5
              py-2.5
              rounded-lg
              text-sm
              font-semibold
              transition-all
              duration-300
              ${
                navbarActive
                  ? "bg-primary text-white hover:bg-primary-dark"
                  : "border border-white/30 bg-white/10 text-white hover:bg-white/20"
              }
            `}
          >
            Contact Us
          </Link>

        </div>

        {/* Mobile Button + Dropdown */}
        <div className="lg:hidden relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`
              transition-colors
              duration-300
              ${
                navbarActive
                  ? "text-text-dark"
                  : "text-white"
              }
            `}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile dropdown menu */}
          {isOpen && (
            <div className="absolute top-full right-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-100/80 overflow-hidden z-50">
              <div className="flex flex-col p-2">
                {navLinks.map(({ href, label }) => {
                  const isActive = location.pathname === href;
                  return (
                    <Link
                      key={href}
                      to={href}
                      onClick={() => setIsOpen(false)}
                      className={`text-sm font-medium px-4 py-3 rounded-lg transition-all ${
                        isActive
                          ? 'text-primary bg-primary/5'
                          : 'text-text-dark hover:text-primary hover:bg-gray-50'
                      }`}
                    >
                      {label}
                    </Link>
                  );
                })}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-semibold px-4 py-3 rounded-lg bg-primary text-white text-center mt-1 hover:bg-primary-dark transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>

      </nav>
    </header>
  );
}