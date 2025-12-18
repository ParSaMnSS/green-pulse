import "./globals.css";
import { Providers } from "./providers";
import { getCurrentLocale } from "@/i18n/server";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const locale = await getCurrentLocale();
    return (
        <html lang={locale}>
            <body>
                <Providers locale={locale}>{children}</Providers>
            </body>
        </html>
    );
}