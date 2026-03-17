import { Clock3, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import Button from '../components/Button';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import { contactSubjects } from '../data/mockData';

const initialForm = {
  name: '',
  email: '',
  subject: contactSubjects[0],
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = 'Name is required.';
    }
    if (!form.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!form.message.trim()) {
      nextErrors.message = 'Message is required.';
    }

    return nextErrors;
  };

  const handleChange = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setSubmitted(true);
    setForm(initialForm);
    setErrors({});
  };

  return (
    <PageTransition>
      <section className="px-4 pb-24 pt-32 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            description="Questions, partnerships, billing issues, or route-planning help. Send a message and the TrailForge team will get back to you."
            eyebrow="Contact"
            title="Reach the team behind the route."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="rounded-[2rem] border border-charcoal/10 bg-white p-8 shadow-card">
              {submitted ? (
                <div className="rounded-[1.5rem] bg-forest px-6 py-8 text-sand">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-tan">Message sent</p>
                  <h2 className="mt-4 font-serif text-4xl font-bold">We have your note.</h2>
                  <p className="mt-4 text-sm leading-7 text-sand/75">
                    A team member will follow up shortly. If your request is safety-critical, include direct contact details in your reply.
                  </p>
                  <Button className="mt-6" onClick={() => setSubmitted(false)} variant="primary">
                    Send another message
                  </Button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="space-y-2">
                      <span className="text-sm font-semibold text-charcoal/80">Name</span>
                      <input
                        className="w-full rounded-2xl border border-charcoal/10 bg-sand px-4 py-3 text-sm outline-none transition focus:border-forest"
                        onChange={(event) => handleChange('name', event.target.value)}
                        value={form.name}
                      />
                      {errors.name ? <p className="text-sm text-red-500">{errors.name}</p> : null}
                    </label>
                    <label className="space-y-2">
                      <span className="text-sm font-semibold text-charcoal/80">Email</span>
                      <input
                        className="w-full rounded-2xl border border-charcoal/10 bg-sand px-4 py-3 text-sm outline-none transition focus:border-forest"
                        onChange={(event) => handleChange('email', event.target.value)}
                        type="email"
                        value={form.email}
                      />
                      {errors.email ? <p className="text-sm text-red-500">{errors.email}</p> : null}
                    </label>
                  </div>

                  <label className="space-y-2">
                    <span className="text-sm font-semibold text-charcoal/80">Subject</span>
                    <select
                      className="w-full rounded-2xl border border-charcoal/10 bg-sand px-4 py-3 text-sm outline-none transition focus:border-forest"
                      onChange={(event) => handleChange('subject', event.target.value)}
                      value={form.subject}
                    >
                      {contactSubjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="space-y-2">
                    <span className="text-sm font-semibold text-charcoal/80">Message</span>
                    <textarea
                      className="min-h-[180px] w-full rounded-[1.5rem] border border-charcoal/10 bg-sand px-4 py-4 text-sm outline-none transition focus:border-forest"
                      onChange={(event) => handleChange('message', event.target.value)}
                      value={form.message}
                    />
                    {errors.message ? <p className="text-sm text-red-500">{errors.message}</p> : null}
                  </label>

                  <Button type="submit">Submit message</Button>
                </form>
              )}
            </div>

            <aside className="rounded-[2rem] bg-charcoal p-8 text-sand shadow-card">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-tan">Contact details</p>
              <div className="mt-8 space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: 'hello@trailforge.co' },
                  { icon: Phone, label: 'Phone', value: '+1 (415) 555-0178' },
                  { icon: MapPin, label: 'Office', value: '12 Ridge House, Boulder, CO' },
                  { icon: Clock3, label: 'Response time', value: 'Usually within 24 hours' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div className="flex gap-4" key={item.label}>
                      <div className="rounded-2xl bg-white/10 p-3 text-tan">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.25em] text-sand/55">{item.label}</p>
                        <p className="mt-2 font-semibold text-sand">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-tan">Social</p>
                <div className="mt-4 space-y-2 text-sm text-sand/75">
                  <p>Instagram /trailforge</p>
                  <p>LinkedIn /company/trailforge</p>
                  <p>YouTube /trailforge-expeditions</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
