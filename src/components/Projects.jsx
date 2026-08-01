import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import Reveal from './Reveal'
import { projects } from '../data/content'

const stageMeta = {
  plan: { label: 'Plan', color: '#9CA3B5' },
  build: { label: 'Build', color: '#F2A93B' },
  ship: { label: 'Ship', color: '#3EC9A7' },
}

function ProjectCard({ project }) {
  const meta = stageMeta[project.stage]
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      data-cursor="pointer"
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="group relative shrink-0 w-[220px] sm:w-[340px] h-[520px] rounded-[26px] overflow-hidden bg-ink-soft shadow-[0_1px_0_0_rgba(237,234,224,0.06)] flex flex-col"
    >
      {/* image */}
      <div className="relative h-[280px] w-full shrink-0 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-ink-soft to-ink" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />

        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span
            className="font-mono text-[11px] uppercase tracking-widest px-2.5 py-1 rounded-full backdrop-blur-md bg-ink/50 border"
            style={{ color: meta.color, borderColor: meta.color + '55' }}
          >
            {meta.label}
          </span>
          <span className="font-mono text-[11px] px-2.5 py-1 rounded-full backdrop-blur-md bg-ink/50 border border-ink-line text-slate-soft">
            {project.year}
          </span>
        </div>
      </div>

      {/* content */}
      <div className="relative flex-1 flex flex-col p-6 -mt-8">
        <div className="rounded-2xl bg-ink-soft border border-ink-line p-5 flex-1 flex flex-col">
          <h3 className="font-display text-xl text-bone flex items-start justify-between gap-2">
            {project.title}
            <ArrowUpRight
              size={18}
              className="text-slate-soft group-hover:text-bone group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0 mt-1"
            />
          </h3>
          <p className="text-slate-soft text-sm leading-relaxed mt-2.5 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] border border-ink-line rounded-full px-2 py-1 text-slate-soft"
              >
                {t}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="font-mono text-[10px] text-slate-soft px-1 py-1">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          {project.github && (
            <div className="mt-auto pt-4 flex items-center gap-2 border-t border-ink-line/70 mt-4">
              <span
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  window.open(project.github, '_blank', 'noopener')
                }}
                data-cursor="pointer"
                className="inline-flex items-center gap-1.5 font-mono text-[11px] text-slate-soft hover:text-bone transition-colors"
              >
                <Github size={13} />
                Source
              </span>
              <span className="w-1 h-1 rounded-full bg-ink-line" />
              <span className="font-mono text-[11px] text-slate-soft group-hover:text-bone transition-colors">
                Live demo
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.a>
  )
}

export default function Projects() {
  const trackRef = useRef(null)
  const { scrollXProgress } = useScroll({ container: trackRef })
  const lineProgress = useTransform(scrollXProgress, [0, 1], [0, 1])

  return (
    <section id="work" className="py-28 md:py-32">
      <div className="px-6 md:px-10 max-w-6xl mx-auto mb-10">
        <Reveal>
          <span className="font-mono text-sm text-saffron">Selected work</span>
          <h2 className="font-display text-3xl md:text-5xl text-bone mt-4">
            From plan to shipped.
          </h2>
          <p className="text-slate-soft mt-4 max-w-xl">
            Every project moves through the same three stages. Scroll
            sideways — the line below tracks how far along you are, same as
            the projects themselves.
          </p>
        </Reveal>
      </div>

      {/* progress line */}
      <div className="px-6 md:px-10 max-w-6xl mx-auto mb-6">
        <div className="h-[2px] w-full bg-ink-line relative overflow-hidden rounded-full">
          <motion.div
            style={{ scaleX: lineProgress, transformOrigin: '0% 50%' }}
            className="absolute inset-0 bg-gradient-to-r from-slate-soft via-saffron to-teal"
          />
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto px-6 md:px-10 pb-10 pt-2 snap-x snap-mandatory scrollbar-none justify-start lg:justify-center"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((p) => (
          <div key={p.id} className="snap-start">
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </section>
  )
}
