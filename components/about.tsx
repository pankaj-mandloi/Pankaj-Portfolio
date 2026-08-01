import { SectionHeading } from "@/components/section-heading";
import { Code2, Layers, Globe, Server, Database, Cpu } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "50+ Reusable Components",
    description:
      "Built scalable React component libraries with clean and maintainable architecture.",
  },
  {
    icon: Layers,
    title: "Role-Based Platforms",
    description:
      "Admin, Vendor, Customer and Service portals with protected routes and dynamic dashboards.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Built RESTful APIs with Node.js, Express.js, JWT authentication and Socket.io real-time features.",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Designed MongoDB schemas, implemented Atlas Vector Search and Aggregation Pipelines.",
  },
  {
    icon: Globe,
    title: "13-Language Localization",
    description:
      "Full UI internationalization with react-i18next across an entire platform.",
  },
  {
    icon: Cpu,
    title: "AI-Powered Projects",
    description:
      "Built RAG pipelines and integrated Gemini API and MongoDB Atlas Vector Search for intelligent apps.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="border-t border-border bg-card py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="About" title="A bit about me" />

        <div className="grid gap-12">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg max-w-3xl">
            <p>
              I&apos;m a MERN Stack Developer based in Indore, India, with
              hands-on experience building production-grade web applications. I
              specialize in the React ecosystem — crafting reusable components,
              managing complex global state with Redux and Redux-Saga, and
              integrating REST APIs to deliver smooth, reliable user
              experiences.
            </p>
            <p>
              I work across the full MERN stack — building scalable Node.js
              backends, designing MongoDB schemas, and creating
              performance-optimized React frontends. I also integrate modern AI
              capabilities like Gemini API and RAG pipelines into my full-stack
              projects.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
  );
}