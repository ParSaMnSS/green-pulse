import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Top grid: Logo + 4 columns */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/next.svg" alt="Logo" width={40} height={40} />
              <span className="text-xl font-bold text-white">MySite</span>
            </Link>
            <p className="mt-3 text-sm text-gray-400 italic">
              Innovation for Your Power
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-white">Products</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="#">Power Module Products</Link></li>
              <li><Link href="#">EV Charging Products</Link></li>
              <li><Link href="#">V2G Products</Link></li>
              <li><Link href="#">Battery Energy Storage Products</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-white">Solutions</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="#">V2H & V2G</Link></li>
              <li><Link href="#">ESS Charging</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-white">Support and Service</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="#">Downloads</Link></li>
              <li><Link href="#">Support</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-white">About Us</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="#">About MySite</Link></li>
              <li><Link href="#">Events</Link></li>
              <li><Link href="#">News</Link></li>
              <li><Link href="#">Join us</Link></li>
              <li><Link href="#">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Socials */}
          <div className="flex items-center gap-4">
            <a href="#" aria-label="YouTube" className="hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184C21.403 3.58 22.56 5.137 22.95 7.066c.6 2.91.6 8.974 0 11.883-.39 1.93-1.546 3.486-3.335 3.883-2.934.615-14.316.615-17.25 0C1.575 22.435.42 20.88.03 18.95c-.6-2.91-.6-8.974 0-11.884C.42 5.137 1.575 3.58 3.365 3.184 6.299 2.57 17.681 2.57 19.615 3.184zM9.75 8.25v7.5l6.5-3.75-6.5-3.75z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.038-1.851-3.038-1.853 0-2.136 1.447-2.136 2.939v5.668H9.348V9h3.409v1.561h.048c.474-.9 1.637-1.85 3.37-1.85 3.601 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433c-1.104 0-2-.896-2-2s.896-2 2-2c1.105 0 2 .896 2 2s-.895 2-2 2zm1.78 13.019H3.56V9h3.557v11.452z"/></svg>
            </a>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Sitemap</Link>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-400">
            ©{new Date().getFullYear()} MySite Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
