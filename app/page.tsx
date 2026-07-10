"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const stackGroups = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "Vite",
      "Angular",
      "TypeScript",
      "JavaScript",
      "Tailwind",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "NestJS",
      "Express",
      "Django",
      "APIs REST",
      "Webhooks",
      "JWT",
    ],
  },
  {
    title: "Bases de datos",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQL", "Redis", "Qdrant"],
  },
  {
    title: "IA & automatización",
    items: [
      "OpenAI",
      "Whisper",
      "HeyGen",
      "ElevenLabs",
      "n8n",
      "Asistentes IA",
      "RAG",
      "VAD",
    ],
  },
  {
    title: "DevOps & servidores",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "Nginx",
      "Vercel",
      "AlmaLinux",
      "PM2",
    ],
  },
  {
    title: "Microsoft & procesos",
    items: [
      "Power Apps",
      "Power Automate",
      "SharePoint",
      "Microsoft 365",
      "Forms",
    ],
  },
  {
    title: "Mobile & APIs",
    items: ["React Native", "Spotify API", "WhatsApp Cloud API", "Postman", "Meta for Developers"],
  },
];

const aboutStats = [
  { value: "2+", label: "año de experiencia" },
  { value: "8", label: "proyectos" },
  { value: "7", label: "áreas de stack" },
  { value: "40+", label: "herramientas usadas" },
];

const interests = [
  {
    title: "Aprender tecnologías nuevas",
    description:
      "Siempre estoy probando nuevas tecnologías, frameworks y herramientas. Me gusta entender cómo funcionan las cosas por dentro y aplicarlas en proyectos reales.",
  },
  {
    title: "Deporte",
    description:
      "Entrenar es mi forma de resetear la mente. Me ayuda a mantener foco, disciplina y energía para enfrentar desafíos técnicos con otra claridad.",
  },
  {
    title: "Viajar",
    description:
      "Me gusta salir de la rutina y explorar nuevos lugares. Desde el sur de Chile hasta otros países, cada viaje me aporta perspectiva.",
  },
  {
    title: "Cine y series",
    description:
      "Fan de la ciencia ficción y las historias bien construidas. Interstellar, Dune y el buen terror están en mi top.",
  },
];

const projects = [
  {
    title: "Avatar Interactivo IA-360",
    category: "IA Conversacional",
    image: "/img/Avatar Interactivo IA-360.png.png",
    description:
      "Plataforma web con avatar conversacional conectado a IA, reconocimiento de voz, generación de respuestas y experiencia interactiva para atención de clientes.",
    stack: ["React", "TypeScript", "HeyGen", "OpenAI", "Vite", "Node.js"],
    highlights: [
      "Interacción por voz y texto",
      "Optimización de latencia",
      "Control de inactividad y sesión",
    ],
    private: "Tecnoinver",
    caseStudy: {
      problem:
        "El negocio necesitaba atender consultas de clientes de forma continua sin escalar el equipo humano, manteniendo una conversación natural y no un formulario más.",
      decision:
        "Separé el reconocimiento de voz y la generación de respuestas en servicios independientes conectados vía NestJS, para poder cambiar de proveedor de IA sin tocar el frontend.",
      result:
        "Bajó el tiempo de primera respuesta y liberó al equipo de soporte de las consultas repetitivas más comunes.",
    },
  },
  {
    title: "Chatbot WhatsApp con IA",
    category: "Automatización",
    image: "/img/Chatbot WhatsApp con IA.png.png",
    description:
      "Backend para atención automatizada por WhatsApp usando Cloud API, IA generativa, transcripción de audios y flujo de agendamiento.",
    stack: ["NestJS", "OpenAI", "Whisper", "MongoDB", "Redis", "WhatsApp API", "n8n"],
    highlights: [
      "Flujos conversacionales",
      "Memoria de sesión",
      "Procesamiento de audios",
    ],
    private: "Tecnoinver",
    caseStudy: {
      problem:
        "Los clientes agendaban por WhatsApp de forma manual, lo que generaba demoras y errores de coordinación entre las conversaciones y el calendario real.",
      decision:
        "Usé Whisper para transcribir los audios entrantes y guardé la memoria de sesión en Redis, para que el bot recuerde el contexto sin depender de la base de datos principal.",
      result:
        "Automatizó buena parte del flujo de agendamiento y redujo la carga operativa del equipo de atención.",
    },
  },
  {
    title: "Dashboard de métricas IA",
    category: "Analytics",
    image: "/img/Dashboard de métricas IA.png",
    description:
      "Panel privado para visualizar sesiones, conversaciones, métricas de uso, idioma, ubicación y comportamiento de usuarios.",
    stack: ["React", "NestJS", "MongoDB", "SQL", "JWT"],
    highlights: [
      "Registro de interacciones",
      "Métricas de uso",
      "Panel administrativo",
    ],
    private: "Tecnoinver",
  },
  {
    title: "Automatización flujo comercial",
    category: "Power Platform",
    image: "/img/Automatización flujo comercial.png",
    description:
      "Diseño de solución para automatizar procesos comerciales, centralizar datos y ordenar aprobaciones mediante Power Apps, Power Automate y SharePoint.",
    stack: ["Power Apps", "Power Automate", "SharePoint", "Microsoft 365"],
    highlights: [
      "Digitalización de procesos",
      "Listas SharePoint",
      "Flujos de aprobación",
    ],
    private: "Cliente corporativo",
  },
  {
    title: "App Full Stack con Django + React",
    category: "Full Stack",
    image: "/img/App Full Stack con Django + React.png",
    description:
      "Aplicación cliente-servidor con CRUD completo, consumo de APIs REST, autenticación y persistencia de datos en MySQL.",
    stack: ["Django", "React", "MySQL", "REST API"],
    highlights: [
      "CRUD completo",
      "Arquitectura cliente-servidor",
      "Base de datos relacional",
    ],
  },
  {
    title: "App de salud mental y telepsicología",
    category: "Mobile",
    image: "/img/App de salud mental y telepsicología.png",
    description:
      "Aplicación móvil con autenticación de usuarios, gestión de citas médicas para la salud mental y almacenamiento persistente.",
    stack: ["React Native", "JavaScript", "AsyncStorage", "APIs"],
    highlights: [
      "Autenticación",
      "Gestión de citas",
      "Persistencia local",
    ],
  },
  {
    title: "Integración API de Spotify",
    category: "Frontend",
    image: "/img/Integración API de Spotify.png",
    description:
      "Aplicación frontend conectada a la API de Spotify, manejo de tokens, consumo de datos JSON y visualización de información musical.",
    stack: ["Angular", "TypeScript", "Spotify API", "OAuth"],
    highlights: [
      "Consumo de API externa",
      "Manejo de tokens",
      "Procesamiento JSON",
    ],
  },
  {
    title: "Sistema de monitoreo IoT",
    category: "IoT",
    image: "/img/Sistema de monitoreo IoT.png",
    description:
      "Solución para monitoreo térmico mediante integración IoT, almacenamiento de datos en MySQL y visualización de información.",
    stack: ["IoT", "MySQL", "Backend", "Visualización"],
    highlights: [
      "Captura de datos",
      "Monitoreo térmico",
      "Histórico de mediciones",
    ],
  },
];

const experienceItems = [
  {
    date: "2025 - Actualidad",
    title: "Full Stack Developer",
    company: "Tecnoinver - IA360 · Santiago, Chile",
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
    date: "2021 - 2024",
    title: "Ingeniería en Informática",
    company: "INACAP · Santiago, Chile",
    points: [],
  },
];

// Envuelve cualquier bloque y lo hace aparecer con fade + slide al entrar en el viewport
function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
    >
      {children}
    </div>
  );
}

function SectionTitle({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="mb-12">
      <span className="mb-2 block font-mono text-[13px] tracking-[0.08em] text-[#6B7280]">
        {tag}
      </span>
      <h2 className="font-space text-3xl font-bold tracking-tight text-[#E7EAF0] md:text-[38px]">
        {title}
      </h2>
    </div>
  );
}

function TagPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-[#4C7DAE]/25 bg-[#4C7DAE]/10 px-3 py-1.5 font-mono text-xs text-[#B7C7D8]">
      {children}
    </span>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="group overflow-hidden rounded-2xl border border-[#9FC1E3]/10 bg-[#0D1119] transition duration-300 hover:-translate-y-1 hover:border-[#4C7DAE]/50 hover:shadow-[0_0_18px_rgba(76,125,174,0.14)]">
      <div className="relative h-48 w-full overflow-hidden border-b border-[#9FC1E3]/10 bg-[#050608]">
        <Image
          src={project.image}
          alt={`Captura del proyecto ${project.title}`}
          fill
          className="object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050608]/70 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-[#9FC1E3]/10 bg-[#050608]/80 px-3 py-1 font-mono text-[11px] text-[#9FC1E3] backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="font-space text-[19px] font-bold text-[#E7EAF0]">
            {project.title}
          </h3>
          {project.private && (
            <span className="shrink-0 rounded-full border border-[#4C7DAE]/25 bg-[#4C7DAE]/10 px-2.5 py-1 font-mono text-[10.5px] text-[#B7C7D8]">
              Privado · {project.private}
            </span>
          )}
        </div>

        <p className="text-sm leading-relaxed text-[#6B7280]">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <TagPill key={tech}>{tech}</TagPill>
          ))}
        </div>

        <ul className="mt-5 space-y-2 text-sm text-[#6B7280]">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-[#4C7DAE]">-</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {project.caseStudy && (
          <>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="mt-6 flex items-center gap-2 font-mono text-[12.5px] text-[#9FC1E3] transition hover:text-[#E7EAF0]"
            >
              {open ? "Ocultar detalle" : "Ver caso completo"}
              <span
                className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              >
                ↓
              </span>
            </button>

            <div
              className={`grid overflow-hidden transition-all duration-500 ease-out ${open ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
            >
              <div className="min-h-0 space-y-4 border-t border-[#9FC1E3]/10 pt-5">
                <div>
                  <span className="mb-1 block font-mono text-[11px] tracking-[0.06em] text-[#4C7DAE]">
                    PROBLEMA
                  </span>
                  <p className="text-sm leading-relaxed text-[#9AA0B0]">
                    {project.caseStudy.problem}
                  </p>
                </div>
                <div>
                  <span className="mb-1 block font-mono text-[11px] tracking-[0.06em] text-[#4C7DAE]">
                    DECISIÓN TÉCNICA
                  </span>
                  <p className="text-sm leading-relaxed text-[#9AA0B0]">
                    {project.caseStudy.decision}
                  </p>
                </div>
                <div>
                  <span className="mb-1 block font-mono text-[11px] tracking-[0.06em] text-[#4C7DAE]">
                    RESULTADO
                  </span>
                  <p className="text-sm leading-relaxed text-[#9AA0B0]">
                    {project.caseStudy.result}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#050608] text-[#E7EAF0]">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_82%_8%,rgba(76,125,174,0.16),transparent_42%)]" />

      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-[#9FC1E3]/10 bg-[#050608]/70 px-[6vw] py-5 backdrop-blur-xl">
        <a href="#inicio" className="font-space text-lg font-bold tracking-wide">
          G<span className="text-[#9FC1E3]">.</span>C
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#sobre-mi" className="text-sm font-medium tracking-wide text-[#6B7280] transition hover:text-[#9FC1E3]">
            Sobre mí
          </a>
          <a href="#stack" className="text-sm font-medium tracking-wide text-[#6B7280] transition hover:text-[#9FC1E3]">
            Stack
          </a>
          <a href="#experiencia" className="text-sm font-medium tracking-wide text-[#6B7280] transition hover:text-[#9FC1E3]">
            Experiencia
          </a>
          <a href="#proyectos" className="text-sm font-medium tracking-wide text-[#6B7280] transition hover:text-[#9FC1E3]">
            Proyectos
          </a>
          <a href="#contacto" className="text-sm font-medium tracking-wide text-[#6B7280] transition hover:text-[#9FC1E3]">
            Contacto
          </a>
          <a
            href="https://github.com/Gorback24"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[#9FC1E3]/15 px-3.5 py-1.5 text-sm font-medium text-[#E7EAF0] transition hover:border-[#9FC1E3]/40 hover:text-[#9FC1E3]"
          >
            GitHub
          </a>
        </nav>
      </header>

      {/* HERO con foto grande junto al nombre */}
      <section
        id="inicio"
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-[6vw] pb-24 pt-32 lg:flex-row lg:items-center lg:justify-between lg:gap-16"
      >
        <div className="flex max-w-[620px] flex-col items-start">
          <span className="mb-5 flex items-center gap-3 font-mono text-[13px] tracking-[0.08em] text-[#6B7280]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#9FC1E3]" />
            Disponible para nuevos proyectos · Santiago, Chile
          </span>

          <h1 className="font-space text-[40px] font-bold leading-[1.05] tracking-tight text-[#E7EAF0] md:text-[68px]">
            Gabriel Cubillos
            <br />
            <span className="text-[#9FC1E3]">Full Stack Developer</span>
          </h1>

          <p className="mt-7 max-w-[560px] text-[17px] leading-relaxed text-[#6B7280]">
            Ingeniero informático que construye productos digitales de principio a fin.
            Desde interfaces modernas en React y TypeScript hasta arquitecturas backend
            escalables con NestJS, bases de datos y soluciones impulsadas por inteligencia
            artificial.
          </p>

          <div className="mt-11 flex flex-wrap gap-4">
            <a
              href="#proyectos"
              className="inline-flex items-center rounded-lg bg-[#4C7DAE] px-7 py-3.5 text-[15px] font-medium text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_16px_rgba(76,125,174,0.25)]"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center rounded-lg border border-[#9FC1E3]/10 px-7 py-3.5 text-[15px] font-medium text-[#E7EAF0] transition hover:border-[#9FC1E3]/40 hover:text-[#9FC1E3]"
            >
              Contactarme
            </a>
            <a
              href="/CV_Gabriel_Cubillos.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-[#9FC1E3]/30 px-7 py-3.5 text-[15px] font-medium text-[#9FC1E3] transition hover:border-[#9FC1E3] hover:bg-[#9FC1E3]/5"
            >
              Descargar CV
            </a>
          </div>
        </div>

        {/* Foto con halo, tamaño real de protagonista junto al nombre */}
        <div className="relative mt-16 flex h-[260px] w-[260px] shrink-0 items-center justify-center lg:mt-0 lg:h-[320px] lg:w-[320px]">
          <div className="absolute inset-0 rounded-[28px] border border-[#9FC1E3] shadow-[0_0_24px_rgba(159,193,227,0.18)]" />
          <div className="relative h-[92%] w-[92%] overflow-hidden rounded-[22px] border border-[#9FC1E3]/10 bg-[#0D1119]">
            <Image
              src="/img/gabriel-cubillos.jpg"
              alt="Foto de Gabriel Cubillos"
              fill
              className="object-cover grayscale-[15%]"
              sizes="320px"
            />
          </div>
        </div>
      </section>

      <section id="sobre-mi" className="relative z-10 px-[6vw] py-24">
        <Reveal>
          <SectionTitle tag="· Sobre mí" title="Un poco más de mí" />

          <div className="grid gap-14 lg:grid-cols-[1.1fr_1.4fr]">
            <div className="max-w-[520px]">
              <p className="text-[16px] leading-relaxed text-[#9AA0B0]">
                No solo escribo código, me enfoco en construir soluciones completas que
                funcionen en entornos reales, involucrándome en todo el ciclo del producto,
                desde la idea hasta la implementación en producción. He trabajado en
                plataformas con IA aplicada con voz, asistentes conversacionales y
                automatización buscando siempre que la tecnología aporte valor real
                al negocio.
              </p>
              <p className="mt-5 text-[16px] leading-relaxed text-[#9AA0B0]">
                Soy curioso por naturaleza: disfruto aprender rápido y meterme en problemas
                técnicos complejos hasta resolverlos. Fuera del desarrollo mantengo un
                equilibrio activo deporte, viajes y buena ciencia ficción, que también
                influye en cómo diseño experiencias digitales.
              </p>

              <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {aboutStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-[#9FC1E3]/10 bg-[#0D1119] px-4 py-4 text-center"
                  >
                    <div className="font-space text-2xl font-bold text-[#9FC1E3]">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-[11.5px] leading-tight text-[#6B7280]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {interests.map((interest) => (
                <div
                  key={interest.title}
                  className="rounded-2xl border border-[#9FC1E3]/10 bg-[#0D1119] p-5"
                >
                  <h3 className="mb-2 font-space text-[15px] font-bold text-[#9FC1E3]">
                    {interest.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#6B7280]">
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section id="experiencia" className="relative z-10 px-[6vw] py-24">
        <Reveal>
          <SectionTitle tag="· Experiencia" title="Trayectoria profesional" />

          <div className="relative ml-1 border-l border-[#9FC1E3]/20 pl-9">
            {experienceItems.map((item) => (
              <article key={item.title} className="relative mb-11 last:mb-0">
                <div className="absolute -left-[43px] top-1 h-[13px] w-[13px] rounded-full border-2 border-[#9FC1E3] bg-[#050608] shadow-[0_0_8px_rgba(159,193,227,0.30)]" />

                <span className="mb-1 block font-mono text-[13px] text-[#9FC1E3]">
                  {item.date}
                </span>

                <h3 className="font-space text-xl font-bold text-[#E7EAF0]">
                  {item.title}
                </h3>

                <p className="mb-4 mt-1 text-sm text-[#6B7280]">{item.company}</p>

                {item.points.length > 0 && (
                  <ul className="space-y-2 text-[14.5px] text-[#6B7280]">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="text-[#4C7DAE]">·</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </Reveal>
        
      </section>

      <section id="stack" className="relative z-10 px-[6vw] py-24">
        <Reveal>
          <SectionTitle tag="· Stack" title="Herramientas que uso" />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stackGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-2xl border border-[#9FC1E3]/10 bg-[#0D1119] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#9FC1E3]/40 hover:shadow-[0_0_16px_rgba(159,193,227,0.10)]"
              >
                <h3 className="mb-4 font-space text-[15px] font-bold tracking-wide text-[#9FC1E3]">
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
        </Reveal>
      </section>


      <section id="proyectos" className="relative z-10 px-[6vw] py-24">
        <Reveal>
          <SectionTitle tag="· Proyectos" title="Proyectos relevantes" />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Reveal>
      </section>

      <footer
        id="contacto"
        className="relative z-10 border-t border-[#9FC1E3]/10 px-[6vw] py-20 text-center"
      >
        <Reveal>
          <h2 className="font-space text-3xl font-bold tracking-tight text-[#E7EAF0] md:text-[44px]">
            Trabajemos juntos
          </h2>

          <p className="mb-9 mt-5 text-[#6B7280]">
            ¿Tienes un proyecto en mente? Conversemos.
          </p>

          <div className="mb-12 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/gabriel-alejandro-cubillos-rom%C3%A1n-411510218"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[#9FC1E3]/10 px-5 py-2.5 font-mono text-sm text-[#6B7280] transition hover:border-[#9FC1E3]/40 hover:text-[#9FC1E3]"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Gorback24"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[#9FC1E3]/10 px-5 py-2.5 font-mono text-sm text-[#6B7280] transition hover:border-[#9FC1E3]/40 hover:text-[#9FC1E3]"
            >
              GitHub
            </a>
          </div>

          <p className="text-xs text-[#4A4F5C]">
            Santiago, Chile - Gabriel Alejandro Cubillos Román
          </p>
        </Reveal>
      </footer>
    </main>
  );
}