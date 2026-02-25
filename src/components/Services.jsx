const services = [
  {
    icon: "bi-building",
    title: "Corporate Events",
    desc: "Conferences, product launches, team retreats, and annual galas — executed with precision and professional elegance that reflects your brand identity.",
  },
  {
    icon: "bi-heart",
    title: "Weddings & Receptions",
    desc: "Bespoke wedding experiences crafted with exquisite detail — from intimate ceremonies to grand celebrations that exceed every expectation.",
  },
  {
    icon: "bi-trophy",
    title: "Social Galas",
    desc: "Charity balls, award nights, and exclusive private parties designed to leave a lasting impression on every guest in attendance.",
  },
  {
    icon: "bi-camera-video",
    title: "Concerts & Shows",
    desc: "Full-scale production management for live concerts, cultural shows, and entertainment events — from staging to sound engineering.",
  },
  {
    icon: "bi-flower1",
    title: "Venue Decoration",
    desc: "Transforming spaces into breathtaking environments through luxurious floral arrangements, lighting design, and bespoke décor themes.",
  },
  {
    icon: "bi-gift",
    title: "Brand Activations",
    desc: "Creative experiential marketing events that connect your brand to audiences through immersive, memorable, and shareable activations.",
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-bg-text">SERVICES</div>
      <div className="container position-relative">
        {/* Header */}
        <div className="text-center mb-5 reveal">
          <div className="section-tag mb-3">What We Offer</div>
          <h2 className="font-display text-white mb-0" style={{ fontSize: "clamp(2.6rem,5vw,4rem)", fontWeight: 300 }}>
            Our <span className="gold-shimmer" style={{ fontWeight: 600 }}>Services</span>
          </h2>
          <hr className="gold-line mx-auto mt-4" style={{ width: 90 }} />
        </div>

        {/* Cards */}
        <div className="row g-4">
          {services.map((s, i) => (
            <div
              className="col-12 col-md-6 col-lg-4 reveal"
              key={s.title}
              style={{ transitionDelay: `${(i % 3) * 0.12}s` }}
            >
              <div className="service-card">
                <div className="service-icon-box">
                  <i className={`bi ${s.icon}`}></i>
                </div>
                <h3 className="service-title">{s.title}</h3>
                <hr className="gold-line-left mb-3" style={{ width: 44 }} />
                <p className="service-desc mb-0">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
