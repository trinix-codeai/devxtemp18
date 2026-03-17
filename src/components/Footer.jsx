import { Instagram, Linkedin, Mountain, Send, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { footerLinks } from '../data/mockData';

const footerNavMap = {
  Planner: '/planner',
  Pricing: '/pricing',
  Admin: '/admin',
  About: '/about',
  Contact: '/contact',
};

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-charcoal px-4 py-16 text-sand sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr,1fr,1fr,1fr]">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-tan/15 p-2 text-tan">
              <Mountain size={20} />
            </div>
            <div>
              <p className="font-serif text-3xl font-bold leading-none">TrailForge</p>
              <p className="text-xs uppercase tracking-[0.35em] text-sand/50">Rugged premium planning</p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-7 text-sand/70">
            Built for travelers who need the confidence of a field notebook with the clarity of a modern planning system.
          </p>
          <div className="flex items-center gap-3 text-sand/70">
            {[Instagram, Linkedin, Youtube, Send].map((Icon) => (
              <a
                className="rounded-full border border-white/10 p-3 transition hover:border-tan hover:text-tan"
                href="/"
                key={Icon.displayName ?? Icon.name}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section}>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-tan">{section}</p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-sand/70">
              {links.map((label) =>
                footerNavMap[label] ? (
                  <Link className="transition hover:text-sand" key={label} to={footerNavMap[label]}>
                    {label}
                  </Link>
                ) : (
                  <a className="transition hover:text-sand" href="/" key={label}>
                    {label}
                  </a>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-14 max-w-7xl border-t border-white/10 pt-6 text-sm text-sand/50">
        © 2026 TrailForge. Built for serious routes and quiet camps.
      </div>
    </footer>
  );
}
