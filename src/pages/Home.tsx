import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faqs, hero, products, services, site, testimonials, whatsappLink, type Product } from '../config/site';
import { useTitle } from '../lib/useTitle';
import { OrderModal } from '../components/OrderModal';
import { ToastNotifications } from '../components/ToastNotifications';

const priceText = (p: Product) =>
  p.to ? `KSh ${p.from.toLocaleString()} – ${p.to.toLocaleString()}` : `From KSh ${p.from.toLocaleString()}`;

export const Home = () => {
  useTitle('Almasi Ranch | Dairy Cattle, Goats & Fresh Dairy, Nanyuki');
  const [open, setOpen] = useState<Product | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTestimonialIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[90vh] items-center overflow-hidden bg-forest-deep text-cream">
        <div className="absolute inset-0 -z-10">
          <img src="/assets/hero-2.jpg" alt="" aria-hidden="true" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-br from-forest-deep/95 via-forest-deep/80 to-[#0c1a12]" />
        </div>
        <div className="absolute -left-40 top-20 -z-10 h-[500px] w-[500px] rounded-full border border-gold/10" />
        <div className="absolute -right-20 bottom-20 -z-10 h-[400px] w-[400px] rounded-full border border-gold/15" />
        <div className="absolute right-1/4 top-1/3 -z-10 h-3 w-3 rounded-full bg-gold/40" />
        <div className="absolute left-1/3 bottom-1/4 -z-10 h-2 w-2 rounded-full bg-gold/30" />
        <div className="absolute right-1/3 top-2/3 -z-10 h-1.5 w-1.5 rounded-full bg-cream/20" />

        <div className="container-page">
          <p className="rise eyebrow !text-gold-light">{hero.eyebrow}</p>
          <h1 className="rise-2 mt-6 max-w-4xl text-5xl font-bold leading-[1.05] sm:text-7xl lg:text-8xl">
            {hero.heading}
          </h1>
          <p className="rise-3 mt-8 max-w-xl text-lg leading-relaxed text-cream/80 sm:text-xl">
            {hero.subheading}
          </p>
          <p className="rise-3 mt-4 max-w-xl text-sm text-cream/60">
            Dairy cattle · Goats · Sheep · Poultry · Fresh dairy · Farm inputs
          </p>
          <div className="rise-3 mt-12 flex flex-wrap gap-4">
            <Link to="/products" className="btn-forest !bg-gold !text-forest-deep hover:!bg-gold-light">
              Browse Products
            </Link>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-forest-deep border-t border-cream/10">
        <div className="container-page grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {[
            { value: '21+', label: 'Products' },
            { value: '100%', label: 'Vaccinated' },
            { value: '24/7', label: 'WhatsApp Support' },
            { value: 'Kenya-wide', label: 'Delivery' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-5xl font-bold text-gold sm:text-6xl">{s.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest2 text-cream/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="section">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Our catalogue</p>
              <h2 className="section-title mt-4">All products</h2>
              <p className="mt-3 max-w-lg text-ink/70">
                Quality livestock and farm products at honest prices. Every item comes with health records and after-sale support.
              </p>
            </div>
            <Link to="/products" className="text-[0.8rem] font-semibold uppercase tracking-widest2 text-forest hover:text-gold">
              View all →
            </Link>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.filter(p => p.slug !== 'horses').map((p) => (
              <article key={p.slug} className="group card flex flex-col overflow-hidden p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute left-3 top-3 rounded-full bg-cream/95 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-forest shadow-sm">
                    {p.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-xl font-semibold text-forest-deep">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{p.blurb}</p>
                  <p className="mt-3 text-[0.8rem] italic text-ink/55">{p.care}</p>
                  <div className="mt-4 border-t border-forest/10 pt-4">
                    <p className="font-serif text-xl font-semibold text-forest">
                      {p.to ? `KSh ${p.from.toLocaleString()} – ${p.to.toLocaleString()}` : `From KSh ${p.from.toLocaleString()}`}
                    </p>
                    <p className="text-xs text-ink/50">{p.unit}</p>
                    <button
                      type="button"
                      onClick={() => setOpen(p)}
                      className="mt-3 text-[0.75rem] font-semibold uppercase tracking-widest2 text-gold hover:text-forest"
                    >
                      Buy →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About the ranch */}
      <section className="section bg-sand">
        <div className="container-page grid items-center gap-16 md:grid-cols-2">
          <div>
            <p className="eyebrow">Our philosophy</p>
            <h2 className="section-title mt-4">Good animals start with good land.</h2>
            <p className="mt-6 leading-relaxed text-ink/75">
              We keep our herd healthy through careful feeding, clean water, proper housing and steady routines. Every
              animal we sell is checked and its records go with it, so you know what you are buying. Visitors are
              always welcome by appointment.
            </p>
            <Link to="/about" className="mt-8 inline-block text-[0.8rem] font-semibold uppercase tracking-widest2 text-forest hover:text-gold">
              Read more about the ranch →
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-forest/5" />
            <img src="/assets/hero-1.jpg" alt="Almasi Ranch" className="relative rounded-2xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container-page">
          <p className="eyebrow">What we offer</p>
          <h2 className="section-title mt-4 max-w-2xl">Services built around your farm.</h2>
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.name} className="card flex flex-col">
                <h3 className="text-2xl font-semibold text-forest-deep">{s.name}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink/70">{s.blurb}</p>
                {s.price && <p className="mt-5 text-sm font-semibold text-forest">{s.price}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="section bg-forest-deep text-cream">
        <div className="container-page">
          <p className="eyebrow !text-gold-light">Client stories</p>
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">What our clients say</h2>
          <div className="mt-12 relative">
            <div className="mx-auto max-w-3xl rounded-2xl border border-cream/10 bg-cream/5 p-8 backdrop-blur-sm">
              <p className="font-serif text-xl italic leading-relaxed text-cream/90">"{testimonials[testimonialIndex].text}"</p>
              <div className="mt-6 border-t border-cream/10 pt-4">
                <p className="font-semibold text-gold-light">{testimonials[testimonialIndex].name}</p>
                <p className="text-xs text-cream/50">{testimonials[testimonialIndex].location}</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                onClick={() => setTestimonialIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream transition hover:border-gold hover:text-gold"
                aria-label="Previous testimonial"
              >
                ‹
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIndex(i)}
                    className={`h-2 w-2 rounded-full transition ${i === testimonialIndex ? 'bg-gold w-6' : 'bg-cream/30'}`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setTestimonialIndex((i) => (i + 1) % testimonials.length)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream transition hover:border-gold hover:text-gold"
                aria-label="Next testimonial"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-sand">
        <div className="container-page">
          <p className="eyebrow">Questions</p>
          <h2 className="section-title mt-4 max-w-2xl">Frequently asked</h2>
          <dl className="mt-12 divide-y divide-forest/10">
            {faqs.map((f) => (
              <div key={f.q} className="py-6">
                <dt className="font-serif text-xl font-semibold text-forest-deep">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink/70">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-page rounded-3xl bg-forest px-8 py-16 text-center text-cream sm:px-16">
          <p className="eyebrow !text-gold-light">Begin here</p>
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Let us help you build your herd.</h2>
          <p className="mx-auto mt-5 max-w-xl text-cream/75">
            Call or WhatsApp {site.phoneDisplay}. {site.hours}.
          </p>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-10">
            Start a conversation
          </a>
        </div>
      </section>

      <OrderModal product={open} onClose={() => setOpen(null)} />
      <ToastNotifications />
    </>
  );
};

export default Home;
