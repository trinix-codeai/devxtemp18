import { useState } from 'react';
import FAQItem from '../components/FAQItem';
import PageTransition from '../components/PageTransition';
import PriceCard from '../components/PriceCard';
import SectionHeading from '../components/SectionHeading';
import { comparisonRows, pricingFaqs, pricingTiers } from '../data/mockData';

export default function Pricing() {
  const [billingMode, setBillingMode] = useState('monthly');
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <PageTransition>
      <section className="px-4 pb-24 pt-32 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            align="center"
            description="Choose a planning tier that matches how often you head for remote terrain. Annual billing includes a 20% discount."
            eyebrow="Pricing"
            title="Memberships built for every level of expedition."
          />

          <div className="mt-10 flex justify-center">
            <div className="inline-flex rounded-full border border-charcoal/10 bg-white p-2 shadow-card">
              {['monthly', 'annual'].map((mode) => (
                <button
                  className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition ${
                    billingMode === mode ? 'bg-forest text-sand' : 'text-charcoal/60'
                  }`}
                  key={mode}
                  onClick={() => setBillingMode(mode)}
                  type="button"
                >
                  {mode}
                  {mode === 'annual' ? ' (20% off)' : ''}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <PriceCard billingMode={billingMode} key={tier.name} tier={tier} />
            ))}
          </div>

          <div className="mt-20 rounded-[2rem] border border-charcoal/10 bg-white p-4 shadow-card sm:p-8">
            <h2 className="font-serif text-4xl font-bold">Feature comparison</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="border-b border-charcoal/10 text-charcoal/60">
                  <tr>
                    <th className="px-4 py-4 font-semibold">Feature</th>
                    <th className="px-4 py-4 font-semibold">Explorer</th>
                    <th className="px-4 py-4 font-semibold">Ranger</th>
                    <th className="px-4 py-4 font-semibold">Summit</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr className="border-b border-charcoal/10 last:border-0" key={row.feature}>
                      <td className="px-4 py-4 font-semibold">{row.feature}</td>
                      <td className="px-4 py-4 text-charcoal/70">{row.Explorer}</td>
                      <td className="px-4 py-4 text-charcoal/70">{row.Ranger}</td>
                      <td className="px-4 py-4 text-charcoal/70">{row.Summit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-20 grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
            <div className="rounded-[2rem] bg-charcoal p-8 text-sand shadow-card">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-tan">Why annual</p>
              <h2 className="mt-4 font-serif text-4xl font-bold">Lock in expedition season at the lower rate.</h2>
              <p className="mt-4 text-sm leading-8 text-sand/75">
                Annual plans are designed for travelers who know they will plan multiple routes across the year and want predictable operating cost.
              </p>
            </div>
            <div className="space-y-4">
              {pricingFaqs.map((item, index) => (
                <FAQItem
                  item={item}
                  key={item.question}
                  onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
                  open={openFaq === index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
