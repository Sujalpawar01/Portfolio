import { useEffect, useRef, useState } from 'react'

export function useScrollReveal(threshold = 0.1) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setIsInView(true); obs.disconnect() } }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, isInView]
}
