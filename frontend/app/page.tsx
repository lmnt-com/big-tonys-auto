import {
  Phone,
  Star,
  MessageCircle,
  Headphones,
  Zap,
  DollarSign,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function CarDealershipPage() {
  const phoneNumber = process.env.VAPI_PHONE_NUMBER || "+1 (XXX) XXX-XXXX";

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            🚗 DEALS SO GOOD, THEY&apos;RE PRACTICALLY STEALING! 🚗
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Talk to Big Tony himself! He&apos;s got answers, he&apos;s got
            deals, and he&apos;s got a car with YOUR NAME ON IT! (Seriously, he
            might actually put your name on it.)
          </p>

          {/* Main CTA with Phone Number */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto border-4 border-yellow-400">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Headphones className="h-8 w-8 text-red-600" />
              <h2 className="text-2xl font-bold text-gray-800">
                Call Big Tony RIGHT NOW!
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              He&apos;s sitting by the phone, waiting for YOUR call! Don&apos;t
              let him down - he&apos;s already picked out 3 cars he thinks
              you&apos;ll love!
            </p>

            <div className="flex justify-center mb-6 gap-4 flex-wrap">
              <a
                href={`tel:${phoneNumber}`}
                className="bg-red-600 hover:bg-red-700 text-white text-2xl font-bold py-4 px-8 rounded-xl flex items-center gap-3 transition-transform shadow-lg"
              >
                <Phone className="h-8 w-8" />
                {phoneNumber}
              </a>
              <Link
                href="/call"
                className="bg-blue-600 hover:bg-blue-700 text-white text-2xl font-bold py-4 px-8 rounded-xl flex items-center gap-3 transition-transform shadow-lg"
                aria-label="Start a web call with Big Tony"
              >
                <Headphones className="h-8 w-8" />
                Web call
              </Link>
            </div>

            <p className="text-sm text-gray-500">
              📞 Tony&apos;s waiting! • No appointment needed • He WILL make you
              a deal
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why call Big Tony? (As if you need reasons!)
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-2 border-yellow-300">
              <CardHeader>
                <Zap className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Lightning fast responses</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Tony answers before the first ring ends. He&apos;s been
                  practicing. Seriously, it&apos;s impressive and slightly
                  concerning.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-green-300">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Deals that don&apos;t quit</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Tony&apos;s got deals on deals on deals. He&apos;ll throw in
                  floor mats, air fresheners, and probably his lunch if you ask
                  nicely.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-blue-300">
              <CardHeader>
                <Star className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <CardTitle>Encyclopedic car knowledge</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Tony knows every car on the lot by name. He&apos;s got stories
                  about each one. Some are even true!
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You Can Ask Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Tony&apos;s dying to tell you about
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-red-600 mb-4">
                  Vehicle &quot;opportunities&quot;
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • &quot;What&apos;s the BEST deal you&apos;ve got today,
                    Tony?&quot;
                  </li>
                  <li>
                    • &quot;Tell me about that car you&apos;ve been saving for
                    someone special&quot;
                  </li>
                  <li>
                    • &quot;Which car will make my neighbors jealous?&quot;
                  </li>
                  <li>
                    • &quot;What can you throw in to sweeten the deal?&quot;
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-green-600 mb-4">
                  Tony&apos;s &quot;creative&quot; financing
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • &quot;What if I told you I could get you approved
                    TODAY?&quot;
                  </li>
                  <li>
                    • &quot;How low can you really go on monthly payments?&quot;
                  </li>
                  <li>
                    • &quot;What&apos;s this &apos;friends and family&apos;
                    discount I keep hearing about?&quot;
                  </li>
                  <li>
                    • &quot;Can you really beat any competitor&apos;s
                    price?&quot;
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-yellow-50 rounded-xl p-8 border-4 border-yellow-300">
                <MessageCircle className="h-16 w-16 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  Tony&apos;s Getting Antsy!
                </h3>
                <p className="text-gray-600 mb-6">
                  He&apos;s pacing around the lot, checking his phone every 30
                  seconds. Don&apos;t leave him hanging - call now!
                </p>
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold text-lg transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    Call Tony: {phoneNumber}
                  </a>
                  <Link
                    href="/call"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold text-lg transition-colors"
                  >
                    <Headphones className="h-5 w-5" />
                    Web Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Call Button (Mobile) */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center gap-2 bg-red-600 text-white p-4 rounded-full shadow-lg animate-bounce"
          aria-label="Call Big Tony"
        >
          <Phone className="h-6 w-6" />
          <span className="font-bold">Tony&apos;s Waiting!</span>
        </a>
      </div>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Tony&apos;s &quot;satisfied&quot; customers say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  &quot;I called about one car and somehow left with three.
                  Tony&apos;s very... persuasive. Great deals though!&quot;
                </p>
                <p className="font-semibold">
                  - Sarah M. (Happy owner of 3 cars)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  &quot;Tony called me back 47 times to make sure I was happy
                  with my purchase. That&apos;s dedication!&quot;
                </p>
                <p className="font-semibold">- Mike R. (Changed his number)</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  &quot;He threw in fuzzy dice, a pine tree air freshener, AND
                  his lucky pen. Who does that?!&quot;
                </p>
                <p className="font-semibold">
                  - Jennifer L. (Proud owner of lucky pen)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            🚨 URGENT: Tony&apos;s getting worried! 🚨
          </h2>
          <p className="text-xl mb-8">
            He&apos;s been staring at the phone for 3 minutes straight.
            That&apos;s a record!
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-3 bg-white text-red-700 px-8 py-4 rounded-xl font-bold text-2xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Phone className="h-6 w-6" />
              {phoneNumber}
            </a>
            <Link
              href="/call"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-2xl hover:bg-blue-700 transition-colors shadow-lg"
            >
              <Headphones className="h-6 w-6" />
              Web Call
            </Link>
          </div>
          <p className="text-sm mt-4 opacity-90">
            *Tony&apos;s happiness not guaranteed, but highly likely
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
