import { SectionHeading } from "@/components/section-heading"

const experiences = [
  {
    role: "MERN Stack Developer",
    company: "Digiprima Technologies",
    location: "Indore, India",
    period: "Dec 2024 – Mar 2026",
    points: [
      "Developed Pearl Streets, a multi-service platform with Admin, Vendor, and Customer roles.",
      "Created 50+ reusable React components and integrated 20+ REST APIs using Axios.",
      "Implemented multilingual support for 13 languages with react-i18next.",
      "Improved SEO and page speed using Next.js SSR, lazy loading, and code splitting.",
      "Built role-based portals for the BRYAIR Management System with real-time machine monitoring.",
    ],
  },
  {
    role: "MERN Stack Developer Intern",
    company: "Ypsilon IT Solutions Pvt. Ltd.",
    location: "Indore, India",
    period: "Sep 2024 – Nov 2024",
    points: [
      "Built responsive UI components using React.js and integrated REST APIs with Axios.",
      "Supported backend API development using Node.js, Express.js, and MongoDB.",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <div className="relative space-y-10 border-l border-border pl-8">
          {experiences.map((exp) => (
            <div key={exp.role + exp.company} className="relative">
              <span className="absolute -left-[2.55rem] top-1.5 size-3 rounded-full border-2 border-accent bg-background" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-heading text-xl font-semibold text-foreground">{exp.role}</h3>
                <span className="text-sm font-medium text-muted-foreground">{exp.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-accent">
                {exp.company} · {exp.location}
              </p>
              <ul className="mt-4 space-y-2">
                {exp.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
