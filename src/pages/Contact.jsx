import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

/* ───────────────────────────────────────────────
   CONTACT PAGE
   Client-side validated form with inline errors.
   ─────────────────────────────────────────────── */

const INITIAL_FORM = { name: "", email: "", message: "" };

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data) {
  const errors = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.message.trim()) errors.message = "Project message is required.";
  return errors;
}

const Contact = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field error as soon as the user starts correcting
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate(formData);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitted(false);
      return;
    }

    // Validation passed
    setErrors({});
    setSubmitted(true);
    setFormData(INITIAL_FORM);
  };

  const fieldClass = (name) =>
    [
      "w-full px-4 py-3.5 rounded-xl border bg-white text-navy-light",
      "placeholder:text-navy-light/30 text-[0.95rem]",
      "transition-colors duration-200",
      "focus:outline-2 focus:outline-orange focus:border-transparent",
      errors[name] ? "border-red-400" : "border-cream-dark",
    ].join(" ");

  return (
    <>
      {/* ─── PAGE HERO ────────────────────────────── */}
      <section className="relative bg-navy overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 50% 60%, rgba(232,113,58,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
          <SectionHeading
            light
            label="Contact Us"
            title="Let's start a conversation"
            subtitle="Tell us about your project. We'll review your message and get back to you with a clear next step."
          />
        </div>
      </section>

      {/* ─── FORM SECTION ─────────────────────────── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-xl mx-auto px-6">
          {/* Success banner */}
          {submitted && (
            <div
              className="mb-8 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-center font-medium text-sm flex items-center justify-center gap-2"
              role="status"
            >
              <CheckCircle className="w-4 h-4 shrink-0" />
              Demo only - no message was sent.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-navy-light mb-2"
              >
                Name <span className="text-orange">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={fieldClass("name")}
                aria-describedby={errors.name ? "name-error" : undefined}
                aria-invalid={errors.name ? "true" : undefined}
              />
              {errors.name && (
                <p
                  id="name-error"
                  role="alert"
                  className="mt-2 text-sm text-red-600 font-medium"
                >
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-navy-light mb-2"
              >
                Email <span className="text-orange">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={fieldClass("email")}
                aria-describedby={errors.email ? "email-error" : undefined}
                aria-invalid={errors.email ? "true" : undefined}
              />
              {errors.email && (
                <p
                  id="email-error"
                  role="alert"
                  className="mt-2 text-sm text-red-600 font-medium"
                >
                  {errors.email}
                </p>
              )}
            </div>

            {/* Project Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-navy-light mb-2"
              >
                Project Message <span className="text-orange">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`${fieldClass("message")} resize-vertical`}
                aria-describedby={errors.message ? "message-error" : undefined}
                aria-invalid={errors.message ? "true" : undefined}
              />
              {errors.message && (
                <p
                  id="message-error"
                  role="alert"
                  className="mt-2 text-sm text-red-600 font-medium"
                >
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-orange hover:bg-orange-hover text-white font-semibold text-sm transition-colors duration-200 cursor-pointer shadow-lg shadow-orange/20 hover:shadow-orange/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange mt-2"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Disclaimer */}
          <p className="text-center text-xs text-navy-light/35 mt-8">
            This is a candidate assignment demo. No data is stored or transmitted.
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
