import { SectionHeading } from "@/components/section-heading"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Pearl Streets Multi-Service Platform",
    period: "Digiprima Technologies",
    link: "https://pearlstreets.com",
    description:
      "A multi-service platform with separate roles for Admin, Vendor, and Customer. Built 50+ reusable React components, managed global state with Redux-Saga, integrated 20+ REST APIs with Axios, and added multilingual support for 13 languages using react-i18next.",
    tags: ["React.js", "Next.js", "Redux-Saga", "react-i18next", "MongoDB", "Mongoose"],
  },
  {
    title: "BRYAIR Management System",
    period: "Digiprima Technologies",
    link: null,
    description:
      "Admin, Customer, and Service Engineer portals with role-based UI navigation, protected routes, and dynamic dashboards for real-time machine monitoring. Implemented frontend pagination, search filters, and real-time alert notifications for large datasets.",
    tags: ["React.js", "Protected Routes", "Dashboards", "State Management"],
  },
  {
    title: "CollabAI — Real-Time Team Collaboration Platform",
    period: "Personal Project",
    link: "https://collabai-workspace-1.onrender.com/",
    description:
      "Full-stack real-time collaboration platform with live chat, Kanban task boards, and a document editor featuring multi-workspace support, role-based access control, and Clerk authentication. Integrated Google Gemini with a custom RAG pipeline and MongoDB Atlas Vector Search to power an in-app AI agent.",
    tags: ["Next.js", "Express.js", "MongoDB", "Socket.io", "Clerk", "Gemini API", "RAG"],
  },
  {
    title: "DocChat — AI-Powered PDF Chat Application",
    period: "Personal Project",
    link: "https://docchat-frontend-6p2p.onrender.com/",
    description:
      "Full-stack RAG application where users upload PDFs and ask questions in natural language. Engineered complete pipeline using Gemini Embedding API and MongoDB Atlas Vector Search with real-time streaming answers and page-level source citations. Includes JWT authentication, multi-document chat, and rate limiting.",
    tags: ["MERN Stack", "Gemini API", "MongoDB Atlas Vector Search", "RAG", "JWT"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="border-t border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Projects" title="Selected work" />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-xl border border-border bg-background p-6 transition-colors hover:border-accent"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground text-balance">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{project.period}</p>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title}`}
                    className="flex size-9 shrink-0 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <ArrowUpRight className="size-4" />
                  </a>
                )}
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
