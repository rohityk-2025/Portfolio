import React from "react";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      company: form.company.value,
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyDgCgqTPlTYRJyrcmgjEW6lTJ--FShZQHEJnu4zg8-ED7J8f5o-VY3SecPnnLfsAtt/exec",
        {
          method: "POST",
          // headers: {
          //   "Content-Type": "application/json",
          // },
          body: JSON.stringify(data),
        },
      );

      alert("Message sent successfully!");
      form.reset();
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <section className="contact-page">
      {/* Title */}
      <h1 className="contact-title">
        <span>Say Hi!</span> and tell me about <br />
        your idea →
      </h1>

      <p className="contact-sub">Have a nice work? Reach out and let’s chat.</p>

      {/* Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        {/* Row */}
        <div className="form-row">
          <div className="form-group">
            <label>Name *</label>
            <input type="text" name="name" placeholder="Hello..." required />
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              placeholder="Where can I reply"
              required
            />
          </div>
        </div>

        {/* Company */}
        <div className="form-group full">
          <label>Company name</label>
          <input
            type="text"
            name="company"
            placeholder="Your company or website?"
          />
        </div>

        {/* Tags */}
        <div className="tags">
          <span>Mobile App</span>
          <span>Website Design</span>
          <span>Branding</span>
          <span>Webflow</span>
          <span>App Design</span>
          <span>Graphic Design</span>
          <span>WordPress</span>
        </div>

        {/* Button */}
        <button type="submit" className="send-btn">
          Send Me →
        </button>

        <p className="note">I’ll get back to you within 24 hours</p>
      </form>
    </section>
  );
};

export default Contact;
