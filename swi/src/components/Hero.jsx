import { motion } from "framer-motion";
import Button from "./ui/Button";
import { ShieldCheck, Zap, ArrowRight } from "lucide-react";

export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.18),transparent_60%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <motion.h1 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:.6}} className="text-4xl font-bold tracking-tight md:text-5xl">
            Pay, get paid, and grow — all in one place.
          </motion.h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-neutral-300">
            A modern payment platform for individuals and businesses. Fast checkout, global coverage, bank-grade security.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button as="a" href="#pricing" className="gap-2">Get started <ArrowRight className="h-4 w-4"/></Button>
            <Button as="a" href="#features" variant="outline">Explore products</Button>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-600 dark:text-neutral-400">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4"/> PCI-DSS compliant</div>
            <div className="flex items-center gap-2"><Zap className="h-4 w-4"/> Quick onboarding</div>
          </div>
        </div>
        <motion.div initial={{opacity:0,scale:.98}} whileInView={{opacity:1,scale:1}} transition={{duration:.6,delay:.1}} className="relative">
          <div className="aspect-[4/3] w-full rounded-2xl border bg-white p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
            <div className="flex h-full flex-col rounded-xl border bg-gray-50 dark:border-neutral-800 dark:bg-neutral-900">
              <div className="flex items-center gap-2 border-b bg-white p-3 dark:border-neutral-800 dark:bg-neutral-950">
                <div className="h-3 w-3 rounded-full bg-red-400"/><div className="h-3 w-3 rounded-full bg-yellow-400"/><div className="h-3 w-3 rounded-full bg-green-400"/>
                <span className="ml-2 text-sm font-medium">PayWave — Checkout</span>
              </div>
              <div className="grid flex-1 grid-cols-3 gap-3 p-3 md:gap-4 md:p-4">
                <div className="col-span-2 rounded-xl border bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950">
                  <div className="h-4 w-28 rounded bg-gray-200 dark:bg-neutral-800"/>
                  <div className="mt-3 h-3 w-3/4 rounded bg-gray-200 dark:bg-neutral-800"/>
                  <div className="mt-1 h-3 w-2/3 rounded bg-gray-200 dark:bg-neutral-800"/>
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="h-24 rounded-xl bg-gray-100 dark:bg-neutral-800"/><div className="h-24 rounded-xl bg-gray-100 dark:bg-neutral-800"/><div className="h-24 rounded-xl bg-gray-100 dark:bg-neutral-800"/>
                  </div>
                </div>
                <div className="rounded-xl border bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950">
                  <div className="h-4 w-16 rounded bg-gray-200 dark:bg-neutral-800"/>
                  <div className="mt-3 h-24 rounded-xl bg-gray-100 dark:bg-neutral-800"/>
                  <div className="mt-3 h-24 rounded-xl bg-gray-100 dark:bg-neutral-800"/>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
