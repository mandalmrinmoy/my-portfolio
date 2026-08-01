import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { Mail, Phone, ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { profile } from '../data/content'

const iconFor = {
  github: { Icon: FaGithub, color: '#EDEAE0' },
  linkedin: { Icon: FaLinkedin, color: '#0A66C2' },
  instagram: { Icon: FaInstagram, color: '#E4405F' },
  email: { Icon: Mail, color: '#F2A93B' },
  phone: { Icon: Phone, color: '#3EC9A7' },
}

const detailFor = {
  github: 'github.com/mandalmrinmoy',
  linkedin: 'in/mrinmoy-mandal',
  instagram: '@mrinn_23',
  email: profile.email,
  phone: profile.phone,
}

function ConnectCard({ social, index }) {
  const ref = { current: null }
  const meta = iconFor[social.key]
  if (!meta) return null
  const { Icon, color } = meta

  return (
    <Reveal delay={index * 0.06}>
      <a
        href={social.href}
        target={social.key === 'email' || social.key === 'phone' ? undefined : '_blank'}
        rel="noreferrer"
        data-cursor="pointer"
        style={{ '--card-color': color }}
        className="group relative flex items-center justify-between gap-4 border border-ink-line rounded-2xl px-6 py-6 bg-ink-soft/40 hover:bg-ink-soft hover:border-[var(--card-color)] transition-colors overflow-hidden"
      >
        <span
          className="absolute -right-8 -top-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-20 transition-opacity blur-xl"
          style={{ background: color }}
        />
        <div className="flex items-center gap-4 relative">
          <span
            className="w-11 h-11 rounded-full flex items-center justify-center border border-ink-line group-hover:border-[var(--card-color)] transition-colors shrink-0"
          >
            <Icon size={18} color={color} />
          </span>
          <div>
            <p className="font-display text-base text-bone">{social.label}</p>
            <p className="font-mono text-xs text-slate-soft mt-0.5">
              {detailFor[social.key]}
            </p>
          </div>
        </div>
        <ArrowUpRight
          size={18}
          className="text-slate-soft group-hover:text-bone group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative shrink-0"
        />
      </a>
    </Reveal>
  )
}

export default function Connect() {
  return (
    <section
      id="connect"
      className="px-6 md:px-10 py-28 md:py-32 border-t border-ink-line"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span className="font-mono text-sm text-saffron">Find me online</span>
          <h2 className="font-display text-3xl md:text-5xl text-bone mt-4 mb-4">
            Every way to reach me.
          </h2>
          <p className="text-slate-soft mb-14 max-w-lg">
            Pick whichever feels right — code lives on GitHub, updates on
            Instagram, career stuff on LinkedIn, and everything else in my
            inbox.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {profile.socials.map((s, i) => (
            <ConnectCard key={s.key} social={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
