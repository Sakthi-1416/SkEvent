const stats = [
  { number: "5", sup: "+", label: "Years of Excellence" },
  { number: "100", sup: "+", label: "Events Executed" },
  { number: "98", sup: "%", label: "Client Satisfaction" },
  { number: "30", sup: "+", label: "Expert Team Members" },
];

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {stats.map((s, i) => (
            <div className="col-6 col-md-3 text-center reveal" key={s.label} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="d-flex align-items-center justify-content-center h-100 position-relative">
                {i > 0 && (
                  <div className="stat-divider d-none d-md-block position-absolute" style={{ left: 0 }} />
                )}
                <div>
                  <div className="stat-number">
                    {s.number}<sup>{s.sup}</sup>
                  </div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
