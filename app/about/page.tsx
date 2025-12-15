import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="about-container">
      <section className="about-section">
        <h1>Hi there!</h1>
        <p>
          I began building websites two years before deciding to pursue my current degree 
          in software development at Western Governors University (WGU).
        </p>
        <p>
          I have worked in technical support positions at organizations such as Hulu. 
          I have a passion for user experience.
        </p>
        <p>
          These days, I still care deeply about user experience, but I've also developed 
          a strong interest in backend technologies and the full process of building 
          well-designed software and websites.
        </p>
      </section>

      <section className="about-section">
        <h2>What I Do</h2>
        <p>
          My work focuses on creating intuitive, user-friendly web experiences. I work with:
        </p>
        <ul>
          <li><strong>HTML & CSS</strong> - Building responsive, accessible layouts</li>
          <li><strong>JavaScript</strong> - Adding interactivity and dynamic features</li>
          <li><strong>React & Next.js</strong> - Creating modern web applications</li>
          <li><strong>Python & Flask</strong> - Backend development and APIs</li>
          <li><strong>Java</strong> - Object-oriented programming and applications</li>
        </ul>
        <p>
          Understanding both frontend and backend development helps me create better, 
          more cohesive projects from start to finish.
        </p>
      </section>

      <section className="about-section">
        <h2>Looking Forward</h2>
        <p>
          I find <strong>AI and machine learning</strong> fascinating and hope to integrate 
          these technologies into future projects. The intersection of traditional web 
          development and AI presents exciting opportunities that I'm eager to explore.
        </p>
        <p>
          When I'm not coding, I'm usually learning how to code better—through online 
          courses, documentation, or experimenting with new ideas. I believe in continuous 
          learning and staying curious about emerging technologies.
        </p>
      </section>

      <section className="connect-section">
        <h2>Let's Connect</h2>
        <p>
          I'm always open to new opportunities, collaborations, and conversations about 
          technology. Whether you have a project in mind or just want to chat about 
          development, feel free to reach out!
        </p>
        <div className="connect-buttons">
          <Link href="/contact" className="btn btn-primary">
            Get In Touch
          </Link>
          <a 
            href="https://github.com/les1g" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-github"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/gisel-garrido/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-linkedin"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}