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

type SpinnerProps = {
  size?: number;
  className?: string;
  ariaLabel?: string;
};

// Brand spinner used across login/upload flows. Animations and hues inline for portability.
function BrandSpinner({ size = 120, className = "", ariaLabel = "Loading" }: SpinnerProps) {
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
        className="drop-shadow-[0_10px_30px_rgba(0,0,0,0.16)]"
      >
        <defs>
          {/* Filter for glow effect on the core */}
          <filter id="coreGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feFlood floodColor="#a0e9ff" floodOpacity="0.9" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Subtle radial backdrop */}
          <radialGradient id="bgGlow" cx="50%" cy="50%" r="65%">
            <stop offset="0%" stopColor="#4ea5ff" stopOpacity="0.12" />
            <stop offset="60%" stopColor="#8a2be2" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#00091a" stopOpacity="0" />
          </radialGradient>
        </defs>

        <style>
          {`
      :root {
        --neon-blue: #8a2be2;
        --neon-purple: #9370db;
        --core-color: #a0e9ff;
        --line-color: #8a2be2;
        --flare-blue: #4ea5ff;
        --node-stroke: #9370db;
      }

      /* Spinner Rotation: continuous, gradual ramp into burst and soft ease out */
      @keyframes spinnerRotate {
        0% { transform: rotate(0deg); }
        20% { transform: rotate(300deg); }    /* gentle baseline */
        40% { transform: rotate(720deg); }    /* ramping up */
        60% { transform: rotate(1140deg); }   /* peak speed band */
        80% { transform: rotate(1500deg); }   /* easing out */
        100% { transform: rotate(1800deg); }  /* loop continuity (multiple of 360) */
      }

      /* Line Dash Animation: mirrors rotation phases */
      @keyframes lineFlow {
        0% { stroke-dashoffset: 140; }
        20% { stroke-dashoffset: 100; }
        40% { stroke-dashoffset: -30; }    /* ramp */
        60% { stroke-dashoffset: -190; }   /* peak band */
        80% { stroke-dashoffset: -300; }   /* easing out */
        100% { stroke-dashoffset: -360; }  /* loops cleanly */
      }

      /* Single smooth inhale-exhale */
      @keyframes spinnerBreathe {
        0% { transform: scale(0.72); }
        50% { transform: scale(1.04); }
        100% { transform: scale(0.72); }
      }

      @keyframes linePulse {
        0% { stroke-dasharray: 10 20; opacity: 0.45; }
        35% { stroke-dasharray: 14 16; opacity: 0.7; }
        55% { stroke-dasharray: 22 10; opacity: 0.92; } /* burst peak */
        80% { stroke-dasharray: 18 12; opacity: 0.78; }
        100% { stroke-dasharray: 10 20; opacity: 0.45; }
      }

      @keyframes lineFlare {
        0% { opacity: 0.1; stroke-dasharray: 4 30; }
        45% { opacity: 0.15; stroke-dasharray: 8 20; }
        55% { opacity: 0.72; stroke-dasharray: 14 14; } /* flare peak during burst */
        65% { opacity: 0.2; stroke-dasharray: 10 22; }
        100% { opacity: 0.1; stroke-dasharray: 4 30; }
      }

      /* Slow color cycling across brand hues */
      @keyframes hueShift {
        0%, 10% { --line-color: #8a2be2; --node-stroke: #9370db; }
        35% { --line-color: #7c9bff; --node-stroke: #7d8be0; }
        65% { --line-color: #6fd0ff; --node-stroke: #78b3ff; }
        90%, 100% { --line-color: #8a2be2; --node-stroke: #9370db; }
      }

      @keyframes flareHue {
        0%, 10% { stroke: var(--flare-blue); }
        35% { stroke: #7ac8ff; }
        65% { stroke: #9ecbff; }
        90%, 100% { stroke: var(--flare-blue); }
      }

      :root {
        animation: hueShift 20s ease-in-out infinite;
      }

      /* Styling for the entire geometric spinner structure */
      .spinner-shell {
        transform-origin: 50px 50px;
        animation: spinnerBreathe 7.8s cubic-bezier(0.36, 0, 0.2, 1) infinite;
      }
      .spinner-group {
        transform-origin: 50px 50px;
        animation: spinnerRotate 7.8s linear infinite;
      }

      /* Styling for individual hexagonal nodes */
      .node {
        fill: none;
        stroke: var(--node-stroke);
        stroke-width: 1.5;
        opacity: 0.7;
      }
      .node-alt {
        stroke: var(--flare-blue);
      }

      /* Styling for the animated data lines */
      .data-line {
        fill: none;
        stroke: var(--line-color);
        stroke-width: 1.5;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 20 10; /* Creates broken lines */
        animation:
          lineFlow 7.8s linear infinite, /* Data routing animation */
          linePulse 7.8s cubic-bezier(0.36, 0, 0.2, 1) infinite;
        opacity: 0.8;
        filter: drop-shadow(0 0 1.5px var(--line-color)); /* Subtle glow for lines */
      }

      .data-line-flare {
        fill: none;
        stroke: var(--flare-blue);
        stroke-width: 1.2;
        stroke-linecap: round;
        stroke-linejoin: round;
        opacity: 0.1;
        animation:
          lineFlow 7.8s linear infinite,
          lineFlare 7.8s cubic-bezier(0.36, 0, 0.2, 1) infinite,
          flareHue 16s ease-in-out infinite;
        filter: drop-shadow(0 0 1px var(--line-color));
      }
      `}
        </style>

        <g className="spinner-shell">
          <circle cx="50" cy="50" r="60" fill="url(#bgGlow)" opacity="0.35" />

          <g className="spinner-group">
            <defs>
              {/* Reusable hexagon path centered at (0,0) with a radius of 7 */}
              <path
                id="hexagonNode"
                d="M 7 0 L 3.5 6.062 L -3.5 6.062 L -7 0 L -3.5 -6.062 L 3.5 -6.062 Z"
              />
            </defs>

            {/* Six hexagonal nodes arranged on a circle of radius 25 around the center (50,50) */}
            <use href="#hexagonNode" transform="translate(75, 50)" className="node-alt" />
            <use href="#hexagonNode" transform="translate(62.5, 71.65)" className="node" />
            <use href="#hexagonNode" transform="translate(37.5, 71.65)" className="node-alt" />
            <use href="#hexagonNode" transform="translate(25, 50)" className="node" />
            <use href="#hexagonNode" transform="translate(37.5, 28.35)" className="node-alt" />
            <use href="#hexagonNode" transform="translate(62.5, 28.35)" className="node" />

            {/* Connecting broken lines (AI data routing) */}
            {/* The main outer hexagonal path connecting all nodes */}
            <path
              d="M 75,50 L 62.5,71.65 L 37.5,71.65 L 25,50 L 37.5,28.35 L 62.5,28.35 Z"
              className="data-line"
            />
            <path
              d="M 75,50 L 62.5,71.65 L 37.5,71.65 L 25,50 L 37.5,28.35 L 62.5,28.35 Z"
              className="data-line-flare"
              style={{ animationDelay: "-0.5s" }}
            />

            {/* Additional internal criss-crossing lines to suggest more complex data routing */}
            <path d="M 75,50 L 25,50" className="data-line" style={{ animationDelay: "-1s" }} />
            <path d="M 62.5,71.65 L 37.5,28.35" className="data-line" style={{ animationDelay: "-2.5s" }} />
            <path d="M 37.5,71.65 L 62.5,28.35" className="data-line" style={{ animationDelay: "-4s" }} />
            <path d="M 75,50 L 25,50" className="data-line-flare" style={{ animationDelay: "-1.4s" }} />
            <path d="M 62.5,71.65 L 37.5,28.35" className="data-line-flare" style={{ animationDelay: "-2.9s" }} />
            <path d="M 37.5,71.65 L 62.5,28.35" className="data-line-flare" style={{ animationDelay: "-4.4s" }} />
          </g>
        </g>
      </svg>
    </div>
  );
}

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
                <BrandSpinner size={110} ariaLabel="ProductPipeline brand spinner" />
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
