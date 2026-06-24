import { SectionHeading } from "@/components/section-heading"

const skillGroups = [
  {
    category: "Languages",
    skills: ["JavaScript (ES6+)", "C++", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Redux", "Redux-Saga", "React Hooks", "MUI", "Bootstrap"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST API", "JWT Authentication"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "SQL"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
  {
    category: "Concepts",
    skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Skills" title="Technical toolkit" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent"
            >
              <h3 className="font-heading text-lg font-semibold text-foreground">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
