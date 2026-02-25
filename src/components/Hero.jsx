// Hero.jsx
import { memo } from 'react';

// Static content moved outside component
const HERO_CONTENT = {
  eyebrow: "— Luxury Event Management —",
  title: {
    prefix: "We Craft",
    highlight: "Unforgettable",
    suffix: "Moments"
  },
  subtitle: "From intimate gatherings to grand galas — SK Events transforms your vision into an extraordinary reality.",
  ctaPrimary: "Plan Your Event",
  ctaSecondary: "View Our Work"
};

const Hero = memo(() => {
  return (
    <section id="home" className="hero-section">
      {/* Background elements - optimized for performance */}
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-side-line left" aria-hidden="true" />
      <div className="hero-side-line right" aria-hidden="true" />

      {/* Main content - critical for LCP */}
      <div className="hero-content text-center">
        {/* Eyebrow text */}
        <div className="section-tag hero-eyebrow mb-4">
          {HERO_CONTENT.eyebrow}
        </div>

        {/* Main heading - potential LCP element */}
        <h1 className="hero-title text-white mb-0">
          {HERO_CONTENT.title.prefix}
          <br />
          <em 
            className="gold-shimmer" 
            style={{ fontStyle: "normal", fontWeight: 600 }}
          >
            {HERO_CONTENT.title.highlight}
          </em>
          <br />
          {HERO_CONTENT.title.suffix}
        </h1>

        {/* Divider line */}
        <div className="hero-divider">
          <hr 
            className="gold-line mx-auto my-4" 
            style={{ width: 120 }} 
            aria-hidden="true"
          />
        </div>

        {/* Subtitle */}
        <p className="hero-subtitle text-white-50 mb-5 mx-auto">
          {HERO_CONTENT.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3">
          <a 
            href="#contact" 
            className="btn-gold"
            aria-label="Plan Your Event - starts the contact process"
          >
            <span>{HERO_CONTENT.ctaPrimary}</span>
          </a>
          <a 
            href="#works" 
            className="btn-outline-gold"
            aria-label="View Our Work - see our portfolio"
          >
            {HERO_CONTENT.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-arrow" aria-hidden="true">
        <span className="section-tag">SCROLL</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;