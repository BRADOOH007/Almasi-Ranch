interface Props {
  className?: string;
}

export const LogoMark = ({ className = 'h-9 w-9 sm:h-10 sm:w-10' }: Props) => (
  <svg viewBox="0 0 48 48" className={`shrink-0 ${className}`} aria-hidden="true">
    <circle cx="24" cy="24" r="22.5" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.2" />
    <path
      d="M11 34 L21 18 L27 27 L31 21 L37 34"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="33" cy="14.5" r="2.2" fill="#b8924a" />
  </svg>
);

export const Logo = ({ className = '' }: Props) => (
  <span className={`inline-flex items-center gap-3 ${className}`}>
    <LogoMark />
    <span className="flex flex-col leading-none">
      <span className="font-serif text-xl font-semibold tracking-[0.14em] sm:text-2xl">ALMASI</span>
      <span className="mt-1.5 text-[0.55rem] font-semibold uppercase tracking-[0.42em] text-gold sm:text-[0.6rem]">
        Ranch
      </span>
    </span>
  </span>
);
