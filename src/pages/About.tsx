import { site } from '../config/site';
import { useTitle } from '../lib/useTitle';

export const About = () => {
  useTitle('About | Almasi Ranch');
  return (
    <>
      <section className="bg-forest-deep pb-20 pt-24 text-cream">
        <div className="container-page">
          <p className="rise eyebrow !text-gold-light">Our story</p>
          <h1 className="rise-2 mt-5 max-w-3xl text-5xl font-semibold leading-tight sm:text-6xl">
            Farming for the future.
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-3xl space-y-7 text-lg leading-relaxed text-ink/80">
          <p className="font-serif text-2xl italic text-forest-deep">
            Almasi Ranch is a livestock farm in {site.location}, raising healthy, high-quality animals through
            sustainable and modern farming.
          </p>
          <p>
            We keep dairy cattle, goats, sheep and poultry, and we supply fresh dairy from our own herd. Our approach
            is simple: keep the animals healthy, use the land carefully, and be honest with every customer about what
            they are buying.
          </p>
          <p>
            Visitors are always welcome by appointment. Come and see the herd, ask questions and take your time before
            you decide.
          </p>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container-page grid gap-10 md:grid-cols-3">
          {[
            ['Animal welfare', 'Feed, water, shelter and routine care come first, every day.'],
            ['Transparent records', 'Health and breeding records are shared before a sale.'],
            ['Sustainable land use', 'Composting, rotation and careful stocking protect the soil.'],
          ].map(([t, b]) => (
            <div key={t}>
              <h2 className="text-2xl font-semibold text-forest-deep">{t}</h2>
              <p className="mt-3 leading-relaxed text-ink/70">{b}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
