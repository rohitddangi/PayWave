import { useEffect, useRef, useState } from "react";

function useCountUp(end=0, duration=1200){
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(()=>{
    let start = 0; let raf;
    const t0 = performance.now();
    const step = (t)=>{
      const p = Math.min(1, (t - t0)/duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(start + (end - start)*eased));
      if(p<1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return ()=>cancelAnimationFrame(raf);
  }, [end, duration]);
  return val;
}

export default function Stats(){
  const users = useCountUp(1200);    // in thousands
  const countries = useCountUp(200);
  const uptime = useCountUp(9999);   // represents 99.99
  return (
    <section aria-label="Key metrics" className="mx-auto max-w-7xl px-4 py-12">
      <div className="grid gap-6 rounded-2xl border bg-white/70 p-6 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/60 sm:grid-cols-3">
        <Stat label="Active customers" value={`${users.toLocaleString()}K+`} hint="last 30 days" />
        <Stat label="Countries & regions" value={`${countries}+`} hint="global coverage" />
        <Stat label="Uptime" value={`${(uptime/100).toFixed(2)}%`} hint="last 90 days" />
      </div>
    </section>
  );
}

function Stat({label, value, hint}){
  return (
    <div className="text-center">
      <div className="text-3xl font-bold">{value}</div>
      <div className="mt-1 text-sm text-gray-600 dark:text-neutral-400">{label}</div>
      <div className="text-xs text-gray-500 dark:text-neutral-500">{hint}</div>
    </div>
  );
}
