import { Link } from 'react-router-dom';
import { navLinks, site } from '../config/site';

export const Footer = () => (
  <footer className="bg-forest-deep text-cream">
    <div className="container-page grid gap-12 py-20 md:grid-cols-3">
      <div>
        <img src="/logo.svg" alt="Almasi Ranch" className="h-12 w-auto rounded-md bg-cream p-1.5" />
        <p className="mt-6 max-w-xs font-serif text-xl italic text-cream/80">{site.tagline}.</p>
        <p className="mt-3 text-sm text-cream/60">Based in {site.location}.</p>
      </div>

      <div>
        <h3 className="eyebrow !text-gold-light">Explore</h3>
        <ul className="mt-5 space-y-3 text-sm text-cream/75">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link to={l.href} className="transition hover:text-gold-light">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="eyebrow !text-gold-light">Visit & Enquire</h3>
        <ul className="mt-5 space-y-3 text-sm text-cream/75">
          <li>{site.location}</li>
          <li>{site.hours}</li>
          <li>
            <a href={site.phoneHref} className="transition hover:text-gold-light">
              {site.phoneDisplay}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-cream/10 py-6 text-center text-xs tracking-wide text-cream/50">
      © {new Date().getFullYear()} Almasi Ranch. All rights reserved.
    </div>
  </footer>
);
