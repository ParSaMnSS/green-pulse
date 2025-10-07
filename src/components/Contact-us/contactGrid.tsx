import React from "react";
import ContactItem from "./contactItem";
import Reveal from "../VFX/Reveal";

export default function ContactGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 ">
      <Reveal delay={0.1}>
        <ContactItem icon="/icons/contact-us/location.svg" title="Location">
          <address className="not-italic">
            Urbanizacion Villa Parra Palomeras, 90D<br />
            29602 Marbella, Málaga, Spain
          </address>
        </ContactItem>
      </Reveal>

      <Reveal delay={0.2}>
        <ContactItem icon="/icons/contact-us/mail.svg" title="Email">
          <p>
            <a
              href="mailto:info@mhtechnology.no"
              className="underline decoration-emerald-400/40 underline-offset-4 hover:text-emerald-300"
            >
              info@mhtechnology.no
            </a>
          </p>
        </ContactItem>
      </Reveal>
    </div>
  );
}