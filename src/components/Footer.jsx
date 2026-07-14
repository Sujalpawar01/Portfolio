import { GitFork, Mail, Link2 } from 'lucide-react'

const socials = [
  { icon: GitFork, label: 'GitHub', href: 'https://github.com/Sujalpawar01' },
  { icon: Link2, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sujal-pawar-69b425285/' },
  { icon: Mail, label: 'Email', href: 'mailto:sujalpawar0804@gmail.com' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-white/20 text-xs font-mono">© 2024 Sujal Pawar</span>
        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="w-7 h-7 flex items-center justify-center text-white/25 hover:text-white/70 border border-white/8 hover:border-white/20 rounded-lg transition-all duration-200">
              <Icon size={13} />
            </a>
          ))}
        </div>
        <span className="text-white/15 text-xs font-mono">Built with React + Vite</span>
      </div>
    </footer>
  )
}
