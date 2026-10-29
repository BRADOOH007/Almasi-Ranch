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
    <div className={`fixed bottom-8 left-6 z-40 max-w-sm transition-all duration-500 ${fading ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
      <div className="relative overflow-hidden rounded-2xl border border-gold/20 bg-forest-deep/95 px-6 py-5 shadow-2xl backdrop-blur-md">
        <div className="absolute left-0 top-0 h-full w-1 bg-gold" />
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/20">
            <span className="font-serif text-lg font-bold text-gold-light">{entry.name.charAt(0)}</span>
          </div>
          <div>
            <p className="text-sm leading-relaxed text-cream/90">
              <span className="font-semibold text-gold-light">{entry.name}</span> just purchased{' '}
              <span className="font-semibold text-cream">{entry.product}</span>
            </p>
            <p className="mt-1.5 flex items-center gap-1.5 text-xs text-cream/40">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
              a few moments ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
