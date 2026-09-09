import { useEffect, useState, useCallback } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import AnimatedBackground from './components/AnimatedBackground'
import WelcomeScreen from './components/WelcomeScreen'



const PROFILE = {
  name: 'Bouchaala ilyes',
  role: 'Full stack Developer',
  location: 'Skikda',
  blurb:
    "I build fast, scalable full-stack applications with clean interfaces and solid backend architecture. Focused on React, APIs, databases, and creating products that feel as good as they work.",
  email: 'ilyesbouchaala21@gmail.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/ilyesbc-dev' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ilyes-bouchaala-862583417' },
    { label: 'facbook', href: '' },
  ],
}

const SKILLS = [
  'React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Node.js',
  'python', 'Framer Motion', 'php', 'Git', 'c',
]

const PROJECTS = [
  {
    year: '2026',
    title: 'Project One',
    role: 'Library Management System',
    description: 'A simple library management application that helps manage books, members, borrowing, and returns. It was built to make everyday library tasks easier and more organized through a straightforward interface.',
    href: '#',
  },
  {
    year: '2025',
    title: 'Project Two',
    role: 'website ecommerce -tenue de block',
    description: 'MED WEAR — An e-commerce website for medical scrubs, designed to make it easy to browse products, choose sizes, customize embroidery, and place orders. The site also includes a shopping cart, delivery information, promotions, and a responsive interface.',
    href: 'https://meedwear.vercel.app/',
  },
  {
    year: '2025',
    title: 'Project Three',
    role: '',
    description: 'coming soon ',
    href: '#',
  },
  {
    year: '2024',
    title: 'Project Four',
    role: '',
    description: 'coming soon',
    href: '#',
  },
]

// Words the hero's typewriter cycles through, e.g. alternate job titles.
const ROLES = ['Full-STACK Developer']

const NAV = [
  { label: 'home', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

// ---------------------------------------------------------------------------

function Header() {
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? scrolled / max : 0)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV.map((n) => document.querySelector(n.href))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -45% 0px' }
    )
    sections.forEach((s) => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-paper/80 backdrop-blur-md border-b border-line">
      <div className="flex items-center justify-between px-6 md:px-10 py-5">
        <a href="#top" className="font-display text-lg tracking-tight text-ink">
          {PROFILE.name}
        </a>
        <nav className="flex gap-6 text-sm">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`ink-link pb-0.5 transition-colors ${
                active === item.href ? 'text-cobalt' : 'text-ink'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="h-px bg-line">
        <div
          className="h-px bg-cobalt transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </header>
  )
}

// Same typing/erasing rhythm as the source site.
const TYPING_SPEED = 100
const ERASING_SPEED = 50
const PAUSE_DURATION = 2000

function Typewriter() {
  const [text, setText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  const handleTyping = useCallback(() => {
    const word = ROLES[wordIndex]
    if (isTyping) {
      if (charIndex < word.length) {
        setText((prev) => prev + word[charIndex])
        setCharIndex((prev) => prev + 1)
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION)
      }
    } else if (charIndex > 0) {
      setText((prev) => prev.slice(0, -1))
      setCharIndex((prev) => prev - 1)
    } else {
      setWordIndex((prev) => (prev + 1) % ROLES.length)
      setIsTyping(true)
    }
  }, [charIndex, isTyping, wordIndex])

  useEffect(() => {
    const timeout = setTimeout(handleTyping, isTyping ? TYPING_SPEED : ERASING_SPEED)
    return () => clearTimeout(timeout)
  }, [handleTyping, isTyping])

  return (
    <span className="text-cobalt">
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-cobalt ml-1 align-middle animate-pulse" />
    </span>
  )
}

function Hero() {
  const [spot, setSpot] = useState({ x: 50, y: 50 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setSpot({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-24 overflow-hidden"
    >
      {/* Cursor-tracked spotlight, visible on pointer devices only */}
      <div
        className="pointer-events-none absolute inset-0 hidden md:block transition-opacity duration-300"
        style={{
          background: `radial-gradient(500px circle at ${spot.x}% ${spot.y}%, rgba(91,127,255,0.10), transparent 70%)`,
        }}
      />

      <div
        className="inline-flex items-center gap-2 text-sm text-stone tracking-wide mb-4 w-fit animate-float"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cobalt" />
        {PROFILE.location}
      </div>

      <div className="relative w-fit" data-aos="fade-up" data-aos-delay="600">
        <div className="absolute -inset-x-6 -inset-y-4 bg-cobalt/10 blur-3xl rounded-full" />
        <h1 className="relative font-display font-medium leading-[0.95] text-[13vw] md:text-[7.5vw] -ml-1 text-ink">
          {PROFILE.name}
        </h1>
      </div>

      <p className="mt-4 text-xl md:text-2xl font-sans" data-aos="fade-up" data-aos-delay="800">
        <Typewriter />
      </p>
      <p
        className="max-w-xl mt-8 text-base md:text-lg text-stone leading-relaxed"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        {PROFILE.blurb}
      </p>
      <div className="flex gap-4 mt-8" data-aos="fade-up" data-aos-delay="1200">
        <a href="#work" className="group relative">
          <span className="absolute -inset-0.5 rounded-full bg-cobalt opacity-0 group-hover:opacity-60 blur transition-opacity duration-500" />
          <span className="relative block px-5 py-2.5 rounded-full bg-ink text-paper text-sm group-hover:bg-cobalt transition-colors">
            See work
          </span>
        </a>
        <a
          href="#contact"
          className="px-5 py-2.5 rounded-full border border-line text-sm text-ink hover:border-cobalt hover:text-cobalt transition-colors"
        >
          Contact
        </a>
      </div>
    </section>
  )
}

function Work() {
  return (
    <section id="work" className="px-6 md:px-10 py-24 border-t border-line">
      <div className="flex items-baseline justify-between mb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="font-display text-2xl md:text-3xl">Selected work</h2>
        <span className="text-sm text-stone hidden md:block">{PROJECTS.length} projects</span>
      </div>

      <ul>
        {PROJECTS.map((p, i) => (
          <li
            key={p.title}
            className="border-t border-line last:border-b group relative overflow-hidden"
            data-aos={i % 3 === 0 ? 'fade-up-right' : i % 3 === 1 ? 'fade-up' : 'fade-up-left'}
            data-aos-duration={i % 3 === 0 ? '1000' : i % 3 === 1 ? '1200' : '1000'}
          >
            <span className="absolute inset-y-0 left-0 w-0 group-hover:w-full bg-cobalt/5 transition-[width] duration-500 ease-out pointer-events-none" />
            <a
              href={p.href}
              className="relative grid grid-cols-[3rem_1fr_auto] md:grid-cols-[4rem_1fr_1fr_auto_2rem] items-baseline gap-2 md:gap-6 py-6 md:py-7"
            >
              <span className="font-display text-stone text-sm group-hover:text-cobalt transition-colors">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-display text-2xl md:text-3xl text-ink group-hover:text-cobalt group-hover:translate-x-1 transition-all duration-300">
                {p.title}
              </span>
              <span className="text-sm text-stone md:block hidden">
                {p.role} — {p.description}
              </span>
              <span className="text-sm text-stone">{p.year}</span>
              <span className="hidden md:inline-block text-cobalt opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-24 border-t border-line">
      <div className="grid md:grid-cols-[1fr_2fr] gap-8">
        <h2 className="font-display text-2xl md:text-3xl" data-aos="fade-right" data-aos-delay="100">
          About
        </h2>
        <div className="max-w-2xl">
          <p className="text-lg leading-relaxed text-ink" data-aos="fade-up" data-aos-delay="200">
            {PROFILE.blurb} Outside of client and product work, I like picking
            things apart to see how they're built — replace this with a line
            or two of your own story.
          </p>
          <p className="mt-8 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="400">
            {SKILLS.map((skill, i) => (
              <span key={skill}>
                <span className="ink-link">{skill}</span>
                {i < SKILLS.length - 1 ? ', ' : '.'}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="px-6 md:px-10 py-24 border-t border-line">
      <h2 className="font-display text-2xl md:text-3xl mb-6 text-ink" data-aos="fade-up">
        Get in touch
      </h2>
      <a
        href={`mailto:${PROFILE.email}`}
        className="group relative font-display text-[10vw] md:text-6xl leading-none inline-block text-ink -ml-1"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <span className="absolute -inset-x-4 -inset-y-3 bg-cobalt/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="relative ink-link">{PROFILE.email}</span>
      </a>
      <div className="flex gap-6 mt-10 text-sm" data-aos="fade-up" data-aos-delay="300">
        {PROFILE.socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="ink-link pb-0.5">
            {s.label}
          </a>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="px-6 md:px-10 py-8 border-t border-line flex items-center justify-between text-xs text-stone">
      <span>© {new Date().getFullYear()} {PROFILE.name}</span>
      <span></span>
    </footer>
  )
}

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    // Same AOS config as the source: run once per element, small offset.
    const initAOS = () => AOS.init({ once: true, offset: 10, duration: 800 })
    initAOS()
    window.addEventListener('resize', initAOS)
    return () => window.removeEventListener('resize', initAOS)
  }, [])

  return (
    <div className="min-h-screen relative">
      <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} siteUrl="ilyesdev.com" />
      <AnimatedBackground />
      {!showWelcome && (
        <>
          <Header />
          <main>
            <Hero />
            <Work />
            <About />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}
