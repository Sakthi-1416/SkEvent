import { useState, useCallback, memo } from "react";

const formFields = [
  { type: "text",  name: "name",  label: "Your Name",      placeholder: "Arjun Mehta",       required: true,  col: 6 },
  { type: "tel",   name: "phone", label: "Phone Number",   placeholder: "+91 98000 00000",   required: false, col: 6 },
  { type: "email", name: "email", label: "Email Address",  placeholder: "you@example.com",   required: true,  col: 12 },
];

const eventTypes = [
  { value: "stage",     label: "Stage Decoration" },
  { value: "car",       label: "Car Decoration" },
  { value: "dj",        label: "DJ & DJ Lightings" },
  { value: "birthday",  label: "Birthday Decoration" },
  { value: "sounds",    label: "Sounds & Lightings" },
  { value: "entry",     label: "Welcome Entry & Fireworks" },
  { value: "paper",     label: "Paper Blasting" },
  { value: "corporate", label: "Corporate Events" },
  { value: "stalls",    label: "Stalls & Food Counters" },
  { value: "other",     label: "Other" },
];

const FormInput = memo(({ field, value, onChange }) => (
  <div className={`col-12 col-sm-${field.col}`}>
    <label className="form-label" htmlFor={`field-${field.name}`}>{field.label}</label>
    <input
      id={`field-${field.name}`}
      type={field.type}
      name={field.name}
      className="form-control"
      placeholder={field.placeholder}
      required={field.required}
      value={value || ""}
      onChange={onChange}
      aria-label={field.label}
    />
  </div>
));
FormInput.displayName = "FormInput";

const Contact = memo(() => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", eventType: "", date: "", message: "",
  });

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwTmWEBBGC06C227HgbhQqa2lH6PHdPpDvdqCP6Zb6qqf4CiG5SW6vQU3w_L7c457JD/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      setSubmitted(true);
      setFormData({ name: "", phone: "", email: "", eventType: "", date: "", message: "" });
      e.target.reset();
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = useCallback(() => setSubmitted(false), []);

  return (
    <section id="contact" className="contact-section">
      <div className="contact-glow" aria-hidden="true" />
      <div className="container position-relative">

        {/* Header */}
        <div className="text-center mb-5 reveal">
          <div className="section-tag mb-3">Get In Touch</div>
          <h2 className="font-display text-white mb-0" style={{ fontSize: "clamp(2.6rem,5vw,4rem)", fontWeight: 300 }}>
            Let's Create <span className="gold-shimmer" style={{ fontWeight: 600 }}>Together</span>
          </h2>
          <hr className="gold-line mx-auto mt-4" style={{ width: 90 }} />
          <p className="contact-subtitle mt-3">
            Tell us your vision and we'll bring it to life.
          </p>
        </div>

        {/* Form — centred, max width so it doesn't stretch too wide */}
        <div className="row justify-content-center reveal" style={{ transitionDelay: "0.15s" }}>
          <div className="col-12 col-lg-8">
            <form onSubmit={handleSubmit} noValidate>

              <div className="row g-3 mb-3">
                {formFields.map((field) => (
                  <FormInput
                    key={field.name}
                    field={field}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                  />
                ))}
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="eventType">Event Type</label>
                <select
                  id="eventType"
                  name="eventType"
                  className="form-control"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  aria-label="Event Type"
                >
                  <option value="" disabled>Select Event Type</option>
                  {eventTypes.map((t) => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="eventDate">Expected Date</label>
                <input
                  id="eventDate"
                  type="date"
                  name="date"
                  className="form-control"
                  value={formData.date}
                  onChange={handleInputChange}
                  style={{ colorScheme: "dark" }}
                  aria-label="Expected Event Date"
                />
              </div>

              <div className="mb-4">
                <label className="form-label" htmlFor="message">Tell Us Your Vision</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows={4}
                  placeholder="Describe your dream event..."
                  value={formData.message}
                  onChange={handleInputChange}
                  aria-label="Event description"
                />
              </div>

              <button
                type="submit"
                className="btn-gold w-100"
                disabled={loading}
                aria-label={loading ? "Sending..." : "Send Enquiry"}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
                    Sending...
                  </>
                ) : (
                  <span>Send Enquiry →</span>
                )}
              </button>

            </form>

            {submitted && (
              <div className="mt-3 success-message" role="alert">
                <span aria-hidden="true">✦</span> Thank you! We'll be in touch within 24 hours.
                <button onClick={resetForm} className="btn btn-link btn-sm ms-3" style={{ color: "var(--gold)" }}>
                  Send another
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
});

Contact.displayName = "Contact";
export default Contact;