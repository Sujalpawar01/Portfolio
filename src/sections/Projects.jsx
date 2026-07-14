import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { ArrowUpRight, GitFork } from 'lucide-react'

const projects = [
  { id: 1, index: '01', title: 'AI Phishing Detection', year: '2024', tag: 'AI / ML',
    description: 'Real-time ML system detecting phishing URLs and emails with 97.3% accuracy using ensemble models — Random Forest, XGBoost, and deep learning.',
    techStack: ['Python', 'TensorFlow', 'Flask', 'MongoDB', 'React'], impact: ['97.3% accuracy', '<50ms inference', '10K+ URLs/day'], liveUrl: null, githubUrl: null },
  { id: 2, index: '02', title: 'KrishiSetu — Crop Prediction', year: '2024', tag: 'Full Stack',
    description: 'AgriTech platform predicting optimal crops from soil and weather data. Empowers farmers with data-driven decisions, improving yields by 30%.',
    techStack: ['React', 'Node.js', 'Python', 'MongoDB', 'AWS S3'], impact: ['92% accuracy', '500+ farmers', '30% yield gain'], liveUrl: null, githubUrl: null },
  { id: 3, index: '03', title: 'Smart Expense Tracker', year: '2023', tag: 'Full Stack',
    description: 'Personal finance app with AI-powered categorization, budget forecasting, and real-time multi-device sync.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'], impact: ['Real-time sync', 'AI categorization', 'Multi-currency'],
    liveUrl: 'https://expense-tracker-amber-delta-54.vercel.app/login', githubUrl: null },
  { id: 4, index: '04', title: 'Blood Bank — AWS', year: '2023', tag: 'Cloud',
    description: 'Cloud-native blood bank system on AWS with donor registration, inventory tracking, and emergency matching in under 2 minutes.',
    techStack: ['Node.js', 'React', 'AWS EC2', 'PostgreSQL', 'Docker'], impact: ['99.9% uptime', '<2min match', 'Multi-hospital'], liveUrl: null, githubUrl: null },
]

function ProjectCard({ project, index: ci }) {
  const [hovered, setHovered] = useState(false)
  const [ref, inView] = useScrollReveal()
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: ci * 0.08 }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      className="group relative border-t border-white/8">
      <div className="grid grid-cols-[80px_1fr_auto] md:grid-cols-[100px_1fr_auto] items-start gap-6 py-6 px-1">
        <div className="pt-0.5">
          <div className="text-white/20 text-xs font-mono">{project.index}</div>
          <div className="text-white/20 text-xs font-mono mt-1">{project.year}</div>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-white text-base font-semibold tracking-tight">{project.title}</h3>
            <span className="text-[10px] text-white/25 font-mono border border-white/8 px-2 py-0.5 rounded-full">{project.tag}</span>
            {project.liveUrl && (
              <span className="text-[10px] text-white/40 font-mono border border-white/12 bg-white/4 px-2 py-0.5 rounded-full flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-white/50 inline-block" />live
              </span>
            )}
          </div>
          <p className="text-white/35 text-sm leading-relaxed mb-3 max-w-xl">{project.description}</p>
          <AnimatePresence>
            {hovered && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                <div className="flex flex-wrap gap-3 mb-1">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map(t => <span key={t} className="text-[10px] font-mono text-white/25 bg-white/4 border border-white/6 px-2 py-0.5 rounded">{t}</span>)}
                  </div>
                  <div className="flex gap-3">
                    {project.impact.map(i => <span key={i} className="text-[10px] font-mono text-white/40">{i}</span>)}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="flex items-center gap-2 pt-0.5">
          {project.githubUrl
            ? <motion.a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-7 h-7 flex items-center justify-center text-white/30 hover:text-white/70 border border-white/8 hover:border-white/20 rounded-lg transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><GitFork size={12} /></motion.a>
            : <div className="w-7 h-7 flex items-center justify-center text-white/10 border border-white/5 rounded-lg cursor-not-allowed"><GitFork size={12} /></div>
          }
          {project.liveUrl
            ? <motion.a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-7 h-7 flex items-center justify-center text-white/50 hover:text-white border border-white/12 hover:border-white/30 rounded-lg transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><ArrowUpRight size={12} /></motion.a>
            : <div className="w-7 h-7 flex items-center justify-center text-white/10 border border-white/5 rounded-lg cursor-not-allowed"><ArrowUpRight size={12} /></div>
          }
        </div>
      </div>
      <motion.div className="absolute bottom-0 left-0 h-px bg-white/8" initial={{ width: '0%' }} animate={{ width: hovered ? '100%' : '0%' }} transition={{ duration: 0.4 }} />
    </motion.div>
  )
}

function StackedCard() {
  const [ref, inView] = useScrollReveal()
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="relative h-36 mb-14 hidden md:block">
      <div className="absolute inset-x-0 mx-auto w-[85%] h-28 rounded-2xl border border-white/4 bg-white/[0.01]" style={{ bottom: 0, transform: 'translateY(8px) scale(0.95)', zIndex: 1 }} />
      <div className="absolute inset-x-0 mx-auto w-[92%] h-28 rounded-2xl border border-white/[0.06] bg-white/[0.02]" style={{ bottom: 0, transform: 'translateY(4px) scale(0.975)', zIndex: 2 }} />
      <a href="https://expense-tracker-amber-delta-54.vercel.app/login" target="_blank" rel="noopener noreferrer"
        className="absolute inset-x-0 mx-auto w-full h-28 rounded-2xl border border-white/8 bg-[#111] flex items-center px-6 gap-6 hover:border-white/15 transition-all group"
        style={{ bottom: 0, zIndex: 3 }}>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            <span className="text-white/70 text-sm font-medium">Smart Expense Tracker</span>
            <span className="text-[10px] text-white/25 font-mono border border-white/8 px-2 py-0.5 rounded-full">Full Stack</span>
            <span className="text-[10px] text-white/40 font-mono border border-white/12 bg-white/4 px-2 py-0.5 rounded-full flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-white/50 inline-block" />live
            </span>
          </div>
          <div className="flex gap-1.5">
            {['React', 'Node.js', 'MongoDB', 'Express'].map(t => <span key={t} className="text-[10px] font-mono text-white/20 bg-white/4 border border-white/6 px-2 py-0.5 rounded">{t}</span>)}
          </div>
        </div>
        <div className="text-right">
          <div className="text-white/15 text-xs font-mono">03</div>
          <ArrowUpRight size={15} className="text-white/20 group-hover:text-white/50 mt-2 ml-auto transition-colors" />
        </div>
      </a>
    </motion.div>
  )
}

export default function Projects() {
  const [ref, inView] = useScrollReveal()
  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-12">
          <span className="text-white/20 text-xs font-mono tracking-widest uppercase mb-3 block">Projects</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">Shipped with purpose.</h2>
          <p className="text-white/30 text-sm max-w-md">Production systems solving real problems — hover each project to explore.</p>
        </motion.div>
        <StackedCard />
        <div>{projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}</div>
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}
          className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
          <span className="text-white/15 text-xs font-mono">4 projects</span>
          <a href="#contact" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="text-white/25 text-xs font-mono hover:text-white/50 transition-colors flex items-center gap-1">
            Let's build together <ArrowUpRight size={10} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
