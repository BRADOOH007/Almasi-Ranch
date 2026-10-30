import { useEffect, useState } from 'react';
import { toastEntries } from '../config/site';

export const ToastNotifications = () => {
  const [visible, setVisible] = useState(false);
  const [entry, setEntry] = useState(toastEntries[0]);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    let fadeTimer: ReturnType<typeof setTimeout>;
    const show = () => {
      const random = toastEntries[Math.floor(Math.random() * toastEntries.length)];
      setEntry(random);
      setFading(false);
      setVisible(true);
      fadeTimer = setTimeout(() => setFading(true), 3500);
      timer = setTimeout(() => setVisible(false), 4000);
    };
    const schedule = () => {
      const delay = 25000 + Math.random() * 20000;
      timer = setTimeout(() => { show(); schedule(); }, delay);
    };
    const first = setTimeout(() => { show(); schedule(); }, 15000);
    return () => { clearTimeout(first); clearTimeout(timer); clearTimeout(fadeTimer); };
  }, []);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-24 left-4 right-24 z-40 transition-all duration-700 ease-out sm:bottom-8 sm:left-8 sm:right-auto sm:w-[22rem] ${
        fading ? 'pointer-events-none translate-y-2 opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      <div className="relative flex items-center gap-4 border border-gold/30 bg-forest-deep/95 px-5 py-4 shadow-2xl backdrop-blur-md">
        <div className="absolute inset-y-0 left-0 w-px bg-gold/70" />
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40">
          <span className="font-serif text-xl font-semibold leading-none text-gold-light">{entry.name.charAt(0)}</span>
        </div>
        <div className="min-w-0">
          <p className="font-serif text-lg leading-snug text-cream">
            <span className="font-semibold text-gold-light">{entry.name}</span> just purchased{' '}
            <span className="italic text-cream">{entry.product}</span>
          </p>
          <p className="mt-1 flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-widest2 text-cream/50">
            <span className="inline-block h-1 w-1 rounded-full bg-gold" />
            A few moments ago
          </p>
        </div>
      </div>
    </div>
  );
};
