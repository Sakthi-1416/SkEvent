const testimonials = [
  {
    text: "SK Events turned our annual corporate conference into an experience our team still talks about. The logistics were seamless, the décor impeccable, and the attention to detail was beyond anything we expected.",
    name: "Arjun Mehta",
    role: "CEO, TechVision India",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&fit=crop&crop=face",
  },
  {
    text: "Our wedding was everything we ever dreamed of and more. SK Events handled every detail with grace and professionalism. Our guests couldn't stop complimenting how perfectly everything flowed.",
    name: "Priya & Rohit Sharma",
    role: "Wedding Clients",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80&fit=crop&crop=face",
  },
  {
    text: "The Golden Evening Awards was a complete success. SK Events brought creativity and precision together in a way that perfectly represented our brand values. We've already booked them for next year.",
    name: "Karthik Sundaram",
    role: "Director, Luxe Foundation",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80&fit=crop&crop=face",
  },
  {
    text: "I've worked with many event companies, but SK Events stands apart. Their team is incredibly professional, responsive, and they genuinely care about making your vision come alive beautifully.",
    name: "Divya Krishnan",
    role: "Marketing Head, Prestige Group",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80&fit=crop&crop=face",
  },
  {
    text: "SK Events managed our daughter's sangeet and wedding reception flawlessly. 400+ guests and not a single hiccup. The décor was breathtaking — truly a once-in-a-lifetime experience.",
    name: "Ramesh Nair",
    role: "Private Client",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80&fit=crop&crop=face",
  },
  {
    text: "Our product launch was a grand affair, and SK Events delivered a premium experience that left our stakeholders speechless. From concept to execution, every step was handled with class and competence.",
    name: "Meera Venkatesan",
    role: "Brand Director, Luminos Co.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80&fit=crop&crop=face",
  },
];

function TestimonialCard({ t, delay }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 reveal" style={{ transitionDelay: `${delay}s` }}>
      <div className="testimonial-card">
        <div className="t-stars mb-2">★★★★★</div>
        <div className="t-quote">"</div>
        <p className="t-text mb-4">{t.text}</p>
        <hr className="gold-line mb-4" />
        <div className="d-flex align-items-center gap-3">
          <img src={t.avatar} alt={t.name} className="t-avatar" loading="lazy" />
          <div>
            <div className="t-name">{t.name}</div>
            <div className="t-role mt-1">{t.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-glow" />
      <div className="container position-relative">
        {/* Header */}
        <div className="text-center mb-5 reveal">
          <div className="section-tag mb-3">Client Love</div>
          <h2 className="font-display text-white mb-0" style={{ fontSize: "clamp(2.6rem,5vw,4rem)", fontWeight: 300 }}>
            What They <span className="gold-shimmer" style={{ fontWeight: 600 }}>Say</span>
          </h2>
          <hr className="gold-line mx-auto mt-4" style={{ width: 90 }} />
        </div>

        {/* Cards */}
        <div className="row g-4">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} delay={(i % 3) * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}
