import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const cx = useMotionValue(-100), cy = useMotionValue(-100)
  const tx = useMotionValue(-100), ty = useMotionValue(-100)
  const sx = useSpring(cx, { damping: 25, stiffness: 300 })
  const sy = useSpring(cy, { damping: 25, stiffness: 300 })
  const tsx = useSpring(tx, { damping: 35, stiffness: 150 })
  const tsy = useSpring(ty, { damping: 35, stiffness: 150 })
  useEffect(() => {
    const move = e => { cx.set(e.clientX - 6); cy.set(e.clientY - 6); tx.set(e.clientX - 20); ty.set(e.clientY - 20) }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [cx, cy, tx, ty])
  return (
    <>
      <motion.div className="fixed pointer-events-none z-[9999] rounded-full border border-white/30 will-change-transform" style={{ x: tsx, y: tsy, width: 40, height: 40 }} />
      <motion.div className="fixed pointer-events-none z-[9999] rounded-full bg-white will-change-transform" style={{ x: sx, y: sy, width: 10, height: 10 }} />
    </>
  )
}
