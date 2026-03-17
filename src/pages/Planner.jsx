import {
  Download,
  Route,
  Save,
  ShieldCheck,
  TentTree,
  Trash2,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import Button from '../components/Button';
import GearChecklist from '../components/GearChecklist';
import PageTransition from '../components/PageTransition';
import PlannerDayCard from '../components/PlannerDayCard';
import SectionHeading from '../components/SectionHeading';
import { gearCategories } from '../data/mockData';

const STORAGE_KEY = 'trailforge-trip';
const terrainOptions = ['Mountain', 'Forest', 'Desert', 'River', 'Arctic', 'Jungle'];

function createMasterGearState() {
  return Object.values(gearCategories)
    .flat()
    .reduce((accumulator, item) => ({ ...accumulator, [item]: false }), {});
}

function normalizeActivities(activities) {
  return Array.isArray(activities) && activities.length > 0 ? activities : [''];
}

function normalizeGearChecklist(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return [{ label: '', packed: false }];
  }

  return items.map((item) =>
    typeof item === 'string'
      ? { label: item, packed: false }
      : { label: item.label ?? '', packed: Boolean(item.packed) },
  );
}

function buildDay(index, startDate, existingDay = {}) {
  const dayDate = startDate ? new Date(startDate) : null;
  if (dayDate) {
    dayDate.setDate(dayDate.getDate() + index);
  }

  return {
    id: existingDay.id ?? `day-${index + 1}`,
    date: dayDate ? dayDate.toISOString() : null,
    location: existingDay.location ?? '',
    activities: normalizeActivities(existingDay.activities),
    gearChecklist: normalizeGearChecklist(existingDay.gearChecklist),
    notes: existingDay.notes ?? '',
    emergencyContact: existingDay.emergencyContact ?? '',
    medicalPoint: existingDay.medicalPoint ?? '',
    waterFoodSource: existingDay.waterFoodSource ?? '',
  };
}

function normalizeDays(duration, startDate, existingDays = []) {
  const dayCount = Math.min(30, Math.max(1, Number(duration) || 1));

  return Array.from({ length: dayCount }, (_, index) => buildDay(index, startDate, existingDays[index]));
}

function createDefaultTrip() {
  return {
    tripName: '',
    destination: '',
    startDate: '',
    duration: 7,
    terrainType: 'Mountain',
    masterGear: createMasterGearState(),
    days: normalizeDays(7, ''),
  };
}

function normalizeTrip(input) {
  const baseTrip = createDefaultTrip();
  const nextTrip = {
    ...baseTrip,
    ...input,
    duration: Math.min(30, Math.max(1, Number(input?.duration) || baseTrip.duration)),
    terrainType: terrainOptions.includes(input?.terrainType) ? input.terrainType : baseTrip.terrainType,
    masterGear: { ...baseTrip.masterGear, ...(input?.masterGear ?? {}) },
  };

  nextTrip.days = normalizeDays(nextTrip.duration, nextTrip.startDate, input?.days ?? []);
  return nextTrip;
}

function getSeasonLabel(dateValue) {
  if (!dateValue) {
    return 'Flexible season';
  }

  const month = new Date(dateValue).getMonth();

  if ([11, 0, 1].includes(month)) {
    return 'Winter';
  }
  if ([2, 3, 4].includes(month)) {
    return 'Spring';
  }
  if ([5, 6, 7].includes(month)) {
    return 'Summer';
  }
  return 'Autumn';
}

function getWeatherBadge(dateValue, terrainType) {
  const season = getSeasonLabel(dateValue);
  const terrainSeasonMap = {
    Mountain: {
      Winter: 'Snow + exposure',
      Spring: 'Melt + mud',
      Summer: 'Clear alpine',
      Autumn: 'Cold fronts',
    },
    Forest: {
      Winter: 'Cold canopy',
      Spring: 'Wet trails',
      Summer: 'Humid cover',
      Autumn: 'Cool ground',
    },
    Desert: {
      Winter: 'Sharp nights',
      Spring: 'Windy dunes',
      Summer: 'Extreme heat',
      Autumn: 'Dry heat',
    },
    River: {
      Winter: 'Low temperature',
      Spring: 'High flow',
      Summer: 'Stable current',
      Autumn: 'Variable banks',
    },
    Arctic: {
      Winter: 'Whiteout risk',
      Spring: 'Ice break',
      Summer: 'Long daylight',
      Autumn: 'Rapid freeze',
    },
    Jungle: {
      Winter: 'Dense rain',
      Spring: 'Soft ground',
      Summer: 'Storm cycle',
      Autumn: 'Heavy humidity',
    },
  };

  return {
    season,
    label: terrainSeasonMap[terrainType]?.[season] ?? 'Variable conditions',
  };
}

function calculateProgress(trip) {
  const tripFields = [trip.tripName, trip.destination, trip.startDate, trip.terrainType];
  const completeTripFields = tripFields.filter(Boolean).length;
  const totalTripFields = tripFields.length;

  const dayTotals = trip.days.reduce(
    (accumulator, day) => {
      const completed = [
        day.location,
        day.activities.some((item) => item.trim()),
        day.gearChecklist.some((item) => item.label.trim()),
        day.notes,
        day.emergencyContact,
        day.medicalPoint,
        day.waterFoodSource,
      ].filter(Boolean).length;

      return {
        completed: accumulator.completed + completed,
        total: accumulator.total + 7,
      };
    },
    { completed: 0, total: 0 },
  );

  return Math.round(((completeTripFields + dayTotals.completed) / (totalTripFields + dayTotals.total)) * 100);
}

export default function Planner() {
  const [trip, setTrip] = useState(createDefaultTrip);
  const [hasHydrated, setHasHydrated] = useState(false);
  const [savedAt, setSavedAt] = useState('');

  useEffect(() => {
    try {
      const storedTrip = window.localStorage.getItem(STORAGE_KEY);
      if (storedTrip) {
        setTrip(normalizeTrip(JSON.parse(storedTrip)));
      }
    } catch {
      setTrip(createDefaultTrip());
    } finally {
      setHasHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hasHydrated) {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(trip));
  }, [hasHydrated, trip]);

  const completion = useMemo(() => calculateProgress(trip), [trip]);

  const updateTripField = (field, value) => {
    setTrip((current) => {
      const nextTrip = { ...current, [field]: field === 'duration' ? Number(value) : value };

      if (field === 'duration' || field === 'startDate') {
        nextTrip.days = normalizeDays(nextTrip.duration, nextTrip.startDate, current.days);
      }

      return nextTrip;
    });
  };

  const updateDay = (dayId, updater) => {
    setTrip((current) => ({
      ...current,
      days: current.days.map((day) => (day.id === dayId ? updater(day) : day)),
    }));
  };

  const handleDayFieldChange = (dayId, field, value) => {
    updateDay(dayId, (day) => ({ ...day, [field]: value }));
  };

  const handleActivityChange = (dayId, activityIndex, value) => {
    updateDay(dayId, (day) => ({
      ...day,
      activities: day.activities.map((activity, index) => (index === activityIndex ? value : activity)),
    }));
  };

  const handleAddActivity = (dayId) => {
    updateDay(dayId, (day) => ({ ...day, activities: [...day.activities, ''] }));
  };

  const handleRemoveActivity = (dayId, activityIndex) => {
    updateDay(dayId, (day) => ({
      ...day,
      activities: day.activities.filter((_, index) => index !== activityIndex),
    }));
  };

  const handleGearChange = (dayId, gearIndex, field, value) => {
    updateDay(dayId, (day) => ({
      ...day,
      gearChecklist: day.gearChecklist.map((item, index) => (index === gearIndex ? { ...item, [field]: value } : item)),
    }));
  };

  const handleAddGear = (dayId) => {
    updateDay(dayId, (day) => ({
      ...day,
      gearChecklist: [...day.gearChecklist, { label: '', packed: false }],
    }));
  };

  const handleRemoveGear = (dayId, gearIndex) => {
    updateDay(dayId, (day) => ({
      ...day,
      gearChecklist: day.gearChecklist.filter((_, index) => index !== gearIndex),
    }));
  };

  const handleMasterGearToggle = (item, checked) => {
    setTrip((current) => ({
      ...current,
      masterGear: { ...current.masterGear, [item]: checked },
    }));
  };

  const handleSaveSnapshot = () => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(trip));
    setSavedAt(new Date().toLocaleString());
  };

  const handleReset = () => {
    const freshTrip = createDefaultTrip();
    setTrip(freshTrip);
    window.localStorage.removeItem(STORAGE_KEY);
    setSavedAt('');
  };

  return (
    <PageTransition>
      <section className="px-4 pb-24 pt-32 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            description="Build the route day by day, keep gear and emergency planning attached to each leg, and save the whole expedition directly in your browser."
            eyebrow="Trip Planner"
            title="Design an itinerary that survives the real route."
          />

          <div className="mt-10 grid gap-6 rounded-[2rem] border border-charcoal/10 bg-white p-6 shadow-card lg:grid-cols-[1fr,320px]">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              <label className="space-y-2 xl:col-span-2">
                <span className="text-sm font-semibold text-charcoal/80">Trip name</span>
                <input
                  className="w-full rounded-2xl border border-charcoal/10 bg-sand px-4 py-3 text-sm outline-none transition focus:border-forest"
                  onChange={(event) => updateTripField('tripName', event.target.value)}
                  placeholder="Andes ridge crossing"
                  value={trip.tripName}
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-charcoal/80">Destination</span>
                <input
                  className="w-full rounded-2xl border border-charcoal/10 bg-sand px-4 py-3 text-sm outline-none transition focus:border-forest"
                  onChange={(event) => updateTripField('destination', event.target.value)}
                  placeholder="Patagonia"
                  value={trip.destination}
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-charcoal/80">Start date</span>
                <input
                  className="w-full rounded-2xl border border-charcoal/10 bg-sand px-4 py-3 text-sm outline-none transition focus:border-forest"
                  onChange={(event) => updateTripField('startDate', event.target.value)}
                  type="date"
                  value={trip.startDate}
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-charcoal/80">Duration</span>
                <input
                  className="w-full rounded-2xl border border-charcoal/10 bg-sand px-4 py-3 text-sm outline-none transition focus:border-forest"
                  max="30"
                  min="1"
                  onChange={(event) => updateTripField('duration', event.target.value)}
                  type="number"
                  value={trip.duration}
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-charcoal/80">Terrain type</span>
                <select
                  className="w-full rounded-2xl border border-charcoal/10 bg-sand px-4 py-3 text-sm outline-none transition focus:border-forest"
                  onChange={(event) => updateTripField('terrainType', event.target.value)}
                  value={trip.terrainType}
                >
                  {terrainOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="rounded-[1.75rem] bg-charcoal p-5 text-sand">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-white/10 p-3 text-tan">
                  <Route size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-tan">Progress</p>
                  <p className="text-3xl font-serif font-bold">{completion}% ready</p>
                </div>
              </div>
              <div className="mt-5 h-3 rounded-full bg-white/10">
                <div className="h-3 rounded-full bg-tan transition-all" style={{ width: `${completion}%` }} />
              </div>
              <div className="mt-6 space-y-3 text-sm text-sand/70">
                <p>{trip.days.length} daily route blocks prepared for this expedition.</p>
                <p>{savedAt ? `Manual snapshot saved ${savedAt}.` : 'Autosave is active in this browser session.'}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 print:hidden">
            <Button onClick={handleSaveSnapshot}>
              <Save className="mr-2" size={16} />
              Save snapshot
            </Button>
            <Button onClick={() => window.print()} variant="dark">
              <Download className="mr-2" size={16} />
              Export PDF
            </Button>
            <Button onClick={handleReset} variant="ghost">
              <Trash2 className="mr-2" size={16} />
              New trip
            </Button>
          </div>

          <div className="mt-10 grid gap-8 xl:grid-cols-[1fr,340px]">
            <div className="space-y-6">
              {trip.days.map((day, index) => (
                <PlannerDayCard
                  day={day}
                  dayNumber={index + 1}
                  key={day.id}
                  onActivityChange={handleActivityChange}
                  onAddActivity={handleAddActivity}
                  onAddGear={handleAddGear}
                  onFieldChange={handleDayFieldChange}
                  onGearChange={handleGearChange}
                  onRemoveActivity={handleRemoveActivity}
                  onRemoveGear={handleRemoveGear}
                  weatherBadge={getWeatherBadge(day.date, trip.terrainType)}
                />
              ))}
            </div>

            <aside className="space-y-6">
              <div className="sticky top-28 space-y-6">
                <GearChecklist categories={gearCategories} onToggle={handleMasterGearToggle} values={trip.masterGear} />

                <div className="rounded-[2rem] border border-charcoal/10 bg-white p-6 shadow-card">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-forest/10 p-3 text-forest">
                      <TentTree size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.3em] text-forest/60">Trip summary</p>
                      <h3 className="font-serif text-3xl font-bold">Operational view</h3>
                    </div>
                  </div>
                  <div className="mt-6 space-y-4 text-sm text-charcoal/70">
                    <div className="flex items-start justify-between gap-4">
                      <span>Trip</span>
                      <span className="font-semibold text-charcoal">{trip.tripName || 'Untitled route'}</span>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <span>Destination</span>
                      <span className="font-semibold text-charcoal">{trip.destination || 'Set destination'}</span>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <span>Terrain</span>
                      <span className="font-semibold text-charcoal">{trip.terrainType}</span>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <span>Duration</span>
                      <span className="font-semibold text-charcoal">{trip.duration} days</span>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <span>Packed master items</span>
                      <span className="font-semibold text-charcoal">
                        {Object.values(trip.masterGear).filter(Boolean).length}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-[2rem] bg-forest p-6 text-sand shadow-card">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-white/10 p-3 text-tan">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.3em] text-tan">Field reminder</p>
                      <h3 className="font-serif text-3xl font-bold">Safety first</h3>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-8 text-sand/75">
                    Confirm rescue access, local regulations, and water treatment assumptions before you depend on the itinerary in the field.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
