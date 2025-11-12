import Button from "./ui/Button"; import { Moon, Sun } from "lucide-react";
export default function ThemeToggle({dark,onToggle}){
  return <Button variant="ghost" onClick={onToggle} aria-label="Toggle theme" className="gap-2">{dark?<Sun className="h-4 w-4"/>:<Moon className="h-4 w-4"/>}<span className="hidden sm:inline">{dark?'Light':'Dark'}</span></Button>
}