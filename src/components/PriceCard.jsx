import { Check } from 'lucide-react';
import Button from './Button';

export default function PriceCard({ tier, billingMode }) {
  const annualPrice = tier.monthlyPrice === 0 ? 0 : Math.round(tier.monthlyPrice * 12 * 0.8);
  const displayPrice = billingMode === 'monthly' ? tier.monthlyPrice : annualPrice;
  const periodLabel = billingMode === 'monthly' ? '/mo' : '/yr';

  return (
    <article
      className={`rounded-[2rem] border p-8 shadow-card ${
        tier.highlighted ? 'border-forest bg-forest text-sand' : 'border-charcoal/10 bg-white text-charcoal'
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={`text-xs font-bold uppercase tracking-[0.3em] ${tier.highlighted ? 'text-tan' : 'text-forest/60'}`}>
            {tier.name}
          </p>
          <h3 className="mt-4 font-serif text-4xl font-bold">
            ${displayPrice}
            <span className={`ml-2 text-base font-sans ${tier.highlighted ? 'text-sand/70' : 'text-charcoal/60'}`}>
              {periodLabel}
            </span>
          </h3>
          <p className={`mt-4 text-sm leading-7 ${tier.highlighted ? 'text-sand/75' : 'text-charcoal/70'}`}>
            {tier.description}
          </p>
        </div>
        {tier.highlighted ? (
          <span className="rounded-full bg-tan px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal">
            Most Popular
          </span>
        ) : null}
      </div>

      <div className="mt-8 space-y-3">
        {tier.features.map((feature) => (
          <div className="flex items-center gap-3 text-sm" key={feature}>
            <div className={`rounded-full p-1 ${tier.highlighted ? 'bg-white/10 text-tan' : 'bg-forest/10 text-forest'}`}>
              <Check size={14} />
            </div>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <Button className="mt-8 w-full" variant={tier.highlighted ? 'primary' : 'dark'}>
        {tier.cta}
      </Button>
    </article>
  );
}
