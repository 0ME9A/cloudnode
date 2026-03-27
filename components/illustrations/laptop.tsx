export default function Laptop() {
  return (
    <div className="relative w-48 h-44 shrink-0 select-none pointer-events-none">
      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl" />

      {/* Screen */}
      <div className="absolute top-2 left-4 right-4 h-28 rounded-xl bg-linear-to-br from-violet-400/70 via-fuchsia-500/60 to-indigo-600/70 border border-white/25 shadow-2xl overflow-hidden">
        {/* Code lines */}
        <div className="p-3 space-y-1.5">
          {[
            "w-16 bg-teal-300/70",
            "w-24 bg-white/40",
            "w-20 bg-violet-200/60",
            "w-14 bg-teal-200/50",
            "w-20 bg-white/30",
          ].map((cls, i) => (
            <div key={i} className={`h-1.5 rounded-full ${cls}`} />
          ))}
        </div>
        {/* Screen shimmer */}
        <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent" />
      </div>

      {/* Hinge + base */}
      <div className="absolute bottom-4 left-0 right-0 h-5 rounded-b-xl bg-linear-to-b from-violet-500/60 to-violet-800/80 border border-white/15 shadow-lg" />
      {/* Keyboard rows */}
      <div className="absolute bottom-6 left-5 right-5 flex flex-col gap-1">
        {[3, 5, 4].map((cols, row) => (
          <div key={row} className="flex gap-1 justify-center">
            {Array.from({ length: cols }).map((_, c) => (
              <div key={c} className="h-1 w-5 rounded-sm bg-white/20" />
            ))}
          </div>
        ))}
      </div>

      {/* Corner accent line */}
      <div className="absolute bottom-3 left-3 w-8 h-8 border-l-2 border-b-2 border-teal-300/60 rounded-bl-lg" />
      <div className="absolute top-1 right-3 w-6 h-6 border-r-2 border-t-2 border-white/30 rounded-tr-lg" />
    </div>
  );
}
