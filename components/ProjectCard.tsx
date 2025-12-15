'use client';

import { useState, useEffect, useRef } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  category?: string;
  status?: 'active' | 'complete' | 'in-progress';
}

export default function ProjectCard({
  title,
  description,
  techStack,
  liveLink,
  githubLink,
  category,
  status
}: ProjectCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`project-card ${isVisible ? 'animate-in' : ''}`}
      data-category={category}
    >
      <div className="project-image">
        <div className="project-overlay">
          <div className="project-links">
            {liveLink && (
              <a 
                href={liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Live
              </a>
            )}
            {githubLink && (
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-github"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        
        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {status && (
          <div className="project-status">
            <span className={`status-badge ${status}`}>
              {status === 'active' && 'Active'}
              {status === 'complete' && 'Complete'}
              {status === 'in-progress' && 'In Progress'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}