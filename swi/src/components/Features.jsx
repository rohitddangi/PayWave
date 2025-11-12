import Card,{CardHeader,CardTitle,CardContent} from "./ui/Card";
import { Lock, Zap, Globe, Plug } from "lucide-react";
export default function Features(){
  const list = [
    {icon:<Plug className="h-6 w-6"/>, title:"Easy Integration", text:"Copy-paste integration guides and sample apps."},
    {icon:<Zap className="h-6 w-6"/>, title:"High Success Rates", text:"Smart routing and auto-retries on failure."},
    {icon:<Globe className="h-6 w-6"/>, title:"Everywhere You Are", text:"Web, mobile, and in-person experiences."},
    {icon:<Lock className="h-6 w-6"/>, title:"Secure by Default", text:"3DS, tokenization, and fraud screening."},
  ];
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight">Build faster with powerful primitives</h2>
        <p className="mt-3 text-gray-600 dark:text-neutral-400">From first payment to global scale.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {list.map(f=>(
          <Card key={f.title}>
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-500/20">{f.icon}</div>
              <CardTitle>{f.title}</CardTitle>
            </CardHeader>
            <CardContent>{f.text}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}