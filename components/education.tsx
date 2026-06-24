import { SectionHeading } from "@/components/section-heading"
import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Birla Institute of Technology, Mesra",
    location: "Ranchi, India",
    period: "2022 – 2024",
    score: "CGPA: 7.7 / 10",
  },
  {
    degree: "B.Sc in Computer Science",
    institution: "ISBA Institute of Professional Studies",
    location: "Indore, India",
    period: "2019 – 2022",
    score: "CGPA: 8.33 / 10",
  },
  {
    degree: "12th (Science)",
    institution: "Nirmal Vidhyapeeth, Barwaha",
    location: "Barwaha, India",
    period: "2018 – 2019",
    score: "CGPA: 7.22 / 10",
  },
  {
    degree: "10th",
    institution: "Nirmal Vidhyapeeth, Barwaha",
    location: "Barwaha, India",
    period: "2016 – 2017",
    score: "CGPA: 7.60 / 10",
  },
]

export function Education() {
  return (
    <section id="education" className="border-t border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="grid gap-6 sm:grid-cols-2">
          {education.map((item) => (
            <div
              key={item.degree}
              className="flex gap-4 rounded-xl border border-border bg-background p-6 transition-colors hover:border-accent"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary">
                <GraduationCap className="size-5 text-accent" />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground text-balance">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.institution}</p>
                <p className="text-sm text-muted-foreground">{item.location}</p>
                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                  <span className="font-medium text-foreground">{item.period}</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="font-medium text-accent">{item.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
