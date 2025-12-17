import Link from 'next/link';

export default function ResumePage() {
  return (
    <div className="about-container">
      <section className="about-section" style={{ textAlign: 'center' }}>
        <h1>Resume</h1>
        <p style={{ marginBottom: 'var(--spacing-xl)' }}>
          Download my resume or view my professional experience below
        </p>
        <div style={{ 
          display: 'flex', 
          gap: 'var(--spacing-md)', 
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <a 
            href="/Garrido-Resume-2025.docx.pdf" 
            download
            className="btn btn-primary"
          >
            Download PDF
          </a>
          <Link href="/contact" className="btn btn-secondary">
            Contact Me
          </Link>
        </div>
      </section>

      <section className="about-section">
        <h2>Education</h2>
        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
          <h3 style={{ color: 'var(--primary-color)', marginBottom: 'var(--spacing-xs)' }}>
            Bachelor of Science in Computer Science
          </h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--spacing-sm)' }}>
            Western Governors University (WGU) | Expected Graduation: 2026
          </p>
          <p>
            Currently pursuing my degree in Computer Science with a focus on software 
            development, data structures, algorithms, and modern web technologies.
          </p>
        </div>
      </section>

      <section className="about-section">
        <h2>Technical Skills</h2>
        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-sm)' }}>
            Frontend Development
          </h3>
          <div className="skills-preview" style={{ justifyContent: 'flex-start' }}>
            <span className="skill-tag">HTML5</span>
            <span className="skill-tag">CSS3</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">React</span>
            <span className="skill-tag">Next.js</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">Responsive Design</span>
          </div>
        </div>

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-sm)' }}>
            Backend Development
          </h3>
          <div className="skills-preview" style={{ justifyContent: 'flex-start' }}>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">Flask</span>
            <span className="skill-tag">Java</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">RESTful APIs</span>
          </div>
        </div>

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-sm)' }}>
            Tools & Technologies
          </h3>
          <div className="skills-preview" style={{ justifyContent: 'flex-start' }}>
            <span className="skill-tag">Git</span>
            <span className="skill-tag">GitHub</span>
            <span className="skill-tag">VS Code</span>
            <span className="skill-tag">Vercel</span>
            <span className="skill-tag">npm</span>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Projects</h2>
        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
          <h3 style={{ color: 'var(--primary-color)', marginBottom: 'var(--spacing-xs)' }}>
            Next.js Portfolio Website
          </h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--spacing-sm)' }}>
            Personal Project | 2024 - Present
          </p>
          <ul>
            <li>Built a modern portfolio using Next.js, React, and TypeScript</li>
            <li>Implemented dark mode toggle with localStorage persistence</li>
            <li>Created responsive design that works seamlessly across all devices</li>
            <li>Optimized performance with Next.js Image component and code splitting</li>
          </ul>
        </div>

        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
          <h3 style={{ color: 'var(--primary-color)', marginBottom: 'var(--spacing-xs)' }}>
            Portfolio Website (Static)
          </h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--spacing-sm)' }}>
            Personal Project | 2024
          </p>
          <ul>
            <li>Designed and developed a clean, modern portfolio website</li>
            <li>Focused on user experience and intuitive navigation</li>
            <li>Implemented responsive layouts using CSS Grid and Flexbox</li>
          </ul>
        </div>

        <div>
          <h3 style={{ color: 'var(--primary-color)', marginBottom: 'var(--spacing-xs)' }}>
            Welcome to Arizona
          </h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--spacing-sm)' }}>
            Personal Project | 2024
          </p>
          <ul>
            <li>Created a simple, elegant website showcasing HTML and CSS fundamentals</li>
            <li>Emphasized proper semantic HTML structure and accessibility</li>
            <li>Practiced clean code organization and best practices</li>
          </ul>
        </div>
      </section>

      <section className="about-section">
        <h2>Interests & Goals</h2>
        <p>
          I'm passionate about creating intuitive, user-friendly web applications that 
          solve real-world problems. My interests include:
        </p>
        <ul>
          <li>Modern web development frameworks and best practices</li>
          <li>User experience (UX) and interface design</li>
          <li>Artificial Intelligence and Machine Learning integration</li>
          <li>Open source contribution and community involvement</li>
          <li>Continuous learning and staying current with emerging technologies</li>
        </ul>
      </section>

      <section className="about-section" style={{ textAlign: 'center' }}>
        <h2>Let's Connect</h2>
        <p style={{ marginBottom: 'var(--spacing-xl)' }}>
          Interested in working together? I'd love to hear from you!
        </p>
        <div style={{ 
          display: 'flex', 
          gap: 'var(--spacing-md)', 
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Link href="/contact" className="btn btn-primary">
            Contact
          </Link>
          <Link href="/portfolio" className="btn btn-secondary">
            View Projects
          </Link>
          <a 
            href="https://github.com/les1g" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-github"
          >
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
}