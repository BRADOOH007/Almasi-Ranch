import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navLinks, site, whatsappLink } from '../config/site';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-cream/95 shadow-sm backdrop-blur' : 'bg-cream'
      }`}
    >
      <div className="container-page flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
          <img src="/logo.svg" alt="Almasi Ranch" className="h-11 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <NavLink
              key={l.href}
              to={l.href}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-[0.78rem] font-semibold uppercase tracking-widest2 transition ${
                  isActive ? 'bg-forest text-cream' : 'text-ink/80 hover:bg-forest/10 hover:text-forest'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-forest !px-5 !py-2.5">
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="p-2 text-forest md:hidden"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeWidth={1.5} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 7h16M4 12h16M4 17h10'} />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-forest/10 bg-cream md:hidden">
          <div className="container-page flex flex-col gap-1 py-5">
            {navLinks.map((l) => (
              <NavLink
                key={l.href}
                to={l.href}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 font-serif text-2xl ${isActive ? 'text-gold' : 'text-forest-deep'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-forest mt-4">
              WhatsApp Us
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
