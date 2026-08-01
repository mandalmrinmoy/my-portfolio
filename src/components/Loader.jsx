import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] bg-ink flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: 'easeInOut', delay: 0.2 },
          }}
        >
          <motion.div
            className="overflow-hidden"
            initial={{ y: 0 }}
            exit={{ y: -40, transition: { duration: 0.5 } }}
          >
            <motion.h1
              className="font-display text-2xl md:text-3xl tracking-tight text-bone flex gap-2"
              initial="hidden"
              animate="show"
            >
              {'HI, I AM MRINMOY'.split('').map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0.15 }}
                  animate={{ opacity: [0.15, 1, 0.15] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.045,
                    ease: 'easeInOut',
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
