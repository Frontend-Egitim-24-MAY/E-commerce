import { ReactNode } from "react";
import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>{children}</body>
    </html>
  );
}
