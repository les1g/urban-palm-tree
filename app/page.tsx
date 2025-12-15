import Link from 'next/link';

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <span className="greeting">Hi! I'm</span>
            <h1 className="hero-title">Gisel Garrido</h1>
            <h2 className="hero-subtitle">Student Developer</h2>
            <p className="hero-description">
              I like building websites and playing around with different designs. My
              current focus is on
              <span className="highlight"> frontend</span> but I also work in
              <span className="highlight"> backend</span> a lot. I find
              <span className="highlight"> AI</span> fascinating and hope to integrate it
              in future projects. When I'm not coding, I'm learning how to code, or
              just bringing random ideas to life.
            </p>
            <div className="hero-buttons">
              <Link href="/portfolio" className="btn btn-primary">View My Work</Link>
              <Link href="/contact" className="btn btn-secondary">Let's Connect</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="code-snippet">
              <div className="code-header">
                <div className="code-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="keyword">def</span>
                  <span className="function"> create_awesome_websites</span>():
                </div>
                <div className="code-line">
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span>
                  <span className="string"> "Beautiful & Functional"</span>
                </div>
                <div className="code-line"></div>
                <div className="code-line">
                  <span className="comment"># Always learning, always building</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="featured-preview">
        <h2>Featured Projects</h2>
        <div className="preview-grid">
          <div className="preview-card">
            <div className="preview-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 3V5H5V3H7ZM5 7V9H3V7H5ZM3 11V13H1V11H3ZM7 19H5V21H7V19ZM21 19V21H19V19H21ZM19 17V15H21V17H19ZM17 13V11H19V13H17ZM15 9V7H17V9H15ZM13 5V3H15V5H13Z"
                  fill="currentColor" />
              </svg>
            </div>
            <h3>Portfolio Website</h3>
            <p>
              A clean, modern design with a fun twist. I focused on user experience
              and responsive layouts. The possibilities are endless!
            </p>
            <a href="https://les1g.github.io/minnies-portfolio/" target="_blank" rel="noopener noreferrer" className="preview-link">View Live →</a>
          </div>
          <div className="preview-card">
            <div className="preview-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2L13.09 6.26L16 4L14.74 7.74L19 6L16.26 9.91L21 9L17.74 12.09L22 13L17.74 14.91L21 15L16.26 14.09L19 18L14.74 16.26L16 20L13.09 17.74L12 22L10.91 17.74L8 20L9.26 16.26L5 18L7.74 14.09L3 15L6.26 11.91L1 9L6.26 10.09L3 9L7.74 12.09L5 6L9.26 7.74L8 4L10.91 6.26L12 2Z"
                  fill="currentColor" />
              </svg>
            </div>
            <h3>Welcome to Arizona</h3>
            <p>Simple design with focus on website layout and HTML structure.</p>
            <a href="https://les1g.github.io/welcomeToArizona/" target="_blank" rel="noopener noreferrer" className="preview-link">View Live →</a>
          </div>
          <div className="preview-card">
            <div className="preview-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 3L19 12L5 21V3Z" fill="currentColor" />
              </svg>
            </div>
            <h3>More Projects</h3>
            <p>Explore my complete portfolio and GitHub repositories</p>
            <Link href="/portfolio" className="preview-link">See All →</Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I've always been fascinated by what technology can do and the doors it
            opens for people. I'm currently a student at WGU, less than a year into
            my program, and I'm excited to keep learning and building.
          </p>
          <div className="skills-preview">
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">Flask</span>
            <span className="skill-tag">CSS</span>
            <span className="skill-tag">Java</span>
          </div>
          <Link href="/about" className="btn btn-outline">Learn More About Me</Link>
        </div>
      </section>

      {/* Connect Section */}
      <section className="connect-section">
        <h2>Contact</h2>
        <p>I'm always open to collaborate and exchange ideas.</p>
        <div className="connect-buttons">
          <Link href="/contact" className="btn btn-primary">Contact Me</Link>
          <a href="mailto:ggarr55@icloud.com" className="btn btn-outline">
            <span>Email Me</span>
          </a>
          <a href="tel:6029071852" className="btn btn-outline">
            <span>Call or Text Me</span>
          </a>
        </div>
      </section>
    </div>
  );
}