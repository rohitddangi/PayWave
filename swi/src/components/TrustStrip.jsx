export default function TrustStrip(){
  const badges = ["PCI-DSS", "SOC 2", "3DS Secure", "Tokenization", "Fraud Screening"];
  return (
    <div aria-label="Trust and status" className="border-b bg-white/70 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/60">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2 text-xs">
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden/> All systems operational
        </span>
        <div className="flex flex-wrap items-center gap-2">
          {badges.map(b=>(<span key={b} className="rounded-full border px-2 py-0.5 dark:border-neutral-700">{b}</span>))}
        </div>
      </div>
    </div>
  );
}
