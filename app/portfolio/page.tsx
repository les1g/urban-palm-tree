import PortfolioFilter from '../../components/PortfolioFilter';
import Link from 'next/link';

export default function PortfolioPage() {
  const projects = [
    {
      title: "Minnie's Portfolio",
      description: "Clean, modern portfolio design where I really focused on user experience and responsive layouts. This was where I started getting serious about CSS animations.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      liveLink: "https://les1g.github.io/minnies-portfolio/",
      githubLink: "https://github.com/les1g/minnies-portfolio",
      category: "frontend",
      status: "complete" as const
    },
    {
      title: "Welcome to Arizona",
      description: "Interactive travel guide that was honestly just fun to build. Got to play around with smooth animations and really think about how users interact with content.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Animations"],
      liveLink: "https://les1g.github.io/welcomeToArizona/",
      githubLink: "https://github.com/les1g/welcomeToArizona",
      category: "frontend",
      status: "complete" as const
    },
  ];

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h1>My Projects</h1>
        <p className="portfolio-subtitle">
          Explore my latest work in web development and design
        </p>
      </div>

      {/* Featured Live Projects */}
      <section className="featured-projects">
        <h2>Featured Live Projects</h2>
        <PortfolioFilter projects={projects} />
      </section>

      {/* Development Projects */}
      <section className="other-projects">
        <h2>Development Projects</h2>
        <div className="project-list">
          <div className="project-item">
            <div className="project-info">
              <h3>Personal Portfolio Website (This Site)</h3>
              <p>
                Full-stack Next.js app that's become my playground for trying out new
                ideas. Features dark mode, animations, project filtering, and
                probably some bugs I'm still hunting down.
              </p>
              <div className="tech-stack">
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">CSS3</span>
              </div>
            </div>
            <div className="project-status">
              <span className="status-badge active">Live</span>
            </div>
          </div>

          <div className="project-item">
            <div className="project-info">
              <h3>Python Labs Collection</h3>
              <p>
                Collection of Python exercises where I work through algorithms and
                data structures. It's where I go when I want to sharpen my
                problem-solving skills.
              </p>
              <div className="tech-stack">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Algorithms</span>
                <span className="tech-tag">Problem Solving</span>
              </div>
              <a
                href="https://github.com/les1g/python_labs"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub →
              </a>
            </div>
            <div className="project-status">
              <span className="status-badge complete">Complete</span>
            </div>
          </div>

          <div className="project-item">
            <div className="project-info">
              <h3>HTML/CSS Labs</h3>
              <p>
                Frontend exercises where I experiment with new CSS techniques and
                responsive design patterns. Always something new to try here.
              </p>
              <div className="tech-stack">
                <span className="tech-tag">HTML5</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">Responsive Design</span>
              </div>
            </div>
            <div className="project-status">
              <span className="status-badge in-progress">In Progress</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="portfolio-cta">
        <h2>Want to see more?</h2>
        <p>Check out my GitHub for additional projects and contributions</p>
        <div style={{ 
          display: 'flex', 
          gap: 'var(--spacing-md)', 
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Link href="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
          <a 
            href="https://github.com/les1g" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-github"
          >
            View GitHub Profile
          </a>
        </div>
      </section>
    </div>
  );
}