import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Same typewriter approach as the source: reveal one character at a time.
function TypewriterEffect({ text }) {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 90)
    return () => clearInterval(timer)
  }, [text])

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

const containerVariants = {
  exit: {
    opacity: 0,
    scale: 1.1,
    filter: 'blur(10px)',
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
}

const childVariants = {
  exit: {
    y: -20,
    opacity: 0,
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
}

export default function WelcomeScreen({ onLoadingComplete, siteUrl }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => onLoadingComplete?.(), 800)
    }, 2600)
    return () => clearTimeout(timer)
  }, [onLoadingComplete])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 bg-paper flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit="exit"
          variants={containerVariants}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cobalt/10 to-amber/10 blur-3xl" />
          </div>

          <div className="relative w-full max-w-2xl mx-auto px-6 text-center">
            <motion.h1
              className="font-display text-4xl sm:text-6xl leading-tight text-ink"
              variants={childVariants}
            >
              <span className="inline-block">Welcome</span>{' '}
              <span className="inline-block">to</span>{' '}
              <span className="inline-block">my</span>
              <br />
              <span className="inline-block text-cobalt">Portfolio</span>
            </motion.h1>

            <motion.div className="mt-8 font-sans text-lg text-stone" variants={childVariants}>
              <TypewriterEffect text={import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Same typewriter approach as the source: reveal one character at a time.
function TypewriterEffect({ text }) {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 90)
    return () => clearInterval(timer)
  }, [text])

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

const containerVariants = {
  exit: {
    opacity: 0,
    scale: 1.1,
    filter: 'blur(10px)',
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
}

const childVariants = {
  exit: {
    y: -20,
    opacity: 0,
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
}

export default function WelcomeScreen({ onLoadingComplete, siteUrl }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => onLoadingComplete?.(), 800)
    }, 2600)
    return () => clearTimeout(timer)
  }, [onLoadingComplete])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 bg-paper flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit="exit"
          variants={containerVariants}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cobalt/10 to-amber/10 blur-3xl" />
          </div>

          <div className="relative w-full max-w-2xl mx-auto px-6 text-center">
            <motion.h1
              className="font-display text-4xl sm:text-6xl leading-tight text-ink"
              variants={childVariants}
            >
              <span className="inline-block">Welcome</span>{' '}
              <span className="inline-block">to</span>{' '}
              <span className="inline-block">my</span>
              <br />
              <span className="inline-block text-cobalt">Portfolio</span>
            </motion.h1>

            <motion.div className="mt-8 font-sans text-lg text-stone" variants={childVariants}>
              <TypewriterEffect text={import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Same typewriter approach as the source: reveal one character at a time.
function TypewriterEffect({ text }) {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 90)
    return () => clearInterval(timer)
  }, [text])

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

const containerVariants = {
  exit: {
    opacity: 0,
    scale: 1.1,
    filter: 'blur(10px)',
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
}

const childVariants = {
  exit: {
    y: -20,
    opacity: 0,
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
}

export default function WelcomeScreen({ onLoadingComplete, siteUrl }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => onLoadingComplete?.(), 800)
    }, 2600)
    return () => clearTimeout(timer)
  }, [onLoadingComplete])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 bg-paper flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit="exit"
          variants={containerVariants}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cobalt/10 to-amber/10 blur-3xl" />
          </div>

          <div className="relative w-full max-w-2xl mx-auto px-6 text-center">
            <motion.h1
              className="font-display text-4xl sm:text-6xl leading-tight text-ink"
              variants={childVariants}
            >
              <span className="inline-block">Welcome</span>{' '}
              <span className="inline-block">to</span>{' '}
              <span className="inline-block">my</span>
              <br />
              <span className="inline-block text-cobalt">Portfolio</span>
            </motion.h1>

            <motion.div className="mt-8 font-sans text-lg text-stone" variants={childVariants}>
              <<TypewriterEffect text="https://portfolio-sk86.vercel.app/" />/>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
