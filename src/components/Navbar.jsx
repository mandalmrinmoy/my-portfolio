import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Connect', href: '#connect' },
  { label: 'Contact', href: '#contact' },
]

function MagneticLink({ href, label, active }) {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPos({ x: x * 0.35, y: y * 0.35 })
  }

  return (
    <motion.a
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 12 }}
      className={`relative text-sm transition-colors ${
        active ? 'text-saffron' : 'text-slate-soft hover:text-bone'
      }`}
    >
      {label}
      {active && (
        <motion.span
          layoutId="nav-active-dot"
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-saffron"
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      )}
    </motion.a>
  )
}

export default function Nav() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.slice(1))
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        // triggers when a section occupies the vertical center band of the viewport
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0,
      }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.1, ease: 'easeOut' }}
      className="fixed top-0 inset-x-0 z-40 px-6 md:px-10 py-5 flex items-center justify-between backdrop-blur-sm bg-ink/60"
    >
      <a href="#top" className="font-display text-lg tracking-tight text-bone">
        MM<span className="text-saffron">.</span>
      </a>
      <nav className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <MagneticLink key={l.href} {...l} active={active === l.href.slice(1)} />
        ))}
      </nav>
      <a
        href="#contact"
        data-cursor="pointer"
        className="text-sm border border-ink-line rounded-full px-4 py-1.5 text-bone hover:border-saffron hover:text-saffron transition-colors"
      >
        Let's talk
      </a>
    </motion.header>
  )
}