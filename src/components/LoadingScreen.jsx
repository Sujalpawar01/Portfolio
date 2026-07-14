import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen({ loading }) {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    if (!loading) return
    const i = setInterval(() => setProgress(p => p >= 100 ? (clearInterval(i), 100) : p + Math.random() * 15), 120)
    return () => clearInterval(i)
  }, [loading])
  return (
    <AnimatePresence>
      {loading && (
        <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9000] bg-[#08090A] flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-8">
            {/* Linear-style logo — white box with dark mark */}
            <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="2" y="2" width="18" height="18" rx="4" fill="#08090A" />
                <path d="M6 11 L11 6 L16 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 15 L16 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex flex-col items-center gap-4">
              <span className="text-white/50 text-xs font-medium tracking-[0.2em] uppercase">Portfolio</span>
              <div className="w-28 h-px bg-white/8 rounded-full overflow-hidden">
                <motion.div className="h-full bg-white/50" style={{ width: `${Math.min(progress, 100)}%` }} transition={{ duration: 0.15 }} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
