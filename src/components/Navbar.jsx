import { Menu, Mountain, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navLinks } from '../data/mockData';
import Button from './Button';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const navItemClasses = ({ isActive }) =>
    `transition ${
      isActive ? 'text-tan' : 'text-sand/80 hover:text-sand'
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-charcoal/80 px-5 py-3 shadow-card backdrop-blur-xl">
        <Link className="flex items-center gap-3 text-sand" to="/">
          <div className="rounded-full bg-tan/15 p-2 text-tan">
            <Mountain size={20} />
          </div>
          <div>
            <p className="font-serif text-2xl font-bold leading-none">TrailForge</p>
            <p className="text-[10px] uppercase tracking-[0.35em] text-sand/60">Off-grid travel</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {navLinks.map((link) => (
            <NavLink className={navItemClasses} key={link.path} to={link.path}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/planner">
            <Button>Start Planning</Button>
          </Link>
        </div>

        <button
          aria-label="Toggle navigation"
          className="rounded-full border border-white/10 p-2 text-sand lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-charcoal/95 p-5 shadow-card backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-4 text-sm font-medium text-sand">
            {navLinks.map((link) => (
              <NavLink className={navItemClasses} key={link.path} to={link.path}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <Link className="mt-5 block" to="/planner">
            <Button className="w-full">Start Planning</Button>
          </Link>
        </div>
      ) : null}
    </header>
  );
}
