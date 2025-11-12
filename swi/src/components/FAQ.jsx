function PlusIcon(){ return (<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>); }
export default function FAQ(){
  const faqs=[
    {q:"KYC kitne din me complete hota hai?", a:"Generally 24–48 hours after document verification."},
    {q:"Settlements kab milte hain?", a:"Standard T+2; Pro plans support early settlements."},
    {q:"International payments?", a:"Supported on Business plans with FX and compliance checks."},
  ];
  return (
    <section id="faq" className="bg-gray-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <h3 className="text-2xl font-semibold">Frequently asked questions</h3>
          <div className="mt-6 divide-y dark:divide-neutral-800">
            {faqs.map(item=>(
              <details key={item.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between py-1 text-base font-medium">
                  {item.q}<span className="transition-transform group-open:rotate-45"><PlusIcon/></span>
                </summary>
                <p className="mt-2 text-sm text-gray-600 dark:text-neutral-300">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}