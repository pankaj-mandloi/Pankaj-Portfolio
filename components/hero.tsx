import Image from "next/image";
import { Mail, Phone, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/social-icons";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground">
            <span className="size-2 rounded-full bg-accent" />
            Available for opportunities
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground text-balance md:text-6xl">
            Pankaj Mandloi
          </h1>
          <p className="mt-3 font-heading text-xl text-accent md:text-2xl">
            MERN Stack Developer
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            I build production-grade web applications — crafting reusable
            components, integrating REST APIs, managing complex state with
            Redux-Saga, and delivering full-stack solutions with Node.js,
            MongoDB, and modern AI capabilities like Gemini API and RAG
            pipelines.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Contact me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-muted-foreground">
            <a
              href="https://github.com/pankaj-mandloi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-foreground"
            >
              <GithubIcon className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/pankajmandloi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-foreground"
            >
              <LinkedinIcon className="size-5" />
            </a>
            <a
              href="mailto:mandloipankaj2000@gmail.com"
              aria-label="Email"
              className="transition-colors hover:text-foreground"
            >
              <Mail className="size-5" />
            </a>
            <a
              href="tel:+916263995699"
              aria-label="Phone"
              className="transition-colors hover:text-foreground"
            >
              <Phone className="size-5" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs md:max-w-sm">
          <div
            className="absolute -inset-3 rounded-2xl border border-border"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <Image
              src="/pankaj-portrait.jpg"
              alt="Portrait of Pankaj Mandloi"
              width={480}
              height={560}
              priority
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full flex items-center justify-center bg-black/40 backdrop-blur-sm py-2">
              <p className="text-white text-sm font-medium text-center">
                Pankaj Mandloi
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowDown className="size-4" />
        </a>
      </div>
    </section>
  );
}
