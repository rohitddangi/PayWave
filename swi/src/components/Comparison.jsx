export default function Comparison(){
  const rows = [
    { feature: "UPI + Cards + Wallets", paywave: "✔", otherA: "✔", otherB: "✖" },
    { feature: "Smart Routing & Retries", paywave: "✔", otherA: "✖", otherB: "✖" },
    { feature: "Developer Sandbox", paywave: "✔", otherA: "✔", otherB: "✔" },
    { feature: "Invoicing & Links", paywave: "✔", otherA: "✖", otherB: "✔" },
    { feature: "Early Settlements", paywave: "✔", otherA: "✖", otherB: "✖" },
  ];
  return (
    <section aria-label="Comparison table" className="bg-gray-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h3 className="text-2xl font-semibold">Why PayWave stands out</h3>
        <div className="mt-6 overflow-x-auto rounded-2xl border dark:border-neutral-800">
          <table className="min-w-[720px] w-full text-sm">
            <thead className="bg-white dark:bg-neutral-950">
              <tr>
                <Th>Feature</Th><Th>PayWave</Th><Th>Other A</Th><Th>Other B</Th>
              </tr>
            </thead>
            <tbody className="[&>tr:nth-child(odd)]:bg-gray-50/60 dark:[&>tr:nth-child(odd)]:bg-neutral-900/30">
              {rows.map(r=>(
                <tr key={r.feature} className="border-t dark:border-neutral-800">
                  <Td className="font-medium">{r.feature}</Td>
                  <Td className="text-green-700 dark:text-green-400">{r.paywave}</Td>
                  <Td>{r.otherA}</Td><Td>{r.otherB}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-gray-500 dark:text-neutral-500">Comparative info is illustrative for coursework.</p>
      </div>
    </section>
  );
}
function Th({children}){ return <th className="px-4 py-3 text-left">{children}</th>; }
function Td({children, className=""}){ return <td className={`px-4 py-3 ${className}`}>{children}</td>; }
