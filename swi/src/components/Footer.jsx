export default function Footer(){
  return (
    <footer className="border-t dark:border-neutral-800">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
        <p className="text-sm text-gray-500 dark:text-neutral-400">© {new Date().getFullYear()} PayWave. All rights reserved.</p>
        <div className="flex items-center gap-5 text-sm text-gray-600 dark:text-neutral-300">
          <a href="#">Privacy</a><a href="#">Terms</a><a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}
