import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="px-6 md:px-10 py-10 border-t border-ink-line flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <p className="font-mono text-xs text-slate-soft">
        © {new Date().getFullYear()} {profile.name}. Built with React,
        Tailwind &amp; a lot of scroll listeners.
      </p>
      <div className="flex gap-6">
        {profile.socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            data-cursor="pointer"
            className="group relative font-mono text-xs text-slate-soft hover:text-bone transition-colors"
          >
            {s.label}
            <span className="absolute left-0 -bottom-1 h-px w-0 bg-saffron group-hover:w-full transition-all duration-300" />
          </a>
        ))}
      </div>
    </footer>
  )
}
