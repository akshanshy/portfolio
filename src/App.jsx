import { useState } from 'react'
import IsometricShowcase from './IsometricShowcase.jsx'

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const skillGroups = [
  {
    title: 'Languages',
    items: [
      { name: 'C++' },
      { name: 'JavaScript' },
      { name: 'Python' },
      { name: 'SQL' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', core: true },
      { name: 'Express.js', core: true },
      { name: 'FastAPI', context: 'AI Event Assistant' },
      { name: 'REST APIs' },
      { name: 'JWT' },
      { name: 'Razorpay' },
    ],
  },
  {
    title: 'Frontend',
    items: [{ name: 'React.js' }, { name: 'HTML' }, { name: 'CSS' }],
  },
  {
    title: 'Data & Caching',
    items: [
      { name: 'MongoDB', core: true },
      { name: 'MySQL' },
      { name: 'Redis', core: true, context: 'Fiestura' },
    ],
  },
  {
    title: 'GenAI / Data Science',
    items: [
      { name: 'Groq API' },
      { name: 'LLM Integration' },
      { name: 'Structured Output (Pydantic)' },
      { name: 'Pandas' },
      { name: 'Matplotlib' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Docker', core: true },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Postman' },
      { name: 'Pytest' },
    ],
  },
  {
    title: 'Core Concepts',
    wide: true,
    items: [
      { name: 'OOP' },
      { name: 'DBMS' },
      { name: 'DSA' },
      { name: 'Authentication & RBAC' },
      { name: 'API Design' },
      { name: 'Caching' },
      { name: 'Design Patterns' },
    ],
  },
]

const problemSolvingTopics = [
  {
    title: 'Core Data Structures',
    items: ['Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Hash Tables', 'Strings'],
  },
  {
    title: 'Non-Linear & Advanced Structures',
    items: ['Binary Trees', 'BST', 'Heaps/Priority Queues', 'Tries', 'Graphs'],
  },
  {
    title: 'Algorithmic Paradigms',
    items: ['Two Pointers', 'Sliding Window', 'Binary Search', 'Sorting', 'Recursion'],
  },
  {
    title: 'Advanced Problem Solving',
    items: ['Dynamic Programming (DP)', 'Greedy Algorithms', 'Backtracking', 'Bit Manipulation', 'Graph Traversals (DFS/BFS)'],
  },
]

const projects = [
  {
    title: 'Fiestura – Full-Stack Event Management Platform',
    image: '/fiestura.png',
    description:
      'Built a full-stack event platform with event discovery, registration, JWT authentication, role-based access control and admin workflows; live with 16 events. Integrated Razorpay with server-side order creation, payment verification, webhook handling and idempotency to avoid duplicate payment processing. Improved data access with MongoDB indexes, aggregation pipelines and pagination; added Redis caching with TTL expiry and cache invalidation. Containerized the backend with Docker and Docker Compose (API + Redis). Analysed synthetic event, registration and payment data with SQL and Pandas and charted event popularity and registration trends.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'Docker'],
    date: 'Feb 2026 – Present',
    links: [
      { label: 'Live site', url: 'https://fiestura.vercel.app/' },
      { label: 'Source code', url: 'https://github.com/akshanshy/fiestura' },
    ],
  },
  {
    title: 'AI Event Assistant – LLM Microservice (for Fiestura)',
    image: '/aifiestura.png',
    fullSize: true,
    milestone: '17/17 tests passing',
    description:
      'Built a FastAPI microservice that turns natural-language queries into structured search filters using the Groq LLM API (openai/gpt-oss-20b) and Pydantic schemas, and fetches events from the Node.js backend over HTTPX. Designed an AIProvider abstraction with the Factory Pattern for environment-based provider selection, with a rule-based fallback. Added Pytest coverage for API health, chat validation and event search.',
    tech: ['Python', 'FastAPI', 'Pydantic', 'HTTPX', 'Groq API', 'Pytest'],
    date: '2026',
    links: [],
  },
  {
    title: 'Inventra – Inventory Management System',
    image: '/inventra.jpg',
    description:
      'Building separate supplier and shop-owner workflows for inventory management; adding product and stock management with real-time sync via Socket.IO (in progress).',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO'],
    date: '2026 – Present',
    links: [
      { label: 'Live site', url: 'https://inventra-ten-beta.vercel.app/' },
      { label: 'Source code', url: 'https://github.com/akshanshy/Inventra' },
    ],
  },
]

const projectCount = projects.length

const leetcodeProfileUrl = 'https://leetcode.com/u/AKSHANSH-ALLKILLED/'

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/akshansh-yadav-b82a73189' },
  { name: 'GitHub', url: 'https://github.com/akshanshy' },
  { name: 'LeetCode', url: leetcodeProfileUrl },
]

function SectionHeading({ number, children }) {
  return (
    <div className="section-heading">
      <span className="section-number">{number}</span>
      <h2>{children}</h2>
    </div>
  )
}

function App() {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'))

  const toggleTheme = () => {
    const nextTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark'
    window.localStorage.setItem('portfolio-theme', nextTheme)
    document.documentElement.classList.toggle('dark', nextTheme === 'dark')
    setIsDark(nextTheme === 'dark')
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Akshansh Yadav, home">
          AY<span>.</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            aria-pressed={isDark}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            onClick={toggleTheme}
          >
            {isDark ? (
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
              </svg>
            ) : (
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                <path d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.5 8.5 0 1 0 20.2 15.1Z" />
              </svg>
            )}
          </button>
          <a className="header-contact" href="mailto:akshanshy2@gmail.com">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="availability-dot" /> Software development · Backend engineering</p>
            <h1>
              Akshansh
              <br />
              Yadav<span className="hero-period">.</span>
            </h1>
            <div className="hero-bottom">
              <p className="hero-intro">
                Mostly Node.js, Express, MongoDB and Redis, with Python for AI services.
              </p>
              <div className="hero-links">
                <a className="text-link" href="#projects">
                  Explore my work <span aria-hidden="true">↓</span>
                </a>
                <a className="hero-resume-link" href="/rough resume.pdf" target="_blank" rel="noreferrer">
                  View résumé <span aria-hidden="true">⬇</span>
                </a>
              </div>
            </div>
            <div className="hero-social-links" aria-label="Social profiles">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noreferrer">
                  {link.name} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
          <IsometricShowcase
            className="hero-showcase"
            src="/akshansh-showcase.jpg"
            alt="Portrait of Akshansh Yadav"
          />
          <span className="hero-index" aria-hidden="true">01 / 04</span>
        </section>

        <section className="about section-wrap" id="about">
          <SectionHeading number="01">A little about me</SectionHeading>
          <div className="about-grid">
            <div className="about-copy-column">
              <h3>
                Building
                <br />
                software,
                <br />
                from the ground up.
              </h3>
              <div className="about-copy">
                <p>
                  I&apos;m Akshansh, a final-year B.Tech student in Electronics &amp;
                  Telecommunication Engineering at Army Institute of Technology,
                  Pune. I&apos;m targeting software development and backend engineering roles.
                </p>
                <p>
                  I&apos;ve built and deployed a MERN-stack platform with payments,
                  Redis caching and Docker, plus a Python microservice with LLM
                  integration.
                </p>
                <p className="education-detail">
                  <strong>2023–2027</strong> · B.Tech, Electronics &amp;
                  Telecommunication Engineering · CGPA 7.2 (till 6th semester)
                </p>
                <a className="text-link" href="mailto:akshanshy2@gmail.com">
                  Get in touch <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="skills" id="skills">
          <div className="section-wrap skills-inner">
            <SectionHeading number="02">What I work with</SectionHeading>
            <div className="skills-topline">
              <p>A backend-first toolkit for production web apps and AI services.</p>
            </div>
            <div className="skills-grid">
              {skillGroups.map((group, index) => (
                <div className={`skill-group${group.wide ? ' skill-group--wide' : ''}`} key={group.title}>
                  <span className="skill-index">0{index + 1}</span>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((skill) => (
                      <li className={skill.core ? 'skill-chip skill-chip--core' : 'skill-chip'} key={skill.name}>
                        {skill.name}
                        {skill.context && <span className="skill-context">→ {skill.context}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <section className="problem-solving" aria-labelledby="problem-solving-title">
              <a
                className="problem-solving__stats"
                href={leetcodeProfileUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="View LeetCode profile in a new tab"
              >
                <div className="problem-solving__stats-heading">
                  <h3 id="problem-solving-title">Problem Solving</h3>
                  <span className="problem-solving__profile-link">
                    Click to view full profile
                    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
                      <path d="M4.5 11.5 11.5 4.5M5 4.5h6.5V11" />
                    </svg>
                  </span>
                </div>
                <div className="problem-solving__metrics">
                  <div className="problem-solving__metric">
                    <p className="problem-solving__metric-line">
                      <strong>650+</strong>
                      <span>on LeetCode</span>
                    </p>
                    <p className="problem-solving__detail">
                      150 Easy <span aria-hidden="true">•</span> 400 Medium <span aria-hidden="true">•</span> 100 Hard
                    </p>
                  </div>
                  <div className="problem-solving__metric problem-solving__rating">
                    <span className="problem-solving__metric-line">
                      <span>LeetCode Contest Rating:</span>
                      <strong>1,550+</strong>
                      <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
                        <path d="M4.5 11.5 11.5 4.5M5 4.5h6.5V11" />
                      </svg>
                    </span>
                  </div>
                  <div className="problem-solving__metric">
                    <p className="problem-solving__metric-line">
                      <strong>680+</strong>
                      <span>Total Solved</span>
                    </p>
                    <p className="problem-solving__detail">+30 on Codeforces / GFG</p>
                  </div>
                </div>
                <p className="problem-solving__language">All problems solved using C++</p>
                <p className="problem-solving__mentoring">
                  Mentored juniors in C++ and DSA.
                </p>
              </a>
              <div className="problem-solving__topics">
                <h4>Topics Covered</h4>
                <div className="problem-solving__topic-groups">
                  {problemSolvingTopics.map((group) => (
                    <div className="problem-solving__topic-group" key={group.title}>
                      <h5>{group.title}</h5>
                      <ul>
                        {group.items.map((topic) => <li key={topic}>{topic}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="projects section-wrap" id="projects">
          <SectionHeading number="03">Selected projects</SectionHeading>
          <p className="projects-intro">{projectCount} projects listed in my resume.</p>
          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project" key={project.title}>
                <span className="project-number">0{index + 1}</span>
                <div className="project-main">
                  <div className="project-title-row">
                    <h3>{project.title}</h3>
                    <span className="project-date">{project.date}</span>
                  </div>
                  {project.milestone && (
                    <p className="project-milestone">{project.milestone}</p>
                  )}
                  {project.image && (
                    <IsometricShowcase
                      className="project-showcase"
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      fullSize={project.fullSize}
                    />
                  )}
                  <p className="project-description">{project.description}</p>
                  <ul className="project-tags" aria-label={`${project.title} technologies`}>
                    {project.tech.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  {project.links.length > 0 && (
                    <div className="project-links">
                      {project.links.map((link) => (
                        <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
                          {link.label} <span aria-hidden="true">↗</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <SectionHeading number="04">Have a good one in mind?</SectionHeading>
          <div className="contact-content">
            <h2>Let&apos;s make it<br />work beautifully.</h2>
            <a className="contact-email" href="mailto:akshanshy2@gmail.com">
              akshanshy2@gmail.com <span aria-hidden="true">↗</span>
            </a>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noreferrer">
                  {link.name} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark" href="#home" aria-label="Back to top">AY<span>.</span></a>
        <p>Designed &amp; built by Akshansh Yadav · © 2026</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
