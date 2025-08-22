import { Car, Github } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-slate-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Car className="h-8 w-8 text-blue-400" />
          <h1 className="text-2xl font-bold">Big Tony&apos;s Auto Emporium</h1>
        </Link>
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/lmnt-com/big-tonys-auto"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full font-bold text-sm"
          >
            <Github className="h-4 w-4" />
            Fork on GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
