import { useState, useEffect, useCallback } from "react";
import g1 from '../assests/g1.webp'
import g2 from '../assests/g2.webp'
import g3 from '../assests/g3.webp'
import g4 from '../assests/g4.webp'
import g5 from '../assests/g5.webp'
import g6 from '../assests/g6.webp'
import g7 from '../assests/g7.webp'
import g8 from '../assests/g8.webp'
import g10 from '../assests/g10.webp'
import g11 from '../assests/g11.webp'
import g12 from '../assests/g12.webp'
import g13 from '../assests/g13.webp'
import g14 from '../assests/g14.webp'
import g15 from '../assests/g15.webp'



// ── Replace these with your own imports ──
const images = [
  {
    src: g1,
    caption: "Grand Wedding Ceremony",
    category: "Wedding",
  },
  {
    src: g2,
    caption: "Floral Stage Setup",
    category: "Wedding",
  },
  {
    src: g3,
    caption: "Corporate Summit",
    category: "Corporate",
  },
  {
    src: g4,
    caption: "Golden Evening Gala",
    category: "Gala",
  },
  {
    src: g5,
    caption: "Harmonia Live Concert",
    category: "Concert",
  },
  {
    src: g6,
    caption: "Brand Activation Night",
    category: "Brand",
  },
  {
    src: g7,
    caption: "Royal Birthday Celebration",
    category: "Private",
  },
  {
    src: g8,
    caption: "Event Planning Session",
    category: "Corporate",
  },
  {
    src: g10,
    caption: "Luxury Venue Decor",
    category: "Gala",
  },
  {
    src: g11,
    caption: "Luxury Venue Decor",
    category: "Gala",
  },
  {
    src: g12,
    caption: "Luxury Venue Decor",
    category: "Gala",
  },
  {
    src: g13,
    caption: "Luxury Venue Decor",
    category: "Gala",
  },
   {
    src: g14,
    caption: "Luxury Venue Decor",
    category: "Gala",
  },
   {
    src: g15,
    caption: "Luxury Venue Decor",
    category: "Gala",
  },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i - 1 + images.length) % images.length);
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i + 1) % images.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, goPrev, goNext]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <>
      <section id="gallery" className="gallery-section">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-5 reveal">
            <div className="section-tag mb-3">Visual Stories</div>
            <h2
              className="font-display text-white mb-0"
              style={{ fontSize: "clamp(2.6rem,5vw,4rem)", fontWeight: 300 }}
            >
              Our <span className="gold-shimmer" style={{ fontWeight: 600 }}>Gallery</span>
            </h2>
            <hr className="gold-line mx-auto mt-4" style={{ width: 90 }} />
            <p
              style={{
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "0.1em",
                maxWidth: 380,
                margin: "12px auto 0",
              }}
            >
              Every frame tells a story of an unforgettable moment we helped create.
            </p>
          </div>

          {/* Uniform Grid */}
          <div className="row g-3">
            {images.map((img, i) => (
              <div
                key={i}
                className="col-6 col-md-4 col-lg-3 reveal"
                style={{ transitionDelay: `${(i % 4) * 0.08}s` }}
              >
                <div
                  className="gallery-card"
                  onClick={() => openLightbox(i)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${img.caption}`}
                  onKeyDown={(e) => e.key === "Enter" && openLightbox(i)}
                >
                  <img src={img.src} alt={img.caption} loading="lazy" />
                  <div className="gallery-card-overlay">
                    <div className="gallery-zoom-icon">
                      <i className="bi bi-zoom-in"></i>
                    </div>
                    <div className="gallery-caption">{img.caption}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          {/* Close button */}
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
            <i className="bi bi-x-lg"></i>
          </button>

          {/* Counter */}
          <div className="lightbox-counter">
            {lightboxIndex + 1} / {images.length}
          </div>

          {/* Prev */}
          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label="Previous image"
          >
            <i className="bi bi-chevron-left"></i>
          </button>

          {/* Image */}
          <div className="lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].caption}
            />
            <div className="lightbox-caption-bar">
              <span className="lightbox-caption-text">
                {images[lightboxIndex].caption}
              </span>
              <span className="lightbox-caption-cat">
                {images[lightboxIndex].category}
              </span>
            </div>
          </div>

          {/* Next */}
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label="Next image"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      )}
    </>
  );
}
