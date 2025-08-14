import { Car, Phone, Headphones } from "lucide-react";
import Link from "next/link";

export function Header() {
  const phoneNumber = process.env.VAPI_PHONE_NUMBER || "+1 (XXX) XXX-XXXX";

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
          <span className="text-sm">📍 123 Deal Street, Bargain City</span>
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full font-bold"
          >
            <Phone className="h-4 w-4" />
            {phoneNumber}
          </a>
          <Link
            href="/call"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full font-bold"
          >
            <Headphones className="h-4 w-4" />
            Web call
          </Link>
        </div>
      </div>
    </header>
  );
}
