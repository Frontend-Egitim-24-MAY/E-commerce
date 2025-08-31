export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="flex py-8 md:py-10">{children}</section>;
}
