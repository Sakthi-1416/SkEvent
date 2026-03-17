import { useState, useEffect, useCallback } from "react";

/*
  ─────────────────────────────────────────────────
  HOW TO USE YOUR OWN IMAGES:

  1. Put your photos inside:  src/assets/gallery/
  2. Import each one at the top of this file:
       import img1 from '../assets/gallery/event1.jpg'
       import img2 from '../assets/gallery/event2.jpg'
       ...
  3. Replace the `images` array below:
       const images = [
         { src: img1, caption: "Wedding Reception", category: "Wedding" },
         { src: img2, caption: "Corporate Gala",    category: "Corporate" },
       ]
  ─────────────────────────────────────────────────
*/

// ── Replace these with your own imports ──
const images = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&fit=crop",
    caption: "Grand Wedding Ceremony",
    category: "Wedding",
  },
  {
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80&fit=crop",
    caption: "Floral Stage Setup",
    category: "Wedding",
  },
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80&fit=crop",
    caption: "Corporate Summit",
    category: "Corporate",
  },
  {
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80&fit=crop",
    caption: "Golden Evening Gala",
    category: "Gala",
  },
  {
    src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80&fit=crop",
    caption: "Harmonia Live Concert",
    category: "Concert",
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80&fit=crop",
    caption: "Brand Activation Night",
    category: "Brand",
  },
  {
    src: "https://images.unsplash.com/photo-1478147427282-58a87a433d67?w=800&q=80&fit=crop",
    caption: "Royal Birthday Celebration",
    category: "Private",
  },
  {
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80&fit=crop",
    caption: "Event Planning Session",
    category: "Corporate",
  },
  {
    src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80&fit=crop",
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
