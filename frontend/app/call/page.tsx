import { headers } from "next/headers";
import { App } from "@/components/app";
import { getAppConfig } from "@/lib/utils";
import { Headphones } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default async function Page() {
  const hdrs = await headers();
  const appConfig = await getAppConfig(hdrs);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Headphones className="h-6 w-6 text-red-600" />
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                  Start a call with Big Tony
                </h2>
              </div>
              <p className="text-gray-600 mb-4">
                Use your browser to talk to Tony right now and get a great deal
                on a car.
              </p>
              <div className="bg-white rounded-xl border border-gray-200 p-3 md:p-4">
                <App appConfig={appConfig} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
