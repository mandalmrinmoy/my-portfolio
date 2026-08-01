import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from './Reveal'
import { experience } from '../data/content'

export default function Timeline() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.6'],
  })
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section
      id="experience"
      className="px-6 md:px-10 py-28 md:py-32 border-t border-ink-line"
    >
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <span className="font-mono text-sm text-rose">Experience</span>
          <h2 className="font-display text-3xl md:text-5xl text-bone mt-4 mb-16">
            Where the hours went.
          </h2>
        </Reveal>

        <div ref={ref} className="relative pl-8 md:pl-12">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-ink-line" />
          <motion.div
            style={{ height }}
            className="absolute left-0 top-0 w-px bg-gradient-to-b from-saffron to-teal"
          />

          <div className="flex flex-col gap-14">
            {experience.map((e, i) => (
              <Reveal key={e.id} delay={i * 0.05} className="relative">
                <span className="absolute -left-[34px] md:-left-[50px] top-1.5 w-2.5 h-2.5 rounded-full bg-ink border-2 border-saffron" />
                <p className="font-mono text-xs text-slate-soft mb-2">
                  {e.period}
                </p>
                <h3 className="font-display text-xl md:text-2xl text-bone">
                  {e.role} <span className="text-slate-soft">— {e.org}</span>
                </h3>
                <p className="text-slate-soft text-sm md:text-base leading-relaxed mt-3 max-w-2xl">
                  {e.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
