import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight, ChevronDown, Download } from 'lucide-react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { Mail } from 'lucide-react'
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss } from 'react-icons/si'
import { profile } from '../data/content'

const wordVariants = {
  hidden: { y: '110%' },
  show: (i) => ({
    y: '0%',
    transition: { duration: 0.9, delay: 0.12 * i, ease: [0.16, 1, 0.3, 1] },
  }),
}

const socialIcons = [
  { key: 'github', Icon: FaGithub, color: '#EDEAE0', href: 'https://github.com/mandalmrinmoy' },
  { key: 'linkedin', Icon: FaLinkedin, color: '#0A66C2', href: 'https://www.linkedin.com/in/mrinmoy-mandal-3b70351b8' },
  { key: 'instagram', Icon: FaInstagram, color: '#E4405F', href: 'https://instagram.com/' },
  { key: 'email', Icon: Mail, color: '#F2A93B', href: 'mailto:mrinmoymandal270@gmail.com' },
]

const badges = [
  { Icon: SiReact, color: '#61DAFB', className: '-top-6 -left-8', delay: 0 },
  { Icon: SiNodedotjs, color: '#5FA04E', className: '-bottom-6 -left-10', delay: 0.4 },
  { Icon: SiMongodb, color: '#47A248', className: '-top-4 -right-8', delay: 0.8 },
  { Icon: SiTailwindcss, color: '#38BDF8', className: '-bottom-8 -right-6', delay: 1.2 },
]

function useTypewriter(words, { typeSpeed = 70, deleteSpeed = 40, pause = 1400 } = {}) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
          )
        },
        deleting ? deleteSpeed : typeSpeed
      )
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause])

  return text
}

export default function Hero() {
  const sectionRef = useRef(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)

  const gridX = useSpring(useTransform(mx, [0, 1], [-14, 14]), { stiffness: 60, damping: 20 })
  const gridY = useSpring(useTransform(my, [0, 1], [-14, 14]), { stiffness: 60, damping: 20 })

  const tiltX = useSpring(useTransform(my, [0, 1], [10, -10]), { stiffness: 120, damping: 14 })
  const tiltY = useSpring(useTransform(mx, [0, 1], [-10, 10]), { stiffness: 120, damping: 14 })

  const spotX = useSpring(useTransform(mx, [0, 1], ['20%', '80%']), { stiffness: 50, damping: 20 })
  const spotY = useSpring(useTransform(my, [0, 1], ['20%', '80%']), { stiffness: 50, damping: 20 })

  const typed = useTypewriter(profile.roles)

  const handleMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width)
    my.set((e.clientY - rect.top) / rect.height)
  }

  const words = profile.tagline.split(' ')

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={handleMove}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-28 pb-16 overflow-hidden"
    >
      {/* cursor-follow spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: useTransform(
            [spotX, spotY],
            ([x, y]) =>
              `radial-gradient(500px circle at ${x} ${y}, rgba(242,169,59,0.10), transparent 60%)`
          ),
        }}
      />
      <motion.div
        style={{ x: gridX, y: gridY }}
        className="absolute -inset-10 bg-dot-grid bg-dot-grid opacity-30 pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-[1.25fr_0.75fr] gap-16 items-center">
        {/* left column */}
        <div>
          

          <h1 className="font-display font-semibold text-[12vw] sm:text-[9vw] lg:text-[4.6vw] leading-[0.95] tracking-tight text-bone">
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden align-top mr-[0.28em]">
                <motion.span custom={i} variants={wordVariants} initial="hidden" animate="show" className="inline-block">
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-6 h-8 font-mono text-lg md:text-xl text-saffron flex items-center"
          >
            <span>{profile.name.split(' ')[0]} Mandal — {typed}</span>
            <span className="w-[2px] h-6 bg-saffron ml-1 animate-blink" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.6 }}
            className="mt-6 max-w-md text-slate-soft text-base leading-relaxed"
          >
            {profile.role} building full-stack products with MongoDB,
            Express, React &amp; Node — from database schema to the pixel
            that ships.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="font-mono text-sm text-teal mb-6 flex items-center gap-2 mt-5"
          >
            <span className="w-2 h-2 rounded-full bg-teal inline-block animate-pulse" />
            Available for select projects — {profile.location}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.85, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <a
              href="#work"
              data-cursor="pointer"
              className="group inline-flex items-center gap-2 bg-bone text-ink font-mono text-sm px-6 py-3 rounded-full hover:bg-saffron transition-colors"
            >
              View the work
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a
              href={profile.resume}
              download
              data-cursor="pointer"
              className="group inline-flex items-center gap-2 border border-ink-line text-bone font-mono text-sm px-6 py-3 rounded-full hover:border-saffron hover:text-saffron transition-colors"
            >
              Download resume
              <Download size={15} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#connect"
              data-cursor="pointer"
              className="font-mono text-sm text-bone border-b border-bone/40 hover:border-saffron hover:text-saffron transition-colors pb-0.5"
            >
              Get in touch
            </a>

            <div className="flex items-center gap-3 ml-auto">
              {socialIcons.map(({ key, Icon, color, href }) => (
                <a
                  key={key}
                  href={href}
                  target={key === 'email' ? undefined : '_blank'}
                  rel="noreferrer"
                  data-cursor="pointer"
                  className="w-9 h-9 rounded-full border border-ink-line flex items-center justify-center hover:border-[var(--c)] transition-colors"
                  style={{ '--c': color }}
                >
                  <Icon size={15} color={color} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* right column: interactive tilting photo card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-56 sm:w-64 lg:w-full max-w-[280px]"
        >
          <motion.div
            style={{ rotateX: tiltX, rotateY: tiltY, transformPerspective: 800 }}
            className="relative rounded-[28px] p-2 bg-gradient-to-br from-saffron/40 via-ink-line to-rose/30"
          >
            <div className="rounded-[22px] overflow-hidden border border-ink-line bg-ink-soft aspect-[4/5] relative">
              <img
                src="/photo.jpg"
                alt={profile.name}
                className="w-full h-full object-cover"
                style={{ filter: 'contrast(1.05) saturate(1.05)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
              <div className="grain-overlay opacity-[0.06]" />
            </div>

            {badges.map(({ Icon, color, className, delay }, i) => (
              <motion.span
                key={i}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay, ease: 'easeInOut' }}
                className={`absolute ${className} w-11 h-11 rounded-full bg-ink border border-ink-line flex items-center justify-center shadow-lg`}
              >
                <Icon size={18} color={color} />
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9 }}
            className="mt-6 text-center lg:text-left font-mono text-xs text-slate-soft"
          >
            {profile.name} · {profile.location.split(',')[0]}
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        data-cursor="pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-soft hover:text-bone transition-colors"
      >
        <span className="font-mono text-[11px] tracking-widest uppercase">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ChevronDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  )
}
