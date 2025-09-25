import React from "react";
import ContactItem from "./contactItem";

export default function ContactGrid() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white/80 shadow-sm backdrop-blur">
      <div className="px-8 pb-10 pt-12 sm:px-12">
        <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900">
          Contact Us
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-center text-gray-600">
          We’d love to hear from you. Reach us via the details below.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
          <ContactItem icon="/icons/contact-us/location.svg" title="Location">
            <p>
              MH Technology AS company no. 928 987 108<br />
              Åsensentret 24, 7630 Åsen, Norway<br />
              P.O. Box 28, 7631 Åsen, Norway
            </p>
          </ContactItem>

          <ContactItem icon="/icons/contact-us/call.svg" title="Phone">
            <p>
              <a href="tel:+4795111008" className="hover:underline">
                +47 951 11 008
              </a>
            </p>
          </ContactItem>

          <ContactItem icon="/icons/contact-us/mail.svg" title="Email">
            <p>
              <a href="mailto:info@mhtechnology.no" className="hover:underline">
                info@mhtechnology.no
              </a>
            </p>
          </ContactItem>
        </div>
      </div>

      <div className="h-2 w-full rounded-b-2xl bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50" />
    </div>
  );
}
