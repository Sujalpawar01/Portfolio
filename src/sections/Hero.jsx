import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { ArrowRight, Terminal, Zap, Globe, Database } from 'lucide-react'

function useTyping(words, speed = 80, pause = 2000) {
  const [text, setText] = useState('')
  const [wi, setWi] = useState(0)
  const [ci, setCi] = useState(0)
  const [del, setDel] = useState(false)
  useEffect(() => {
    const w = words[wi]
    const t = setTimeout(() => {
      if (!del) { if (ci < w.length) { setText(w.slice(0, ci + 1)); setCi(c => c + 1) } else setTimeout(() => setDel(true), pause) }
      else { if (ci > 0) { setText(w.slice(0, ci - 1)); setCi(c => c - 1) } else { setDel(false); setWi(i => (i + 1) % words.length) } }
    }, del ? speed / 2 : speed)
    return () => clearTimeout(t)
  }, [ci, del, wi, words, speed, pause])
  return text
}

function StatCard({ icon: Icon, value, label, delay = 0 }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.6 }}
      className="glass rounded-xl p-3 flex items-center gap-3 border border-white/7">
      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
        <Icon size={14} className="text-white/40" />
      </div>
      <div>
        <div className="text-white text-sm font-semibold">{value}</div>
        <div className="text-white/30 text-xs">{label}</div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const typed = useTyping(['Full Stack Developer', 'MERN Stack Engineer', 'Cloud Architect', 'ML Enthusiast'])
  const cv = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
  const iv = { hidden: { opacity: 0, y: 30, filter: 'blur(8px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } } }

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-8"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={cv} initial="hidden" animate="visible" className="space-y-8">
            <motion.div variants={iv}>
              <span className="badge"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />Available for work</span>
            </motion.div>
            <motion.div variants={iv} className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                <span className="text-gradient">Crafting</span><br />
                <span className="text-white">scalable</span><br />
                <span className="text-gradient">web experiences.</span>
              </h1>
            </motion.div>
            <motion.div variants={iv} className="flex items-center gap-3">
              <Terminal size={16} className="text-white/40 flex-shrink-0" />
              <p className="text-white/50 text-lg font-mono">
                <span className="text-white/30">&gt; </span>
                <span className="text-white">{typed}</span>
                <span className="inline-block w-0.5 h-5 bg-white/40 ml-0.5 animate-pulse" />
              </p>
            </motion.div>
            <motion.p variants={iv} className="text-white/40 text-lg leading-relaxed max-w-lg">
              Building production-grade applications with MERN Stack, AWS, and Machine Learning. From idea to deployment — I architect systems that scale.
            </motion.p>
            <motion.div variants={iv} className="flex flex-wrap gap-4">
              <motion.a href="#projects" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="group flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-xl hover:bg-white/90 transition-all duration-200"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                View Projects <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </motion.a>
              <motion.a href="#contact" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="flex items-center gap-2 px-6 py-3 bg-transparent text-white/70 font-medium rounded-xl border border-white/10 hover:border-white/25 hover:text-white transition-all duration-200"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                Contact Me
              </motion.a>
            </motion.div>
            <motion.div variants={iv} className="flex flex-wrap gap-3 pt-2">
              <StatCard icon={Zap} value="4+" label="Projects shipped" delay={1.0} />
              <StatCard icon={Globe} value="MERN" label="Full Stack" delay={1.1} />
              <StatCard icon={Database} value="AWS" label="Cloud" delay={1.2} />
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1], delay: 0.4 }}
            className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden" style={{ background: 'rgba(15,16,17,0.9)' }}>
              <div className="absolute inset-0 rounded-2xl border border-white/8" />
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/6">
                <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-[#FF5F57]" /><div className="w-3 h-3 rounded-full bg-[#FEBC2E]" /><div className="w-3 h-3 rounded-full bg-[#28C840]" /></div>
                <span className="flex-1 text-center text-white/25 text-xs font-mono">sujal@portfolio ~</span>
              </div>
              <div className="p-5 font-mono text-sm space-y-2">
                <div className="flex gap-2"><span className="text-white/40">❯</span><span className="text-white/40">node <span className="text-white">server.js</span></span></div>
                <div className="text-emerald-400 text-xs">✓ Server running on port 3000</div>
                <div className="text-emerald-400 text-xs">✓ MongoDB connected</div>
                <div className="text-emerald-400 text-xs">✓ Redis cache initialized</div>
                <div className="flex gap-2 mt-3"><span className="text-white/40">❯</span><span className="text-white/40">npm run <span className="text-white">build</span></span></div>
                <div className="text-yellow-400 text-xs">⚡ Building for production...</div>
                <div className="text-emerald-400 text-xs">✓ Bundle optimized: 124kb gzip</div>
                <div className="flex gap-2 mt-3"><span className="text-white/40">❯</span><span className="text-white animate-pulse">█</span></div>
              </div>
            </div>
            <motion.div className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 border border-white/8" animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity }}>
              <span className="text-xs font-mono text-white/50">⚛ React 19</span>
            </motion.div>
            <motion.div className="absolute -bottom-4 -left-4 glass rounded-xl px-3 py-2 border border-white/8" animate={{ y: [0, 6, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}>
              <span className="text-xs font-mono text-emerald-400/60">⬡ Node.js</span>
            </motion.div>
            <motion.div className="absolute top-1/2 -right-8 glass rounded-xl px-3 py-2 border border-white/8" animate={{ y: [0, -8, 0] }} transition={{ duration: 7, repeat: Infinity, delay: 2 }}>
              <span className="text-xs font-mono text-yellow-400/60">☁ AWS</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} style={{ opacity }}>
        <span className="text-white/20 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" animate={{ scaleY: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} />
      </motion.div>
    </section>
  )
}
