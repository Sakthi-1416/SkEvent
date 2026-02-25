const values = [
  { label: "Precision", desc: "Every detail is intentional and flawless." },
  { label: "Elegance", desc: "Beauty that elevates every experience." },
  { label: "Passion", desc: "We pour our heart into every event." },
  { label: "Trust", desc: "Your vision is always in safe hands." },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Image */}
          <div className="col-12 col-lg-5 reveal">
            <div className="about-img-wrap">
              <div className="about-img-inner">
                <img
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80&fit=crop"
                  alt="SK Events Team Planning"
                  loading="lazy"
                />
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(8,8,8,0.6) 0%, transparent 60%)" }} />
              </div>
              <div className="about-stat-card d-none d-md-block">
                <div className="stat-number" style={{ fontSize: "3rem" }}>5<sup style={{ fontSize:"1.2rem" }}>+</sup></div>
                <div className="stat-label">Years Crafting Excellence</div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="col-12 col-lg-7 reveal" style={{ transitionDelay: "0.2s" }}>
            <div className="section-tag mb-3">Our Story</div>
            <h2 className="font-display text-white mb-4" style={{ fontSize: "clamp(2.4rem,4.5vw,3.8rem)", fontWeight: 300, lineHeight: 1.1 }}>
              Where Vision Meets{" "}
              <span className="gold-shimmer" style={{ fontWeight: 600 }}>Perfection</span>
            </h2>
            <hr className="gold-line-left mb-4" style={{ width: 60 }} />

            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.9 }} className="mb-3">
              Founded in 2012, SK Events has grown from a boutique event studio into one of
              South India's most trusted luxury event management companies. We believe that
              every occasion deserves the extraordinary.
            </p>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.9 }} className="mb-4">
              Our multidisciplinary team of designers, planners, and production specialists
              bring decades of combined experience to every event — obsessing over every detail
              so you can be fully present in your moment.
            </p>

            {/* Values grid */}
            <div className="row g-3 mb-4">
              {values.map((v) => (
                <div className="col-6" key={v.label}>
                  <div className="about-value-card">
                    <div className="about-value-label">{v.label}</div>
                    <div className="about-value-desc">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-gold">
              <span>Work With Us</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
