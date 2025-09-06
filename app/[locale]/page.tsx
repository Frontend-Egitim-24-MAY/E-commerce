"use client";

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      Home
    </section>
  );
}
