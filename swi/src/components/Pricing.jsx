import Card,{CardHeader,CardTitle,CardContent} from "./ui/Card";
import Button from "./ui/Button";
import { tiers } from "../data/tiers";
import { Check } from "lucide-react";

export default function Pricing(){
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h3 className="text-3xl font-semibold tracking-tight">Simple pricing, transparent fees</h3>
        <p className="mt-3 text-gray-600 dark:text-neutral-400">Start free. Pay per transaction as you grow.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {tiers.map(t=>(
          <Card key={t.name} className={t.highlight?"shadow-lg":""}>
            <CardHeader>
              <div className="flex items-baseline justify-between">
                <CardTitle className="text-xl">{t.name}</CardTitle>
                {t.highlight && <span className="rounded-full border bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-500/40 dark:bg-blue-500/10 dark:text-blue-300">Most popular</span>}
              </div>
              <div className="mt-3 text-3xl font-bold">{t.price}</div>
              <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">{t.desc}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {t.features.map(f=>(
                  <li key={f} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4"/> {f}</li>
                ))}
              </ul>
              <Button className="mt-6 w-full">{t.cta}</Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-gray-500 dark:text-neutral-500">
        *Example fees: Domestic cards/UPI from 0–2%. Exact rates depend on risk, volume, and corridors.
      </p>
    </section>
  );
}
