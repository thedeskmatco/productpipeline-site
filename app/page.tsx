import { useId } from "react";

const positioning = [
  {
    label: "Positioning",
    copy: "AI-powered ecommerce automation for modern merchants.",
  },
  {
    label: "Infrastructure",
    copy: "A next-generation infrastructure layer for managing product data and workflows.",
  },
];

const status = [
  {
    label: "Status",
    copy: "Currently in development.",
  },
  {
    label: "Timeline",
    copy: "Coming soon.",
  },
];

const headlineLetters = "ProductPipeline".split("");

const llmNodes = [
  { cx: 16, cy: 28, r: 6, delay: 0 },
  { cx: 32, cy: 18, r: 5, delay: 0.2 },
  { cx: 48, cy: 30, r: 4, delay: 0.35 },
];

const LLMMark = ({ className = "h-16 w-16" }: { className?: string }) => {
  const id = useId();
  const strokeId = `${id}-stroke`;
  const nodeId = `${id}-node`;

  return (
    <svg className={`text-white ${className}`} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={strokeId} x1="8" y1="10" x2="58" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#53d8ff" />
          <stop offset="1" stopColor="#7e7bff" />
        </linearGradient>
        <radialGradient id={nodeId} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#7e7bff" stopOpacity="0.3" />
        </radialGradient>
      </defs>
      <path
        d="M12 40C18 30 26 24 34 24C42 24 48 28 56 18"
        stroke={`url(#${strokeId})`}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="llm-connection"
      />
      <path
        d="M12 32C20 20 36 18 44 14C48 12 52 10 56 12"
        stroke={`url(#${strokeId})`}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="llm-connection"
        opacity={0.6}
      />
      {llmNodes.map((node, index) => (
        <circle
          key={`node-${index}`}
          cx={node.cx}
          cy={node.cy}
          r={node.r}
          fill={`url(#${nodeId})`}
          className="llm-node"
          style={{ animationDelay: `${node.delay}s` }}
        />
      ))}
    </svg>
  );
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#03060d] text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-10 h-72 w-72 rounded-full bg-[#41b3ff]/40 blur-[140px]" />
        <div className="absolute -bottom-16 left-0 h-80 w-80 rounded-full bg-[#ff5b94]/30 blur-[180px]" />
        <div className="absolute inset-y-32 inset-x-10 border border-white/5 rounded-[48px] opacity-30" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 lg:py-20 flex flex-col gap-16">
        <header className="flex flex-col gap-6">
          <nav className="flex items-center justify-between text-[11px] tracking-[0.4em] uppercase text-white/60">
            <span>ProductPipeline</span>
            <span className="rounded-full border border-white/20 px-3 py-1 text-[10px] tracking-[0.3em] text-white/70">
              Private build
            </span>
          </nav>
          <div className="h-px bg-gradient-to-r from-white/0 via-white/40 to-white/0" />
        </header>

        <section className="grid gap-12 lg:grid-cols-[1.15fr,0.85fr] items-start">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              <span className="inline-flex" aria-hidden="true">
                <LLMMark className="h-14 w-14 sm:h-16 sm:w-16 drop-shadow-[0_0_30px_rgba(83,216,255,0.55)]" />
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-center">
                {headlineLetters.map((char, index) => (
                  <span
                    key={`${char}-${index}`}
                    className="falling-letter inline-block"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {char === " " ? "\u00a0" : char}
                  </span>
                ))}
                <span className="align-super text-base font-light tracking-widest">™</span>
              </h1>
            </div>
            <p className="text-sm uppercase tracking-[0.4em] text-white/50">
              AI-powered ecommerce automation for modern merchants.
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              A next-generation infrastructure layer for managing product data and workflows.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-medium tracking-wide">
                Currently in development.
              </span>
              <span className="glow-pill inline-flex items-center rounded-full bg-gradient-to-r from-[#53d8ff] to-[#7e7bff] px-6 py-3 text-sm font-semibold text-[#05070d]">
                Coming soon.
              </span>
            </div>
          </div>

          <aside className="w-full space-y-6">
            <div className="rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">Trademark</p>
              <p className="mt-4 text-base text-white/80">
                ProductPipeline™ is a trademark of Lachlan Bond. Australian trademark application
                number AMCZ-2515163029.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {status.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[24px] border border-white/10 bg-[#0a101c]/70 p-4 text-white/80"
                >
                  <p className="text-[11px] uppercase tracking-[0.4em] text-white/50">{item.label}</p>
                  <p className="mt-3 text-lg font-medium">{item.copy}</p>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {positioning.map((item) => (
            <div
              key={item.label}
              className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-8 backdrop-blur-sm"
            >
              <p className="text-[11px] uppercase tracking-[0.4em] text-white/50">{item.label}</p>
              <p className="mt-4 text-2xl font-semibold leading-snug text-white">
                {item.copy}
              </p>
            </div>
          ))}
        </section>

        <footer className="flex flex-col gap-2 text-[11px] sm:text-xs text-white/50">
          <p>© {new Date().getFullYear()} ProductPipeline™ — All rights reserved.</p>
          <p>ProductPipeline™ is a trademark of Lachlan Bond. Australian trademark application number AMCZ-2515163029.</p>
        </footer>
      </div>
    </main>
  );
}
