import { ArrowDown, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Header } from "@/components/Header";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { AdditionalProjects } from "@/components/AdditionalProjects";
import { Reveal } from "@/components/Reveal";
import { capabilities, experience } from "@/data/portfolio";

export default function Home() {
  return (
    <main id="top">
      <Header />

      <section className="hero shell">
        <div className="hero-meta">
          <span>Software engineer & product builder</span>
          <span>Calgary, Canada</span>
        </div>

        <Reveal>
          <h1>
            I build complete digital products that make complex systems feel <em>simple.</em>
          </h1>
        </Reveal>

        <div className="hero-bottom">
          <Reveal delay={0.08}>
            <p>
              I&apos;m Piercen, a full-stack developer working across polished interfaces, scalable backends,
              adaptive learning systems, AI products, and cloud infrastructure.
            </p>
          </Reveal>
          <a className="scroll-cue" href="#work">
            Selected work <ArrowDown size={18} />
          </a>
        </div>

        <div className="hero-stat-row">
          <div><strong>350K+</strong><span>math questions managed</span></div>
          <div><strong>1.6M</strong><span>residents served by public software</span></div>
          <div><strong>4+</strong><span>years building software</span></div>
        </div>
      </section>

      <section className="work-section shell" id="work">
        <div className="section-heading">
          <span>01 / Selected work</span>
          <h2>Products built to solve real problems.</h2>
        </div>
        <FeaturedProjects />
        <AdditionalProjects />
      </section>

      <section className="experience-section" id="experience">
        <div className="shell experience-layout">
          <div className="section-heading sticky-heading">
            <span>02 / Experience</span>
            <h2>Engineering across products, public service, AI, and infrastructure.</h2>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <Reveal key={`${item.company}-${item.role}`}>
                <article className="experience-row">
                  <span>{item.period}</span>
                  <div>
                    <h3>{item.role}</h3>
                    <strong>{item.company}</strong>
                    <p>{item.summary}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="capabilities shell" id="about">
        <div className="section-heading">
          <span>03 / How I work</span>
          <h2>Technical range without losing sight of the person using the product.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((capability, index) => (
            <Reveal key={capability.title} delay={index * 0.06}>
              <article>
                <span>0{index + 1}</span>
                <h3>{capability.title}</h3>
                <p>{capability.body}</p>
                <small>{capability.skills}</small>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="archive-teaser shell">
        <div>
          <span>Coming later</span>
          <h2>Portfolio wayback machine.</h2>
        </div>
        <p>
          A browsable archive of previous portfolio iterations, preserved as snapshots of how my design and
          engineering work evolved over time.
        </p>
        <span className="archive-status">In development</span>
      </section>

      <footer className="site-footer text-white">
        <div className="shell py-16 md:py-24">
          <div className="grid gap-12 border-b border-white/30 pb-14 md:grid-cols-[1fr_auto] md:items-end md:pb-20">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-white/80">Have something worth building?</p>
              <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl">Let&apos;s make it real.</h2>
            </div>
            <a href="mailto:diberardopiercen@gmail.com" className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-4 font-medium text-[#171717] transition-transform duration-200 hover:-translate-y-1">
              <span className="text-[#171717]">Get in touch</span>
              <ArrowUpRight size={20} className="text-[#171717] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
          <div className="grid gap-10 py-10 md:grid-cols-2 md:items-end">
            <div><p className="mb-2 text-sm text-white/70">Email</p><a href="mailto:diberardopiercen@gmail.com" className="inline-flex items-center gap-2 text-lg font-medium text-white underline decoration-white/40 underline-offset-8">diberardopiercen@gmail.com <ArrowUpRight size={18} /></a></div>
            <div className="md:justify-self-end"><p className="mb-3 text-sm text-white/70 md:text-right">Find me online</p><div className="flex flex-wrap gap-3">
              <a href="https://linkedin.com/in/piercen-di-berardo" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full border border-white/50 px-5 py-3 font-medium text-white transition-colors hover:bg-white"><FaLinkedinIn className="text-lg text-white transition-colors group-hover:text-[#171717]" /><span className="text-white transition-colors group-hover:text-[#171717]">LinkedIn</span></a>
              <a href="https://github.com/Piercen-DiBerardo" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full border border-white/50 px-5 py-3 font-medium text-white transition-colors hover:bg-white"><FaGithub className="text-lg text-white transition-colors group-hover:text-[#171717]" /><span className="text-white transition-colors group-hover:text-[#171717]">GitHub</span></a>
            </div></div>
          </div>
          <div className="flex flex-col gap-3 border-t border-white/30 pt-6 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 Piercen Di Berardo</span>
            {/* <a href="/archive" className="w-fit transition hover:text-white">Previous portfolio versions ↗</a> */}
          </div>
        </div>
      </footer>
    </main>
  );
}
