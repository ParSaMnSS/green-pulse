import React from "react";
import ContactItem from "./contactItem";
import Reveal from "../VFX/Reveal";
import { useI18n } from "@/i18n/client";

export default function ContactGrid() {
  const i18n = useI18n();
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 ">
      <Reveal delay={0.1}>
        <ContactItem icon="/icons/contact-us/location.svg" title={i18n("contact.grid.location.title", { count: 0 })}>
          <address className="not-italic" dangerouslySetInnerHTML={{ __html: i18n("contact.grid.location.address", { count: 0 }) }} />
        </ContactItem>
      </Reveal>

      <Reveal delay={0.2}>
        <ContactItem icon="/icons/contact-us/mail.svg" title={i18n("contact.grid.email.title", { count: 0 })}>
          <p>
            <a
              href="mailto:admin@green-pulse.es"
              className="underline decoration-emerald-400/40 underline-offset-4 hover:text-emerald-300"
            >
admin@green-pulse.es
            </a>
          </p>
        </ContactItem>
      </Reveal>
    </div>
  );
}