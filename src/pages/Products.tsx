import { useMemo, useState } from 'react';
import { productCategories, products, whatsappLink, type Product } from '../config/site';
import { useTitle } from '../lib/useTitle';
import { OrderModal } from '../components/OrderModal';

const priceText = (p: Product) =>
  p.to ? `KSh ${p.from.toLocaleString()} – ${p.to.toLocaleString()}` : `From KSh ${p.from.toLocaleString()}`;

export const Products = () => {
  useTitle('Products | Almasi Ranch');
  const [category, setCategory] = useState<(typeof productCategories)[number]>('All');
  const [open, setOpen] = useState<Product | null>(null);

  const visible = useMemo(
    () => (category === 'All' ? products : products.filter((p) => p.category === category)),
    [category],
  );

  return (
    <>
      <section className="bg-forest-deep pb-20 pt-24 text-cream">
        <div className="container-page">
          <p className="rise eyebrow !text-gold-light">The catalogue</p>
          <h1 className="rise-2 mt-5 max-w-3xl text-5xl font-semibold leading-tight sm:text-6xl">Products &amp; prices</h1>
          <p className="rise-3 mt-6 max-w-xl text-cream/75">
            Indicative prices for each item. We confirm availability and the final price before anything is booked.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2.5">
            {productCategories.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={c === category}
                onClick={() => setCategory(c)}
                className={`rounded-full px-5 py-2 text-[0.75rem] font-semibold uppercase tracking-widest2 transition ${
                  c === category ? 'bg-forest text-cream' : 'border border-forest/20 text-forest hover:border-gold hover:text-gold'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <ul className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <li key={p.slug}>
                <article className="card flex h-full flex-col overflow-hidden p-0">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-110" />
                    <span className="absolute left-3 top-3 rounded-full bg-cream/95 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-forest shadow-sm">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-3xl font-semibold text-forest-deep">{p.name}</h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">{p.blurb}</p>
                    <p className="mt-4 text-sm italic text-ink/60">{p.care}</p>
                    <div className="mt-6 flex flex-wrap items-end justify-between gap-x-4 gap-y-3 border-t border-forest/10 pt-5">
                      <p className="font-serif text-2xl font-semibold text-forest">{priceText(p)}</p>
                      <p className="text-xs text-ink/50">{p.unit}</p>
                      <button
                        type="button"
                        onClick={() => setOpen(p)}
                        className="btn-forest !px-5 !py-2.5 !text-[0.7rem]"
                      >
                        Buy
                      </button>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          <p className="mt-16 text-center text-sm text-ink/60">
            Want something not listed?{' '}
            <a href={whatsappLink('Hello Almasi Ranch, I am looking for something not on your list.')} target="_blank" rel="noopener noreferrer" className="font-semibold text-forest underline-offset-4 hover:underline">
              Ask us on WhatsApp
            </a>
            .
          </p>
        </div>
      </section>

      <OrderModal product={open} onClose={() => setOpen(null)} />
    </>
  );
};

export default Products;
