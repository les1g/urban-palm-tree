'use client';

import { useState } from 'react';
import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  category: string;
  status?: 'active' | 'complete' | 'in-progress';
}

interface PortfolioFilterProps {
  projects: Project[];
}

export default function PortfolioFilter({ projects }: PortfolioFilterProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  // Get unique categories from projects
  const categories = ['all', ...new Set(projects.map(p => p.category))];

  // Filter projects based on selected category
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div>
      {/* Filter Buttons */}
      <div className="filter-buttons" style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 'var(--spacing-sm)',
        marginBottom: 'var(--spacing-xl)',
        flexWrap: 'wrap'
      }}>
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            data-filter={category}
            onClick={() => setActiveFilter(category)}
            style={{
              padding: 'var(--spacing-sm) var(--spacing-lg)',
              borderRadius: '8px',
              border: '2px solid var(--border-color)',
              background: activeFilter === category 
                ? 'var(--primary-color)' 
                : 'transparent',
              color: activeFilter === category 
                ? 'white' 
                : 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'all var(--transition-smooth)',
              fontWeight: '500',
              textTransform: 'capitalize',
              fontSize: '0.95rem'
            }}
            onMouseEnter={(e) => {
              if (activeFilter !== category) {
                e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)';
                e.currentTarget.style.color = 'var(--primary-color)';
              }
            }}
            onMouseLeave={(e) => {
              if (activeFilter !== category) {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="project-grid">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
            category={project.category}
            status={project.status}
          />
        ))}
      </div>

      {/* No results message */}
      {filteredProjects.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: 'var(--spacing-2xl)',
          color: 'var(--text-secondary)'
        }}>
          <p style={{ fontSize: '1.2rem' }}>No projects found in this category.</p>
        </div>
      )}
    </div>
  );
}