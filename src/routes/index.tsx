import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-studio.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Skoropie Jopasinau — Estudio de Tatuajes · Isla de Schwann" },
      { name: "description", content: "Estudio de tatuajes Skoropie Jopasinau en la Isla de Schwann. Realismo, neotradicional, fine line y blackwork. Reserva tu cita." },
      { property: "og:title", content: "Skoropie Jopasinau — Tattoo Studio" },
      { property: "og:description", content: "Tatuajes artísticos en la Isla de Schwann. Cita previa." },
    ],
  }),
  component: Index,
});

const works = [
  { src: work1, title: "Retrato Realista", style: "Black & Grey" },
  { src: work2, title: "Dragón Oriental", style: "Neotradicional" },
  { src: work3, title: "Botánico", style: "Fine Line" },
  { src: work4, title: "Geometría Oculta", style: "Blackwork" },
];

const services = [
  { name: "Realismo", desc: "Retratos y piezas en negro y gris con profundidad cinematográfica.", price: "desde 120€/h" },
  { name: "Neotradicional", desc: "Color saturado, líneas firmes, iconografía atrevida.", price: "desde 100€/h" },
  { name: "Fine Line", desc: "Trazo delicado, micro-detalle, piezas íntimas.", price: "desde 90€/h" },
  { name: "Blackwork", desc: "Mancha sólida, geometría sagrada, ornamentos." , price: "desde 110€/h" },
];

const hours = [
  ["Martes", "12:00 — 20:00"],
  ["Miércoles", "12:00 — 20:00"],
  ["Jueves", "12:00 — 22:00"],
  ["Viernes", "12:00 — 22:00"],
  ["Sábado", "11:00 — 21:00"],
  ["Domingo · Lunes", "Cerrado"],
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg font-bold tracking-widest">
            SKOROPIE<span className="text-primary">·</span>JOPASINAU
          </a>
          <nav className="hidden gap-8 text-sm uppercase tracking-widest text-muted-foreground md:flex">
            <a href="#galeria" className="hover:text-foreground">Galería</a>
            <a href="#servicios" className="hover:text-foreground">Servicios</a>
            <a href="#estudio" className="hover:text-foreground">Estudio</a>
            <a href="#contacto" className="hover:text-foreground">Contacto</a>
          </nav>
          <a href="#contacto" className="rounded-sm bg-blood px-5 py-2 text-xs font-medium uppercase tracking-widest text-primary-foreground shadow-glow transition hover:scale-105">
            Reservar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative flex min-h-screen items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Interior del estudio de tatuajes Skoropie Jopasinau con luz neón roja"
          width={1600}
          height={1100}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="noise-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-40">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-primary">
            Isla de Schwann · est. 2018
          </p>
          <h1 className="max-w-4xl font-display text-5xl font-bold leading-[0.95] md:text-7xl lg:text-8xl">
            La piel <span className="text-blood italic">recuerda</span> lo que el alma decide.
          </h1>
          <p className="mt-8 max-w-xl text-base text-muted-foreground md:text-lg">
            Skoropie Jopasinau es un estudio privado de tatuaje artístico. Diseños únicos,
            higiene clínica y un ritual de aguja que dura desde 2018.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contacto" className="rounded-sm bg-blood px-8 py-4 text-sm font-medium uppercase tracking-widest text-primary-foreground shadow-glow transition hover:scale-105">
              Pedir cita
            </a>
            <a href="#galeria" className="rounded-sm border border-border px-8 py-4 text-sm font-medium uppercase tracking-widest text-foreground transition hover:bg-secondary">
              Ver trabajos
            </a>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="mx-auto max-w-7xl px-6 py-32">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary">— 01 / Obra</p>
            <h2 className="font-display text-4xl font-bold md:text-6xl">Galería viva</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Una selección rotativa de piezas curadas por nuestros artistas residentes.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {works.map((w, i) => (
            <figure key={i} className="group relative overflow-hidden rounded-sm bg-card">
              <img
                src={w.src}
                alt={w.title}
                width={800}
                height={1000}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-90" />
              <figcaption className="absolute bottom-0 left-0 p-6">
                <p className="text-xs uppercase tracking-widest text-primary">{w.style}</p>
                <p className="mt-1 font-display text-xl">{w.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="border-y border-border bg-card/40 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary">— 02 / Estilos</p>
            <h2 className="font-display text-4xl font-bold md:text-6xl">Lo que tatuamos</h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-2">
            {services.map((s) => (
              <div key={s.name} className="group bg-background p-10 transition hover:bg-card">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-2xl">{s.name}</h3>
                  <span className="text-xs uppercase tracking-widest text-primary">{s.price}</span>
                </div>
                <p className="mt-4 max-w-md text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            * Piezas pequeñas con precio mínimo de 60€. Presupuestos personalizados para sleeves y espaldas completas.
          </p>
        </div>
      </section>

      {/* ESTUDIO */}
      <section id="estudio" className="mx-auto grid max-w-7xl gap-16 px-6 py-32 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary">— 03 / Casa</p>
          <h2 className="font-display text-4xl font-bold md:text-6xl">El estudio</h2>
          <p className="mt-8 text-lg text-muted-foreground">
            Anclado en el casco viejo de la Isla de Schwann, ocupamos un antiguo taller
            naval reconvertido. Tres cabinas privadas, esterilización en autoclave clase B,
            y un patio interior donde el café siempre está caliente.
          </p>
          <p className="mt-4 text-muted-foreground">
            Tatuamos sólo con cita previa. Una sesión empieza con una conversación —
            sin ella no hay aguja.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <p className="font-display text-3xl text-primary">7</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Años abiertos</p>
            </div>
            <div>
              <p className="font-display text-3xl text-primary">4</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Artistas</p>
            </div>
            <div>
              <p className="font-display text-3xl text-primary">2.1k</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Piezas</p>
            </div>
          </div>
        </div>

        <div className="rounded-sm border border-border bg-card p-10 shadow-deep">
          <h3 className="font-display text-2xl">Horarios</h3>
          <ul className="mt-6 divide-y divide-border">
            {hours.map(([d, h]) => (
              <li key={d} className="flex justify-between py-4 text-sm">
                <span className="uppercase tracking-widest text-muted-foreground">{d}</span>
                <span className="font-medium">{h}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t border-border pt-6 text-sm text-muted-foreground">
            <p>Calle de los Faroles 17 · Bajo</p>
            <p>Puerto Antiguo, Isla de Schwann</p>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="relative overflow-hidden border-t border-border bg-card/40 py-32">
        <div className="noise-overlay absolute inset-0" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary">— 04 / Cita</p>
          <h2 className="font-display text-4xl font-bold md:text-6xl">
            Reserva tu <span className="text-blood italic">sesión</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Escríbenos con tu idea, referencias y zona del cuerpo. Te contestamos en 48h
            con artista propuesto, boceto preliminar y fecha.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <a href="mailto:hola@skoropie.tattoo" className="font-display text-2xl text-foreground hover:text-primary md:text-3xl">
              hola@skoropie.tattoo
            </a>
            <a href="tel:+34900112233" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground">
              +34 900 11 22 33
            </a>
            <a href="#" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground">
              @skoropie.jopasinau
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 text-xs uppercase tracking-widest text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Skoropie Jopasinau</span>
          <span>Isla de Schwann · Hecho con tinta</span>
        </div>
      </footer>
    </div>
  );
}
