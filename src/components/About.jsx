import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { profile } from '../data/content'

export default function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-10 md:py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[0.9fr_1.1fr] gap-14 md:gap-20 items-start">
        <Reveal>
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl overflow-hidden bg-ink-soft border border-ink-line font-mono text-sm"
          >
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-ink-line">
              <span className="w-2.5 h-2.5 rounded-full bg-rose/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-saffron/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-teal/70" />
              <span className="ml-3 text-xs text-slate-soft">about.js</span>
            </div>
            <pre className="px-5 py-6 text-[13px] leading-7 overflow-x-auto">
              <code>
                <span className="text-rose">const</span>{' '}
                <span className="text-bone">developer</span>{' '}
                <span className="text-slate-soft">=</span> {'{'}
                {'\n'}  name:{' '}
                <span className="text-saffron">'{profile.name}'</span>,
                {'\n'}  stack:{' '}
                <span className="text-teal">['Mongo','Express','React','Node']</span>,
                {'\n'}  location:{' '}
                <span className="text-saffron">'{profile.location}'</span>,
                {'\n'}  status:{' '}
                <span className="text-teal">'shipping'</span>,
                {'\n'}
                {'}'}
                {'\n'}
                {'\n'}
                <span className="text-slate-soft">{'// currently open to new roles'}</span>
              </code>
            </pre>
          </motion.div>
        </Reveal>

        <div>
          <Reveal>
            <span className="font-mono text-sm text-rose">About</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-bone mt-4 mb-8">
              Software with a point of view — not just a spec sheet.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-slate-soft text-lg leading-relaxed max-w-xl">
              {profile.bio}
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-8 mt-12 max-w-md">
            {[
              ['1', 'Shipped full-stack project'],
              ['8.01', 'CGPA, B.Tech CSE'],
              ['2', 'Frontend based projects'],
              ['2', 'Industrial trainings completed'],
            ].map(([num, label], i) => (
              <Reveal key={label} delay={0.1 * i}>
                <p className="font-display text-3xl text-bone">{num}</p>
                <p className="text-sm text-slate-soft mt-1">{label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
