import { useEffect, useMemo, useState } from 'react';
import portraitImage from './assets/portrait.png';
import cvPdf from './assets/Lihini Athukorala.pdf';
import {
  ArrowUpRight,
  CalendarRange,
  Check,
  ChevronRight,
  Clock3,
  Download,
  Eye,
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
  },
  {
    name: 'National Youth Rapid & Blitz Chess Championship',
    subtitle: 'Youth Event',
    year: 2026,
    category: 'Youth',
  },
  {
    name: 'Queenstar International Rating Chess Championship',
    subtitle: 'International Rating',
    year: 2026,
    category: 'International Rating',
  },
  {
    name: 'Sri Lanka National Rapid & Blitz Chess Championship',
    subtitle: 'National Rapid & Blitz',
    year: 2025,
    category: 'National',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1500);
    return () => window.clearTimeout(timer);
  }, []);

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
    <>
      {isLoading ? (
        <div className="loading-screen" aria-live="polite" aria-busy="true">
          <div className="loading-logo" role="status" aria-label="Loading portfolio">
            <div className="loading-orbit loading-orbit--one" />
            <div className="loading-orbit loading-orbit--two" />
            <div className="loading-core">
              <span className="loading-king">♔</span>
            </div>
            <span className="loading-dot loading-dot--one" />
            <span className="loading-dot loading-dot--two" />
            <span className="loading-dot loading-dot--three" />
          </div>
        </div>
      ) : (
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
        <section className="relative isolate mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-14">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_18%_30%,_rgba(212,175,55,0.10),_transparent_42%),linear-gradient(135deg,_rgba(15,23,42,0.35),_rgba(11,18,32,0.9))]" />
          <div className="grid items-center gap-8 md:grid-cols-[1.05fr_0.85fr] md:gap-12 lg:grid-cols-[1.05fr_0.85fr] lg:gap-20">
            <div className="animate-fade-in-up max-w-2xl">
              <div className="inline-flex items-center gap-2 border-l-2 border-[#D4AF37] bg-white/[0.04] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E5C76B]">
                <ShieldCheck className="h-4 w-4" />
                National Arbiter <span className="text-slate-500">/</span> Sri Lanka
              </div>

              <div className="mt-5 grid grid-cols-[minmax(0,1fr)_6rem] items-center gap-4 sm:mt-0 sm:block">
                <h1 className="text-3xl font-black leading-[1.02] text-white sm:mt-7 sm:text-6xl sm:leading-[0.98] lg:text-7xl">
                  Lihini <span className="block text-[#E5C76B]">Athukorala</span>
                </h1>
                <div className="md:hidden">
                  <img
                    src={portraitImage}
                    alt="Lihini Athukorala"
                    className="aspect-[4/5] w-full object-cover object-[center_20%]"
                  />
                </div>
              </div>

              <h2 className="mt-4 max-w-xl text-lg font-medium leading-snug text-slate-200 sm:mt-6 sm:text-2xl">
                Chess Arbiter <span className="text-[#D4AF37]">/</span> Tournament Official <span className="text-[#D4AF37]">/</span> IT Professional
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">
                National Arbiter with experience officiating at national and international-rated chess events.
                Committed to fair play, accurate tournament administration, and maintaining a professional and organized playing environment.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                <a
                  href={FIDE_PROFILE_URL || undefined}
                  className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-[#E5C76B] sm:py-3"
                  aria-label="View FIDE profile"
                >
                  View FIDE Profile
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#experience"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-[#D4AF37]/70 hover:text-[#E5C76B] sm:py-3"
                >
                  View Tournament Experience
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-4 sm:mt-7 sm:pt-5">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Curriculum Vitae</span>
                <a
                  href={cvPdf}
                  download="Lihini Athukorala.pdf"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-200 transition hover:text-[#E5C76B]"
                  aria-label="Download my CV"
                >
                  <Download className="h-4 w-4" />
                  Download My CV
                </a>
                <a
                  href={cvPdf}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-200 transition hover:text-[#E5C76B]"
                  aria-label="View my CV"
                >
                  <Eye className="h-4 w-4" />
                  View My CV
                </a>
              </div>
            </div>

            <figure className="animate-fade-in-up relative mx-auto hidden w-full max-w-[27rem] md:block lg:ml-auto">
              <div className="pointer-events-none absolute -inset-3 border border-[#D4AF37]/25" />
              <div className="relative overflow-hidden border border-white/10 bg-[#10254A]">
                <img
                  src={portraitImage}
                  alt="Lihini Athukorala, National Chess Arbiter"
                  className="aspect-[4/5] w-full object-cover object-[center_20%]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                  <figcaption>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E5C76B]">Licensed 18 August 2025</div>
                    <div className="mt-2 text-lg font-semibold text-white">National Chess Arbiter</div>
                  </figcaption>
                  <div className="shrink-0 border-l border-[#E5C76B]/70 pl-4 text-right">
                    <div className="text-[10px] uppercase tracking-[0.16em] text-slate-300">FIDE ID</div>
                    <div className="mt-1 text-sm font-semibold text-white">{FIDE_ID}</div>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-6 pt-8 sm:px-6 sm:pt-10 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <StatCard label="FIDE ID" value={FIDE_ID} />
            <StatCard label="Arbiter Title" value="National Arbiter" />
            <StatCard label="Licensed" value="18 August 2025" />
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-8">
            <h3 className="section-title">About Me</h3>
          </div>

          <div className="grid gap-6 text-base leading-8 text-slate-300 lg:grid-cols-2 lg:gap-14">
            <p>
              National Arbiter licensed since 18 August 2025, with experience officiating at national and international-rated chess events.
              Responsible, detail-oriented, and committed to conducting chess tournaments fairly and professionally while maintaining an organized playing environment.
            </p>
            <p>
              Currently pursuing a BSc (Hons) degree in Information Technology, with strong analytical, organizational, communication, problem-solving, and digital skills.
            </p>
          </div>

          <div className="mt-10 grid gap-x-12 sm:grid-cols-2">
            <div className="flex items-start gap-4 border-t border-white/10 py-5">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-[#D4AF37]/35 bg-[#D4AF37]/[0.06] text-[#E5C76B]">
                <Swords className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E5C76B]">Chess Arbitration</p>
                <p className="mt-2 text-lg font-semibold text-white">National Arbiter</p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-t border-white/10 py-5">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-[#D4AF37]/35 bg-[#D4AF37]/[0.06] text-[#E5C76B]">
                <GraduationCap className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E5C76B]">Education</p>
                <p className="mt-2 text-lg font-semibold text-white">BSc (Hons) Information Technology</p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-t border-white/10 py-5">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-[#D4AF37]/35 bg-[#D4AF37]/[0.06] text-[#E5C76B]">
                <Trophy className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E5C76B]">Leadership</p>
                <p className="mt-2 text-lg font-semibold text-white">Senior Prefect — Holy Cross College</p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-t border-white/10 py-5">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-[#D4AF37]/35 bg-[#D4AF37]/[0.06] text-[#E5C76B]">
                <Trophy className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E5C76B]">Award</p>
                <p className="mt-2 text-lg font-semibold text-white">Awarded as President Girl Guide — 2022</p>
              </div>
            </div>
          </div>
        </section>

        <section id="fide-profile" className="bg-slate-900/50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
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
              </article>
            ))}
          </div>
        </section>

        <section id="credentials" className="bg-slate-900/50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
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
              <h3 className="section-title">Leadership & Activities</h3>
            </div>

            <div className="grid gap-x-12 sm:grid-cols-2">
              <article className="border-t border-white/15 py-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E5C76B]">Leadership</p>
                  <span className="text-sm tabular-nums text-slate-400">2019 – 2022</span>
                </div>
                <h4 className="mt-5 text-2xl font-semibold text-white">Senior Prefect</h4>
                <p className="mt-2 text-slate-300">Holy Cross College, Gampaha</p>
              </article>

              <article className="border-t border-white/15 py-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E5C76B]">Award</p>
                  <span className="text-sm tabular-nums text-slate-400">2022</span>
                </div>
                <h4 className="mt-5 text-2xl font-semibold text-white">President Girl Guide</h4>
              </article>
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h3 className="section-title">Professional Skills</h3>
          </div>

          <div className="space-y-12">
            <div className="border-t border-white/15 pt-5">
              <div className="flex items-baseline justify-between gap-4">
                <h4 className="text-lg font-semibold text-white">IT & Digital Skills</h4>
                <span className="shrink-0 text-xs tabular-nums text-slate-500">4 disciplines</span>
              </div>
              <div className="mt-3 divide-y divide-white/10">
                {[
                  { category: 'Programming', items: ['Java', 'Python', 'JavaScript', 'Kotlin', 'C#'] },
                  { category: 'Web', items: ['React.js', 'HTML', 'CSS', 'Bootstrap', 'Node.js', 'Express.js', 'Spring Boot', '.NET'] },
                  { category: 'Databases', items: ['MongoDB', 'MySQL', 'SQL Server'] },
                  { category: 'Tools', items: ['GitHub', 'VS Code', 'Android Studio', 'IntelliJ', 'Eclipse', 'Visual Studio', 'Figma', 'XAMPP', 'Swiss-Manager'] },
                ].map((group) => (
                  <div key={group.category} className="grid gap-3 py-4 sm:grid-cols-[7.5rem_1fr] sm:gap-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E5C76B] sm:pt-1">{group.category}</p>
                    <ul className="flex flex-wrap gap-x-5 gap-y-2">
                      {group.items.map((item) => (
                        <li key={item} className="border-b border-white/10 pb-0.5 text-sm text-slate-200">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[#D4AF37]/45 pt-5">
              <div className="flex items-baseline justify-between gap-4">
                <h4 className="text-lg font-semibold text-white">Chess & Professional Skills</h4>
                <span className="shrink-0 text-xs tabular-nums text-slate-500">11 skills</span>
              </div>
              <ul className="mt-5 grid gap-x-6 sm:grid-cols-2">
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
                  <li key={skill} className="flex min-h-12 items-center gap-3 border-b border-white/10 py-3 text-sm text-slate-200">
                    <span className="h-1.5 w-1.5 shrink-0 bg-[#E5C76B]" aria-hidden="true" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 border-t border-[#D4AF37]/30 pt-8 sm:pt-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="flex flex-col items-start">
                <h3 className="section-title">Let’s Connect</h3>
                <p className="mt-4 max-w-xl text-slate-300">
                  For chess tournament opportunities, professional collaboration, or other enquiries, feel free to get in touch.
                </p>
              <a href="mailto:lihini0511@gmail.com" className="mt-7 inline-flex items-center gap-2 bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#E5C76B]">
                Email Me
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <dl className="grid gap-x-10 sm:grid-cols-2">
              <div className="border-t border-white/10 py-5">
                <dt className="text-xs uppercase tracking-[0.16em] text-slate-400">Email</dt>
                <dd className="mt-2 break-all text-base font-medium text-white">
                  <a href="mailto:lihini0511@gmail.com" className="transition hover:text-[#E5C76B]">lihini0511@gmail.com</a>
                </dd>
              </div>
              <div className="border-t border-white/10 py-5">
                <dt className="text-xs uppercase tracking-[0.16em] text-slate-400">Phone</dt>
                <dd className="mt-2 text-base font-medium text-white">
                  <a href="tel:+94713873172" className="transition hover:text-[#E5C76B]">071 387 3172</a>
                </dd>
              </div>
              <div className="border-t border-white/10 py-5">
                <dt className="text-xs uppercase tracking-[0.16em] text-slate-400">Location</dt>
                <dd className="mt-2 text-base font-medium text-white">Gampaha, Sri Lanka</dd>
              </div>
              <div className="border-t border-white/10 py-5">
                <dt className="text-xs uppercase tracking-[0.16em] text-slate-400">LinkedIn</dt>
                <dd className="mt-2 text-base font-medium text-white">
                  <a href="https://www.linkedin.com/in/lihini-athukorala-759803347" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 transition hover:text-[#E5C76B]">
                    Lihini Athukorala <ArrowUpRight className="h-4 w-4" />
                  </a>
                </dd>
              </div>
            </dl>
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
      )}
    </>
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
