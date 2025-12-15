'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    // Check for saved theme preference only after mounting
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = savedTheme === 'dark';
    setIsDark(prefersDark);
    
    if (prefersDark) {
      document.body.classList.add('dark-theme');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => pathname === path;

  // Don't render theme-dependent content until mounted
  if (!mounted) {
    return (
      <header>
        <nav>
          <button 
            className="hamburger-menu"
            onClick={toggleMenu}
            aria-label="Toggle Navigation"
          >
            ☰
          </button>

          <div className={`nav-links ${isMenuOpen ? 'show-menu' : ''}`}>
            <Link href="/" className={isActive('/') ? 'active' : ''}>Home</Link>
            <Link href="/about" className={isActive('/about') ? 'active' : ''}>About</Link>
            <Link href="/portfolio" className={isActive('/portfolio') ? 'active' : ''}>Projects</Link>
            <Link href="/resume" className={isActive('/resume') ? 'active' : ''}>Resume</Link>
            <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Dark Mode">
              <svg className="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
                <path d="m12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <Link href="/">
            <Image src="/cute-polar-bear.svg" alt="cute polar bear" width={120} height={120} className="cute-polar-bear" />
          </Link>
        </nav>
      </header>
    );
  }

  return (
    <header>
      <nav>
        <button 
          className="hamburger-menu"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          ☰
        </button>

        <div className={`nav-links ${isMenuOpen ? 'show-menu' : ''}`}>
          <Link href="/" className={isActive('/') ? 'active' : ''}>Home</Link>
          <Link href="/about" className={isActive('/about') ? 'active' : ''}>About</Link>
          <Link href="/portfolio" className={isActive('/portfolio') ? 'active' : ''}>Projects</Link>
          <Link href="/resume" className={isActive('/resume') ? 'active' : ''}>Resume</Link>
          <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>

          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
          >
            <svg 
              className="sun-icon" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
              <path d="m12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <svg 
              className="moon-icon" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <Link href="/">
          <Image src="/cute-polar-bear.svg" alt="cute polar bear" width={120} height={120} className="cute-polar-bear" />
        </Link>
      </nav>
    </header>
  );
}