import { Car } from "lucide-react";

export function Footer() {
  const phoneNumber = "+1 (740) 224 2691";

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Car className="h-6 w-6 text-red-400" />
              <h3 className="text-xl font-bold">
                Big Tony&apos;s Auto Emporium
              </h3>
            </div>
            <p className="text-gray-400">
              &quot;Where every customer leaves with more than they came
              for!&quot;
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Tony</h4>
            <div className="space-y-2 text-gray-400">
              <p>📍 123 Deal Street, Bargain City</p>
              <a
                href={`tel:${phoneNumber}`}
                className="block text-red-400 font-bold hover:underline"
              >
                📞 {phoneNumber}
              </a>
              <p>✉️ tony@bigdeals.com</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Tony&apos;s Hours</h4>
            <div className="space-y-2 text-gray-400">
              <p>Mon-Fri: 7AM-11PM</p>
              <p>Saturday: 6AM-Midnight</p>
              <p>Sunday: &quot;If you call, I&apos;ll answer&quot;</p>
              <p className="text-red-400 font-semibold">
                Tony&apos;s Phone: Always On
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Tony&apos;s Specialties</h4>
            <div className="space-y-2 text-gray-400">
              <p>Unbeatable Deals</p>
              <p>Creative Financing</p>
              <p>Free Stuff (Lots of It)</p>
              <p>Enthusiastic Service</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 Big Tony&apos;s Auto Emporium. &quot;We&apos;ll make you
            a deal you can&apos;t refuse!&quot; (But you can.)
          </p>
        </div>
      </div>
    </footer>
  );
}
