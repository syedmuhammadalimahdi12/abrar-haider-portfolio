
import './style.css'

const profile = {
  name: 'Abrar Haider',
  role: 'Automation Engineer',
  subtitle: 'AI Workflow Automation & Business Automation Consultant',
  location: 'Islamabad, Pakistan',
  email: 'abrar.haider.sherazi@gmail.com',
  linkedin: 'https://www.linkedin.com/in/abrarhaider-666a12122/',
  image: '/profile/abrar-profile.jpg',
  resume: '/resume/abrar-haider-resume.pdf'
}

const skills = [
  {
    icon: '⚙️',
    title: 'Automation Platforms',
    items: ['n8n', 'Make', 'Langflow', 'Zapier']
  },
  {
    icon: '🤖',
    title: 'AI & Chatbot Development',
    items: [
      'OpenAI',
      'Claude',
      'WhatsApp AI Chatbots',
      'AI Customer Service Agents'
    ]
  },
  {
    icon: '🔗',
    title: 'Integrations',
    items: [
      'Meta WhatsApp Cloud API',
      'CRM + AI Integration',
      'Lead Qualification',
      'Follow-Up Automation'
    ]
  },
  {
    icon: '🖥️',
    title: 'AI Infrastructure',
    items: [
      'Local AI Server Deployment',
      'Private AI Infrastructure',
      'AI-Powered Internal Systems'
    ]
  },
  {
    icon: '🔐',
    title: 'Cybersecurity & Networking',
    items: [
      'Certified Ethical Hacker (CEH)',
      'Network Administration',
      'System Administration'
    ]
  },
  {
    icon: '💼',
    title: 'Productivity Tools',
    items: ['Microsoft Office', 'Google Earth']
  }
]

const services = [
  {
    icon: '💬',
    title: 'WhatsApp AI Chatbots',
    description:
      'AI-powered chatbots for customer support, sales, lead qualification, and follow-up automation.'
  },
  {
    icon: '🔄',
    title: 'AI Workflow Automation',
    description:
      'Business workflow automation using n8n, Make, Langflow, and Zapier.'
  },
  {
    icon: '🖥️',
    title: 'Private AI Infrastructure',
    description:
      'Secure local AI server deployment and integration with private business systems.'
  },
  {
    icon: '🔗',
    title: 'CRM & API Integration',
    description:
      'Connecting CRM platforms, AI tools, and Meta WhatsApp Cloud API for streamlined operations.'
  }
]

const experiences = [
  {
    period: 'June 2022 – Present',
    title: 'Automation Engineer — Freelance',
    company: 'Islamabad, Pakistan',
    points: [
      'Design and deliver AI-driven workflow automation solutions using n8n, Make, Langflow, and Zapier.',
      'Integrate local and open-source AI engines to help eliminate recurring API costs.',
      'Build WhatsApp AI chatbots for sales, customer support, lead qualification, and follow-up automation.',
      'Deploy secure private AI servers on local infrastructure and SaaS platforms.',
      'Connect CRM platforms with AI tooling to streamline internal business operations.',
      'Apply networking, system administration, and CEH-certified cybersecurity experience to deliver secure and cost-effective automation pipelines.'
    ]
  },
  {
    period: 'December 2022 – August 2025',
    title: 'Crypto Trader — Self-Employed',
    company: 'Islamabad, Pakistan',
    points: [
      'Independently traded and managed a personal cryptocurrency portfolio.',
      'Conducted market research and applied personal risk management practices.'
    ]
  },
  {
    period: 'October 2016 – December 2023',
    title: 'System Network Administrator',
    company: 'Cyber Security and Information Technology Directorate — Islamabad',
    points: [
      'Managed network and IT infrastructure in a full-time role.',
      'Provided remote technical support for infrastructure and systems outside standard working hours.'
    ]
  },
  {
    period: 'February 2008 – December 2020',
    title: 'Network Administrator',
    company: 'Topnet Communication — Wah Cantt, Pakistan',
    points: [
      'Managed network administration and IT operations for the company.',
      'Also served as CEO of the company, with annual revenue reported as up to 3 million.'
    ]
  }
]

const education = [
  {
    degree: 'MS, Computer Science',
    institute: 'COMSATS University Islamabad',
    period: 'September 2017 – November 2020'
  },
  {
    degree: 'BS (Hons), Information Technology',
    institute: 'Virtual University of Pakistan',
    period: '2011 – 2015'
  }
]

const certificates = [
  {
    title: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    year: 'Professional Certification',
    image: `${import.meta.env.BASE_URL}certificates/ceh-certificate.png`,
    description:
      'Certified Ethical Hacker certification demonstrating knowledge of ethical hacking and information security concepts.'
  }
]

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('App container not found')
}

app.innerHTML = `
  <header class="site-header">
    <div class="container nav-wrapper">
      <a href="#home" class="brand">
        <span class="brand-mark">AH</span>
        <span>Abrar Haider</span>
      </a>

      <nav class="navigation" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>

      <a class="nav-button" href="#contact">Let's Connect</a>
    </div>
  </header>

  <main>
    <section id="home" class="hero-section">
      <div class="hero-glow"></div>

      <div class="container hero-grid">
        <div class="hero-image-column">
          <div class="image-frame">
            <div class="image-glow"></div>
            <img
              src="${profile.image}"
              alt="Professional portrait of ${profile.name}"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
            />
            <div class="image-placeholder">AH</div>
          </div>

          <div class="availability-badge">
            <span class="status-dot"></span>
            AI Automation & Consulting
          </div>
        </div>

        <div class="hero-content">
          <p class="eyebrow">AUTOMATION ENGINEER</p>

          <h1>
            Building Smarter
            <span>AI-Powered</span>
            Business Systems.
          </h1>

          <h2>${profile.name}</h2>

          <p class="hero-role">${profile.subtitle}</p>

          <p class="hero-description">
            Automation Engineer with 15+ years of combined experience in IT,
            networking, and cybersecurity, including the last four years
            focused on AI-driven workflow automation.
          </p>

          <div class="hero-actions">
            <a href="#services" class="button button-primary">
              Explore My Services →
            </a>

            <a href="${profile.resume}" class="button button-secondary" download>
              Download Resume ↓
            </a>
          </div>

          <div class="hero-contact">
            <span>📍 ${profile.location}</span>
            <a href="mailto:${profile.email}">✉ ${profile.email}</a>
          </div>
        </div>
      </div>

      <div class="container trust-row">
        <span>AI WORKFLOW AUTOMATION</span>
        <span>WHATSAPP AI CHATBOTS</span>
        <span>PRIVATE AI INFRASTRUCTURE</span>
        <span>BUSINESS AUTOMATION</span>
      </div>
    </section>

    <section id="about" class="section about-section">
      <div class="container about-grid">
        <div>
          <p class="eyebrow">PROFESSIONAL SUMMARY</p>
          <h2 class="section-title">
            Turning repetitive work into
            <span>intelligent systems.</span>
          </h2>
        </div>

        <div class="about-content">
          <p>
            I specialize in building WhatsApp AI chatbots and private,
            locally hosted AI infrastructure that help businesses increase
            revenue, cut response times, reduce operating costs, and remove
            repetitive manual work.
          </p>

          <p>
            I am comfortable owning a project end to end—from automation
            design in n8n, Make, and Langflow, to secure server deployment,
            CRM integration, and Meta WhatsApp Cloud API connectivity.
          </p>

          <p>
            My background in networking, system administration, and
            cybersecurity supports the development of secure, efficient,
            and cost-effective automation solutions.
          </p>
        </div>
      </div>
    </section>

    <section id="services" class="section dark-section">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">WHAT I DO</p>
          <h2 class="section-title">AI Automation Services</h2>
          <p>
            Practical automation solutions designed to improve business
            operations and reduce manual work.
          </p>
        </div>

        <div class="service-grid">
          ${services
            .map(
              (service) => `
                <article class="service-card">
                  <div class="card-icon">${service.icon}</div>
                  <h3>${service.title}</h3>
                  <p>${service.description}</p>
                  <span class="card-arrow">↗</span>
                </article>
              `
            )
            .join('')}
        </div>
      </div>
    </section>

    <section id="skills" class="section">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">TECHNICAL EXPERTISE</p>
          <h2 class="section-title">Core Skills & Technologies</h2>
        </div>

        <div class="skills-grid">
          ${skills
            .map(
              (skill) => `
                <article class="skill-card">
                  <div class="skill-heading">
                    <span class="card-icon">${skill.icon}</span>
                    <h3>${skill.title}</h3>
                  </div>

                  <div class="tag-list">
                    ${skill.items
                      .map((item) => `<span>${item}</span>`)
                      .join('')}
                  </div>
                </article>
              `
            )
            .join('')}
        </div>
      </div>
    </section>

    <section id="experience" class="section dark-section">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">CAREER JOURNEY</p>
          <h2 class="section-title">Professional Experience</h2>
        </div>

        <div class="timeline">
          ${experiences
            .map(
              (experience) => `
                <article class="timeline-item">
                  <div class="timeline-marker"></div>
                  <div class="timeline-content">
                    <span class="timeline-period">${experience.period}</span>
                    <h3>${experience.title}</h3>
                    <h4>${experience.company}</h4>
                    <ul>
                      ${experience.points
                        .map((point) => `<li>${point}</li>`)
                        .join('')}
                    </ul>
                  </div>
                </article>
              `
            )
            .join('')}
        </div>
      </div>
    </section>

    <section id="education" class="section">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">ACADEMIC BACKGROUND</p>
          <h2 class="section-title">Education & Certifications</h2>
        </div>

        <div class="education-grid">
          ${education
            .map(
              (item) => `
                <article class="education-card">
                  <span class="education-icon">🎓</span>
                  <span class="timeline-period">${item.period}</span>
                  <h3>${item.degree}</h3>
                  <p>${item.institute}</p>
                </article>
              `
            )
            .join('')}
        </div>

        <div class="certificate-section">
          <h3>Certifications</h3>

          <div class="certificate-grid">
            ${certificates
              .map(
                (certificate) => `
                  <article class="certificate-card">
                    ${
                      certificate.image
                        ? `<img src="${certificate.image}" alt="${certificate.title}" />`
                        : `<div class="certificate-placeholder">CERTIFICATE</div>`
                    }

                    <div class="certificate-info">
                      <span>${certificate.year}</span>
                      <h4>${certificate.title}</h4>
                      <p>${certificate.issuer}</p>
                      <small>${certificate.description}</small>
                    </div>
                  </article>
                `
              )
              .join('')}
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="section contact-section">
      <div class="container contact-grid">
        <div>
          <p class="eyebrow">GET IN TOUCH</p>
          <h2 class="section-title">
            Let's automate your
            <span>business growth.</span>
          </h2>
          <p class="contact-description">
            Looking to automate business workflows, build AI chatbots,
            or deploy secure local AI infrastructure? Let's connect.
          </p>
        </div>

        <div class="contact-card">
          <a href="mailto:${profile.email}" class="contact-link">
            <span>✉</span>
            <div>
              <small>Email</small>
              <strong>${profile.email}</strong>
            </div>
          </a>

          <a href="${profile.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-link">
            <span>in</span>
            <div>
              <small>LinkedIn</small>
              <strong>Connect on LinkedIn</strong>
            </div>
          </a>

          <div class="contact-link">
            <span>📍</span>
            <div>
              <small>Location</small>
              <strong>${profile.location}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-content">
      <span>© ${new Date().getFullYear()} ${profile.name}</span>
      <span>AI Automation & Business Solutions</span>
    </div>
  </footer>
`