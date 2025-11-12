import { useEffect, useState } from "react"; import { ArrowUp } from "lucide-react";
export default function ScrollToTop(){
  const [show,setShow]=useState(false);
  useEffect(()=>{ const on=()=>setShow(window.scrollY>300); window.addEventListener("scroll",on); return()=>window.removeEventListener("scroll",on) },[]);
  if(!show) return null;
  return <button onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} className="fixed bottom-5 right-5 rounded-full border bg-white/80 p-2 shadow-md backdrop-blur hover:bg-white dark:border-neutral-700 dark:bg-neutral-900/80" aria-label="Scroll to top"><ArrowUp className="h-5 w-5"/></button>;
}
