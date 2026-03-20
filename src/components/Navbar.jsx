import { useState, useEffect } from "react";
import sklogo from '../assests/logoSk.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    // { label: "Our Works", href: "#works" },
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav className={`sk-navbar navbar navbar-expand-lg  fixed-top ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center gap-3" href="#home">
         <div className="sklogo">
          <img src={sklogo} className="logo-sk" alt="sklogo" />
         </div>
        </a>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#skNavMenu"
          aria-controls="skNavMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggler-bar"></span>
          <span className="toggler-bar mid"></span>
          <span className="toggler-bar"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="skNavMenu">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3 gap-2 py-3 py-lg-0">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.label}>
                <a className="nav-link nav-link-sk" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <a className="btn-gold" href="#contact">
                <span>Get In Touch</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
