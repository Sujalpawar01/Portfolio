import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const events = [
  { year: '2024', title: 'Full Stack Developer', org: 'Freelance / Projects', description: 'Building production-grade MERN applications, ML integrations, and cloud deployments on AWS.' },
  { year: '2024', title: 'AI Phishing Detection System', org: 'Academic Project', description: 'Developed ML-powered threat detection achieving 97.3% accuracy. Published research findings.' },
  { year: '2023', title: 'KrishiSetu AgriTech Platform', org: 'Team Project', description: 'Led full-stack development of crop prediction platform onboarding 500+ farmers across India.' },
  { year: '2023', title: 'AWS Cloud Practitioner', org: 'Amazon Web Services', description: 'Certified in AWS cloud fundamentals — EC2, S3, RDS, Lambda, and cloud architecture.' },
  { year: '2022', title: 'Started B.E. Computer Engineering', org: 'University', description: 'Began formal CS education. Started building projects with React and Node.js from day one.' },
  { year: '2021', title: 'First Line of Code', org: 'Self-taught', description: 'Wrote first HTML page. Fell in love with programming and never stopped.' },
]

export default function Timeline() {
  const [ref, inView] = useScrollReveal()
  return (
    <section id="timeline" className="py-24 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-14">
          <span className="badge mb-4 inline-flex">Journey</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gradient mb-4">The story so far.</h2>
          <p className="text-white/30 text-base">Key moments that shaped my path as an engineer.</p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/8" />
          <div className="space-y-10">
            {events.map((e, i) => {
              const [eRef, eInView] = useScrollReveal()
              return (
                <motion.div key={i} ref={eRef} initial={{ opacity: 0, x: -20 }} animate={eInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }} className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border border-white/20 bg-[#08090A] flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-white/40" />
                  </div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-white/20 text-xs font-mono">{e.year}</span>
                    <span className="text-white/15 text-xs">·</span>
                    <span className="text-white/25 text-xs font-mono">{e.org}</span>
                  </div>
                  <h3 className="text-white/80 font-semibold text-sm mb-1">{e.title}</h3>
                  <p className="text-white/30 text-sm leading-relaxed">{e.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
