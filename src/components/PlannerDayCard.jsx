import { CalendarDays, MapPin, Plus, ShieldAlert, Trash2 } from 'lucide-react';

export default function PlannerDayCard({
  day,
  dayNumber,
  weatherBadge,
  onFieldChange,
  onActivityChange,
  onAddActivity,
  onRemoveActivity,
  onGearChange,
  onAddGear,
  onRemoveGear,
}) {
  return (
    <article className="rounded-[2rem] border border-charcoal/10 bg-white p-6 shadow-card">
      <div className="flex flex-col gap-4 border-b border-charcoal/10 pb-5 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-forest/60">
            <CalendarDays size={14} />
            Day {dayNumber}
          </div>
          <p className="mt-2 font-serif text-3xl font-bold text-charcoal">
            {day.date
              ? new Date(day.date).toLocaleDateString(undefined, {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })
              : 'Choose a start date'}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-forest px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-sand">
            {weatherBadge.label}
          </span>
          <span className="rounded-full bg-tan/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-charcoal">
            {weatherBadge.season}
          </span>
        </div>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-charcoal/80">Location</span>
          <div className="relative">
            <MapPin className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/30" size={16} />
            <input
              className="w-full rounded-2xl border border-charcoal/10 bg-sand py-3 pl-11 pr-4 text-sm outline-none transition focus:border-forest"
              onChange={(event) => onFieldChange(day.id, 'location', event.target.value)}
              placeholder="Camp, trailhead, waypoint"
              value={day.location}
            />
          </div>
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-charcoal/80">Nearest medical point</span>
          <input
            className="w-full rounded-2xl border border-charcoal/10 bg-sand px-4 py-3 text-sm outline-none transition focus:border-forest"
            onChange={(event) => onFieldChange(day.id, 'medicalPoint', event.target.value)}
            placeholder="Clinic, ranger station, rescue access"
            value={day.medicalPoint}
          />
        </label>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <div className="rounded-[1.5rem] bg-sand p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-charcoal/70">Activities</p>
            <button
              className="inline-flex items-center gap-2 rounded-full bg-forest px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sand"
              onClick={() => onAddActivity(day.id)}
              type="button"
            >
              <Plus size={14} />
              Add
            </button>
          </div>
          <div className="mt-4 space-y-3">
            {day.activities.map((activity, index) => (
              <div className="flex gap-3" key={`${day.id}-activity-${index}`}>
                <input
                  className="w-full rounded-2xl border border-charcoal/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-forest"
                  onChange={(event) => onActivityChange(day.id, index, event.target.value)}
                  placeholder="Hike ridgeline, river crossing, resupply stop"
                  value={activity}
                />
                {day.activities.length > 1 ? (
                  <button
                    className="rounded-2xl border border-charcoal/10 px-4 text-charcoal/60 transition hover:border-red-300 hover:text-red-500"
                    onClick={() => onRemoveActivity(day.id, index)}
                    type="button"
                  >
                    <Trash2 size={16} />
                  </button>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.5rem] bg-sand p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-charcoal/70">Gear checklist</p>
            <button
              className="inline-flex items-center gap-2 rounded-full bg-forest px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sand"
              onClick={() => onAddGear(day.id)}
              type="button"
            >
              <Plus size={14} />
              Add
            </button>
          </div>
          <div className="mt-4 space-y-3">
            {day.gearChecklist.map((item, index) => (
              <div className="flex items-center gap-3" key={`${day.id}-gear-${index}`}>
                <input
                  checked={item.packed}
                  className="h-4 w-4 rounded border-charcoal/20 text-forest focus:ring-forest"
                  onChange={(event) => onGearChange(day.id, index, 'packed', event.target.checked)}
                  type="checkbox"
                />
                <input
                  className="w-full rounded-2xl border border-charcoal/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-forest"
                  onChange={(event) => onGearChange(day.id, index, 'label', event.target.value)}
                  placeholder="Repair cord, stove fuel, water bladders"
                  value={item.label}
                />
                {day.gearChecklist.length > 1 ? (
                  <button
                    className="rounded-2xl border border-charcoal/10 px-4 text-charcoal/60 transition hover:border-red-300 hover:text-red-500"
                    onClick={() => onRemoveGear(day.id, index)}
                    type="button"
                  >
                    <Trash2 size={16} />
                  </button>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-charcoal/80">Emergency contact</span>
          <div className="relative">
            <ShieldAlert className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/30" size={16} />
            <input
              className="w-full rounded-2xl border border-charcoal/10 bg-sand py-3 pl-11 pr-4 text-sm outline-none transition focus:border-forest"
              onChange={(event) => onFieldChange(day.id, 'emergencyContact', event.target.value)}
              placeholder="Name + phone / satellite channel"
              value={day.emergencyContact}
            />
          </div>
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-charcoal/80">Water / food source</span>
          <input
            className="w-full rounded-2xl border border-charcoal/10 bg-sand px-4 py-3 text-sm outline-none transition focus:border-forest"
            onChange={(event) => onFieldChange(day.id, 'waterFoodSource', event.target.value)}
            placeholder="Glacier stream, cache, village market"
            value={day.waterFoodSource}
          />
        </label>
      </div>

      <label className="mt-6 block space-y-2">
        <span className="text-sm font-semibold text-charcoal/80">Notes</span>
        <textarea
          className="min-h-[130px] w-full rounded-[1.5rem] border border-charcoal/10 bg-sand px-4 py-4 text-sm outline-none transition focus:border-forest"
          onChange={(event) => onFieldChange(day.id, 'notes', event.target.value)}
          placeholder="Trail conditions, permit reminders, backup camp plans"
          value={day.notes}
        />
      </label>
    </article>
  );
}
