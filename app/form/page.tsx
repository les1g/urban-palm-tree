'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FormPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mkgdbnyy', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Send Me a Message</h1>
        <p>
          Fill out the form below and I'll get back to you as soon as possible!
        </p>
      </div>

      <div className="contact-form-container">
        {status === 'success' && (
          <div className="flash-messages">
            <div className="flash-message success">
              ✓ Message sent successfully! I'll get back to you soon.
            </div>
          </div>
        )}

        {status === 'error' && (
          <div className="flash-messages">
            <div className="flash-message error">
              ✗ Oops! Something went wrong. Please try again or email me directly.
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your Name"
              disabled={status === 'submitting'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="your.email@example.com"
              disabled={status === 'submitting'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Let's talk about..."
              disabled={status === 'submitting'}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary submit-btn"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div style={{ 
          textAlign: 'center', 
          marginTop: 'var(--spacing-xl)',
          paddingTop: 'var(--spacing-xl)',
          borderTop: '1px solid var(--border-color)'
        }}>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}>
            Prefer a different method?
          </p>
          <div style={{ display: 'flex', gap: 'var(--spacing-sm)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:ggarr55@icloud.com" className="btn btn-outline">
              Email Me
            </a>
            <Link href="/contact" className="btn btn-secondary">
              View All Contact Options
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}