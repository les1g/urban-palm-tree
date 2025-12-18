import PortfolioFilter from "../../components/PortfolioFilter";
import Link from "next/link";

export default function PortfolioPage() {
  const projects = [
    {
      title: "Calculator",
      description:
        "A Python web app built with Flask. I focused on clean routing, templating, and backend logic.",
      techStack: ["Python", "Flask"],
      liveLink: "https://calcles1g.pythonanywhere.com/",
      githubLink: "https://github.com/les1g/Calculator",
      category: "backend",
      status: "active" as const,
    },
    {
      title: "Tax Services",
      description:
        "A tax business website built with Next.js and Tailwind CSS. It includes secure client login, document upload, and payment integration.",
      techStack: ["Next.js", "React", "TypeScript"],
      liveLink: "https://gg-tax.vercel.app/",
      githubLink: "https://github.com/les1g/GG-Tax",
      category: "fullstack",
      status: "active" as const,
    },
    {
      title: "Minnie's Portfolio",
      description:
        "Another school project. I focused on clean, modern portfolio design and user experience with responsive layouts.",
      techStack: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://les1g.github.io/minnies-portfolio/",
      githubLink: "https://github.com/les1g/minnies-portfolio",
      category: "frontend",
      status: "active" as const,
    },
    {
      title: "Welcome to Arizona",
      description:
        "This was one of my first projects for school. It helped me understand the structure of HTML and how to transform raw information into a meaningful, user-friendly interface.",
      techStack: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://les1g.github.io/welcomeToArizona/",
      githubLink: "https://github.com/les1g/welcomeToArizona",
      category: "frontend",
      status: "active" as const,
    },
    {
      title: "Personal Website (This Site)",
      description:
        "My very own realm on the internet! It was originally a simple mix of JavaScript, HTML, and CSS. I have now rebuilt it using a modern stack with Next.js and TypeScript.",
      techStack: ["Next.js", "React", "TypeScript"],
      githubLink: "https://github.com/les1g/urban-palm-tree",
      category: "fullstack",
      status: "active" as const,
    },
    {
      title: "Calculator App",
      description:
        "A simple Python calculator with a Tkinter GUI. It runs locally on your machine and demonstrates how core calculation logic can be connected to a desktop interface. Includes unit tests with Pytest for reliability.",
      techStack: ["Python", "Tkinter", "Pytest"],
      githubLink: "https://github.com/les1g/Calculator-App",
      liveLink: "",
      category: "desktop",
      status: "complete" as const,
    },
    {
      title: "Sudoku App",
      description:
        "A simple Sudoku solver and generator with a Tkinter GUI. It runs locally on your machine. The application allows users to generate random Sudoku puzzles, solve them, and interactively fill in the grid.",
      techStack: ["Python", "Tkinter", "NumPy", "Dokusan"],
      githubLink: "https://github.com/les1g/Sudoku-App",
      liveLink: "",
      category: "desktop",
      status: "complete" as const,
    },
    {
      title: "Python Labs Collection",
      description:
        "Collection of Python exercises where I work through algorithms and data structures.",
      techStack: ["Python", "Algorithms", "Problem Solving"],
      githubLink: "https://github.com/les1g/python_labs",
      liveLink: "",
      category: "backend",
      status: "in-progress" as const,
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

      {/* Contact Section */}
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
