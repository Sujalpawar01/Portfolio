import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Mail, GitFork, Link2, Send, CheckCircle, ArrowUpRight } from 'lucide-react'

const socials = [
  {
    icon: Mail,
    label: 'Email',
    handle: 'sujalpawar0804@gmail.com',
    href: 'mailto:sujalpawar0804@gmail.com',
  },
  {
    icon: Link2,
    label: 'LinkedIn',
    handle: 'sujal-pawar-69b425285',
    href: 'https://www.linkedin.com/in/sujal-pawar-69b425285/',
  },
  {
    icon: GitFork,
    label: 'GitHub',
    handle: 'Sujalpawar01',
    href: 'https://github.com/Sujalpawar01',
  },
]

export default function Contact() {
  const [ref, inView] = useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.email.trim()) e.email = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.message.trim()) e.message = 'Required'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const v = validate()
    if (Object.keys(v).length) { setErrors(v); return }
    setErrors({})
    setSending(true)
    await new Promise(r => setTimeout(r, 1500))
    setSending(false)
    setSubmitted(true)
  }

  const inputClass = (field) =>
    `w-full px-4 py-3 bg-white/[0.03] border rounded-xl text-white/80 placeholder-white/20 text-sm outline-none transition-all duration-200 focus:border-white/25 focus:bg-white/[0.05] font-mono ${errors[field] ? 'border-red-500/40' : 'border-white/8'}`

  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-14">
          <span className="badge mb-4 inline-flex">Contact</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gradient mb-4">
            Let's build something together.
          </h2>
          <p className="text-white/35 text-base max-w-md">
            Open to full-time roles, freelance projects, and interesting collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* Left — socials + availability */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }} className="space-y-8">

            {/* Social links */}
            <div className="space-y-3">
              {socials.map(({ icon: Icon, label, handle, href }, i) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 + i * 0.1 }}
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-white/6 bg-white/[0.02] hover:border-white/12 hover:bg-white/[0.04] transition-all duration-300"
                  whileHover={{ x: 4 }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/4 border border-white/8 flex-shrink-0">
                    <Icon size={15} className="text-white/40" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white/60 text-sm font-medium">{label}</div>
                    <div className="text-white/25 text-xs font-mono truncate">{handle}</div>
                  </div>
                  <ArrowUpRight size={13} className="text-white/15 group-hover:text-white/40 transition-colors flex-shrink-0" />
                </motion.a>
              ))}
            </div>

            {/* Availability */}
            <div className="p-4 rounded-2xl border border-white/6 bg-white/[0.02]">
              <p className="text-white/25 text-xs font-mono uppercase tracking-widest mb-3">Open to</p>
              <ul className="space-y-2">
                {['Full-time engineering roles', 'Freelance / contract projects', 'Open source collaboration', 'Technical consulting'].map((item, i) => (
                  <motion.li key={item} initial={{ opacity: 0, x: -8 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.5 + i * 0.07 }}
                    className="flex items-center gap-2 text-white/35 text-sm">
                    <div className="w-1 h-1 rounded-full bg-white/20" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="p-7 rounded-2xl border border-white/6 bg-white/[0.02]">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-14 gap-4">
                    <CheckCircle size={40} className="text-white/40" />
                    <h3 className="text-white/70 text-lg font-semibold">Message sent!</h3>
                    <p className="text-white/30 text-sm max-w-xs">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                    <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }) }}
                      className="mt-2 text-xs text-white/30 hover:text-white/60 font-mono transition-colors">
                      Send another →
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <p className="text-white/30 text-xs font-mono uppercase tracking-widest mb-5">Send a message</p>

                    <div>
                      <label className="block text-white/30 text-xs mb-1.5 font-mono">Name</label>
                      <input type="text" placeholder="Your name" value={form.name}
                        onChange={e => { setForm(p => ({ ...p, name: e.target.value })); if (errors.name) setErrors(p => ({ ...p, name: '' })) }}
                        className={inputClass('name')} />
                      {errors.name && <p className="text-red-400/60 text-xs mt-1 font-mono">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-white/30 text-xs mb-1.5 font-mono">Email</label>
                      <input type="email" placeholder="you@example.com" value={form.email}
                        onChange={e => { setForm(p => ({ ...p, email: e.target.value })); if (errors.email) setErrors(p => ({ ...p, email: '' })) }}
                        className={inputClass('email')} />
                      {errors.email && <p className="text-red-400/60 text-xs mt-1 font-mono">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-white/30 text-xs mb-1.5 font-mono">Message</label>
                      <textarea placeholder="Tell me about your project..." rows={5} value={form.message}
                        onChange={e => { setForm(p => ({ ...p, message: e.target.value })); if (errors.message) setErrors(p => ({ ...p, message: '' })) }}
                        className={`${inputClass('message')} resize-none`} />
                      {errors.message && <p className="text-red-400/60 text-xs mt-1 font-mono">{errors.message}</p>}
                    </div>

                    <motion.button type="submit" disabled={sending}
                      className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-white hover:bg-white/90 disabled:opacity-50 text-black font-medium rounded-xl transition-all duration-200 text-sm"
                      whileHover={{ scale: sending ? 1 : 1.01 }} whileTap={{ scale: sending ? 1 : 0.98 }}>
                      {sending ? (
                        <>
                          <motion.div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full" animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }} />
                          Sending...
                        </>
                      ) : (
                        <><Send size={14} />Send Message</>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
