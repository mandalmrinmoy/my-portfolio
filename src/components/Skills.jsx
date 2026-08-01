import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiTailwindcss,
  SiJsonwebtokens,
  SiPostman,
  SiPython,
  SiGit,
  SiGithub,
} from 'react-icons/si'
import Reveal from './Reveal'
import { skills } from '../data/content'

const iconMap = {
  javascript: SiJavascript,
  react: SiReact,
  redux: SiRedux,
  nodedotjs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  mongoose: SiMongoose,
  tailwindcss: SiTailwindcss,
  jsonwebtokens: SiJsonwebtokens,
  postman: SiPostman,
  python: SiPython,
  git: SiGit,
  github: SiGithub,
}

function TiltCard({ skill }) {
  const ref = useRef(null)
  const [style, setStyle] = useState({})
  const Icon = iconMap[skill.icon]

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setStyle({
      transform: `perspective(500px) rotateX(${-py * 14}deg) rotateY(${
        px * 14
      }deg) scale3d(1.04,1.04,1.04)`,
      borderColor: skill.color + '80',
      boxShadow: `0 12px 30px -12px ${skill.color}55`,
    })
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setStyle({})}
      style={{ transition: 'transform 0.25s ease-out, box-shadow 0.25s ease-out', ...style }}
      data-cursor="pointer"
      className="border border-ink-line rounded-xl px-5 py-7 flex flex-col items-center justify-center gap-3 text-center bg-ink-soft/40 hover:bg-ink-soft transition-colors"
    >
      {Icon && <Icon size={30} color={skill.color} />}
      <span className="font-display text-sm text-bone">{skill.name}</span>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-10 py-28 md:py-32 border-y border-ink-line">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span className="font-mono text-sm text-teal">Toolbox</span>
          <h2 className="font-display text-3xl md:text-5xl text-bone mt-4 mb-12">
            What I reach for.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.04}>
              <TiltCard skill={s} />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-16 border-t border-ink-line overflow-hidden py-6">
        <motion.div className="flex items-center whitespace-nowrap animate-marquee w-max">
          {[...skills, ...skills].map((s, i) => {
            const Icon = iconMap[s.icon]
            return (
              <span key={i} className="flex items-center gap-2 mx-6">
                {Icon && <Icon size={20} color={s.color} />}
                <span className="font-mono text-sm text-slate-soft">
                  {s.name}
                </span>
              </span>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
