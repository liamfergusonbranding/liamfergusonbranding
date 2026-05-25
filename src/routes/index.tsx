import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Liam Ferguson Branding — Websites & Brand Identity, Toronto" },
      {
        name: "description",
        content:
          "Custom websites and brand identity for Toronto small businesses. Delivered in under a week. Transparent pricing, no contracts.",
      },
      { property: "og:title", content: "Liam Ferguson Branding — Toronto" },
      {
        property: "og:description",
        content:
          "Websites and branding for local Toronto businesses. Fast, clean, no fluff.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
});

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="font-display text-xl">Liam Ferguson</span>
          <span className="eyebrow hidden sm:inline ml-1">Branding</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#work" className="hover:text-primary transition">Approach</a>
          <a href="#services" className="hover:text-primary transition">Services</a>
          <a href="#pricing" className="hover:text-primary transition">Pricing</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </nav>
        <a
          href="#contact"
          className="text-sm px-4 py-2 rounded-full bg-foreground text-background hover:bg-primary transition"
        >
          Start a project
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-24 md:pt-32 md:pb-40">
        <div className="flex items-center gap-3 mb-10">
          <span className="eyebrow">Toronto · Est. now</span>
          <span className="h-px flex-1 bg-rule" />
          <span className="eyebrow">001 / Independent studio</span>
        </div>

        <h1 className="headline text-[clamp(3rem,10vw,9rem)]">
          Your business is good.
          <br />
          <span className="italic text-primary">Your website isn't.</span>
        </h1>

        <div className="mt-12 grid md:grid-cols-12 gap-8 items-end">
          <p className="md:col-span-6 text-lg md:text-xl text-muted-foreground max-w-xl">
            I build websites and brand identities for local businesses across
            the GTA. Clean, fast, and finished in under a week.
          </p>
          <div className="md:col-span-6 flex flex-wrap gap-3 md:justify-end">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
            >
              Book a free call
            </a>
            <a
              href="#services"
              className="px-6 py-3 rounded-full border border-foreground text-sm font-medium hover:bg-foreground hover:text-background transition"
            >
              See what I do
            </a>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="rule-top border-b border-border py-5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap font-display text-3xl md:text-4xl gap-12">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12 pr-12">
              <span>Restaurants</span><span className="text-primary">✦</span>
              <span>Salons</span><span className="text-primary">✦</span>
              <span>Contractors</span><span className="text-primary">✦</span>
              <span>Realtors</span><span className="text-primary">✦</span>
              <span>Cafés</span><span className="text-primary">✦</span>
              <span>Studios</span><span className="text-primary">✦</span>
              <span>Trades</span><span className="text-primary">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="work" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="eyebrow">About</p>
          <div className="mt-6 flex items-center gap-3">
            <span className="h-12 w-12 rounded-full bg-primary/15 border border-primary/30 grid place-items-center font-display text-xl text-primary">L</span>
            <div className="font-display text-2xl">Liam Ferguson</div>
          </div>
        </div>
        <div className="md:col-span-8">
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            I'm Liam — Toronto-based, and I build sites and brands for the
            small businesses around me. I use the latest AI tools to move
            fast, but the craft and the calls are still mine. No jargon, no
            agency runaround, no surprise invoices — just the work, done
            properly, in a week.
          </p>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    n: "01",
    title: "Website Design",
    body:
      "Custom websites built and delivered in 3–5 days. Clean, mobile-friendly, and designed to convert visitors into customers.",
  },
  {
    n: "02",
    title: "Brand Identity",
    body:
      "Logo direction, colour palette, typography, and a simple brand guide so your business looks consistent everywhere.",
  },
  {
    n: "03",
    title: "Google Business Profile",
    body:
      "Get found on Google Maps and local search. I set it up, optimize it, and manage it monthly so you don't have to think about it.",
  },
  {
    n: "04",
    title: "Monthly Retainer",
    body:
      "Ongoing updates, SEO improvements, and support. Your website stays fresh and you always have someone to call.",
  },
];

function Services() {
  return (
    <section id="services" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-16">
          <h2 className="headline text-5xl md:text-7xl max-w-2xl">
            Four things.<br />
            <span className="italic text-primary">Done well.</span>
          </h2>
          <p className="eyebrow">Services / 2026</p>
        </div>
        <div className="grid md:grid-cols-2 border-t border-border">
          {services.map((s, i) => (
            <div
              key={s.n}
              className={`group p-8 md:p-12 border-b border-border ${
                i % 2 === 0 ? "md:border-r" : ""
              } hover:bg-foreground hover:text-background transition-colors duration-300`}
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-mono text-xs">{s.n}</span>
                <span className="h-2 w-2 rounded-full bg-primary group-hover:bg-background transition" />
              </div>
              <h3 className="font-display text-3xl md:text-4xl mb-4">{s.title}</h3>
              <p className="text-base text-muted-foreground group-hover:text-background/80 max-w-md">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reasons = [
  { k: "Fast delivery", v: "Most websites done in under a week." },
  { k: "Transparent pricing", v: "No surprise invoices, no hidden fees." },
  { k: "Local & accessible", v: "Based in Toronto. No corporate runaround." },
  { k: "No long-term contracts", v: "Pay month to month. Cancel anytime." },
];

function Why() {
  return (
    <section className="border-b border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="eyebrow text-background/60">Why me</p>
          <h2 className="headline text-5xl md:text-7xl mt-6">
            Hire the person, not the <span className="italic text-primary">agency</span>.
          </h2>
        </div>
        <div className="md:col-span-7 grid sm:grid-cols-2 gap-px bg-background/15">
          {reasons.map((r) => (
            <div key={r.k} className="bg-foreground p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <h3 className="font-display text-2xl">{r.k}</h3>
              </div>
              <p className="text-background/70">{r.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const items = [
    { label: "Websites", price: "from $500" },
    { label: "Brand Identity", price: "from $300" },
    { label: "Retainers", price: "from $150/mo" },
  ];
  return (
    <section id="pricing" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <p className="eyebrow mb-10">Pricing</p>
        <div className="divide-y divide-border border-y border-border">
          {items.map((i) => (
            <div
              key={i.label}
              className="flex items-baseline justify-between py-8 group"
            >
              <span className="font-display text-4xl md:text-6xl group-hover:text-primary transition">
                {i.label}
              </span>
              <span className="font-mono text-sm md:text-base">{i.price}</span>
            </div>
          ))}
        </div>
        <p className="mt-10 text-lg text-muted-foreground">
          Not sure what you need?{" "}
          <a href="#contact" className="text-foreground underline underline-offset-4 decoration-primary decoration-2 hover:text-primary">
            Let's talk — first call is free.
          </a>
        </p>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-6">
          <p className="eyebrow text-primary-foreground/70">Contact</p>
          <h2 className="headline text-5xl md:text-8xl mt-6">
            Let's build something <span className="italic">worth showing off.</span>
          </h2>
          <div className="mt-12 space-y-2 font-mono text-sm">
            <p>liam@liamferguson.co</p>
            <p>Toronto, ON</p>
            <p>Replies within one business day.</p>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="md:col-span-6 space-y-6"
        >
          {sent ? (
            <div className="border border-primary-foreground/30 p-10 rounded-md">
              <p className="font-display text-3xl">Got it. Talk soon.</p>
              <p className="mt-3 text-primary-foreground/80 text-sm">
                I'll reply from liam@liamferguson.co within one business day.
              </p>
            </div>
          ) : (
            <>
              {[
                { id: "name", label: "Name", type: "text" },
                { id: "business", label: "Business name", type: "text" },
                { id: "email", label: "Email", type: "email" },
              ].map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="eyebrow text-primary-foreground/70 block mb-2">
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    required
                    className="w-full bg-transparent border-b border-primary-foreground/40 focus:border-primary-foreground py-2 outline-none text-lg placeholder:text-primary-foreground/40"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="brief" className="eyebrow text-primary-foreground/70 block mb-2">
                  What do you need?
                </label>
                <textarea
                  id="brief"
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-primary-foreground/40 focus:border-primary-foreground py-2 outline-none text-lg resize-none placeholder:text-primary-foreground/40"
                />
              </div>
              <button
                type="submit"
                className="mt-4 inline-flex items-center gap-3 bg-background text-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-foreground hover:text-background transition"
              >
                Send it <span aria-hidden>→</span>
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Liam Ferguson Branding — Toronto, ON</p>
        <p className="font-mono text-xs">Built by a person. In Toronto.</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Why />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
