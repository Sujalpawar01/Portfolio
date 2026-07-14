import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Code2, Server, Cloud, Brain, Layers, Award } from 'lucide-react'

const highlights = [
  { icon: Code2, title: 'Frontend Engineering', description: 'React, TypeScript, Tailwind — pixel-perfect UIs with smooth animations.' },
  { icon: Server, title: 'Backend Architecture', description: 'Node.js, Express, REST/GraphQL APIs. Designed for scale, secured by design.' },
  { icon: Cloud, title: 'Cloud & DevOps', description: 'AWS (EC2, S3, Lambda, RDS), Docker, CI/CD pipelines. Deployed at scale.' },
  { icon: Brain, title: 'Machine Learning', description: 'Python, TensorFlow, scikit-learn. Bringing intelligence to real-world apps.' },
  { icon: Layers, title: 'Database Design', description: 'MongoDB, PostgreSQL, Redis. Schema design, indexing, query optimization.' },
  { icon: Award, title: 'Problem Solver', description: 'From algorithm design to system architecture — solutions that last.' },
]

const tech = ['React', 'Node.js', 'MongoDB', 'Express', 'AWS', 'Python', 'TypeScript', 'PostgreSQL', 'Docker', 'TensorFlow', 'Redis', 'Git']

export default function About() {
  const [ref, inView] = useScrollReveal()
  const [bioRef, bioInView] = useScrollReveal()
  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-16">
          <span className="badge mb-4 inline-flex">About</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gradient mb-6">
            Engineering at the intersection<br />of code and creativity.
          </h2>
        </motion.div>
        <motion.div ref={bioRef} initial={{ opacity: 0, y: 20 }} animate={bioInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-5">
            <p className="text-white/40 text-lg leading-relaxed">I'm a <span className="text-white font-medium">Full Stack Developer</span> passionate about building products that combine elegant design with robust engineering. I specialize in the <span className="text-white/70">MERN Stack</span>, cloud infrastructure, and applied machine learning.</p>
            <p className="text-white/40 text-lg leading-relaxed">My work spans from designing intelligent phishing detection systems to building agricultural prediction platforms — I believe technology should solve real problems at scale.</p>
            <p className="text-white/40 text-lg leading-relaxed">When I'm not coding, I'm exploring new frameworks, contributing to open source, or thinking about how ML can make everyday software smarter.</p>
          </div>
          <div className="space-y-4">
            <p className="text-white/20 text-xs font-mono uppercase tracking-widest">Tech I work with</p>
            <div className="flex flex-wrap gap-2">
              {tech.map((t, i) => (
                <motion.span key={t} initial={{ opacity: 0, scale: 0.8 }} animate={bioInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: i * 0.05 }}
                  className="px-3 py-1.5 text-sm font-mono text-white/35 bg-white/4 border border-white/8 rounded-lg hover:border-white/20 hover:text-white/60 transition-all duration-200 cursor-default">
                  {t}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {highlights.map((item, i) => {
            const [cRef, cInView] = useScrollReveal()
            const Icon = item.icon
            return (
              <motion.div key={item.title} ref={cRef} initial={{ opacity: 0, y: 30 }} animate={cInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="group p-6 rounded-2xl border border-white/6 bg-white/[0.02] hover:border-white/12 hover:bg-white/[0.04] transition-all duration-500">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4 bg-white/5">
                  <Icon size={16} className="text-white/40" />
                </div>
                <h3 className="text-white/80 font-semibold mb-2 text-sm">{item.title}</h3>
                <p className="text-white/30 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
