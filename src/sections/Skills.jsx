import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const cats = ['All', 'Frontend', 'Backend', 'Cloud', 'Databases', 'AI/ML', 'Tools']
const skills = [
  { name: 'React', level: 95, category: 'Frontend', icon: '⚛', color: '#61DAFB' },
  { name: 'TypeScript', level: 85, category: 'Frontend', icon: 'TS', color: '#3178C6' },
  { name: 'Tailwind CSS', level: 92, category: 'Frontend', icon: '🌊', color: '#38BDF8' },
  { name: 'Next.js', level: 80, category: 'Frontend', icon: '▲', color: '#F0F0F0' },
  { name: 'Framer Motion', level: 78, category: 'Frontend', icon: '🎭', color: '#FF6BFF' },
  { name: 'GSAP', level: 72, category: 'Frontend', icon: '⚡', color: '#88CE02' },
  { name: 'Node.js', level: 92, category: 'Backend', icon: '⬡', color: '#339933' },
  { name: 'Express.js', level: 90, category: 'Backend', icon: 'Ex', color: '#F0F0F0' },
  { name: 'Python', level: 85, category: 'Backend', icon: '🐍', color: '#3776AB' },
  { name: 'REST APIs', level: 94, category: 'Backend', icon: '🔗', color: '#fff' },
  { name: 'GraphQL', level: 72, category: 'Backend', icon: '◉', color: '#E535AB' },
  { name: 'FastAPI', level: 70, category: 'Backend', icon: '🚀', color: '#009688' },
  { name: 'AWS EC2', level: 82, category: 'Cloud', icon: '☁', color: '#FF9900' },
  { name: 'AWS S3', level: 88, category: 'Cloud', icon: '🪣', color: '#FF9900' },
  { name: 'AWS Lambda', level: 75, category: 'Cloud', icon: 'λ', color: '#FF9900' },
  { name: 'Docker', level: 80, category: 'Cloud', icon: '🐳', color: '#2496ED' },
  { name: 'AWS RDS', level: 76, category: 'Cloud', icon: '💾', color: '#FF9900' },
  { name: 'CI/CD', level: 74, category: 'Cloud', icon: '🔄', color: '#fff' },
  { name: 'MongoDB', level: 90, category: 'Databases', icon: '🍃', color: '#47A248' },
  { name: 'PostgreSQL', level: 82, category: 'Databases', icon: '🐘', color: '#336791' },
  { name: 'Redis', level: 75, category: 'Databases', icon: '🔴', color: '#DC382D' },
  { name: 'MySQL', level: 78, category: 'Databases', icon: '🐬', color: '#4479A1' },
  { name: 'TensorFlow', level: 75, category: 'AI/ML', icon: '🧠', color: '#FF6F00' },
  { name: 'scikit-learn', level: 80, category: 'AI/ML', icon: '📊', color: '#F7931E' },
  { name: 'Pandas', level: 82, category: 'AI/ML', icon: '🐼', color: '#aaa' },
  { name: 'NumPy', level: 80, category: 'AI/ML', icon: '🔢', color: '#aaa' },
  { name: 'Jupyter', level: 85, category: 'AI/ML', icon: '📓', color: '#F37626' },
  { name: 'Git', level: 94, category: 'Tools', icon: '📦', color: '#F05032' },
  { name: 'VS Code', level: 96, category: 'Tools', icon: '💙', color: '#007ACC' },
  { name: 'Postman', level: 88, category: 'Tools', icon: '📬', color: '#FF6C37' },
  { name: 'Figma', level: 70, category: 'Tools', icon: '🎨', color: '#F24E1E' },
  { name: 'Linux', level: 78, category: 'Tools', icon: '🐧', color: '#FCC624' },
]

function SkillCard({ name, level, icon, color, index }) {
  return (
    <motion.div layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.02 }}
      className="group p-3 rounded-xl border border-white/6 bg-white/[0.02] hover:border-white/12 transition-all duration-300 overflow-hidden">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold flex-shrink-0"
          style={{ background: `${color}15`, color }}>
          {icon.length <= 2 ? icon : <span className="text-sm">{icon}</span>}
        </div>
        <span className="text-white/60 text-xs font-medium truncate">{name}</span>
        <span className="ml-auto text-white/20 text-[10px] font-mono flex-shrink-0">{level}%</span>
      </div>
      <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
        <motion.div initial={{ width: 0 }} whileInView={{ width: `${level}%` }} viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.23, 1, 0.32, 1] }}
          className="h-full rounded-full bg-white/20" />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [active, setActive] = useState('All')
  const [ref, inView] = useScrollReveal()
  const filtered = active === 'All' ? skills : skills.filter(s => s.category === active)
  return (
    <section id="skills" className="py-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-6">
          <span className="badge mb-3 inline-flex">Skills</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gradient mb-2">Tools of the trade.</h2>
          <p className="text-white/30 text-sm">Technologies I use to build production-ready applications.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }} className="flex flex-wrap gap-1.5 mb-6">
          {cats.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`px-3 py-1 text-xs font-medium rounded-lg border transition-all duration-200 ${active === cat ? 'bg-white text-black border-white' : 'bg-transparent border-white/8 text-white/35 hover:text-white/60 hover:border-white/15'}`}>
              {cat}
            </button>
          ))}
        </motion.div>
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => <SkillCard key={skill.name} {...skill} index={i} />)}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
