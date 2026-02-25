// Footer.jsx
import { memo } from 'react';
import sklogo from '../assests/logoSk.png';

// Static data moved outside component
const socials = [
  { 
    icon: "bi-instagram", 
    label: "Instagram", 
    href: "https://www.instagram.com/_sk_even_t",
    rel: "noopener noreferrer" 
  },
  // Add other socials when ready:
  // { icon: "bi-facebook", label: "Facebook", href: "#" },
  // { icon: "bi-youtube", label: "YouTube", href: "#" },
];

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Sitemap", href: "/sitemap.xml" },
];

const currentYear = new Date().getFullYear();

// Memoized social link component
const SocialLink = memo(({ social }) => (
  <a 
    key={social.label}
    href={social.href}
    className="social-btn"
    target="_blank"
    rel={social.rel}
    aria-label={`Follow us on ${social.label}`}
  >
    <i className={`bi ${social.icon}`} aria-hidden="true"></i>
  </a>
));

SocialLink.displayName = 'SocialLink';

// Memoized footer link component
const FooterLink = memo(({ link }) => (
  <a 
    key={link.label}
    href={link.href}
    className="footer-link"
    aria-label={link.label}
  >
    {link.label}
  </a>
));

FooterLink.displayName = 'FooterLink';

// Main component
const Footer = memo(() => {
  return (
    <footer className="sk-footer" role="contentinfo">
      <div className="container">
        {/* Top section with logo and socials */}
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-4 mb-4">
          {/* Logo */}
          <a 
            href="#home" 
            className="d-flex align-items-center gap-3 text-decoration-none"
            aria-label="SK Events - Back to home"
          >
            <div className="footer-logo-container">
              <img 
                src={sklogo} 
                className="sklogo-footer" 
                alt="SK Events Logo"
                width="100"
                height="100"
                loading="lazy"
              />
            </div>
          </a>

          {/* Socials */}
          <div className="d-flex gap-2" role="list" aria-label="Social media links">
            {socials.map((social) => (
              <SocialLink key={social.label} social={social} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="gold-line mb-4" aria-hidden="true" />

        {/* Bottom section with copyright and links */}
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
          <p className="footer-copyright mb-0">
            © {currentYear}{' '}
            <a 
              href="#" 
              className="footer-brand-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zac lab (opens in new tab)"
            >
              Zac lab
            </a>{' '}
            All Rights Reserved.
          </p>
          
          <nav aria-label="Footer navigation">
            <ul className="footer-nav-list d-flex gap-4">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink link={link} />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;