# Kinetic Portfolio

A React + Tailwind portfolio with a custom cursor, Lenis smooth scrolling,
scroll-triggered reveals, and a signature horizontal "build pipeline" project
scroller (Framer Motion throughout).

## Setup

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Customize

- **Your content**: edit `src/data/content.js` — name, bio, socials, skills,
  projects (each tagged `plan` / `build` / `ship`), and experience timeline.
- **Instagram**: `profile.socials` in `content.js` has a placeholder
  Instagram link (`https://instagram.com/`) and the "Connect" section shows
  `@mrinmoy` as a placeholder handle — update both with your real profile.
- **Colors / fonts**: edit `tailwind.config.js` (`ink`, `bone`, `saffron`,
  `rose`, `teal`) and the Google Fonts link in `index.html`.
- **Photo**: replace `public/photo.jpg` with a higher-resolution version any
  time — it's shown small and framed (in the hero's tilting card) specifically
  so a lower-res source still looks sharp; a bigger source photo will only
  look better.
- **Skills icons**: `content.js` skills are objects with `icon` (a key into
  `Skills.jsx`'s `iconMap`, from `react-icons/si`) and `color` (the real
  brand color). Add a new skill by adding both.
- **Contact form**: `Contact.jsx` currently just shows a local "sent" state.
  Wire the `handleSubmit` function up to your backend, Formspree, Resend, or
  similar to actually deliver messages.

## Sections

Hero → About → Skills → Projects (horizontal pipeline) → Experience
(timeline) → Contact (form) → Connect (GitHub / LinkedIn / Instagram / email
/ phone cards) → Footer.

## Notes

- Respects `prefers-reduced-motion` (custom cursor and most animation
  durations are disabled/shortened).
- Custom cursor auto-disables on touch devices.
- The horizontal project scroller works with trackpad/mouse-wheel shift-scroll
  and touch swipe; on desktop you can also just click-drag if you add a
  library like `react-use-gesture` — not included by default to keep deps
  minimal.
