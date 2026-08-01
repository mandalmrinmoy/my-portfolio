import { motion } from "framer-motion";
import { useState } from "react";
import { CiShare1 } from "react-icons/ci";
import logo from "../assets/portfolio.png";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Connect", href: "#connect" },
  { label: "Contact", href: "#contact" },
];

function MagneticLink({ href, label }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.35, y: y * 0.35 });
  };

  return (
    <motion.a
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
      className="relative text-sm text-slate-soft hover:text-bone transition-colors"
    >
      {label}
    </motion.a>
  );
}

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-40 px-6 md:px-10 py-5 flex items-center justify-between backdrop-blur-sm bg-ink/60"
    >
      {/* Logo */}
      <a href="#top" className="font-display text-lg tracking-tight text-bone">
        <img className="w-14" src={logo} alt="MM" />
      </a>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <MagneticLink key={link.href} {...link} />
        ))}
      </nav>

      {/* Hire Me Button */}
      <div className="relative rounded-full p-[2px] overflow-hidden">
        {/* Rotating Border */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, #f2a93b 70deg, transparent 140deg)",
            filter: "drop-shadow(0 0 6px #f2a93b)",
          }}
        />

        {/* Button */}
        <a
          href="#contact"
          data-cursor="pointer"
          className="relative z-10 flex items-center gap-2 rounded-full bg-[#0e1420] px-5 py-2 text-sm font-medium text-bone transition-all duration-300 hover:text-saffron"
        >
          Hire Me <CiShare1 size={18} />
        </a>
      </div>
    </motion.header>
  );
}