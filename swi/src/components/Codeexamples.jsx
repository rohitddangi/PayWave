import { useState } from "react";
import Card,{CardHeader,CardTitle,CardContent} from "./ui/Card";

export default function CodeExamples(){
  const [tab,setTab]=useState("js");
  const js = `import PayWave from "@paywave/sdk";
const pw = new PayWave({ apiKey: process.env.PAYWAVE_KEY });

const charge = await pw.payments.create({
  amount: 49900, currency: "INR",
  method: "card", description: "Pro Plan"
});
console.log(charge.status);`;
  const curl = `curl https://api.paywave.dev/v1/payments \\
  -u sk_test_xxx: \\
  -d amount=49900 -d currency=INR -d method=card -d description="Pro Plan"`;

  const code = tab==="js"? js : curl;

  const copy = async ()=>{
    try{ await navigator.clipboard.writeText(code); alert("Copied!"); }catch(e){ /* no-op */ }
  };

  return (
    <section aria-label="Code examples" className="mx-auto max-w-7xl px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Integrate in minutes</CardTitle>
              <div className="rounded-xl border p-1 text-xs dark:border-neutral-800">
                <button onClick={()=>setTab("js")} className={`rounded-lg px-3 py-1 ${tab==="js"?"bg-blue-600 text-white":"hover:bg-gray-50 dark:hover:bg-neutral-900"}`}>Node.js</button>
                <button onClick={()=>setTab("curl")} className={`ml-1 rounded-lg px-3 py-1 ${tab==="curl"?"bg-blue-600 text-white":"hover:bg-gray-50 dark:hover:bg-neutral-900"}`}>cURL</button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <pre className="overflow-x-auto rounded-xl border bg-neutral-950 p-4 text-xs text-neutral-100 dark:border-neutral-800">
{code}
            </pre>
            <div className="mt-3 text-right">
              <button onClick={copy} className="rounded-xl border px-3 py-1 text-sm hover:bg-gray-50 dark:border-neutral-800 dark:hover:bg-neutral-900">Copy</button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
