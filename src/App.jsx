const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const skillGroups = [
  {
    title: 'Frontend',
    items: ['JavaScript', 'React', 'HTML & CSS'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Authentication'],
  },
  {
    title: 'Engineering',
    items: ['C++', 'Data structures', 'OOP', 'DBMS'],
  },
  {
    title: 'Tools',
    items: ['Git', 'Postman', 'Razorpay'],
  },
]

const projects = [
  {
    title: 'Inventra',
    subtitle: 'Supplier & inventory platform',
    description:
      'A full-stack platform connecting suppliers and shops, with inventory tracking, validated APIs, and structured product, order, and transaction data.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    date: 'Apr 2026',
    liveLink: 'https://inventra-ten-beta.vercel.app/',
    githubLink: 'https://github.com/akshanshy/Inventra',
  },
  {
    title: 'Fiestura',
    subtitle: 'Event booking platform',
    description:
      'An event platform with authentication and role-based access, including a secure Razorpay payment flow for order creation and verification.',
    tech: ['React', 'Node.js', 'MongoDB', 'Razorpay'],
    date: 'Feb 2026',
    liveLink: 'https://fiestura.vercel.app/',
    githubLink: 'https://github.com/akshanshy/fiestura',
  },
]

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
          <p className="eyebrow"><span className="availability-dot" /> Full-stack developer · Pune, India</p>
          <h1>
            Akshansh
            <br />
            Yadav<span className="hero-period">.</span>
          </h1>
          <div className="hero-bottom">
            <p className="hero-intro">
              I build thoughtful digital experiences and the systems that power them.
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
            <h3>
              Good software is
              <br />
              clear, useful, and
              <br />
              made with care.
            </h3>
            <div className="about-copy">
              <p>
                I&apos;m Akshansh, a full-stack developer focused on building reliable
                web applications with the MERN stack. I enjoy turning complex
                problems into simple, well-considered products.
              </p>
              <p>
                From designing APIs and data models to shaping the details of an
                interface, I care about how every part works together. I&apos;m
                currently based in Pune, Maharashtra.
              </p>
              <a className="text-link" href="mailto:akshanshy2@gmail.com">
                Get in touch <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="skills" id="skills">
          <div className="section-wrap skills-inner">
            <SectionHeading number="02">What I work with</SectionHeading>
            <div className="skills-topline">
              <p>A practical toolkit for building end-to-end products.</p>
              <a
                className="skills-stat"
                href="https://leetcode.com/u/AKSHANSH-ALLKILLED/"
                target="_blank"
                rel="noreferrer"
              >
                <strong>500<span>+</span></strong>
                <span>problems solved <span aria-hidden="true">↗</span></span>
              </a>
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
          <p className="projects-intro">A few things I&apos;ve been building.</p>
          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project" key={project.title}>
                <span className="project-number">0{index + 1}</span>
                <div className="project-main">
                  <div className="project-title-row">
                    <div>
                      <p className="project-subtitle">{project.subtitle}</p>
                      <h3>{project.title}</h3>
                    </div>
                    <span className="project-date">{project.date}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-tags" aria-label={`${project.title} technologies`}>
                    {project.tech.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <div className="project-links">
                    <a href={project.liveLink} target="_blank" rel="noreferrer">
                      Live site <span aria-hidden="true">↗</span>
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noreferrer">
                      Source code <span aria-hidden="true">↗</span>
                    </a>
                  </div>
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
