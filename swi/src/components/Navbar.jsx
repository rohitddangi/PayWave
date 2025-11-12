import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";
import ThemeToggle from "./ThemeToggle";

const links = [
  {label:"Personal", href:"#tabs"},
  {label:"Business", href:"#tabs"},
  {label:"Products", href:"#features"},
  {label:"Pricing", href:"#pricing"},
  {label:"FAQ", href:"#faq"},
];

export default function Navbar({dark,onToggleDark}){
  const [open,setOpen]=useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white font-bold">PW</div>
          <span className="text-lg font-semibold tracking-tight">PayWave</span>
        </a>
        <nav className="hidden items-center gap-2 md:flex">
          {links.map(l=>(<a key={l.label} href={l.href} className="rounded-xl px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-900">{l.label}</a>))}
          <Button variant="outline">Log in</Button>
          <Button>Sign up</Button>
          <ThemeToggle dark={dark} onToggle={onToggleDark}/>
        </nav>
        <button className="inline-flex items-center justify-center rounded-xl border p-2 md:hidden dark:border-neutral-700" onClick={()=>setOpen(v=>!v)} aria-label="Toggle Menu">{open?<X className="h-5 w-5"/>:<Menu className="h-5 w-5"/>}</button>
      </div>
      {open && (
        <div className="border-t md:hidden dark:border-neutral-800">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3">
            {links.map(l=>(<a key={l.label} href={l.href} className="rounded-xl px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-neutral-900">{l.label}</a>))}
            <div className="flex gap-2">
              <Button variant="outline" className="w-full">Log in</Button>
              <Button className="w-full">Sign up</Button>
            </div>
            <ThemeToggle dark={dark} onToggle={onToggleDark}/>
          </div>
        </div>
      )}
    </header>
  );
}