import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { profile } from '../data/content'

function Field({ label, type = 'text', name }) {
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState('')
  const active = focused || value.length > 0

  const Comp = type === 'textarea' ? 'textarea' : 'input'

  return (
    <div className="relative border-b border-ink-line pb-2 pt-6">
      <motion.label
        htmlFor={name}
        animate={{
          y: active ? -22 : 0,
          scale: active ? 0.8 : 1,
          color: active ? '#F2A93B' : '#9CA3B5',
        }}
        transition={{ duration: 0.2 }}
        className="absolute left-0 top-6 origin-left font-mono text-sm pointer-events-none"
      >
        {label}
      </motion.label>
      <Comp
        id={name}
        name={name}
        rows={type === 'textarea' ? 3 : undefined}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full bg-transparent outline-none text-bone font-body resize-none"
      />
    </div>
  )
}

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3200)
  }

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPos({
      x: (e.clientX - rect.left - rect.width / 2) * 0.3,
      y: (e.clientY - rect.top - rect.height / 2) * 0.3,
    })
  }

  return (
    <section id="contact" className="px-6 md:px-10 py-28 md:py-40 border-t border-ink-line">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <span className="font-mono text-sm text-teal">Contact</span>
          <h2 className="font-display text-3xl md:text-5xl text-bone mt-4 mb-4">
            Got something to build?
          </h2>
          <p className="text-slate-soft mb-14 max-w-lg">
            Tell me about it. I read everything — even the ones that start
            with "this might be a weird request."
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <Field label="Your name" name="name" />
            <Field label="Email" name="email" type="email" />
            <Field label="What are you building?" name="message" type="textarea" />

            <div className="mt-10">
              <motion.button
                type="submit"
                onMouseMove={handleMove}
                onMouseLeave={() => setPos({ x: 0, y: 0 })}
                animate={{ x: pos.x, y: pos.y }}
                transition={{ type: 'spring', stiffness: 150, damping: 12 }}
                data-cursor="pointer"
                className="group relative inline-flex items-center gap-2 bg-bone text-ink font-mono text-sm px-6 py-3 rounded-full hover:bg-saffron transition-colors"
              >
                Send message
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </motion.button>
            </div>
          </form>
        </Reveal>

        <AnimatePresence>
          {sent && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-6 font-mono text-sm text-teal"
            >
              Sent — I'll get back to you within a day or two.
            </motion.div>
          )}
        </AnimatePresence>

        <p className="mt-16 text-slate-soft text-sm">
          Prefer email? Reach me directly at{' '}
          <a
            href={`mailto:${profile.email}`}
            data-cursor="pointer"
            className="text-bone underline underline-offset-4 decoration-ink-line hover:decoration-saffron"
          >
            {profile.email}
          </a>
        </p>
      </div>
    </section>
  )
}
