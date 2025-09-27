import React from "react";
import ContactItem from "./contactItem";

export default function ContactGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      <ContactItem icon="/icons/contact-us/location.svg" title="Location">
        <address className="not-italic">
          Østre Aker vei 17, 0581<br />
          Oslo, Norway
        </address>
      </ContactItem>

      <ContactItem icon="/icons/contact-us/call.svg" title="Phone">
        <p>
          <a href="tel:+4712345678" className="underline decoration-emerald-400/40 underline-offset-4 hover:text-emerald-300">
            +47 12 34 56 78
          </a>
        </p>
        <p className="text-white/55">(Mon–Fri, 09:00–17:00 CET)</p>
      </ContactItem>

      <ContactItem icon="/icons/contact-us/mail.svg" title="Email">
        <p>
          <a href="mailto:info@mhtechnology.no"
             className="underline decoration-emerald-400/40 underline-offset-4 hover:text-emerald-300">
            info@mhtechnology.no
          </a>
        </p>
      </ContactItem>
    </div>
  );
}
