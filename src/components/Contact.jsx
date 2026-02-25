// Contact.jsx
import { useState, useCallback, memo } from "react";

// Static data moved outside component
const contactInfo = [
  {
    icon: "bi-geo-alt",
    label: "Location",
    value: "No. 24, Anna Salai, Teynampet\nChennai, Tamil Nadu — 600018",
  },
  {
    icon: "bi-telephone",
    label: "Phone",
    value: "+91 75988 38061\n+91 8525058302",
  },
  {
    icon: "bi-envelope",
    label: "Email",
    value: "sumithkaran15071999@gmail.com",
  },
];

// Form fields configuration
const formFields = [
  { 
    type: "text", 
    name: "name", 
    label: "Your Name", 
    placeholder: "Arjun Mehta", 
    required: true,
    col: 6 
  },
  { 
    type: "tel", 
    name: "phone", 
    label: "Phone Number", 
    placeholder: "+91 98000 00000", 
    required: false,
    col: 6 
  },
  { 
    type: "email", 
    name: "email", 
    label: "Email Address", 
    placeholder: "you@example.com", 
    required: true,
    col: 12 
  },
];

const eventTypes = [
  { value: "wedding", label: "Wedding & Reception" },
  { value: "corporate", label: "Corporate Event" },
  { value: "gala", label: "Social Gala / Award Night" },
  { value: "concert", label: "Concert / Show" },
  { value: "brand", label: "Brand Activation" },
  { value: "other", label: "Other" },
];

// Memoized contact info item
const ContactInfoItem = memo(({ info }) => (
  <div className="d-flex align-items-start gap-3" key={info.label}>
    <div>
      <strong>{info.label}</strong>
      <div style={{ whiteSpace: "pre-line" }}>{info.value}</div>
    </div>
  </div>
));

ContactInfoItem.displayName = 'ContactInfoItem';

// Memoized form input component
const FormInput = memo(({ field, value, onChange }) => {
  const inputProps = {
    type: field.type,
    name: field.name,
    className: "form-control",
    placeholder: field.placeholder,
    required: field.required,
    value: value || '',
    onChange,
    id: `field-${field.name}`,
    'aria-label': field.label,
    'aria-required': field.required,
  };

  return (
    <div className={`col-12 col-sm-${field.col}`}>
      <label htmlFor={`field-${field.name}`}>{field.label}</label>
      <input {...inputProps} />
    </div>
  );
});

FormInput.displayName = 'FormInput';

// Memoized form select component
const FormSelect = memo(({ value, onChange }) => (
  <div className="mb-3">
    <label htmlFor="eventType">Event Type</label>
    <select
      id="eventType"
      name="eventType"
      className="form-control"
      value={value}
      onChange={onChange}
      required
      aria-label="Event Type"
    >
      <option value="" disabled>Select Event Type</option>
      {eventTypes.map(type => (
        <option key={type.value} value={type.value}>
          {type.label}
        </option>
      ))}
    </select>
  </div>
));

FormSelect.displayName = 'FormSelect';

// Memoized date input
const FormDate = memo(({ value, onChange }) => (
  <div className="mb-3">
    <label htmlFor="eventDate">Expected Date</label>
    <input
      id="eventDate"
      type="date"
      name="date"
      className="form-control"
      value={value}
      onChange={onChange}
      aria-label="Expected Event Date"
    />
  </div>
));

FormDate.displayName = 'FormDate';

// Memoized textarea
const FormTextarea = memo(({ value, onChange }) => (
  <div className="mb-4">
    <label htmlFor="message">Tell Us Your Vision</label>
    <textarea
      id="message"
      name="message"
      className="form-control"
      rows={4}
      placeholder="Describe your dream event..."
      value={value}
      onChange={onChange}
      aria-label="Event description"
    />
  </div>
));

FormTextarea.displayName = 'FormTextarea';

// Main component
const Contact = memo(() => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    date: '',
    message: '',
  });

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwTmWEBBGC06C227HgbhQqa2lH6PHdPpDvdqCP6Zb6qqf4CiG5SW6vQU3w_L7c457JD/exec",
        {
          method: "POST",
          mode: 'no-cors', // Add this for CORS issues with Google Apps Script
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      // Google Apps Script with no-cors returns opaque response
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        eventType: '',
        date: '',
        message: '',
      });
      e.target.reset();
    } catch (error) {
      console.error("Error:", error);
      // Show user-friendly error message
      alert('Something went wrong. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = useCallback(() => {
    setSubmitted(false);
  }, []);

  return (
    <section id="contact" className="contact-section">
      <div className="contact-glow" aria-hidden="true" />
      <div className="container position-relative">

        {/* Header */}
        <div className="text-center mb-5">
          <div className="section-tag mb-3">Get In Touch</div>
          <h2 className="text-white mb-0">
            Let's Create <span className="gold-shimmer">Together</span>
          </h2>
          <p className="contact-subtitle mt-3">
            Tell us your vision and we'll bring it to life.
          </p>
        </div>

        <div className="row g-5">

          {/* Left Info */}
          <div className="col-12 col-lg-5">
            <div className="d-flex flex-column gap-4">
              {contactInfo.map((info) => (
                <ContactInfoItem key={info.label} info={info} />
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="col-12 col-lg-7">
            <form onSubmit={handleSubmit} noValidate>

              <div className="row g-3 mb-3">
                {formFields.map(field => (
                  <FormInput
                    key={field.name}
                    field={field}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                  />
                ))}
              </div>

              <FormSelect
                value={formData.eventType}
                onChange={handleInputChange}
              />

              <FormDate
                value={formData.date}
                onChange={handleInputChange}
              />

              <FormTextarea
                value={formData.message}
                onChange={handleInputChange}
              />

              <button
                type="submit"
                className="btn-gold w-100"
                disabled={loading}
                aria-label={loading ? "Sending..." : "Send Enquiry"}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" 
                          role="status" 
                          aria-hidden="true" 
                    />
                    Sending...
                  </>
                ) : (
                  "Send Enquiry →"
                )}
              </button>

            </form>

            {/* Success Message */}
            {submitted && (
              <div className="mt-3 success-message" role="alert">
                <span aria-hidden="true">✦</span> Thank you! We'll be in touch within 24 hours.
                <button 
                  onClick={resetForm}
                  className="btn btn-link btn-sm ms-3"
                  aria-label="Send another message"
                >
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

Contact.displayName = 'Contact';

export default Contact;