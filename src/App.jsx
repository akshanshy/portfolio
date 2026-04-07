const skills = [
  "C++", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", 
  "REST APIs", "Authentication", "Razorpay Integration", "DSA", 
  "OOPs", "DBMS", "Git", "Postman"
]

const projects = [
  {
    title: "Inventra – Supplier System",
    description: "Full-stack platform to manage supplier-shop interactions and inventory tracking. Designed REST APIs with validation, structured scalable MongoDB schema for products/orders/transactions, and implemented real-time inventory updates.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    liveLink: "https://inventra-ten-beta.vercel.app/",
    githubLink: "https://github.com/akshanshy/Inventra",
    date: "Apr 2026",
    image: "/inventra.jpg"
  },
  {
    title: "Fiestura – Event Platform",
    description: "Full-stack event platform with authentication and role-based access. Implemented secure payment flow using Razorpay including order creation, verification, and failure handling.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Razorpay"],
    liveLink: "https://fiestura.vercel.app/",
    githubLink: "https://github.com/akshanshy/fiestura",
    date: "Feb 2026",
    image: "/fiestura.jpg"
  }
]

const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/akshansh-yadav-b82a73189" },
  { name: "GitHub", url: "https://github.com/akshanshy" },
  { name: "Email", url: "mailto:akshanshy2@gmail.com" }
]

const contactInfo = {
  email: "akshanshy2@gmail.com",
  phone: "888793970",
  location: "Pune, Maharashtra"
}

const dsaStats = {
  problemsSolved: "500+",
  leetcodeUrl: "https://leetcode.com/u/AKSHANSH-ALLKILLED/",
  topics: ["Arrays", "Strings", "Linked Lists", "Trees", "Graphs", "Dynamic Programming", "Greedy", "Binary Search", "Stack & Queue", "Hash Tables"]
}

const profileImage = "/profile.jpg"

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      if (response.ok) {
        alert('Message sent successfully!')
        form.reset()
      }
    } catch (error) {
      alert('Failed to send message. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-300">
      <nav className="fixed top-0 left-0 right-0 bg-[#0f172a]/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-white">Akshansh Yadav</h1>
          <div className="flex gap-6">
            <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">About</button>
            <button onClick={() => scrollToSection('dsa')} className="text-gray-400 hover:text-white transition-colors">DSA</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-400 hover:text-white transition-colors">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-400 hover:text-white transition-colors">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors">Contact</button>
          </div>
        </div>
      </nav>

      <section id="about" className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center fade-in">
          <img src={profileImage} alt="Akshansh Yadav" className="w-48 h-56 rounded-2xl object-cover mx-auto mb-6 border-4 border-blue-500/30" />
          <h2 className="text-5xl font-bold text-white mb-4">Akshansh Yadav</h2>
          <p className="text-2xl text-blue-400 mb-2">Full Stack Developer</p>
          <p className="text-gray-500 mb-8">React • Node.js • MongoDB</p>
          <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
            Building scalable MERN applications with real-world features like payment integration. Solved 500+ DSA problems, passionate about backend systems and problem solving.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button onClick={() => scrollToSection('projects')} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors">
              View Projects
            </button>
            <a href="/resume.pdf" download className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-400 hover:text-white transition-colors">
              Resume
            </a>
            <a href="https://www.linkedin.com/in/akshansh-yadav-b82a73189" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section id="dsa" className="py-16 px-6 fade-in delay-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Data Structures & Algorithms</h2>
          <div className="mb-6">
            <span className="text-5xl font-bold text-blue-500">{dsaStats.problemsSolved}</span>
            <p className="text-gray-500 mt-2">LeetCode Problems Solved</p>
            <a href={dsaStats.leetcodeUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-blue-400 hover:text-blue-300 text-sm">
              View Profile →
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {dsaStats.topics.map((topic, index) => (
              <span key={index} className="px-3 py-1 bg-[#1e293b] text-blue-300 rounded-full text-xs">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 fade-in delay-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-[#1e293b] rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                {project.image && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4 hover:opacity-80 transition-opacity" />
                  </a>
                )}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className="text-sm text-gray-500">{project.date}</span>
                </div>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-[#0f172a] text-blue-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                    Live →
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white font-medium text-sm">
                    GitHub →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6 bg-[#0d1525] fade-in delay-400">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Skills & Technologies</h2>
          <p className="text-gray-500 text-center mb-10">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-[#1e293b] text-gray-300 rounded-full text-sm font-medium border border-gray-700 hover:border-blue-500/50 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>



      <section id="contact" className="py-20 px-6 bg-[#0d1525] fade-in">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Get In Touch</h2>
          <p className="text-gray-500 text-center mb-2">{contactInfo.location}</p>
          <p className="text-gray-400 text-center mb-10">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-[#1e293b] rounded-2xl p-6 border border-gray-700">
            <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
            <input type="hidden" name="email" value="akshanshy2@gmail.com" />
            
            <div className="mb-4">
              <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-3 bg-[#0f172a] text-gray-300 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-500" />
            </div>
            <div className="mb-4">
              <input type="email" name="email" placeholder="Your Email" required className="w-full px-4 py-3 bg-[#0f172a] text-gray-300 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-500" />
            </div>
            <div className="mb-4">
              <textarea name="message" placeholder="Your Message" rows="4" required className="w-full px-4 py-3 bg-[#0f172a] text-gray-300 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-500 resize-none"></textarea>
            </div>
            <button type="submit" className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors font-medium">
              Send Message
            </button>
          </form>

          <div className="flex justify-center gap-4 flex-wrap mt-10">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-[#1e293b] text-gray-300 rounded-lg border border-gray-700 hover:border-blue-500 hover:text-white transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2026 Akshansh Yadav. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
