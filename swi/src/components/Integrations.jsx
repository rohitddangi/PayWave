export default function Integrations(){
  const logos=["Shopkart","QuickBooks","WooShop","NotionPay","Zapier","HubFlow"];
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <p className="text-center text-sm text-gray-500 dark:text-neutral-400">Works with your favorite tools</p>
      <div className="mt-6 grid grid-cols-2 items-center gap-6 text-center text-sm text-gray-400 dark:text-neutral-500 sm:grid-cols-3 md:grid-cols-6">
        {logos.map(n=>(<div key={n} className="rounded-xl border p-3 dark:border-neutral-800">{n}</div>))}
      </div>
    </section>
  );
}
