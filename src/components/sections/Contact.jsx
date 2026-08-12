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
  "w-full rounded-xl border border-white/10 bg-ink/40 px-4 py-3 outline-none backdrop-blur-md transition-colors duration-300 ease-out-expo focus:border-bronze sm:py-3.5";

const labelClass = "grid gap-1.5";
const labelTextClass =
  "text-[0.68rem] uppercase tracking-[0.14em] text-cream-muted sm:text-[0.7rem]";
const detailLabelClass =
  "mb-1.5 text-[0.68rem] uppercase tracking-[0.16em] text-bronze sm:text-[0.7rem]";

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
      className="section-pad relative overflow-hidden bg-[radial-gradient(ellipse_70%_50%_at_80%_20%,rgba(201,166,107,0.07),transparent_55%),var(--color-ink)]"
      id={contact.id}
    >
      <div
        className="ambient-orb -left-16 bottom-10 size-72 bg-bronze/10"
        aria-hidden="true"
      />

      <div className="container-page grid items-start gap-6 md:grid-cols-2 md:gap-10 lg:gap-16">
        <Reveal>
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2 className="display mt-4 text-[clamp(2rem,4.5vw,3.8rem)]">
            {contact.title}
          </h2>
          <p className="mt-4 max-w-md text-[0.98rem] text-cream-muted sm:mt-5 sm:text-[1.05rem]">
            {contact.body}
          </p>

          <div className="mt-7 grid gap-3 sm:mt-8 sm:gap-4">
            <div className="glass-soft rounded-xl p-4 sm:p-5">
              <p className={detailLabelClass}>{contact.office.label}</p>
              <p className="text-[0.95rem] sm:text-base">{contact.office.value}</p>
            </div>
            <div className="grid grid-cols-1 gap-3 xs:grid-cols-2">
              <div className="glass-soft rounded-xl p-4 sm:p-5">
                <p className={detailLabelClass}>Phone</p>
                <a
                  className="break-all text-cream-soft transition-colors duration-300 ease-out-expo hover:text-cream"
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                >
                  {contact.phone}
                </a>
              </div>
              <div className="glass-soft rounded-xl p-4 sm:p-5">
                <p className={detailLabelClass}>Email</p>
                <a
                  className="break-all text-cream-soft transition-colors duration-300 ease-out-expo hover:text-cream"
                  href={`mailto:${contact.email}`}
                >
                  {contact.email}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 border-t border-line pt-5 xs:grid-cols-3 sm:mt-6">
            {contact.channels.map((channel) => (
              <div key={channel.label} className="glass-soft rounded-xl p-4">
                <p className={detailLabelClass}>{channel.label}</p>
                <a
                  className="break-all text-[0.9rem] text-cream-soft transition-colors duration-300 ease-out-expo hover:text-cream"
                  href={`mailto:${channel.value}`}
                >
                  {channel.value}
                </a>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="glass-panel rounded-2xl p-5 sm:p-7 md:p-8" delay={0.1}>
          {submitted ? (
            <div className="grid min-h-[18rem] content-center gap-4 sm:min-h-[22rem]" role="status">
              <p className="eyebrow">Thank you</p>
              <h3 className="display max-w-[12ch] text-[clamp(1.6rem,3vw,2.4rem)]">
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
                  className={`${fieldClass} min-h-28 resize-y`}
                  name="message"
                  rows="5"
                  required
                  value={form.message}
                  onChange={onChange}
                />
              </label>
              <Button type="submit" variant="accent" className="mt-1 w-full sm:w-auto">
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
