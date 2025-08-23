export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex items-center gap-4 py-8 md:py-10">
      <div className="inline-block">{children}</div>
    </section>
  );
}
