import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="about-container">
      <section className="about-section">
        <Image
          src="/cute-polar-bear.svg"
          alt="cute polar bear"
          width={120}
          height={120}
          className="cute-polar-bear"
          priority
        />
        <h1>Hi there!</h1>
        <p>
          My love for software started early when I got my first Nintendo DS, I
          broke it more times than I’d like to admit, but in my defense I was
          five years old. I found myself drawn not just to the games but to the
          software behind the scenes that made them work.
        </p>
        <p>
          I did not always know this is what I wanted to do, then I became a
          team lead for Hulu, and that is when I decided to focus more on
          software development.
        </p>
        <p>
          More than anything, I enjoy connecting with others, sharing ideas, and
          collaborating on projects that make technology accessible and useful.
          If I can contribute software that helps people, that’s more than
          enough to make me happy.
        </p>
      </section>

      <section className="about-section">
        <h2>What I Do</h2>
        <p>
          My work focuses on creating intuitive, user-friendly web experiences.
          I work with:
        </p>
        <ul>
          <li>
            <strong>Next.js & React</strong> – Developing scalable, modern web
            applications with App Router and component-driven design
          </li>
          <li>
            <strong>TypeScript</strong> – Writing type-safe, maintainable code
            for reliability and clarity
          </li>
          <li>
            <strong>Tailwind CSS</strong> – Designing responsive, accessible
            layouts with utility-first styling
          </li>
          <li>
            <strong>Vercel</strong> – Deploying fast, serverless applications
            with seamless CI/CD
          </li>
          <li>
            <strong>Python & Flask</strong> – Building APIs and lightweight
            backend services
          </li>
        </ul>
        <p>
          Understanding both frontend and backend development helps me create
          better, more cohesive projects from start to finish.
        </p>
      </section>

      <section className="about-section">
        <h2>Looking Forward</h2>
        <p>
          I find <strong>AI and machine learning</strong> fascinating and hope
          to integrate these technologies into future projects. The intersection
          of traditional web development and AI presents exciting opportunities
          that I'm eager to explore.
        </p>
        <p>
          When I'm not coding, I'm usually learning how to be a better
          programmer or playing video games (I love Minecraft and Fortnite). I
          love going on early morning hikes with my friends, exploring nature,
          and capturing beautiful sunrises.
        </p>
        <p>
          I believe that continuous learning and staying curious is what builds
          great developers.
        </p>
      </section>
    </div>
  );
}
