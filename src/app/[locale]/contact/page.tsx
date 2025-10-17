// src/app/contact/page.tsx
import { getI18n } from "../../../i18n/server";
import ClientContactPage from "./client";

export async function generateMetadata() {
  const i18n = await getI18n();
  return {
    title: i18n("contact.meta.title", { count: 0 }),
    description: i18n("contact.meta.description", { count: 0 }),
  };
}

export default function ContactPage() {
  return <ClientContactPage />;
}
