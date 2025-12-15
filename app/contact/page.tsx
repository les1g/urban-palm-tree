import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>
          I'm always open to new opportunities, collaborations, and conversations 
          about technology. Let's connect!
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
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Phone</h3>
            <p>Call or text me</p>
            <a href="tel:6029071852">(602) 907-1852</a>
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Contact Form</h3>
            <p>Fill out a quick form</p>
            <Link href="/form">Send a message →</Link>
          </div>
        </div>
      </section>

      <section className="quick-message">
        <h2>Quick Actions</h2>
        <p>
          Choose the best way to reach out based on your needs
        </p>
        <div className="message-buttons">
          <Link href="/form" className="btn btn-outline">
            Contact Form
          </Link>
          <a 
            href="https://github.com/les1g" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-github"
          >
            View GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/gisel-garrido/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-linkedin"
          >
            LinkedIn Profile
          </a>
        </div>
      </section>
    </div>
  );
}