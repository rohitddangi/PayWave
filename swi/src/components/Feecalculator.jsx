import { useMemo, useState } from "react";
import Card,{CardHeader,CardTitle,CardContent} from "./ui/Card";

const FEES = {
  INR: { fixed: 3, percent: 0.02 },
  USD: { fixed: 0.3, percent: 0.029 },
  EUR: { fixed: 0.35, percent: 0.028 },
};

export default function FeeCalculator(){
  const [amt, setAmt] = useState(1000);
  const [ccy, setCcy] = useState("INR");
  const cfg = FEES[ccy];

  const { fee, net } = useMemo(()=>{
    const fee = cfg.fixed + amt * cfg.percent;
    const net = Math.max(0, amt - fee);
    return { fee, net };
  }, [amt, cfg]);

  return (
    <section aria-label="Fee calculator" className="bg-gray-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle>Estimate your fees</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-3">
                <label className="text-sm">
                  <span className="mb-1 block">Currency</span>
                  <select value={ccy} onChange={e=>setCcy(e.target.value)}
                          className="w-full rounded-xl border px-3 py-2 dark:border-neutral-800 dark:bg-neutral-950">
                    {Object.keys(FEES).map(k=><option key={k} value={k}>{k}</option>)}
                  </select>
                </label>
                <label className="text-sm sm:col-span-2">
                  <span className="mb-1 block">Amount</span>
                  <input type="number" min={0} value={amt}
                         onChange={e=>setAmt(Number(e.target.value))}
                         className="w-full rounded-xl border px-3 py-2 dark:border-neutral-800 dark:bg-neutral-950"/>
                </label>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <Info label="Fixed + %" value={
                  ccy==="INR" ? `₹${cfg.fixed} + ${(cfg.percent*100).toFixed(1)}%`
                              : `${ccy} ${cfg.fixed} + ${(cfg.percent*100).toFixed(1)}%`
                }/>
                <Info label="Estimated fee" value={fmt(ccy, fee)} />
                <Info label="You receive (net)" value={fmt(ccy, net)} />
              </div>

              <p className="mt-3 text-xs text-gray-500 dark:text-neutral-500">
                This is an estimate for demonstration. Actual fees depend on risk, corridors, and volume.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
function Info({label,value}){
  return <div className="rounded-xl border p-4 text-center dark:border-neutral-800">
    <div className="text-xs text-gray-500 dark:text-neutral-500">{label}</div>
    <div className="text-xl font-semibold">{value}</div>
  </div>;
}
function fmt(ccy, n){
  const map = {INR:"₹", USD:"$", EUR:"€"};
  const s = map[ccy] ?? "";
  return `${s}${n.toFixed(2)}`;
}
