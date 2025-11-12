import Button from "./ui/Button";
export default function StickyCTA(){
  return (
    <div className="sticky bottom-0 z-40 border-t bg-white/90 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 text-sm">
        <span className="hidden sm:block">Ready to get paid online? Create your free PayWave account.</span>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" as="a" href="#pricing">See pricing</Button>
          <Button as="a" href="#pricing">Get started</Button>
        </div>
      </div>
    </div>
  );
}
