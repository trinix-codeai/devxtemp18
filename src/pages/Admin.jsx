import { ArrowDownRight, ArrowUpRight, MoreHorizontal } from 'lucide-react';
import AdminSidebar from '../components/AdminSidebar';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import {
  adminRecentTrips,
  adminUsers,
  monthlyTrips,
  overviewStats,
  recentActivity,
} from '../data/mockData';

const statusStyles = {
  Active: 'bg-emerald-100 text-emerald-700',
  Completed: 'bg-sky-100 text-sky-700',
  Cancelled: 'bg-rose-100 text-rose-700',
  Trial: 'bg-amber-100 text-amber-700',
  Paused: 'bg-stone-200 text-stone-700',
};

export default function Admin() {
  const maxTrips = Math.max(...monthlyTrips.map((item) => item.trips));

  return (
    <PageTransition>
      <section className="px-4 pb-24 pt-32 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl space-y-8">
          <SectionHeading
            description="Mock operational data showing product health, recent trip activity, and the state of the member base."
            eyebrow="Admin Dashboard"
            title="A compact control room for the TrailForge operation."
          />

          <div className="grid gap-8 xl:grid-cols-[280px,1fr]">
            <AdminSidebar />

            <div className="space-y-8">
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {overviewStats.map((item) => (
                  <article className="rounded-[2rem] border border-charcoal/10 bg-white p-6 shadow-card" key={item.label}>
                    <p className="text-sm uppercase tracking-[0.25em] text-charcoal/50">{item.label}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <p className="font-serif text-4xl font-bold">{item.value}</p>
                      <div
                        className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
                          item.direction === 'up' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                        }`}
                      >
                        {item.direction === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                        {item.change}
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="grid gap-8 xl:grid-cols-[1.1fr,0.9fr]">
                <div className="rounded-[2rem] border border-charcoal/10 bg-white p-6 shadow-card">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.3em] text-forest/60">Recent trips</p>
                      <h2 className="mt-3 font-serif text-3xl font-bold">Current route activity</h2>
                    </div>
                    <button className="rounded-full border border-charcoal/10 p-2 text-charcoal/60" type="button">
                      <MoreHorizontal size={18} />
                    </button>
                  </div>

                  <div className="mt-6 overflow-x-auto">
                    <table className="min-w-full text-left text-sm">
                      <thead className="border-b border-charcoal/10 text-charcoal/55">
                        <tr>
                          <th className="px-3 py-3 font-semibold">User</th>
                          <th className="px-3 py-3 font-semibold">Destination</th>
                          <th className="px-3 py-3 font-semibold">Dates</th>
                          <th className="px-3 py-3 font-semibold">Status</th>
                          <th className="px-3 py-3 font-semibold">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {adminRecentTrips.map((trip) => (
                          <tr className="border-b border-charcoal/10 last:border-0" key={`${trip.user}-${trip.destination}`}>
                            <td className="px-3 py-4 font-semibold">{trip.user}</td>
                            <td className="px-3 py-4 text-charcoal/70">{trip.destination}</td>
                            <td className="px-3 py-4 text-charcoal/70">{trip.dates}</td>
                            <td className="px-3 py-4">
                              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[trip.status]}`}>
                                {trip.status}
                              </span>
                            </td>
                            <td className="px-3 py-4">
                              <button className="rounded-full border border-charcoal/10 px-3 py-1 text-xs font-semibold" type="button">
                                View
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-charcoal/10 bg-white p-6 shadow-card">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-forest/60">Trips created</p>
                  <h2 className="mt-3 font-serif text-3xl font-bold">Last 6 months</h2>
                  <div className="mt-10 flex h-72 items-end justify-between gap-4">
                    {monthlyTrips.map((item) => (
                      <div className="flex flex-1 flex-col items-center" key={item.month}>
                        <div className="w-full rounded-t-[1.5rem] bg-gradient-to-t from-forest to-tan" style={{ height: `${(item.trips / maxTrips) * 100}%` }} />
                        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/55">{item.month}</p>
                        <p className="mt-1 text-sm font-semibold text-charcoal">{item.trips}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-8 xl:grid-cols-[1.1fr,0.9fr]">
                <div className="rounded-[2rem] border border-charcoal/10 bg-white p-6 shadow-card">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-forest/60">Users</p>
                  <h2 className="mt-3 font-serif text-3xl font-bold">Member management</h2>
                  <div className="mt-6 overflow-x-auto">
                    <table className="min-w-full text-left text-sm">
                      <thead className="border-b border-charcoal/10 text-charcoal/55">
                        <tr>
                          <th className="px-3 py-3 font-semibold">Name</th>
                          <th className="px-3 py-3 font-semibold">Email</th>
                          <th className="px-3 py-3 font-semibold">Plan</th>
                          <th className="px-3 py-3 font-semibold">Joined</th>
                          <th className="px-3 py-3 font-semibold">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {adminUsers.map((user) => (
                          <tr className="border-b border-charcoal/10 last:border-0" key={user.email}>
                            <td className="px-3 py-4 font-semibold">{user.name}</td>
                            <td className="px-3 py-4 text-charcoal/70">{user.email}</td>
                            <td className="px-3 py-4 text-charcoal/70">{user.plan}</td>
                            <td className="px-3 py-4 text-charcoal/70">{user.joined}</td>
                            <td className="px-3 py-4">
                              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[user.status]}`}>
                                {user.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="rounded-[2rem] bg-charcoal p-6 text-sand shadow-card">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-tan">Activity feed</p>
                  <div className="mt-6 space-y-5">
                    {recentActivity.map((activity) => (
                      <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4" key={activity.title}>
                        <div className="flex items-center justify-between gap-3">
                          <p className="font-semibold">{activity.title}</p>
                          <span className="text-xs uppercase tracking-[0.25em] text-sand/45">{activity.time}</span>
                        </div>
                        <p className="mt-3 text-sm leading-7 text-sand/70">{activity.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
