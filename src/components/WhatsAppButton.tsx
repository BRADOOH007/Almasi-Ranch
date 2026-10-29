import { MessageCircle } from 'lucide-react';
import { site, whatsappLink } from '../config/site';

export const WhatsAppButton = () => (
  <a
    href={whatsappLink('Hello Almasi Ranch, I would like to make an enquiry.')}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110 hover:bg-[#1da851]"
  >
    <MessageCircle className="h-7 w-7" />
  </a>
);
