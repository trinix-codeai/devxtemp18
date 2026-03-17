import { Binoculars, Compass, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import DestinationCarousel from '../components/DestinationCarousel';
import FeatureCard from '../components/FeatureCard';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import {
  featuredDestinations,
  testimonials,
  whyTrailForge,
} from '../data/mockData';

const featureIcons = [Compass, Binoculars, Shield];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim()) {
      return;
    }

    setJoined(true);
    setEmail('');
  };

  return (
    <PageTransition>
      <section className="relative isolate overflow-hidden bg-grain-gradient px-4 pb-24 pt-32 text-sand sm:px-6 lg:px-10">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center opacity-35"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80')",
            transform: `translateY(${scrollY * 0.18}px) scale(1.1)`,
          }}
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(28,28,28,0.35),rgba(28,28,28,0.82))]" />

        <div className="mx-auto grid min-h-[82vh] max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-tan">Adventure & off-grid travel</p>
            <h1 className="mt-6 font-serif text-6xl font-bold leading-none sm:text-7xl lg:text-[6.5rem]">
              Forge the route before the wild tests it.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-sand/80">
              TrailForge gives serious travelers a premium planning system for remote terrain, layered with logistics, safety, and field clarity.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/planner">
                <Button className="w-full sm:w-auto">Build Your Itinerary</Button>
              </Link>
              <Link to="/pricing">
                <Button className="w-full sm:w-auto" variant="secondary">
                  Explore Memberships
                </Button>
              </Link>
            </div>
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur">
              {[
                { value: '84K+', label: 'Trips planned' },
                { value: '62', label: 'Countries covered' },
                { value: '19K', label: 'Active travelers' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl font-bold text-tan">{stat.value}</p>
                  <p className="text-sm text-sand/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-tan">Expedition rhythm</p>
              <h2 className="mt-4 font-serif text-4xl font-bold">From trailhead to emergency fallback.</h2>
              <p className="mt-4 text-sm leading-7 text-sand/75">
                Keep every camp, contact, and checkpoint visible across the full route instead of scattering risk across tabs.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-charcoal/60 p-6 backdrop-blur">
              <img
                alt="Off-grid camp"
                className="h-60 w-full rounded-[1.5rem] object-cover"
                src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            description="TrailForge is structured around how real off-grid trips happen: route logic first, operational details second, and no weak handoff between them."
            eyebrow="Why TrailForge"
            title="Premium planning for people who travel past the obvious road."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {whyTrailForge.map((item, index) => (
              <FeatureCard icon={featureIcons[index]} key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-24 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            description="A rotating slate of iconic destinations to benchmark effort, duration, and route style before you commit."
            eyebrow="Featured Routes"
            title="Build toward landscapes that reward preparation."
          />
          <div className="mt-12">
            <DestinationCarousel destinations={featuredDestinations} />
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            align="center"
            description="Trusted by independent travelers, route leaders, and small expedition teams who need one system that respects both risk and beauty."
            eyebrow="Field Notes"
            title="What travelers say after the route is over."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article className="rounded-[2rem] border border-charcoal/10 bg-white p-7 shadow-card" key={testimonial.name}>
                <p className="text-sm leading-8 text-charcoal/75">"{testimonial.quote}"</p>
                <div className="mt-8 flex items-center gap-4">
                  <img
                    alt={testimonial.name}
                    className="h-14 w-14 rounded-full object-cover"
                    src={testimonial.avatar}
                  />
                  <div>
                    <p className="font-semibold text-charcoal">{testimonial.name}</p>
                    <p className="text-sm text-charcoal/60">{testimonial.trip}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-forest px-8 py-12 text-sand shadow-card lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-tan">Newsletter</p>
              <h2 className="mt-4 font-serif text-5xl font-bold">Get route ideas, seasonal intel, and gear notes.</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-sand/75">
                A concise dispatch for travelers planning the next hard-earned week away from reception.
              </p>
            </div>
            <form className="rounded-[2rem] bg-white/10 p-5 backdrop-blur" onSubmit={handleSubmit}>
              <label className="block text-sm font-semibold text-sand/80">
                Email address
                <input
                  className="mt-3 w-full rounded-2xl border border-white/10 bg-charcoal/40 px-4 py-3 text-sand outline-none transition focus:border-tan"
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@expedition.com"
                  type="email"
                  value={email}
                />
              </label>
              <Button className="mt-4 w-full" type="submit">
                Join the dispatch
              </Button>
              <p className="mt-4 text-sm text-sand/70">
                {joined ? 'You are on the list. Expect the next dispatch soon.' : 'One clean email. No daily noise.'}
              </p>
            </form>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
