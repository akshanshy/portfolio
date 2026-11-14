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
    items: ['C++', 'JavaScript', 'Python', 'SQL'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'JWT', 'Razorpay'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'HTML', 'CSS'],
  },
  {
    title: 'Data & Caching',
    items: ['MongoDB', 'MySQL', 'Redis'],
  },
  {
    title: 'GenAI',
    items: ['Groq API', 'LLM Integration', 'Structured Output (Pydantic)'],
  },
  {
    title: 'Tools',
    items: ['Docker', 'Git', 'GitHub', 'Postman', 'Pytest', 'Pandas', 'Matplotlib'],
  },
  {
    title: 'Core Concepts',
    items: ['OOP', 'DBMS', 'DSA', 'Authentication & RBAC', 'API Design', 'Caching', 'Design Patterns'],
  },
]

const projects = [
  {
    title: 'Fiestura – Full-Stack Event Management Platform',
    image: '/fiestura.jpg',
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
    description:
      'Built a FastAPI microservice that turns natural-language queries into structured search filters using the Groq LLM API (openai/gpt-oss-20b) and Pydantic schemas, and fetches events from the Node.js backend over HTTPX. Designed an AIProvider abstraction with the Factory Pattern for environment-based provider selection, with a rule-based fallback. Wrote 17 Pytest cases covering API health, chat validation and event search; all passing.',
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

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/akshansh-yadav-b82a73189' },
  { name: 'GitHub', url: 'https://github.com/akshanshy' },
  { name: 'LeetCode', url: 'https://leetcode.com/u/AKSHANSH-ALLKILLED/' },
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
        <a className="header-contact" href="mailto:akshanshy2@gmail.com">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <p className="eyebrow"><span className="availability-dot" /> Software development · Backend engineering</p>
          <h1>
            Akshansh
            <br />
            Yadav<span className="hero-period">.</span>
          </h1>
          <div className="hero-bottom">
            <p className="hero-intro">
              Final-year B.Tech student building toward software development and backend engineering roles.
            </p>
            <div className="hero-links">
              <a className="text-link" href="#projects">
                Explore my work <span aria-hidden="true">↓</span>
              </a>
              <a className="text-link text-link-muted" href="/resume.pdf" target="_blank" rel="noreferrer">
                View résumé <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
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
                  integration. I&apos;ve solved 680+ DSA problems.
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
            <IsometricShowcase
              className="about-showcase"
              src="/akshansh-showcase.jpg"
              alt="Portrait of Akshansh Yadav"
            />
          </div>
        </section>

        <section className="skills" id="skills">
          <div className="section-wrap skills-inner">
            <SectionHeading number="02">What I work with</SectionHeading>
            <div className="skills-topline">
              <p>Tools and technologies documented in my resume.</p>
              <div className="resume-metrics">
                <div className="resume-metric">
                  <strong>{String(projectCount).padStart(2, '0')}</strong>
                  <span>projects listed</span>
                </div>
                <div className="resume-metric">
                  <strong>680<span>+</span></strong>
                  <span>DSA problems</span>
                </div>
                <a
                  className="resume-metric"
                  href="https://leetcode.com/u/AKSHANSH-ALLKILLED/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>650<span>+</span></strong>
                  <span>LeetCode · 1550+ rating <span aria-hidden="true">↗</span></span>
                </a>
              </div>
            </div>
            <div className="skills-grid">
              {skillGroups.map((group, index) => (
                <div className="skill-group" key={group.title}>
                  <span className="skill-index">0{index + 1}</span>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((skill) => <li key={skill}>{skill}</li>)}
                  </ul>
                </div>
              ))}
            </div>
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
                  {project.image && (
                    <IsometricShowcase
                      className="project-showcase"
                      src={project.image}
                      alt={`${project.title} project screenshot`}
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
