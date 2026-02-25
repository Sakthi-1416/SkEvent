// Works.jsx
import { useRef, useEffect, useState, memo } from 'react';
import birth from '../assests/birthday.webp';
import img1 from '../assests/img1.webp'
import img2 from '../assests/img2.webp'
import img3 from '../assests/img3.webp'
import img4 from '../assests/img4.webp'
import img6 from '../assests/img6.webp'



// Static data moved outside component
const works = [
  {
    img: img1,
    category: "Wedding",
    title: "The Grand Wedding",
    venue: "Leela Palace, Mumbai",
    year: "2024",
    offset: false,
    imgWidth: 600,
    imgHeight: 400,
  },
  {
    img: img2,
    category: "Corporate",
    title: "TechVision Summit",
    venue: "HICC, Hyderabad",
    year: "2024",
    offset: true,
    imgWidth: 600,
    imgHeight: 400,
  },
  {
    img: img6,
    category: "Gala",
    title: "Golden Evening Awards",
    venue: "Taj Coromandel, Chennai",
    year: "2023",
    offset: false,
    imgWidth: 600,
    imgHeight: 400,
  },
  {
    img: img3,
    category: "Concert",
    title: "Harmonia Live",
    venue: "Chennai Trade Centre",
    year: "2023",
    offset: false,
    imgWidth: 600,
    imgHeight: 400,
  },
  {
    img: birth,
    category: "Private",
    title: "The Royal Birthday",
    venue: "Private Venue, Bengaluru",
    year: "2023",
    offset: true,
    imgWidth: 600,
    imgHeight: 400,
  },
  {
    img: img4,
    category: "Brand Activation",
    title: "Luxe Brand Reveal",
    venue: "Phoenix Mall, Chennai",
    year: "2022",
    offset: false,
    imgWidth: 600,
    imgHeight: 400,
  },
];

// Custom hook for lazy loading with performance optimizations
const useLazyLoad = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observerRef.current?.disconnect();
        }
      },
      {
        rootMargin: '200px', // Start loading when image is 200px from viewport
        threshold,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observerRef.current.observe(currentElement);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold]);

  return [elementRef, isVisible];
};

// Memoized WorkCard component
const WorkCard = memo(({ work, delay }) => {
  const [imageRef, isVisible] = useLazyLoad(0.01);

  return (
    <div
      className={`col-12 col-md-6 col-lg-4 reveal ${work.offset ? "work-offset" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="work-card" ref={imageRef}>
        {isVisible ? (
          <img 
            src={work.img} 
            alt={work.title}
            width={work.imgWidth}
            height={work.imgHeight}
            loading="lazy"
            decoding="async"
            fetchpriority={delay === 0 ? "high" : "auto"} // Prioritize first images
          />
        ) : (
          // Placeholder with same dimensions to prevent layout shift
          <div 
            style={{
              width: '100%',
              paddingBottom: '66.67%', // 600x400 aspect ratio
              backgroundColor: '#1a1a1a'
            }}
            aria-hidden="true"
          />
        )}
        <div className="work-year-badge">{work.year}</div>
        <div className="work-card-overlay">
          <div className="work-category">{work.category}</div>
          <div className="work-title">{work.title}</div>
          <div className="work-venue">{work.venue}</div>
        </div>
      </div>
    </div>
  );
});

WorkCard.displayName = 'WorkCard';

// Main component
const Works = memo(() => {
  return (
    <section id="works" className="works-section">
      <div className="works-pattern" aria-hidden="true" />
      <div className="container position-relative">
        {/* Header */}
        <div className="text-center mb-5 reveal">
          <div className="section-tag mb-3">Portfolio</div>
          <h2 className="font-display text-white mb-0">
            Our <span className="gold-shimmer">Works</span>
          </h2>
          <hr className="gold-line mx-auto mt-4" aria-hidden="true" />
          <p className="works-subtitle">
            A glimpse into the world-class events we've brought to life.
          </p>
        </div>

        {/* Grid */}
        <div className="row g-4">
          {works.map((work, index) => (
            <WorkCard 
              key={`${work.title}-${index}`} 
              work={work} 
              delay={(index % 3) * 0.12} 
            />
          ))}
        </div>
      </div>
    </section>
  );
});

Works.displayName = 'Works';

export default Works;