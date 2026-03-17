import { ChevronDown } from 'lucide-react';

export default function FAQItem({ item, open, onToggle }) {
  return (
    <div className="rounded-[1.5rem] border border-charcoal/10 bg-white p-5 shadow-card">
      <button className="flex w-full items-center justify-between gap-4 text-left" onClick={onToggle} type="button">
        <span className="font-semibold text-charcoal">{item.question}</span>
        <ChevronDown
          className={`shrink-0 text-forest transition ${open ? 'rotate-180' : ''}`}
          size={18}
        />
      </button>
      {open ? <p className="mt-4 text-sm leading-7 text-charcoal/70">{item.answer}</p> : null}
    </div>
  );
}
