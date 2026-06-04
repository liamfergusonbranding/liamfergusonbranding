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
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
});

const Mark = ({ className = "" }: { className?: string }) => (
  <span
    aria-hidden
    className={`font-display tracking-[0.2em] select-none ${className}`}
  >
    ■●▲
  </span>
);

function Hero() {
  return (
    <section className="min-h-[92vh] flex flex-col items-center justify-center text-center px-6">
      <Mark className="text-sm mb-16" />
      <h1 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight leading-[1.05]">
        Proud business?
        <br />
        <span className="text-muted-foreground">Website dragging you down?</span>
      </h1>
      <a
        href="#contact"
        className="mt-14 inline-flex items-center px-6 py-2.5 rounded-full bg-secondary text-foreground text-sm hover:bg-foreground hover:text-background transition-colors"
      >
        Get a quote
      </a>
    </section>
  );
}

function About() {
  return (
    <section className="px-6 py-32 md:py-48">
      <div className="max-w-xl mx-auto md:mx-0 md:ml-[16%]">
        <Mark className="text-sm" />
        <div className="mt-16">
          <h2 className="font-display font-bold text-xl">Liam Ferguson</h2>
          <p className="font-display font-bold text-xl text-muted-foreground">
            Designer
          </p>
        </div>
        <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-muted-foreground max-w-md">
          <p>
            I'm Liam, based in Toronto. I help local businesses upgrade their
            websites and brands fast, no technical jargon. Small business owners
            hire me because I use the latest AI tools to deliver quality —
            quickly.
          </p>
          <p>
            No mystery or hoops. I love working with restaurants, salons,
            contractors, or anyone in the GTA who wants to look legit online.
            I'll handle it all and keep things simple.
          </p>
          <p>
            Ready to stop putting it off? I'll build you something you'll
            finally feel good about.
          </p>
        </div>
        <p className="mt-12 font-display italic text-2xl text-foreground/80">
          Liam
        </p>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Website design.",
    body: "Custom websites built fast. Mobile-ready. Designed to win customers.",
  },
  {
    title: "Brand identity.",
    body: "Logo, colors, fonts, and guides for a sharp, consistent look.",
  },
  {
    title: "Google profile.",
    body: "Setup and optimize your business for search. Monthly management available.",
  },
];

function Services() {
  return (
    <section className="px-6 py-32 md:py-40">
      <div className="max-w-xl mx-auto md:mx-0 md:ml-[16%] space-y-16">
        {services.map((s) => (
          <div key={s.title}>
            <h3 className="font-display font-bold text-2xl md:text-3xl">
              {s.title}
            </h3>
            <p className="mt-3 text-[15px] text-muted-foreground max-w-md leading-relaxed">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const reasons = [
  "Fast delivery",
  "Transparent pricing",
  "Local & accessible",
];

function Why() {
  return (
    <section className="px-6 py-32 md:py-40">
      <div className="max-w-xl mx-auto md:mx-0 md:ml-[16%] space-y-6">
        {reasons.map((r) => (
          <h3
            key={r}
            className="font-display font-bold text-2xl md:text-3xl"
          >
            {r}
          </h3>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const items = [
    {
      label: "Websites",
      price: "$500+",
      bullets: ["Mobile friendly", "Delivered fast", "Done for you"],
      cta: "Start project",
    },
    {
      label: "Website Maintenance",
      price: "$200+/month",
      bullets: [
        "Unlimited content updates",
        "Hosting and domain management",
        "Monthly performance checks",
      ],
      cta: "Get details",
    },
  ];
  return (
    <section id="pricing" className="px-6 py-32 md:py-48">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight">
          Pricing
        </h2>
        <p className="mt-4 font-display font-medium text-xl text-muted-foreground">
          Simple, upfront, local.
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {items.map((i) => (
            <div
              key={i.label}
              className="border border-border rounded-2xl p-10 text-left flex flex-col"
            >
              <h3 className="font-display font-bold text-2xl">{i.label}</h3>
              <p className="mt-2 font-display font-extrabold text-4xl">
                {i.price}
              </p>
              <ul className="mt-8 space-y-3 text-[15px] text-muted-foreground">
                {i.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-10 inline-flex self-start items-center px-5 py-2 rounded-full bg-secondary text-foreground text-sm hover:bg-foreground hover:text-background transition-colors"
              >
                {i.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="px-6 py-32 md:py-48">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-[1.1]">
          Ready to look as good as your business actually is?
        </h2>
        <p className="mt-6 font-display font-medium text-xl text-muted-foreground">
          Let's talk — first call is free.
        </p>

        <form
          action="https://formspree.io/f/xbdelgko"
          method="POST"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);
            const res = await fetch(form.action, {
              method: "POST",
              body: data,
              headers: { Accept: "application/json" },
            });
            if (res.ok) {
              setSent(true);
              form.reset();
            }
          }}
          className="mt-14 space-y-5 text-left"
        >
          {sent ? (
            <div className="border border-border rounded-2xl p-10 text-center">
              <p className="font-display font-bold text-2xl">
                Got it. Talk soon.
              </p>
              <p className="mt-3 text-muted-foreground text-sm">
                I'll reply from liam@liamfbranding.ca within one business day.
              </p>
            </div>
          ) : (
            <>
              {[
                { id: "name", label: "Name", type: "text" },
                { id: "email", label: "Email", type: "email" },
              ].map((f) => (
                <input
                  key={f.id}
                  id={f.id}
                  name={f.id}
                  type={f.type}
                  required
                  placeholder={f.label}
                  className="w-full bg-secondary rounded-full px-5 py-3 text-sm outline-none focus:ring-1 focus:ring-foreground placeholder:text-muted-foreground"
                />
              ))}
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Message"
                className="w-full bg-secondary rounded-2xl px-5 py-3 text-sm outline-none focus:ring-1 focus:ring-foreground resize-none placeholder:text-muted-foreground"
              />
              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-2.5 rounded-full bg-foreground text-background text-sm hover:opacity-90 transition"
                >
                  Submit
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 py-16 text-center text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()}</p>
      <p className="mt-1">All Rights Reserved</p>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
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
