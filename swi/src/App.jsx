import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tabs from "./components/Tabs";
import Features from "./components/Features";
import Integrations from "./components/Integrations";
import Security from "./components/Security";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// NEW
import Stats from "./components/Stats";
import FeeCalculator from "./components/FeeCalculator";
import CodeExamples from "./components/CodeExamples";
import Comparison from "./components/Comparison";
import TrustStrip from "./components/TrustStrip";
import StickyCTA from "./components/StickyCTA";
import Newsletter from "./components/Newsletter";

export default function App(){
  const [dark, setDark] = useState(false);
  useEffect(()=>{
    const saved = localStorage.getItem("paywave:dark")==="1";
    setDark(saved);
    document.documentElement.classList.toggle("dark", saved);
  },[]);
  const toggle = ()=>{
    const next=!dark; setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("paywave:dark", next?"1":"0");
  };
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Navbar dark={dark} onToggleDark={toggle}/>
      <TrustStrip />
      <Hero/>
      <Tabs/>
      <Stats/>
      <Features/>
      <Integrations/>
      <FeeCalculator/>
      <CodeExamples/>
      <Comparison/>
      <Pricing/>
      <Newsletter/>
      <FAQ/>
      <Footer/>
      <StickyCTA/>
      <ScrollToTop/>
    </div>
  );
}
