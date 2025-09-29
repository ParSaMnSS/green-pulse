import Image from "next/image";
import AnimatedUnderlineLink from "./bits/AnimatedUnderlineLink";

// ...imports stay the same
export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo */}
          <div>
            <AnimatedUnderlineLink href="/" className="flex items-center space-x-3">
              <Image src="/globe.svg" alt="Green Pulse logo" width={40} height={40} />
              <span className="text-xl font-bold text-white">Green Pulse</span>
            </AnimatedUnderlineLink>
            <p className="mt-3 text-sm text-gray-400 italic">
              Innovation for Your Power
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-white">Products</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><AnimatedUnderlineLink href="/#compact">Power Module Products</AnimatedUnderlineLink></li>
              <li><AnimatedUnderlineLink href="/#portable">EV Charging Products</AnimatedUnderlineLink></li>
              <li><AnimatedUnderlineLink href="/#v2g">V2G Products</AnimatedUnderlineLink></li>
              <li><AnimatedUnderlineLink href="/#storage">Battery Energy Storage</AnimatedUnderlineLink></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-white">Solutions</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><AnimatedUnderlineLink href="/#v2h">V2H & V2G</AnimatedUnderlineLink></li>
              <li><AnimatedUnderlineLink href="/#ess-charging">ESS Charging</AnimatedUnderlineLink></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-white">Support & Service</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><AnimatedUnderlineLink href="/downloads">Downloads</AnimatedUnderlineLink></li>
              <li><AnimatedUnderlineLink href="/support">Support</AnimatedUnderlineLink></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><AnimatedUnderlineLink href="/about">About</AnimatedUnderlineLink></li>
              <li><AnimatedUnderlineLink href="/news">News</AnimatedUnderlineLink></li>
              <li><AnimatedUnderlineLink href="/careers">Join Us</AnimatedUnderlineLink></li>
              <li><AnimatedUnderlineLink href="/contact">Contact</AnimatedUnderlineLink></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
          <div className="flex gap-6 text-sm">
            <AnimatedUnderlineLink href="/privacy">Privacy Policy</AnimatedUnderlineLink>
            <AnimatedUnderlineLink href="/sitemap.xml">Sitemap</AnimatedUnderlineLink>
          </div>
          <p className="text-xs text-gray-400">
            ©{new Date().getFullYear()} Green Pulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

