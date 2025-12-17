import PortfolioFilter from "../../components/PortfolioFilter";
import Link from "next/link";

export default function PortfolioPage() {
  const projects = [
    {
      title: "Calculator",
      description:
        "A Python calculator built with Flask. I focused on clean routing, templating, and backend logic.",
      techStack: ["Python", "Flask"],
      liveLink: "https://calcles1g.pythonanywhere.com/",
      githubLink: "https://github.com/les1g/Calculator",
      category: "backend",
      status: "complete" as const,
    },
    {
      title: "GG Tax Services",
      description:
        "A business website built with Next.js and Tailwind CSS. It includes secure client login, document upload, and payment integration.",
      techStack: ["Next.js", "React", "TypeScript"],
      liveLink: "https://gg-tax.vercel.app/",
      githubLink: "https://github.com/les1g/GG-Tax",
      category: "fullstack",
      status: "complete" as const,
    },
    {
      title: "Minnie's Portfolio",
      description:
        "Another school project. I focused on clean, modern portfolio design and user experience with responsive layouts.",
      techStack: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://les1g.github.io/minnies-portfolio/",
      githubLink: "https://github.com/les1g/minnies-portfolio",
      category: "frontend",
      status: "complete" as const,
    },
    {
      title: "Welcome to Arizona",
      description:
        "This was one of my first projects for school. It helped me understand the structure of HTML and how to transform raw information into a meaningful, user-friendly interface.",
      techStack: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://les1g.github.io/welcomeToArizona/",
      githubLink: "https://github.com/les1g/welcomeToArizona",
      category: "frontend",
      status: "complete" as const,
    },
  ];

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h1>My Projects</h1>
        <p className="portfolio-subtitle">Explore my latest work</p>
      </div>

      {/* Featured Live Projects */}
      <section className="featured-projects">
        <PortfolioFilter projects={projects} />
      </section>

      {/* Development Projects */}
      <section className="other-projects">
        <h2>Development Projects</h2>
        <div className="project-list">
          <div className="project-item">
            <div className="project-info">
              <h3>Personal Website (This Site)</h3>
              <p>
                My very own realm on the internet! It was originally a simple
                mix of JavaScript, HTML, and CSS. I have now rebuilt using a
                modern stack with Next.js and TypeScript.
              </p>
              <div className="tech-stack">
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">TypeScript</span>
              </div>
              <a
                href="https://github.com/les1g/urban-palm-tree"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub →
              </a>
            </div>
            <div className="project-status">
              <span className="status-badge active">Live</span>
            </div>
          </div>

          <div className="project-item">
            <div className="project-info">
              <h3>Python Labs Collection</h3>
              <p>
                Collection of Python exercises where I work through algorithms
                and data structures. It's where I go when I want to sharpen my
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
                Frontend exercises where I experiment with new CSS techniques
                and responsive design patterns. Always something new to try
                here.
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

      <section className="about-section" style={{ textAlign: "center" }}>
        <h2>Let's Connect</h2>
        <p style={{ marginBottom: "var(--spacing-xl)" }}>
          Interested in working together? I'd love to hear from you!
        </p>
        <div
          style={{
            display: "flex",
            gap: "var(--spacing-md)",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href="/contact" className="btn btn-primary">
            Contact
          </Link>
          <Link href="/resume" className="btn btn-secondary">
            View Resume
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
