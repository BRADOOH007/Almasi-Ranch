import { services, whatsappLink } from '../config/site';
import { useTitle } from '../lib/useTitle';

export const Services = () => {
  useTitle('Services | Almasi Ranch');
  return (
    <>
      <section className="bg-forest-deep pb-20 pt-24 text-cream">
        <div className="container-page">
          <p className="rise eyebrow !text-gold-light">What we offer</p>
          <h1 className="rise-2 mt-5 max-w-3xl text-5xl font-semibold leading-tight sm:text-6xl">Services</h1>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-7 md:grid-cols-2">
          {services.map((s, i) => (
            <div key={s.name} className="card flex flex-col">
              <p className="font-serif text-6xl font-semibold text-gold/40">0{i + 1}</p>
              <h2 className="mt-4 text-3xl font-semibold text-forest-deep">{s.name}</h2>
              <p className="mt-3 flex-1 leading-relaxed text-ink/70">{s.blurb}</p>
              <div className="mt-7 flex items-center justify-between border-t border-forest/10 pt-5">
                <p className="text-sm font-semibold text-forest">{s.price ?? 'Quoted on request'}</p>
                <a href={whatsappLink(`Hello Almasi Ranch, I would like to ask about ${s.name}.`)} target="_blank" rel="noopener noreferrer" className="text-[0.75rem] font-semibold uppercase tracking-widest2 text-gold hover:text-forest">
                  Enquire →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
