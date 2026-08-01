import { SectionHeading } from "@/components/section-heading"

const experiences = [
  {
    role: "MERN Stack Developer",
    company: "Digiprima Technologies",
    location: "Indore, India",
    period: "Dec 2024 – May 2026",
    points: [
      "Developed Pearl Streets, a multi-service platform with Admin, Vendor, and Customer roles.",
      "Architected 50+ reusable React components using Hooks, managed global state with Redux-Saga, and integrated 20+ REST APIs using Axios.",
      "Implemented multilingual support for 13 languages using react-i18next for complete UI localization.",
      "Improved SEO and page load speed using Next.js SSR, lazy loading, and code splitting.",
      "Built Admin, Customer and Service Engineer portals for BRYAIR Management System with role-based UI navigation, protected routes and real-time machine monitoring.",
      "Implemented frontend pagination, search filters and real-time alert notifications to improve dashboard responsiveness.",
    ],
  },
  {
    role: "MERN Stack Developer Intern",
    company: "Ypsilon IT Solutions Pvt. Ltd.",
    location: "Indore, India",
    period: "Sep 2024 – Nov 2024",
    points: [
      "Built responsive UI components using React.js and integrated REST APIs using Axios for data handling.",
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