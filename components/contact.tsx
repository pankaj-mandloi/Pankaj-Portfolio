"use client"

import type React from "react"
import { useState } from "react"
import { SectionHeading } from "@/components/section-heading"
import { Mail, Phone, MapPin } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/social-icons"

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "mandloipankaj2000@gmail.com",
    href: "mailto:mandloipankaj2000@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 62639 95699",
    href: "tel:+916263995699",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Indore, India",
    href: null,
  },
]

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name || "visitor"}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:mandloipankaj2000@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Contact" title="Let's work together" />

        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              I&apos;m open to new opportunities and collaborations. Whether you have a project in mind
              or just want to connect, feel free to reach out — I&apos;ll get back to you soon.
            </p>

            <div className="mt-8 space-y-4">
              {contactDetails.map((detail) => {
                const content = (
                  <div className="flex items-center gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-card">
                      <detail.icon className="size-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        {detail.label}
                      </p>
                      <p className="text-sm font-medium text-foreground">{detail.value}</p>
                    </div>
                  </div>
                )
                return detail.href ? (
                  <a
                    key={detail.label}
                    href={detail.href}
                    className="block transition-opacity hover:opacity-80"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={detail.label}>{content}</div>
                )
              })}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://github.com/pankaj-mandloi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex size-11 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
              >
                <GithubIcon className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/pankajmandloi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex size-11 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
              >
                <LinkedinIcon className="size-5" />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-6 md:p-8">
            <div className="grid gap-5">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
                  placeholder="Your name"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
                  placeholder="you@example.com"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="resize-none rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
