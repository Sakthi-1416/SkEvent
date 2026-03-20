const socials = [
  { icon: "bi-instagram", label: "Instagram", href: "https://www.instagram.com/_sk_even_t" },
  { icon: "bi-facebook", label: "Facebook", href: "#" },
  { icon: "bi-youtube", label: "YouTube", href: "#" },
];

const footerLinks = ["Privacy Policy", "Terms of Service", "Sitemap"];

const contactDetails = [
  {
    icon: "bi-geo-alt",
    value: "Kadukarai, Kanyakumari, Tamil Nadu",
  },
  {
    icon: "bi-telephone",
    value: "+91 75988 38061 | +91 85250 58302",
  },
  {
    icon: "bi-envelope",
    value: "sumithkaran15071999@gmail.com",
  },
  {
    icon: "bi-globe",
    value: "www.skevent.co.in",
    href: "http://www.skevent.co.in",
  },
];

export default function Footer() {
  return (
    <footer className="sk-footer">
      <div className="container">

        {/* Top row — Logo + Contact + Socials */}
        <div className="row g-5 mb-4">

          {/* Logo + tagline */}
          <div className="col-12 col-md-4">
            <a href="#home" className="d-flex align-items-center gap-3 text-decoration-none mb-3">
              <div className="sk-logo-box">
                <span className="sk-logo-text">SK</span>
              </div>
              <div>
                <div className="sk-brand-name">SK Events</div>
                <div className="sk-brand-sub">A to Z Event Planners</div>
              </div>
            </a>
            <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.3)", lineHeight: 1.8 }}>
              Creating unforgettable moments across Kanyakumari and beyond — from stage decoration to grand corporate events.
            </p>
          </div>

          {/* Contact details */}
          <div className="col-12 col-md-4">
            <div className="footer-heading mb-3">Contact Us</div>
            <div className="d-flex flex-column gap-3">
              {contactDetails.map((c) => (
                <div className="d-flex align-items-start gap-2" key={c.value}>
                  <i className={`bi ${c.icon}`} style={{ color: "var(--gold)", fontSize: "0.85rem", marginTop: 2, flexShrink: 0 }}></i>
                  {c.href ? (
                    <a href={c.href} className="footer-link" target="_blank" rel="noopener noreferrer">
                      {c.value}
                    </a>
                  ) : (
                    <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
                      {c.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick links + Socials */}
          <div className="col-12 col-md-4">
            <div className="footer-heading mb-3">Follow Us</div>
            <div className="d-flex gap-2 mb-4">
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="social-btn" aria-label={s.label} target="_blank" rel="noopener noreferrer">
                  <i className={`bi ${s.icon}`}></i>
                </a>
              ))}
            </div>
            <div className="footer-heading mb-3">Quick Links</div>
            <div className="d-flex flex-column gap-2">
              {["#home", "#services", "#works", "#gallery", "#about", "#contact"].map((href) => (
                <a key={href} href={href} className="footer-link">
                  {href.replace("#", "").charAt(0).toUpperCase() + href.replace("#", "").slice(1)}
                </a>
              ))}
            </div>
          </div>

        </div>

        <hr className="gold-line mb-4" />

        {/* Bottom row */}
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
          <p className="footer-copyright mb-0">© 2025 <a className="text-decoration-none text-danger" target="_blank" href="https:zaclab.in">Zaclab</a>. All Rights Reserved.</p>
          <div className="d-flex gap-4">
            {footerLinks.map((l) => (
              <a key={l} href="#" className="footer-link">{l}</a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}