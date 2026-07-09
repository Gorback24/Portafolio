const stackGroups = [
  {
    title: "Frontend",
    items: ["React", "Angular", "Vite", "TypeScript", "Tailwind"],
  },
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "Django", "APIs REST"],
  },
  {
    title: "Bases de datos",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "IA & automatización",
    items: ["OpenAI", "n8n", "Asistentes IA"],
  },
  {
    title: "DevOps",
    items: ["Git", "Docker", "Linux", "Postman"],
  },
];

const projects = [
  {
    title: "App Full Stack con Django + React",
    description:
      "Arquitectura cliente-servidor con MySQL, CRUD completo y consumo de APIs REST.",
  },
  {
    title: "App móvil en React Native",
    description:
      "Autenticación de usuarios, gestión de citas médicas y almacenamiento persistente.",
  },
  {
    title: "Integración API de Spotify",
    description:
      "Angular + TypeScript, manejo de tokens y procesamiento de datos JSON.",
  },
  {
    title: "Monitoreo IoT",
    description:
      "Integración IoT con MySQL para monitoreo térmico y visualización de datos.",
  },
];

const experienceItems = [
  {
    date: "2025 — Actualidad",
    title: "Full Stack Developer",
    company: "Tecnoinver · Santiago, Chile",
    points: [
      "Plataforma web con avatar conversacional e IA para captación de clientes y soporte de negocio.",
      "Arquitectura de microservicios con NestJS y Node.js, definiendo APIs REST.",
      "Frontend en React + Vite + TypeScript con foco en UX/UI y diseño responsive.",
      "Modelado de bases de datos PostgreSQL y MySQL para conversaciones, usuarios y métricas.",
      "Dashboard privado con autenticación para visualización de métricas y reportes generados por IA.",
      "Automatización de procesos con n8n e integración de APIs externas.",
    ],
  },
  {
    date: "2021 — 2024",
    title: "Ingeniería en Informática",
    company: "INACAP · Santiago, Chile",
    points: [],
  },
];

function SectionTitle({
  tag,
  title,
}: {
  tag: string;
  title: string;
}) {
  return (
    <div className="mb-12">
      <span className="mb-2 block font-mono text-[13px] tracking-[0.08em] text-[#6FE3FF]">
        {tag}
      </span>
      <h2 className="font-space text-3xl font-bold tracking-tight text-[#F4F6FF] md:text-[38px]">
        {title}
      </h2>
    </div>
  );
}

function TagPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-[#3D5CFF]/30 bg-[#3D5CFF]/10 px-3 py-1.5 font-mono text-xs text-[#B9C3FF]">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0A0B1E] text-[#F4F6FF]">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_15%_10%,rgba(74,63,207,0.35),transparent_40%),radial-gradient(circle_at_85%_25%,rgba(61,92,255,0.25),transparent_45%),radial-gradient(circle_at_50%_90%,rgba(111,227,255,0.10),transparent_50%)]" />

      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-[#6FE3FF]/15 bg-[#0A0B1E]/60 px-[6vw] py-5 backdrop-blur-xl">
        <a href="#inicio" className="font-space text-lg font-bold tracking-wide">
          G<span className="text-[#6FE3FF]">.</span>C
        </a>

        <nav className="hidden gap-8 md:flex">
          <a
            href="#stack"
            className="text-sm font-medium tracking-wide text-[#9AA0C7] transition hover:text-[#6FE3FF]"
          >
            Stack
          </a>
          <a
            href="#experiencia"
            className="text-sm font-medium tracking-wide text-[#9AA0C7] transition hover:text-[#6FE3FF]"
          >
            Experiencia
          </a>
          <a
            href="#proyectos"
            className="text-sm font-medium tracking-wide text-[#9AA0C7] transition hover:text-[#6FE3FF]"
          >
            Proyectos
          </a>
          <a
            href="#contacto"
            className="text-sm font-medium tracking-wide text-[#9AA0C7] transition hover:text-[#6FE3FF]"
          >
            Contacto
          </a>
        </nav>
      </header>

      <section
        id="inicio"
        className="relative z-10 flex min-h-screen flex-col items-start justify-center px-[6vw] pb-24 pt-32"
      >
        <div className="relative mb-9 flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 animate-pulse rounded-full border border-[#6FE3FF] shadow-[0_0_18px_rgba(111,227,255,0.55),0_0_40px_rgba(111,227,255,0.25)]" />
          <div className="flex h-[66px] w-[66px] items-center justify-center rounded-full bg-gradient-to-br from-[#4A3FCF] to-[#3D5CFF] font-space text-[22px] font-bold shadow-[inset_0_0_12px_rgba(255,255,255,0.15)]">
            GC
          </div>
        </div>

        <span className="mb-5 flex items-center gap-3 font-mono text-[13px] tracking-[0.08em] text-[#6FE3FF]">
          <span className="h-2 w-2 rounded-full bg-[#6FE3FF] shadow-[0_0_8px_#6FE3FF]" />
          Disponible para nuevos proyectos · Santiago, Chile
        </span>

        <h1 className="max-w-[820px] font-space text-[40px] font-bold leading-[1.05] tracking-tight md:text-[74px]">
          Gabriel Cubillos
          <br />
          <span className="bg-gradient-to-r from-[#6FE3FF] to-[#3D5CFF] bg-clip-text text-transparent">
            Full Stack Developer
          </span>
        </h1>

        <p className="mt-7 max-w-[600px] text-[17px] leading-relaxed text-[#9AA0C7]">
          Ingeniero informático especializado en construir productos web completos:
          desde interfaces en React y TypeScript hasta arquitecturas de
          microservicios con NestJS, bases de datos y automatización con IA.
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
          <a
            href="#proyectos"
            className="inline-flex items-center rounded-lg bg-[#3D5CFF] px-7 py-3.5 text-[15px] font-medium text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(61,92,255,0.55)]"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center rounded-lg border border-[#6FE3FF]/15 px-7 py-3.5 text-[15px] font-medium text-[#F4F6FF] transition hover:border-[#6FE3FF] hover:text-[#6FE3FF]"
          >
            Contactarme
          </a>
        </div>
      </section>

      <section id="stack" className="relative z-10 px-[6vw] py-24">
        <SectionTitle tag="01 · Stack" title="Herramientas que uso" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stackGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-[#6FE3FF]/15 bg-[#12142E] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#6FE3FF] hover:shadow-[0_0_24px_rgba(111,227,255,0.12)]"
            >
              <h3 className="mb-4 font-space text-[15px] font-bold tracking-wide text-[#6FE3FF]">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <TagPill key={item}>{item}</TagPill>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experiencia" className="relative z-10 px-[6vw] py-24">
        <SectionTitle tag="02 · Experiencia" title="Trayectoria profesional" />

        <div className="relative ml-1 border-l border-[#6FE3FF]/40 pl-9">
          {experienceItems.map((item) => (
            <article key={item.title} className="relative mb-11 last:mb-0">
              <div className="absolute -left-[43px] top-1 h-[13px] w-[13px] rounded-full border-2 border-[#6FE3FF] bg-[#0A0B1E] shadow-[0_0_10px_rgba(111,227,255,0.6)]" />

              <span className="mb-1 block font-mono text-[13px] text-[#6FE3FF]">
                {item.date}
              </span>

              <h3 className="font-space text-xl font-bold text-[#F4F6FF]">
                {item.title}
              </h3>

              <p className="mb-4 mt-1 text-sm text-[#9AA0C7]">
                {item.company}
              </p>

              {item.points.length > 0 && (
                <ul className="space-y-2 text-[14.5px] text-[#9AA0C7]">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-[#3D5CFF]">—</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="proyectos" className="relative z-10 px-[6vw] py-24">
        <SectionTitle tag="03 · Proyectos" title="Proyectos relevantes" />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-[#6FE3FF]/15 bg-[#12142E] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#3D5CFF] hover:shadow-[0_0_26px_rgba(61,92,255,0.18)]"
            >
              <h3 className="mb-3 font-space text-[17px] font-bold text-[#F4F6FF]">
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#9AA0C7]">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <footer
        id="contacto"
        className="relative z-10 border-t border-[#6FE3FF]/15 px-[6vw] py-20 text-center"
      >
        <h2 className="font-space text-3xl font-bold tracking-tight md:text-[44px]">
          Trabajemos juntos
        </h2>

        <p className="mb-9 mt-5 text-[#9AA0C7]">
          ¿Tienes un proyecto en mente? Conversemos.
        </p>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:alejandro.gabriel.roman22@gmail.com"
            className="rounded-lg border border-[#6FE3FF]/15 px-5 py-2.5 font-mono text-sm text-[#9AA0C7] transition hover:border-[#6FE3FF] hover:text-[#6FE3FF]"
          >
            Email
          </a>

          <a
            href="tel:+56995631209"
            className="rounded-lg border border-[#6FE3FF]/15 px-5 py-2.5 font-mono text-sm text-[#9AA0C7] transition hover:border-[#6FE3FF] hover:text-[#6FE3FF]"
          >
            Teléfono
          </a>

          <a
            href="https://www.linkedin.com/in/gabriel-alejandro-cubillos-rom%C3%A1n-411510218"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[#6FE3FF]/15 px-5 py-2.5 font-mono text-sm text-[#9AA0C7] transition hover:border-[#6FE3FF] hover:text-[#6FE3FF]"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-xs text-[#5C628A]">
          Santiago, Chile — Gabriel Alejandro Cubillos Román
        </p>
      </footer>
    </main>
  );
}