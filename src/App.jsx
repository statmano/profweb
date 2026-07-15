import './App.css'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'

const highlights = [
  'Product-minded development with a strong design sensibility',
  'Experience shaping polished frontends and reliable systems',
  'Collaborative approach to planning, implementation, and iteration',
]

const timeline = [
  {
    title: 'Product Manager (Developer Experience)',
    company: 'Fastly / Glitch',
    period: '2022 — 2026',
    description:
      'Leading interface design, performance optimization, and cross-functional execution for client-facing platforms.',
  },
  {
    title: 'Associate Product Manager, Operations Specialist II, Sales and Support',
    company: 'Fog Creek Software / Glitch',
    period: '2017 — 2022',
    description:
      'Built scalable web applications and internal tools with a focus on maintainability and user experience.',
  },
  {
    title: 'The Kitchen Sink',
    company: 'Various Companies',
    period: '2001 — 2016',
    description:
      'Gathered diverse experiences across various roles and industries.',
  },
]

const projects = [
  {
    title: 'Tiny Demo: Compute Localization',
    summary:
      'A quick demonstration of customization capabilities of Fastly Compute\'s localization features.',
    link: 'https://statmano.github.io/weathertest/',
    tags: ['Edge Computing', 'Localization', 'Language'],

  },
  {
    title: 'Tiny Demo: Park Locator at the Edge',
    summary:
      'A demonstration of Fastly Compute\'s edge computing capabilities for a locator application.',
    tags: ['Edge Computing', 'Location', 'Maps'],
  },
  {
    title: 'Draft Lottery',
    summary:
      'A simple web application for generating fantasy draft orders via a lottery system.',
    link: 'https://statmano.github.io/draft-lottery/',
    tags: ['Javascript', 'Tools'],
  },
]

function App() {
  return (
    <div className="page-shell">
      <HeroSection />

      <main>
        <AboutSection highlights={highlights} />
        <ExperienceSection timeline={timeline} />
        <ProjectsSection projects={projects} />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
