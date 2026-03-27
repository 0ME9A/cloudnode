export default function ServerStack() {
  return (
    <div className="relative w-44 h-44 shrink-0 select-none pointer-events-none">
      {/* Glow base */}
      <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl" />

      {/* Tall tower */}
      <div className="absolute left-12 top-4 w-16 h-32 rounded-t-lg bg-linear-to-b from-violet-400/80 to-violet-700/80 border border-white/20 shadow-xl flex flex-col items-center gap-2 pt-3">
        <div className="w-8 h-1.5 rounded-full bg-white/40" />
        <div className="w-8 h-1.5 rounded-full bg-white/30" />
        <div className="w-6 h-6 rounded-md bg-teal-300/60 mt-1 flex items-center justify-center">
          <div className="w-3 h-3 rounded-sm bg-white/70" />
        </div>
        <div className="w-8 h-1.5 rounded-full bg-white/20 mt-auto mb-3" />
      </div>

      {/* Short cube – left */}
      <div className="absolute left-1 top-20 w-11 h-20 rounded-t-md bg-linear-to-b from-violet-300/70 to-fuchsia-600/70 border border-white/15 shadow-lg flex flex-col items-center gap-1.5 pt-2">
        <div className="w-6 h-1 rounded-full bg-white/40" />
        <div className="w-5 h-5 rounded bg-teal-200/50 mt-1" />
      </div>

      {/* Short cube – right */}
      <div className="absolute right-1 top-24 w-9 h-16 rounded-t-md bg-linear-to-b from-indigo-300/60 to-purple-700/70 border border-white/15 shadow-lg flex flex-col items-center gap-1 pt-2">
        <div className="w-5 h-1 rounded-full bg-white/40" />
        <div className="w-4 h-4 rounded bg-white/20 mt-1" />
      </div>

      {/* Ground reflection */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-linear-to-t from-black/20 to-transparent rounded-b-xl" />
    </div>
  );
}
