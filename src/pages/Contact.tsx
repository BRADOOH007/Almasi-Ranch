import { useState } from 'react';
import { site, whatsappLink } from '../config/site';
import { useTitle } from '../lib/useTitle';

export const Contact = () => {
  useTitle('Contact | Almasi Ranch');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(whatsappLink(`Hello Almasi Ranch.\nName: ${name}\nPhone: ${phone}\n${message}`), '_blank', 'noopener');
  };

  const input = 'mt-2 w-full border-0 border-b border-forest/25 bg-transparent px-0 py-2 focus:border-gold focus:outline-none';

  return (
    <>
      <section className="bg-forest-deep pb-20 pt-24 text-cream">
        <div className="container-page">
          <p className="rise eyebrow !text-gold-light">Get in touch</p>
          <h1 className="rise-2 mt-5 max-w-3xl text-5xl font-semibold leading-tight sm:text-6xl">Contact</h1>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-16 md:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="eyebrow">Visit</p>
              <p className="mt-3 font-serif text-2xl text-forest-deep">{site.location}</p>
              <p className="mt-1 text-ink/70">{site.hours}. Visits by appointment.</p>
            </div>
            <div>
              <p className="eyebrow">Call or WhatsApp</p>
              <a href={site.phoneHref} className="mt-3 block font-serif text-2xl text-forest-deep hover:text-gold">
                {site.phoneDisplay}
              </a>
            </div>
          </div>

          <form onSubmit={send} className="rounded-3xl bg-white p-8 shadow-xl shadow-forest/10 sm:p-10">
            <label className="block text-[0.75rem] font-semibold uppercase tracking-widest2 text-forest-deep/70">
              Name
              <input required value={name} onChange={(e) => setName(e.target.value)} className={input} />
            </label>
            <label className="mt-7 block text-[0.75rem] font-semibold uppercase tracking-widest2 text-forest-deep/70">
              Phone
              <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={input} />
            </label>
            <label className="mt-7 block text-[0.75rem] font-semibold uppercase tracking-widest2 text-forest-deep/70">
              Message
              <textarea required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className={input} />
            </label>
            <button type="submit" className="btn-forest mt-10 w-full">Send on WhatsApp</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
