import { useState } from "react";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import { contact } from "../../data/content";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const fieldClass =
  "w-full border border-line bg-ink/55 px-4 py-3.5 outline-none transition-colors duration-300 ease-out-expo focus:border-bronze";

const labelClass = "grid gap-1.5";
const labelTextClass =
  "text-[0.7rem] uppercase tracking-[0.14em] text-cream-muted";
const detailLabelClass =
  "mb-1.5 text-[0.7rem] uppercase tracking-[0.16em] text-bronze";

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section
      className="section-pad bg-[radial-gradient(ellipse_70%_50%_at_80%_20%,rgba(201,166,107,0.07),transparent_55%),var(--color-ink)]"
      id={contact.id}
    >
      <div className="container-page grid items-start gap-8 md:grid-cols-2 md:gap-12 lg:gap-18">
        <Reveal>
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2 className="display mt-4 text-[clamp(2.3rem,4.5vw,3.8rem)]">
            {contact.title}
          </h2>
          <p className="mt-5 max-w-md text-[1.05rem] text-cream-muted">
            {contact.body}
          </p>

          <div className="mt-8 grid gap-5">
            <div>
              <p className={detailLabelClass}>{contact.office.label}</p>
              <p>{contact.office.value}</p>
            </div>
            <div>
              <p className={detailLabelClass}>Phone</p>
              <a
                className="text-cream-soft transition-colors duration-300 ease-out-expo hover:text-cream"
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
              >
                {contact.phone}
              </a>
            </div>
            <div>
              <p className={detailLabelClass}>Email</p>
              <a
                className="text-cream-soft transition-colors duration-300 ease-out-expo hover:text-cream"
                href={`mailto:${contact.email}`}
              >
                {contact.email}
              </a>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 border-t border-line pt-6 md:grid-cols-3">
            {contact.channels.map((channel) => (
              <div key={channel.label}>
                <p className={detailLabelClass}>{channel.label}</p>
                <a
                  className="text-cream-soft transition-colors duration-300 ease-out-expo hover:text-cream"
                  href={`mailto:${channel.value}`}
                >
                  {channel.value}
                </a>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal
          className="border border-line bg-ink-elevated p-6 md:p-9"
          delay={0.1}
        >
          {submitted ? (
            <div className="grid min-h-[22rem] content-center gap-4" role="status">
              <p className="eyebrow">Thank you</p>
              <h3 className="display max-w-[12ch] text-[clamp(1.8rem,3vw,2.4rem)]">
                Your message has been received
              </h3>
              <p className="text-cream-muted">We will get back to you shortly.</p>
              <Button type="button" variant="ghost" onClick={() => setSubmitted(false)}>
                Send another
              </Button>
            </div>
          ) : (
            <form className="grid gap-4" onSubmit={onSubmit} noValidate>
              <label className={labelClass}>
                <span className={labelTextClass}>Name</span>
                <input
                  className={fieldClass}
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={onChange}
                  autoComplete="name"
                />
              </label>
              <label className={labelClass}>
                <span className={labelTextClass}>Email</span>
                <input
                  className={fieldClass}
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={onChange}
                  autoComplete="email"
                />
              </label>
              <label className={labelClass}>
                <span className={labelTextClass}>Phone</span>
                <input
                  className={fieldClass}
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={onChange}
                  autoComplete="tel"
                />
              </label>
              <label className={labelClass}>
                <span className={labelTextClass}>Message</span>
                <textarea
                  className={`${fieldClass} resize-y`}
                  name="message"
                  rows="5"
                  required
                  value={form.message}
                  onChange={onChange}
                />
              </label>
              <Button type="submit" variant="accent">
                Submit Enquiry
              </Button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
