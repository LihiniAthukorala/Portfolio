import { useMemo, useState } from 'react';
import portraitImage from './assets/portrait.png';
import {
  ArrowRight,
  ArrowUpRight,
  CalendarRange,
  Check,
  ChevronRight,
  Clock3,
  GraduationCap,
  MapPin,
  Menu,
  ShieldCheck,
  Swords,
  Trophy,
  X,
} from 'lucide-react';
import { FIDE_ID, FIDE_PROFILE_URL, tournaments } from './data/tournaments';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'FIDE Profile', href: '#fide-profile' },
  { label: 'Tournaments', href: '#tournaments' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const yearOptions = ['All', '2026', '2025', '2024'];
const tagOptions = ['All', 'National', 'International Rating', 'Rapid', 'Blitz', 'Youth', 'Women’s'];

const featuredEvents = [
  {
    name: 'Sri Lanka National Women’s Chess Championship',
    subtitle: 'Premier Division',
    year: 2026,
    category: 'Women’s',
    description: 'A national premier-division event showcasing tournament administration and professional oversight.',
  },
  {
    name: 'National Youth Rapid & Blitz Chess Championship',
    subtitle: 'Youth Event',
    year: 2026,
    category: 'Youth',
    description: 'A youth-focused rapid and blitz event with strong international-style tournament management.',
  },
  {
    name: 'Queenstar International Rating Chess Championship',
    subtitle: 'International Rating',
    year: 2026,
    category: 'International Rating',
    description: 'An international-rated chess championship event conducted under professional competition standards.',
  },
  {
    name: 'Sri Lanka National Rapid & Blitz Chess Championship',
    subtitle: 'National Rapid & Blitz',
    year: 2025,
    category: 'National',
    description: 'A national fast-format championship where organization, fairness, and clear decision-making are essential.',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');

  const filteredEvents = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return tournaments.filter((event) => {
      const matchesSearch =
        query.length === 0 ||
        event.name.toLowerCase().includes(query) ||
        event.type.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query) ||
        (event.description || '').toLowerCase().includes(query);

      const matchesYear = selectedYear === 'All' || String(event.year) === selectedYear;

      const matchesTag =
        selectedTag === 'All' ||
        event.category === selectedTag ||
        (selectedTag === 'Rapid' && /rapid/i.test(event.type)) ||
        (selectedTag === 'Blitz' && /blitz/i.test(event.type)) ||
        (selectedTag === 'National' && /national/i.test(event.category)) ||
        (selectedTag === 'International Rating' && /international rating/i.test(event.category));

      return matchesSearch && matchesYear && matchesTag;
    });
  }, [searchTerm, selectedYear, selectedTag]);

  const yearGroups = Array.from(new Set(tournaments.map((event) => event.year))).sort((a, b) => b - a);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="Lihini Athukorala home">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-lg text-[#E5C76B] shadow-[0_0_30px_rgba(212,175,55,0.2)]">
              ♞
            </div>
            <div>
              <div className="text-sm font-semibold tracking-[0.28em] text-slate-100">LIHINI ATHUKORALA</div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">National Arbiter</div>
            </div>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-slate-300 transition hover:text-[#E5C76B]">
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href={FIDE_PROFILE_URL || undefined}
              className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-2 text-sm font-medium text-[#E5C76B] transition hover:border-[#D4AF37] hover:bg-[#D4AF37]/20"
              aria-label="View FIDE profile"
            >
              FIDE Profile
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-[#E5C76B]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="home" className="overflow-x-hidden">
        <section className="relative isolate mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.12),_transparent_25%),linear-gradient(135deg,_rgba(15,23,42,0.8),_rgba(15,23,42,0.95))]" />
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="animate-fade-in-up">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E5C76B]">
                <ShieldCheck className="h-3.5 w-3.5" />
                National Arbiter
              </div>

              <h1 className="max-w-xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
                Lihini Athukorala
              </h1>

              <h2 className="mt-4 text-2xl font-medium text-slate-200 sm:text-3xl">
                Chess Arbiter • Tournament Official • IT Professional
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                National Arbiter with experience officiating at national and international-rated chess events.
                Committed to fair play, accurate tournament administration, and maintaining a professional and organized playing environment.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={FIDE_PROFILE_URL || undefined}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-[#E5C76B]"
                  aria-label="View FIDE profile"
                >
                  View FIDE Profile
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#experience"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-[#D4AF37]/60 hover:text-[#E5C76B]"
                >
                  View Tournament Experience
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.18em] text-slate-300">
                <span>FIDE ID: {FIDE_ID}</span>
                <span className="hidden sm:inline text-slate-500">•</span>
                <span>National Arbiter</span>
                <span className="hidden sm:inline text-slate-500">•</span>
                <span>Sri Lanka</span>
              </div>
            </div>

            <div className="relative animate-fade-in-up">
              <div className="absolute inset-6 -z-10 rounded-[2rem] bg-[#D4AF37]/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-[#D4AF37]/25 bg-[linear-gradient(135deg,_rgba(17,24,39,0.95),_rgba(11,18,32,0.92))] p-6 shadow-[0_30px_80px_rgba(15,23,42,0.7)]">
                <div className="board-grid absolute inset-0 opacity-40" />
                <div className="relative flex items-center justify-center rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6 sm:p-10">
                  <div className="relative flex h-72 w-full max-w-md items-center justify-center overflow-hidden rounded-[1.25rem] border border-[#D4AF37]/20 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.14),_rgba(15,23,42,0.96)_55%)]">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:30px_30px] opacity-75" />
                    <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#0B1220]/80 shadow-[0_0_50px_rgba(212,175,55,0.25)]">
                      <div className="text-7xl text-[#E5C76B] drop-shadow-[0_0_18px_rgba(212,175,55,0.5)]">♞</div>
                    </div>
                  </div>
                </div>

                <div className="relative mt-6 rounded-2xl border border-[#D4AF37]/20 bg-slate-900/80 p-4 shadow-xl">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E5C76B]">National Arbiter</div>
                      <div className="mt-2 text-sm text-slate-200">Licensed: 18 August 2025</div>
                    </div>
                    <div className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-[#E5C76B]">
                      FIDE ID: {FIDE_ID}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-6 pt-8 sm:px-6 sm:pt-10 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <StatCard label="FIDE ID" value={FIDE_ID} />
            <StatCard label="Arbiter Title" value="National Arbiter" />
            <StatCard label="Licensed" value="18 August 2025" />
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="section-kicker">About Me</span>
            <h3 className="section-title">About Me</h3>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6 text-slate-300">
              <p>
                National Arbiter licensed since 18 August 2025, with experience officiating at national and international-rated chess events.
                Responsible, detail-oriented, and committed to conducting chess tournaments fairly and professionally while maintaining an organized playing environment.
              </p>
              <p>
                Currently pursuing a BSc (Hons) degree in Information Technology, with strong analytical, organizational, communication, problem-solving, and digital skills.
              </p>

              <div className="mt-8 space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#E5C76B]">
                    <Swords className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-[#E5C76B]">Chess Arbitration</p>
                    <p className="mt-2 text-lg font-semibold text-white">National Arbiter</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#E5C76B]">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-[#E5C76B]">Education</p>
                    <p className="mt-2 text-lg font-semibold text-white">BSc (Hons) Information Technology</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#E5C76B]">
                    <Trophy className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-[#E5C76B]">Leadership</p>
                    <p className="mt-2 text-lg font-semibold text-white">Senior Prefect — Holy Cross College</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#E5C76B]">
                    <Trophy className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-[#E5C76B]">Award</p>
                    <p className="mt-2 text-lg font-semibold text-white">Awarded as President Girl Guide — 2022</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] border border-[#D4AF37]/20 bg-[linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(17,24,39,0.9))] p-6 shadow-[0_30px_80px_rgba(15,23,42,0.9)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.12),_transparent_30%)]" />
                <div className="relative flex h-[420px] items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(148,163,184,0.06),_rgba(15,23,42,0.92))]">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />
                  <img
                    src={portraitImage}
                    alt="Portrait of Lihini Athukorala"
                    className="relative h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="fide-profile" className="bg-slate-900/50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="section-kicker">FIDE Profile</span>
              <h3 className="section-title">My FIDE Profile</h3>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="rounded-[2rem] border border-[#D4AF37]/25 bg-[linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(17,24,39,0.88))] p-8 shadow-[0_20px_60px_rgba(15,23,42,0.7)]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.28em] text-[#E5C76B]">FIDE ID</div>
                    <p className="mt-4 text-2xl font-bold text-white sm:text-3xl">Lihini Athukorala</p>
                  </div>
                  <div className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[#E5C76B]">
                    National Arbiter
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">FIDE ID</div>
                    <div className="mt-2 text-lg font-semibold text-white">{FIDE_ID}</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Federation</div>
                    <div className="mt-2 text-lg font-semibold text-white">Sri Lanka</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Title</div>
                    <div className="mt-2 text-lg font-semibold text-white">National Arbiter</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <a
                  href={FIDE_PROFILE_URL || undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-6 py-3 text-sm font-semibold text-[#E5C76B] transition hover:-translate-y-0.5 hover:border-[#D4AF37] hover:bg-[#D4AF37]/20"
                  aria-label="Open official FIDE profile"
                >
                  View FIDE Profile
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="tournaments" className="bg-slate-900/50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="section-kicker">Tournament Experience</span>
              <h3 className="section-title">Tournament Experience</h3>
            </div>

            <div className="mb-8 flex flex-wrap gap-3">
              {yearOptions.map((year) => (
                <button
                  key={year}
                  type="button"
                  onClick={() => setSelectedYear(year)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    selectedYear === year
                      ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#E5C76B]'
                      : 'border-white/10 bg-white/5 text-slate-300 hover:border-[#D4AF37]/40 hover:text-[#E5C76B]'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {yearGroups.map((year) => {
                const yearEvents = tournaments.filter((event) => event.year === year);

                if (selectedYear !== 'All' && selectedYear !== String(year)) {
                  return null;
                }

                return (
                  <div key={year} className="rounded-[2rem] border border-white/10 bg-slate-950/40 p-6">
                    <div className="mb-6">
                      <h4 className="text-2xl font-semibold text-white">{year}</h4>
                    </div>

                    <div className="space-y-5">
                      {yearEvents.map((event) => (
                        <div key={event.id} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                          <div className="absolute left-0 top-0 h-full w-0.5 bg-[#D4AF37]" />
                          <div className="pl-4">
                            <div className="flex flex-wrap items-center justify-between gap-3">
                              <h5 className="text-lg font-semibold text-white">{event.name}</h5>
                              <span className="rounded-full bg-[#D4AF37]/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-[#E5C76B]">
                                {event.category}
                              </span>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300">
                              <span>{event.type}</span>
                              <span className="text-slate-500">•</span>
                              <span>{event.year}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="section-kicker">Featured Events</span>
            <h3 className="section-title">Featured Events</h3>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {featuredEvents.map((event) => (
              <article key={event.name} className="group rounded-[1.6rem] border border-[#D4AF37]/20 bg-[linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(17,24,39,0.86))] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-[0_18px_40px_rgba(212,175,55,0.12)]">
                <div className="mb-5 flex items-center justify-between text-[#E5C76B]">
                  <span className="text-3xl">♞</span>
                  <span className="rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em]">
                    {event.year}
                  </span>
                </div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#E5C76B]">{event.category}</p>
                <h4 className="mt-3 text-xl font-semibold text-white">{event.name}</h4>
                <p className="mt-2 text-sm text-slate-300">{event.subtitle}</p>
                <p className="mt-4 text-sm leading-6 text-slate-400">{event.description}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#E5C76B]">
                  Explore event
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="credentials" className="bg-slate-900/50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="section-kicker">Credentials & Qualifications</span>
              <h3 className="section-title">Credentials & Qualifications</h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <CredentialCard title="National Arbiter" detail="Licensed: 18 August 2025" meta="FIDE ID: 9957723" />
              <CredentialCard title="BSc (Hons) Information Technology" detail="Sri Lanka Institute of Information Technology" meta="2023 – Present" />
              <CredentialCard title="Diploma in Information Technology" detail="ESoft Metro Campus, Gampaha" meta="2023 – 2024" />
              <CredentialCard title="Diploma in English" detail="ESoft Metro Campus, Gampaha" meta="2023" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="section-kicker">Education</span>
            <h3 className="section-title">Education</h3>
          </div>

          <div className="timeline-grid">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#E5C76B]">July 2023 – Present</p>
                <h4 className="mt-2 text-xl font-semibold text-white">Sri Lanka Institute of Information Technology</h4>
                <p className="mt-2 text-slate-300">BSc (Hons) Degree in Information Technology</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#E5C76B]">February 2023 – February 2024</p>
                <h4 className="mt-2 text-xl font-semibold text-white">ESoft Metro Campus, Gampaha</h4>
                <p className="mt-2 text-slate-300">Diploma in Information Technology</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#E5C76B]">February 2023 – October 2023</p>
                <h4 className="mt-2 text-xl font-semibold text-white">ESoft Metro Campus, Gampaha</h4>
                <p className="mt-2 text-slate-300">Diploma in English</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#E5C76B]">2022</p>
                <h4 className="mt-2 text-xl font-semibold text-white">Holy Cross College, Gampaha</h4>
                <p className="mt-2 text-slate-300">GCE Advanced Level — Mathematics Stream</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  <li>• Combined Mathematics — S</li>
                  <li>• Physics — S</li>
                  <li>• Chemistry — S</li>
                  <li>• English — C</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-900/50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="section-kicker">Leadership & Activities</span>
              <h3 className="section-title">Leadership & Activities</h3>
            </div>

            <div className="max-w-xl space-y-6 rounded-[1.8rem] border border-[#D4AF37]/20 bg-[linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(17,24,39,0.88))] p-6 shadow-[0_20px_50px_rgba(15,23,42,0.5)]">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#E5C76B]">Leadership</p>
                <h4 className="mt-3 text-2xl font-semibold text-white">Senior Prefect</h4>
                <p className="mt-2 text-slate-300">Holy Cross College, Gampaha</p>
                <p className="mt-3 text-sm text-slate-400">2019 – 2022</p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#E5C76B]">Award</p>
                <h4 className="mt-3 text-2xl font-semibold text-white">President Girl Guide</h4>
                <p className="mt-3 text-sm text-slate-400">2022</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="section-kicker">Professional Skills</span>
            <h3 className="section-title">Professional Skills</h3>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <h4 className="mb-6 text-xl font-semibold text-white">Chess & Professional Skills</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Chess Tournament Officiating',
                  'Tournament Administration',
                  'Fair Play & Professional Conduct',
                  'Attention to Detail',
                  'Decision Making',
                  'Problem Solving',
                  'Communication',
                  'Time Management',
                  'Teamwork',
                  'Leadership',
                  'Adaptability',
                ].map((skill) => (
                  <span key={skill} className="rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-3 py-2 text-sm text-[#E5C76B]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <h4 className="mb-6 text-xl font-semibold text-white">IT & Digital Skills</h4>
              <div className="space-y-6">
                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-400">Programming</p>
                  <div className="flex flex-wrap gap-2">
                    {['Java', 'Python', 'JavaScript', 'Kotlin', 'C#'].map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-400">Web</p>
                  <div className="flex flex-wrap gap-2">
                    {['React.js', 'HTML', 'CSS', 'Bootstrap', 'Node.js', 'Express.js', 'Spring Boot', '.NET'].map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-400">Databases</p>
                  <div className="flex flex-wrap gap-2">
                    {['MongoDB', 'MySQL', 'SQL Server'].map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-400">Tools</p>
                  <div className="flex flex-wrap gap-2">
                    {['GitHub', 'VS Code', 'Android Studio', 'IntelliJ', 'Eclipse', 'Visual Studio', 'Figma', 'XAMPP'].map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-[linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(17,24,39,0.9))] p-8 shadow-[0_20px_60px_rgba(15,23,42,0.8)] sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="section-kicker">Connect</span>
                <h3 className="section-title">Let’s Connect</h3>
                <p className="mt-4 max-w-xl text-slate-300">
                  For chess tournament opportunities, professional collaboration, or other enquiries, feel free to get in touch.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="text-slate-300">Email</span>
                  <a href="mailto:lihini0511@gmail.com" className="text-right font-medium text-white hover:text-[#E5C76B]">
                    lihini0511@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="text-slate-300">Location</span>
                  <span className="text-right font-medium text-white">Gampaha, Sri Lanka</span>
                </div>
                <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="text-slate-300">LinkedIn</span>
                  <span className="text-right font-medium text-white">Lihini Athukorala</span>
                </div>
                <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="text-slate-300">GitHub</span>
                  <span className="text-right font-medium text-white">LihiniAthukorala</span>
                </div>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a href="mailto:lihini0511@gmail.com" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#E5C76B]">
                    Email Me
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-[#D4AF37]/40 hover:text-[#E5C76B]">
                    LinkedIn
                  </a>
                  <a href="https://github.com/LihiniAthukorala" target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-[#D4AF37]/40 hover:text-[#E5C76B]">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950 py-10">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#E5C76B]">♞</div>
              <div>
                <div className="text-sm font-semibold tracking-[0.28em] text-white">LIHINI ATHUKORALA</div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">National Arbiter</div>
              </div>
            </div>
            <div className="mt-5 space-y-2 text-sm text-slate-300">
              <p>FIDE ID: {FIDE_ID}</p>
              <p>Sri Lanka</p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-5 lg:items-end">
            <div className="flex flex-wrap gap-5 text-sm text-slate-300">
              <a href="#fide-profile" className="hover:text-[#E5C76B]">FIDE Profile</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#E5C76B]">LinkedIn</a>
              <a href="https://github.com/LihiniAthukorala" target="_blank" rel="noreferrer" className="hover:text-[#E5C76B]">GitHub</a>
              <a href="mailto:lihini0511@gmail.com" className="hover:text-[#E5C76B]">Email</a>
            </div>
            <p className="text-sm text-slate-400">© 2026 Lihini Athukorala. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

type StatCardProps = {
  label: string;
  value: string;
};

function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 shadow-[0_15px_35px_rgba(15,23,42,0.25)] backdrop-blur-sm">
      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{label}</p>
      <p className="mt-4 text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}

type EventCardProps = {
  event: (typeof tournaments)[number];
};

function EventCard({ event }: EventCardProps) {
  const hasOfficialLink = Boolean(event.fideEventUrl || event.officialUrl);
  const href = event.fideEventUrl || event.officialUrl || undefined;

  return (
    <article className="group rounded-[1.8rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(17,24,39,0.9))] p-5 shadow-[0_20px_40px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-[0_18px_50px_rgba(212,175,55,0.12)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-xl text-[#E5C76B]">
          ♞
        </div>
        <span className="rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-[#E5C76B]">
          {event.year}
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <p className="text-[10px] uppercase tracking-[0.18em] text-[#E5C76B]">{event.category}</p>
        {event.verified && <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-emerald-300">Verified</span>}
      </div>

      <h4 className="mt-3 text-xl font-semibold text-white">{event.name}</h4>
      <p className="mt-3 text-sm leading-6 text-slate-300">{event.description}</p>

      <div className="mt-5 space-y-2 text-sm text-slate-400">
        {event.location && (
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{event.location}</span>
          </div>
        )}
        {event.date && (
          <div className="flex items-center gap-2">
            <CalendarRange className="h-4 w-4" />
            <span>{event.date}</span>
          </div>
        )}
      </div>

      {hasOfficialLink ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#E5C76B] transition group-hover:text-[#F8FAFC]"
        >
          {event.verified ? 'Verified FIDE Event' : 'Event Information'}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      ) : (
        <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-400">
          Event Information
          <Check className="h-4 w-4" />
        </div>
      )}
    </article>
  );
}

type CredentialCardProps = {
  title: string;
  detail: string;
  meta: string;
};

function CredentialCard({ title, detail, meta }: CredentialCardProps) {
  return (
    <div className="rounded-[1.6rem] border border-[#D4AF37]/20 bg-[linear-gradient(135deg,_rgba(15,23,42,0.92),_rgba(17,24,39,0.8))] p-5 shadow-[0_18px_40px_rgba(15,23,42,0.45)]">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#E5C76B]">
        <ShieldCheck className="h-4 w-4" />
      </div>
      <h4 className="mt-5 text-xl font-semibold text-white">{title}</h4>
      <p className="mt-3 text-slate-300">{detail}</p>
      <p className="mt-2 text-sm text-[#E5C76B]">{meta}</p>
    </div>
  );
}

export default App;
