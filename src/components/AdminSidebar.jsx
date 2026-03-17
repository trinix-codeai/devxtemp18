import {
  BarChart3,
  CreditCard,
  LayoutDashboard,
  Route,
  Settings,
  Users,
} from 'lucide-react';

const items = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'Trips', icon: Route },
  { label: 'Users', icon: Users },
  { label: 'Revenue', icon: CreditCard },
  { label: 'Reports', icon: BarChart3 },
  { label: 'Settings', icon: Settings },
];

export default function AdminSidebar() {
  return (
    <aside className="rounded-[2rem] bg-charcoal p-6 text-sand shadow-card">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-tan">Admin console</p>
      <h2 className="mt-4 font-serif text-3xl font-bold">TrailForge Ops</h2>
      <nav className="mt-8 space-y-2">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm transition ${
                index === 0 ? 'bg-white/10 text-sand' : 'text-sand/65 hover:bg-white/5 hover:text-sand'
              }`}
              key={item.label}
              type="button"
            >
              <Icon size={17} />
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
