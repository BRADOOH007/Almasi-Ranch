import { blogPosts, site, testimonials, whatsappLink } from '../config/site';
import { useTitle } from '../lib/useTitle';

export const Blog = () => {
  useTitle('Blog & News | Almasi Ranch');
  return (
    <>
      <section className="bg-forest-deep pb-20 pt-24 text-cream">
        <div className="container-page">
          <p className="rise eyebrow !text-gold-light">News & Tips</p>
          <h1 className="rise-2 mt-5 max-w-3xl text-5xl font-semibold leading-tight sm:text-6xl">Blog & News</h1>
          <p className="rise-3 mt-6 max-w-xl text-cream/75">
            Farm updates, new stock arrivals, and practical farming tips from Almasi Ranch.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="card flex flex-col overflow-hidden p-0">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={post.image} alt={post.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="rounded-full bg-forest/10 px-3 py-1 font-semibold uppercase tracking-widest2 text-forest">{post.category}</span>
                    <span className="text-ink/50">{new Date(post.date).toLocaleDateString('en-KE', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold text-forest-deep">{post.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">{post.excerpt}</p>
                  <p className="mt-4 text-xs text-ink/50">By {post.author}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-forest-deep text-cream">
        <div className="container-page">
          <p className="eyebrow !text-gold-light">Client stories</p>
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">What our clients say</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-cream/10 bg-cream/5 p-7 backdrop-blur-sm">
                <p className="font-serif text-lg italic leading-relaxed text-cream/90">"{t.text}"</p>
                <div className="mt-6 border-t border-cream/10 pt-4">
                  <p className="font-semibold text-gold-light">{t.name}</p>
                  <p className="text-xs text-cream/50">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page rounded-3xl bg-forest px-8 py-16 text-center text-cream sm:px-16">
          <p className="eyebrow !text-gold-light">Have a question?</p>
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Get in touch</h2>
          <p className="mx-auto mt-5 max-w-xl text-cream/75">
            Call or WhatsApp {site.phoneDisplay}. {site.hours}.
          </p>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-outline mt-10">
            Start a conversation
          </a>
        </div>
      </section>
    </>
  );
};

export default Blog;
