const services = [
  {
    icon: "bi-stars",
    title: "Stage Decoration",
    desc: "Stunning stage setups crafted with premium floral arrangements, drapes, and lighting — creating the perfect backdrop for every grand occasion.",
    img: "https://i.pinimg.com/1200x/a2/53/fc/a253fc965d6bcff7b014d412770e7ab8.jpg",
  },
  {
    icon: "bi-car-front",
    title: "Car Decoration",
    desc: "Elegant and creative car decorations for weddings and special occasions — from floral garlands to ribbon arrangements that make every arrival memorable.",
    img: "https://i.pinimg.com/736x/a7/0a/5c/a70a5cd995c69513bfd9e58065c6fc10.jpg",
  },
  {
    icon: "bi-music-note-beamed",
    title: "DJ & DJ Lightings",
    desc: "High-energy DJ setups with professional sound systems and dazzling light shows — keeping your guests on the dance floor all night long.",
    img: "https://i.pinimg.com/736x/9f/1d/37/9f1d3756b7df76b888f5ce1f006fde41.jpg",
  },
  {
    icon: "bi-balloon",
    title: "Birthday Decoration",
    desc: "Magical birthday setups from kids' themed parties to luxurious adult celebrations — every detail tailored to make the birthday person feel truly special.",
    img: "https://i.pinimg.com/736x/ec/f7/ef/ecf7ef8d4d1694790ebde9ff80652fa4.jpg",
  },
  {
    icon: "bi-lightbulb",
    title: "Sounds & Lightings",
    desc: "Professional audio-visual setups with crystal-clear sound systems and atmospheric lighting to set the perfect mood for any event.",
    img: "https://i.pinimg.com/736x/04/1f/86/041f86cf8223349ed71bc52973a34f66.jpg",
  },
  {
    icon: "bi-fire",
    title: "Welcome Entry & Fireworks",
    desc: "Grand welcome entries with flower petals, smoke effects, and spectacular fireworks displays that leave guests absolutely breathless.",
    img: "https://i.pinimg.com/736x/ce/5d/84/ce5d84e7de5f1df0a162d40886cf426f.jpg",
  },
  {
    icon: "bi-wind",
    title: "Paper Blasting",
    desc: "Vibrant paper blast cannons and confetti showers that add an explosive burst of colour and excitement to your most precious moments.",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80&fit=crop",
  },
  {
    icon: "bi-building",
    title: "Corporate Events",
    desc: "End-to-end corporate event management — conferences, product launches, team outings, and company celebrations handled with precision.",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80&fit=crop",
  },
  {
    icon: "bi-shop",
    title: "Stalls & Food Counters",
    desc: "Delightful stall setups featuring Ice Cream, Popcorn, Cotton Candy, and more — adding a fun and festive flavour to every event.",
    img: "https://i.pinimg.com/736x/fa/d0/c6/fad0c6b25c46e813cafb5d74835deff4.jpg",
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
          <h2
            className="font-display text-white mb-0"
            style={{ fontSize: "clamp(2.6rem,5vw,4rem)", fontWeight: 300 }}
          >
            Our <span className="gold-shimmer" style={{ fontWeight: 600 }}>Services</span>
          </h2>
          <hr className="gold-line mx-auto mt-4" style={{ width: 90 }} />
          <p
            className="mt-3 mx-auto"
            style={{
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.1em",
              maxWidth: 420,
            }}
          >
            A to Z Event Planners — Esanthimangalam, Nagercoil, Kanniyakumari
          </p>
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
                <img src={s.img} alt={s.title} className="service-card-bg" loading="lazy" />
                <div className="service-card-overlay" />
                <div className="service-card-content">
                  <div className="service-icon-box">
                    <i className={`bi ${s.icon}`}></i>
                  </div>
                  <h3 className="service-title">{s.title}</h3>
                  <hr className="gold-line-left mb-3" style={{ width: 44 }} />
                  <p className="service-desc mb-0">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}