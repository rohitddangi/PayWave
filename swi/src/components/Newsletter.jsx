import { useState } from "react";

export default function Newsletter(){
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);
  const submit = (e)=>{ e.preventDefault();
    if(!/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(email)) return alert("Enter a valid email");
    setOk(true); setEmail("");
  };
  return (
    <section aria-label="Newsletter" className="mx-auto max-w-7xl px-4 py-16">
      <div className="rounded-2xl border bg-white/70 p-6 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/60">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">Get product updates & tips</h3>
            <p className="text-sm text-gray-600 dark:text-neutral-400">Be the first to know about new APIs, features, and best practices.</p>
          </div>
          <form onSubmit={submit} className="flex gap-2">
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@company.com"
                   className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:border-neutral-800 dark:bg-neutral-950"/>
            <button className="rounded-2xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Subscribe</button>
          </form>
        </div>
        {ok && <p className="mt-3 text-sm text-blue-700 dark:text-blue-400">Thanks! Please check your inbox to confirm subscription.</p>}
      </div>
    </section>
  );
}
