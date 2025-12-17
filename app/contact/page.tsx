import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>
          I'm always open to new opportunities, collaborations, and conversations!
        </p>
      </div>

      <section className="contact-methods">
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Email</h3>
            <p>Send me a message anytime</p>
            <a href="mailto:ggarr55@icloud.com">ggarr55@icloud.com</a>
          </div>

           <div className="contact-card">
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Contact Form</h3>
            <p>Fill out a quick form</p>
            <Link href="/form">Send a message →</Link>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>GitHub</h3>
            <p>Check out my code</p>
            <a href="https://github.com/les1g" target="_blank" rel="noopener noreferrer">@les1g</a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>LinkedIn</h3>
            <p>Let's connect professionally</p>
            <a href="https://www.linkedin.com/in/gisel-garrido/" target="_blank" rel="noopener noreferrer">Gisel Garrido</a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              {/* Bluesky icon */}
              <svg width="24" height="24" viewBox="0 0 600 530" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M300 231.67c-29.74-54.25-116.85-156.65-179-193.5C62.19 13.63 29.07 7.62 7.61 24.81-18.46 46.33-5.2 98.89 16.5 141.2c30.53 59.6 121.93 140.38 195.2 173.72-70.18-22.97-168.8-25.94-200.9 32.78-33.46 61.43 40.8 144.75 149.2 69.7 54.63-38.16 106.52-101.96 139.95-163.4 33.43 61.44 85.33 125.24 139.95 163.4 108.4 75.05 182.66-8.27 149.2-69.7-32.1-58.72-130.72-55.75-200.9-32.78 73.27-33.34 164.67-114.12 195.2-173.72 21.7-42.31 34.96-94.87 8.89-116.39-21.46-17.19-54.58-11.18-113.39 13.36-62.15 26.85-149.26 139.25-179 193.5Z" />
              </svg>
            </div>
            <h3>Bluesky</h3>
            <p>My blog and updates</p>
            <a href="https://bsky.app/profile/les1g.bsky.social" target="_blank" rel="noopener noreferrer">@les1g.bsky.social</a>
          </div>

          <div className="contact-card">
          <div className="contact-icon">
              {/* DEV icon */}
              <svg width="24" height="24" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M120 208c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h24c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32h-24zm328-48v192c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V160c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zM184 256c0 39.8-32.2 72-72 72h-24c-22.1 0-40-17.9-40-40v-64c0-22.1 17.9-40 40-40h24c39.8 0 72 32.2 72 72zm76.1 40.3c0 16.6-13.4 30-30 30-8.3 0-16.2-3.4-21.9-9.4l-8.1-8.7 13.9-12.5 6.2 6.6c2.1 2.2 5 3.4 7.9 3.4 6.2 0 11.3-5.1 11.3-11.3v-86.6c0-6.2-5.1-11.3-11.3-11.3-3 0-5.8 1.2-7.9 3.4l-6.2 6.6-13.9-12.5 8.1-8.7c5.7-6 13.6-9.4 21.9-9.4 16.6 0 30 13.4 30 30v100.4zm89.8-87.2-25.4 91.1c-3.3 11.8-14.1 20.1-26.4 20.1-12.3 0-23.1-8.3-26.4-20.1l-25.3-91.1h24.3l17.4 71.7 17.4-71.7h24.4z" />
              </svg>
            </div>
            <h3>DEV Community</h3>
            <p>Articles and learning notes</p>
            <a href="https://dev.to/les1g" target="_blank" rel="noopener noreferrer">@les1g</a>
        </div>

        </div>
      </section>
    </div>
  );
}