export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <div className="mb-12">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      <div className="mt-4 h-px w-16 bg-accent" />
    </div>
  )
}
