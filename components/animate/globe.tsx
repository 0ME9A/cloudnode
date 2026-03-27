export default function Globe() {
  return (
    <div className="relative">
      <div className="border-5 aspect-square size-dvh absolute left-1/2 rounded-full border-primary blur-xl border-b-transparent animate-spin animation-duration-[20s] bg-linear-to-b from-primary/40" />
      <div className="border-5 aspect-square size-dvh absolute left-1/2 rounded-full border-primary blur-sm border-b-transparent animate-spin animation-duration-[10s] bg-linear-to-b from-white/10" />
      <div className="border-5 aspect-square size-dvh absolute left-1/2 rounded-full border-primary blur-lg border-b-transparent animate-spin animation-duration-[30s] bg-linear-to-br from-primary/10" />
      <div className="border-5 aspect-square size-dvh absolute left-1/2 rounded-full border-background blur-3xl border-b-transparent animate-spin animation-duration-[15s]" />
    </div>
  );
}
