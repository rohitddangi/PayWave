import Card,{CardHeader,CardTitle,CardContent} from "./ui/Card";
import { Shield, Server, LifeBuoy } from "lucide-react";
export default function Security(){
  const items=[
    {icon:<Shield className="h-5 w-5"/>,  q:"Security", a:"End-to-end encryption, tokenization, and 3DS flows."},
    {icon:<Server className="h-5 w-5"/>,   q:"Uptime",   a:"99.95% uptime with SLAs for enterprise plans."},
    {icon:<LifeBuoy className="h-5 w-5"/>, q:"Support",  a:"Priority support with a dedicated success manager."},
  ];
  return (
    <section className="bg-gray-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {items.map(i=>(
            <Card key={i.q}><CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-500/20">{i.icon}</div>
              <CardTitle className="text-base">{i.q}</CardTitle>
            </CardHeader>
            <CardContent>{i.a}</CardContent></Card>
          ))}
        </div>
      </div>
    </section>
  );
}