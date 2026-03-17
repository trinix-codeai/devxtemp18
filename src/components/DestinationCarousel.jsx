import { ChevronLeft, ChevronRight, MapPinned } from 'lucide-react';
import { useRef } from 'react';

export default function DestinationCarousel({ destinations }) {
  const trackRef = useRef(null);

  const scrollTrack = (direction) => {
    if (!trackRef.current) {
      return;
    }

    trackRef.current.scrollBy({
      left: direction === 'left' ? -340 : 340,
      behavior: 'smooth',
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-end gap-3">
        <button
          className="rounded-full border border-charcoal/10 bg-white p-3 text-charcoal transition hover:border-forest hover:text-forest"
          onClick={() => scrollTrack('left')}
          type="button"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          className="rounded-full border border-charcoal/10 bg-white p-3 text-charcoal transition hover:border-forest hover:text-forest"
          onClick={() => scrollTrack('right')}
          type="button"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4" ref={trackRef}>
        {destinations.map((destination) => (
          <article
            className="min-w-[290px] snap-start rounded-[2rem] border border-charcoal/10 bg-white shadow-card sm:min-w-[330px]"
            key={destination.name}
          >
            <img
              alt={destination.name}
              className="h-72 w-full rounded-t-[2rem] object-cover"
              src={destination.image}
            />
            <div className="space-y-4 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-serif text-3xl font-bold">{destination.name}</p>
                  <p className="mt-1 flex items-center gap-2 text-sm text-charcoal/60">
                    <MapPinned size={14} />
                    {destination.region}
                  </p>
                </div>
                <span className="rounded-full bg-forest px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sand">
                  {destination.difficulty}
                </span>
              </div>
              <div className="rounded-2xl bg-sand px-4 py-3 text-sm text-charcoal/70">
                Recommended route window: <span className="font-semibold text-charcoal">{destination.duration}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
