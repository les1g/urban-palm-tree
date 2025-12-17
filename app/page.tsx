import Link from "next/link";

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <a href="/about">Gisel Garrido</a>
            </h1>
            <p className="hero-description">
              I am a Student pursuing my B.S. in Software Engineering. I am
              usually focused on school and use my spare time to work on
              personal projects.
            </p>
            <div className="hero-buttons">
              <Link href="/portfolio" className="btn btn-primary">
                My Projects
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Connect With Me
              </Link>
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
                  <span className="function"> greeting</span>():
                </div>
                <div className="code-line">
                  <span className="keyword">return</span>
                  <span className="string"> "Hello World!"</span>
                </div>
                <div className="code-line"></div>
                <div className="code-line">
                  <span className="comment"># last updated: 2025-12</span>
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
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 6a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 9h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3>Portfolio Website</h3>
            <p>
              A clean, modern design with a fun twist. I focused on user
              experience and responsive layouts. The possibilities are endless!
            </p>
            <a
              href="https://les1g.github.io/minnies-portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="preview-link"
            >
              View Live →
            </a>
          </div>
          <div className="preview-card">
            <div className="preview-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 6a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 9h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3>Welcome to Arizona</h3>
            <p>
              Simple design with focus on website layout and HTML structure.
            </p>
            <a
              href="https://les1g.github.io/welcomeToArizona/"
              target="_blank"
              rel="noopener noreferrer"
              className="preview-link"
            >
              View Live →
            </a>
          </div>
          <div className="preview-card">
            <div className="preview-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3L19 12L5 21V3Z" fill="currentColor" />
              </svg>
            </div>
            <h3>More Projects</h3>
            <p>Explore my complete portfolio and GitHub repositories</p>
            <Link href="/portfolio" className="preview-link">
              See All →
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview">
        <div className="about-content">
          <h2>About Me</h2>
          <div className="skills-preview">
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">React</span>
            <span className="skill-tag">Next.js</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">Ruby</span>
          </div>
          <p>
            I've always been fascinated by what technology can do and the...
          </p>
          <Link href="/about" className="btn btn-outline">
            Learn More
          </Link>
        </div>
      </section>

      {/* Connect Section */}
      <section className="connect-section">
        <h2>Contact</h2>
        <p>I'm always open to collaborate and exchange ideas.</p>
        <div className="connect-buttons">
          <Link href="/contact" className="btn btn-primary">
            Contact
          </Link>
          <a href="mailto:ggarr55@icloud.com" className="btn btn-outline">
            <span>Email</span>
          </a>
        </div>
      </section>
    </div>
  );
}
