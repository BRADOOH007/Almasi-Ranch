import { useEffect, useState } from 'react';
import { whatsappLink, type Product } from '../config/site';

interface Props {
  product: Product | null;
  onClose: () => void;
}

const priceText = (p: Product) =>
  p.to ? `KSh ${p.from.toLocaleString()} – ${p.to.toLocaleString()} ${p.unit}` : `From KSh ${p.from.toLocaleString()} ${p.unit}`;

export const OrderModal = ({ product, onClose }: Props) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [product, onClose]);

  if (!product) return null;

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      `Hello Almasi Ranch, I would like to enquire about ${product.name}.`,
      `Quantity: ${quantity}`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      notes ? `Notes: ${notes}` : '',
      `Indicative price shown on the website: ${priceText(product)}`,
    ]
      .filter(Boolean)
      .join('\n');
    window.open(whatsappLink(message), '_blank', 'noopener');
  };

  const input = 'mt-2 w-full border-0 border-b border-forest/25 bg-transparent px-0 py-2 text-[0.95rem] focus:border-gold focus:outline-none';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Enquire about ${product.name}`}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-forest-deep/70 p-5 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="w-full max-w-md rounded-2xl bg-cream p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <p className="eyebrow">Enquiry</p>
        <h2 className="mt-2 text-3xl font-semibold text-forest-deep">{product.name}</h2>
        <p className="mt-2 text-sm text-forest-deep/70">{priceText(product)}</p>

        <form onSubmit={send} className="mt-7 space-y-5">
          <label className="block text-[0.8rem] font-semibold uppercase tracking-widest2 text-forest-deep/70">
            Name
            <input required value={name} onChange={(e) => setName(e.target.value)} className={input} />
          </label>
          <label className="block text-[0.8rem] font-semibold uppercase tracking-widest2 text-forest-deep/70">
            Phone
            <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={input} />
          </label>
          <label className="block text-[0.8rem] font-semibold uppercase tracking-widest2 text-forest-deep/70">
            Quantity
            <input required type="number" min={1} value={quantity} onChange={(e) => setQuantity(e.target.value)} className={input} />
          </label>
          <label className="block text-[0.8rem] font-semibold uppercase tracking-widest2 text-forest-deep/70">
            Notes
            <textarea rows={2} value={notes} onChange={(e) => setNotes(e.target.value)} className={input} />
          </label>

          <div className="flex items-center justify-between pt-3">
            <button type="button" onClick={onClose} className="text-sm font-semibold text-forest-deep/60 hover:text-forest-deep">
              Cancel
            </button>
            <button type="submit" className="btn-forest">Send on WhatsApp</button>
          </div>
        </form>
      </div>
    </div>
  );
};
