import { useState } from "react";
import { featuresPersonal, featuresBusiness } from "../data/features";
import Card,{CardHeader,CardTitle,CardContent} from "./ui/Card";

export default function Tabs(){
  const [tab,setTab]=useState("personal");
  const data = tab==="personal" ? featuresPersonal : featuresBusiness;
  return (
    <section id="tabs" className="bg-gray-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex items-center justify-center gap-2">
          <button onClick={()=>setTab("personal")} className={`rounded-xl px-4 py-2 text-sm ${tab==="personal"?"bg-blue-600 text-white":"border hover:bg-gray-50 dark:border-neutral-800 dark:hover:bg-neutral-900"}`}>Personal</button>
          <button onClick={()=>setTab("business")} className={`rounded-xl px-4 py-2 text-sm ${tab==="business"?"bg-blue-600 text-white":"border hover:bg-gray-50 dark:border-neutral-800 dark:hover:bg-neutral-900"}`}>Business</button>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map(f=>(
            <Card key={f.title}>
              <CardHeader>
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-500/20">{f.icon}</div>
                <CardTitle>{f.title}</CardTitle>
              </CardHeader>
              <CardContent>{f.text}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
