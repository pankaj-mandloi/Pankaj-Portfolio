import { SectionHeading } from "@/components/section-heading"
import { Code2, Layers, Globe, Gauge } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "50+ Reusable Components",
    description: "Built component libraries with React Hooks and clean, maintainable architecture.",
  },
  {
    icon: Layers,
    title: "Role-Based Platforms",
    description: "Admin, Vendor, Customer and Service portals with protected routes and dashboards.",
  },
  {
    icon: Globe,
    title: "13-Language Localization",
    description: "Full UI internationalization with react-i18next across an entire platform.",
  },
  {
    icon: Gauge,
    title: "Performance Focused",
    description: "SSR, lazy loading and code splitting with Next.js for faster page speed and SEO.",
  },
]

export function About() {
  return (
    <section id="about" className="border-t border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="About" title="A bit about me" />

        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr]">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              I&apos;m a MERN Stack Developer based in Indore, India, with hands-on experience building
              production-grade web applications. I specialize in the React ecosystem — crafting
              reusable components, managing complex global state with Redux and Redux-Saga, and
              integrating REST APIs to deliver smooth, reliable user experiences.
            </p>
            <p>
              At Digiprima Technologies, I worked on multi-service platforms with separate Admin,
              Vendor, and Customer roles, implemented multilingual support across 13 languages, and
              improved performance using Next.js SSR and code splitting. I enjoy turning complex
              requirements into clean, scalable frontends backed by solid Node.js and MongoDB
              foundations.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-background p-5 transition-colors hover:border-accent"
              >
                <item.icon className="size-6 text-accent" />
                <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
