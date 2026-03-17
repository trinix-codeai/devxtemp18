import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import { companyStats, teamMembers, timelineMilestones } from '../data/mockData';

export default function About() {
  return (
    <PageTransition>
      <section className="px-4 pb-24 pt-32 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl space-y-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-forest/70">About TrailForge</p>
              <h1 className="mt-6 font-serif text-6xl font-bold leading-none text-charcoal sm:text-7xl">
                Build calm into difficult travel.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-charcoal/70">
                Our mission is straightforward: make expedition planning feel disciplined, beautiful, and usable when the route gets far from the signal bar.
              </p>
            </div>
            <div className="rounded-[2.5rem] bg-charcoal p-6 text-sand shadow-card">
              <img
                alt="TrailForge team in the field"
                className="h-[420px] w-full rounded-[2rem] object-cover"
                src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=1200&q=80"
              />
            </div>
          </div>

          <section>
            <SectionHeading
              description="A compact team of operators, guides, and product builders shaping a better toolkit for off-grid travel."
              eyebrow="Team"
              title="People who design for the real field."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-4">
              {teamMembers.map((member) => (
                <article className="rounded-[2rem] border border-charcoal/10 bg-white p-6 shadow-card" key={member.name}>
                  <img alt={member.name} className="h-72 w-full rounded-[1.5rem] object-cover" src={member.avatar} />
                  <h3 className="mt-5 font-serif text-3xl font-bold">{member.name}</h3>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-forest/60">{member.role}</p>
                  <p className="mt-4 text-sm leading-7 text-charcoal/70">{member.bio}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[2.5rem] bg-forest px-8 py-12 text-sand shadow-card">
            <SectionHeading
              description="The numbers behind the routes, travelers, and years of field iteration that shaped the product."
              eyebrow="Scale"
              light
              title="Measured by use, not slogans."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {companyStats.map((stat) => (
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6" key={stat.label}>
                  <p className="font-serif text-5xl font-bold text-tan">{stat.value}</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.25em] text-sand/65">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading
              description="A clear view of how TrailForge moved from field-tested planning notes to a complete travel platform."
              eyebrow="Timeline"
              title="Our story in five milestones."
            />
            <div className="mt-12 space-y-6">
              {timelineMilestones.map((milestone) => (
                <div className="grid gap-4 rounded-[2rem] border border-charcoal/10 bg-white p-6 shadow-card md:grid-cols-[140px,1fr] md:items-start" key={milestone.year}>
                  <div className="font-serif text-5xl font-bold text-forest">{milestone.year}</div>
                  <div>
                    <h3 className="font-serif text-3xl font-bold">{milestone.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-charcoal/70">{milestone.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </PageTransition>
  );
}
