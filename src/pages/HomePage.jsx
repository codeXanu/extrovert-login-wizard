import {
  Bell,
  CalendarDays,
  Clock3,
  Gem,
  Heart,
  House,
  MapPin,
  MessageCircle,
  Plus,
  Search,
  Star,
  User,
} from "lucide-react";

const events = [
  {
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    title: "Let's hang out at",
    host: "@punisher_12",
    type: "PRIVATE PARTY",
    time: "12:15 PM",
    date: "25/09/26",
    location: "Kinara Cafe, Saraswati Ghat Prayagraj, 245/187 Old Bairana Holi Ki Gali, Prayagraj...",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80",
    title: "Weekend vibes",
    host: "@rahulkumar",
    type: "PRIVATE PARTY",
    time: "2:41 PM",
    date: "03/10/26",
    location: "Kinara Cafe, Shri Mankameshwar Mahadev Mandir, Allahabad Fort, Praya...",
  },
];

function EventCard({ event }) {
  return (
    <article className="overflow-hidden rounded-xl bg-black">
      <div className="p-4 sm:p-5">
        <img
          src={event.image}
          alt=""
          className="aspect-video w-full rounded-xl object-cover"
        />

        <div className="mt-5 flex items-start justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold leading-tight text-white sm:text-2xl">
              {event.title}
            </h2>

            <p className="mt-1 text-xs text-white/60">
              {event.type}
            </p>

            <p className="mt-3 text-sm font-semibold text-white">
              {event.host}
            </p>
          </div>

          <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
            <Gem className="h-7 w-7 text-white/80" />
          </div>
        </div>

        <div className="mt-3 flex justify-end">
          <span className="rounded-full bg-[#e5ae00] px-5 py-2 text-sm font-semibold text-white">
            ☕ Coffee Break
          </span>
        </div>

        <div className="mt-5 overflow-hidden rounded-xl border border-white/25">
          <div className="grid grid-cols-2">
            <div className="flex items-center gap-2 border-r border-white/25 px-4 py-4">
              <span className="text-sm text-white">{event.time}</span>
              <Clock3 className="ml-auto h-4 w-4 text-white/80" />
            </div>

            <div className="flex items-center gap-2 px-4 py-4">
              <span className="text-sm text-white">{event.date}</span>
              <CalendarDays className="ml-auto h-4 w-4 text-white/80" />
            </div>
          </div>

          <div className="border-t border-white/25 px-4 py-4">
            <div className="flex items-center gap-3">
              <p className="min-w-0 flex-1 text-sm leading-5 text-white/85">
                {event.location}
              </p>

              <MapPin className="h-5 w-5 shrink-0 text-white/80" />
            </div>
          </div>
        </div>

        <button className="mt-4 h-13 w-full rounded-xl bg-white text-sm font-semibold text-black transition hover:bg-white/90">
          VIEW FLYER
        </button>
      </div>

      <div className="flex h-5 items-center justify-center bg-[#a77b3e] text-xs font-semibold text-white">
        3 spots left!
      </div>
    </article>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      {/* Desktop page container */}
      <div className="mx-auto min-h-screen w-full max-w-275">

        {/* Header */}
        <header className="flex items-center justify-between px-5 py-5 sm:px-8 sm:py-7">
          {/* Logo */}
          <div className="font-serif text-4xl leading-none">
            E<span className="text-white">•</span>
          </div>

          {/* Header icons */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button className="flex h-9 items-center gap-2 rounded-full border border-white/70 px-3 text-sm">
              <span>🎟️</span>
              <span>3</span>
            </button>

            <button>
              <Bell className="h-6 w-6 stroke-[1.5]" />
            </button>

            <button>
              <Star className="h-6 w-6 stroke-[1.5]" />
            </button>
          </div>
        </header>

        {/* Club */}
        <section className="px-5 sm:px-8">
          <p className="mb-2 text-xs text-white/80">
            YOUR CLUB
          </p>

          <div className="flex h-16 items-center justify-between rounded-xl border border-white/80 px-4">
            <span className="font-semibold">
              Bronze Club Member
            </span>

            <div className="text-2xl">🔶</div>
          </div>

          <div className="mt-3 flex items-center gap-2 text-xs font-semibold">
            <span className="text-yellow-400">🪙</span>
            <span>YOU HAVE 0 HONORARY VIBE TOKENS!</span>
          </div>
        </section>

        {/* Feed */}
        <main className="mt-8 space-y-8 px-5 pb-28 sm:px-8">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </main>

        
      </div>
    </div>
  );
}

export default HomePage;