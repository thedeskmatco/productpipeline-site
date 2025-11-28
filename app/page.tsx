const signals = [
  {
    label: "Status",
    copy: "Currently in development.",
  },
  {
    label: "Timeline",
    copy: "Coming soon.",
  },
];

const commitments = [
  {
    title: "Product data clarity",
    copy: "Keep catalog quality high with structured, synchronized product information.",
  },
  {
    title: "Workflow automation",
    copy: "Automate the routine motions that slow down ecommerce teams.",
  },
  {
    title: "Composable by design",
    copy: "An infrastructure layer that plugs into existing product data and tooling.",
  },
];

const panelClass =
  "pp-tile bg-slate-900/70 border border-white/10 rounded-2xl px-6 py-5 text-slate-200 shadow-lg shadow-black/40 backdrop-blur-sm";

type SpinnerProps = {
  size?: number;
  className?: string;
  ariaLabel?: string;
};

// Brand spinner tuned to the ProductPipeline palette.
export function BrandSpinner({ size = 120, className = "", ariaLabel = "Loading" }: SpinnerProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center ${className}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="pp-spinner drop-shadow-[0_10px_30px_rgba(114,75,183,0.18)]"
      >
        <defs>
          <filter id="coreGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feFlood floodColor="#d6c6f4" floodOpacity="0.92" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="bgGlow" cx="50%" cy="50%" r="65%">
            <stop offset="0%" stopColor="#cfbcf2" stopOpacity="0.22" />
            <stop offset="60%" stopColor="#c4d1e5" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#0f131c" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g className="spinner-shell">
          <circle cx="50" cy="50" r="60" fill="url(#bgGlow)" opacity="0.35" />

          <g className="spinner-group">
            <defs>
              <path
                id="hexagonNode"
                d="M 7 0 L 3.5 6.062 L -3.5 6.062 L -7 0 L -3.5 -6.062 L 3.5 -6.062 Z"
                fill="none"
                stroke="#c4d1e5"
                strokeWidth="1.5"
              />
            </defs>

            <use href="#hexagonNode" transform="translate(75, 50)" className="node-alt" stroke="#8662c7" />
            <use href="#hexagonNode" transform="translate(62.5, 71.65)" className="node" stroke="#c4d1e5" />
            <use href="#hexagonNode" transform="translate(37.5, 71.65)" className="node-alt" stroke="#8662c7" />
            <use href="#hexagonNode" transform="translate(25, 50)" className="node" stroke="#c4d1e5" />
            <use href="#hexagonNode" transform="translate(37.5, 28.35)" className="node-alt" stroke="#8662c7" />
            <use href="#hexagonNode" transform="translate(62.5, 28.35)" className="node" stroke="#c4d1e5" />

            <path
              d="M 75,50 L 62.5,71.65 L 37.5,71.65 L 25,50 L 37.5,28.35 L 62.5,28.35 Z"
              className="data-line"
              fill="none"
              stroke="#724bb7"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="20 10"
            />
            <path
              d="M 75,50 L 62.5,71.65 L 37.5,71.65 L 25,50 L 37.5,28.35 L 62.5,28.35 Z"
              className="data-line-flare"
              fill="none"
              stroke="#8662c7"
              strokeWidth="1.35"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="20 10"
              style={{ animationDelay: "-0.5s" }}
            />

            <path
              d="M 75,50 L 25,50"
              className="data-line"
              fill="none"
              stroke="#724bb7"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="20 10"
              style={{ animationDelay: "-1s" }}
            />
            <path
              d="M 62.5,71.65 L 37.5,28.35"
              className="data-line"
              fill="none"
              stroke="#724bb7"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="20 10"
              style={{ animationDelay: "-2.5s" }}
            />
            <path
              d="M 37.5,71.65 L 62.5,28.35"
              className="data-line"
              fill="none"
              stroke="#724bb7"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="20 10"
              style={{ animationDelay: "-4s" }}
            />
            <path
              d="M 75,50 L 25,50"
              className="data-line-flare"
              fill="none"
              stroke="#8662c7"
              strokeWidth="1.35"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="20 10"
              style={{ animationDelay: "-1.4s" }}
            />
            <path
              d="M 62.5,71.65 L 37.5,28.35"
              className="data-line-flare"
              fill="none"
              stroke="#8662c7"
              strokeWidth="1.35"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="20 10"
              style={{ animationDelay: "-2.9s" }}
            />
            <path
              d="M 37.5,71.65 L 62.5,28.35"
              className="data-line-flare"
              fill="none"
              stroke="#8662c7"
              strokeWidth="1.35"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="20 10"
              style={{ animationDelay: "-4.4s" }}
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-dvh bg-[#0f1117] text-slate-200 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/3 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute -bottom-[10rem] right-0 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        <section className="mx-auto max-w-4xl px-6 pt-20 pb-12">
          <div className="mt-6 space-y-4 text-center">
            <h1 className="text-4xl font-semibold text-slate-100 sm:text-5xl lg:text-6xl">
              ProductPipeline<span className="align-super text-base font-normal tracking-[0.24em]">™</span>
            </h1>
            <p className="text-xl/8 text-slate-200">
              AI-powered ecommerce automation for modern merchants.
            </p>
            <p className="text-base/7 text-slate-400">
              A next-generation infrastructure layer for product data and workflows.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-center">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold bg-linear-to-r from-purple-500 to-purple-400 text-slate-950 shadow-[0_0_30px_rgba(168,129,217,0.45)] hover:from-purple-400 hover:to-purple-300 transition"
            >
              Join the early access
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium text-slate-200 border border-white/15 bg-transparent hover:bg-white/5 transition"
              aria-disabled="true"
            >
              Coming soon
            </button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {commitments.map((item) => (
              <div key={item.title} className={panelClass}>
                <p className="text-sm font-semibold text-slate-100">{item.title}</p>
                <p className="mt-2 text-sm/6 text-slate-400">{item.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 border-t border-white/5 bg-slate-950/40">
          <div className="mx-auto grid max-w-5xl gap-6 px-6 py-8 md:grid-cols-[2fr,1fr]">
            <div className="space-y-4">
              <div className={panelClass}>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Trademark</p>
                <p className="mt-3 text-base/7 text-slate-200">
                  ProductPipeline™ is a trademark of Lachlan Bond. Australian trademark application number AMCZ-2515163029.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {signals.map((item) => (
                  <div key={item.label} className={panelClass}>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-3 text-lg/8 font-semibold text-slate-100">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={panelClass + " flex flex-col items-center justify-center gap-3 py-8"}>
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Visual</span>
              <BrandSpinner size={110} ariaLabel="ProductPipeline brand spinner" />
              <p className="text-sm text-slate-400">AI commerce infrastructure</p>
            </div>
          </div>
        </section>

        <footer className="mx-auto flex max-w-5xl flex-col gap-2 px-6 pb-12 text-sm/6 text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ProductPipeline™ — All rights reserved.</p>
          <p>ProductPipeline™ is a trademark of Lachlan Bond.</p>
        </footer>
      </div>
    </main>
  );
}
