"use client";

import { useState } from "react";

type Project = {
  title: string;
  status: string;
  description: string;
  problem: string;
  built: string;
  features: string[];
  technologies: string[];
};

const projects: Project[] = [
  {
    title: "Certificate of Appearance Management System",
    status: "IN DEVELOPMENT",
    description:
      "A web-based system designed to help manage, record, and release Certificates of Appearance for school activities.",
    problem:
      "Manual Certificate of Appearance processing can involve repeated paperwork, checking, recording, and document preparation.",
    built:
      "A centralized web-based system where authorized users can manage activity requests, appearance records, and Certificate of Appearance generation.",
    features: [
      "Teacher login",
      "Activity request submission",
      "Activity approval",
      "Appearance time-in and time-out",
      "Electronic signature record",
      "Certificate of Appearance generation",
      "Certificate printing",
      "Feedback and administrative reports",
    ],
    technologies: ["Next.js", "React", "TypeScript", "CSS"],
  },
  {
    title: "BMI Calculator",
    status: "COMPLETED",
    description:
      "A simple calculator that determines Body Mass Index based on a user's height and weight.",
    problem:
      "Users need a quick way to calculate BMI without manually applying the BMI formula.",
    built:
      "An interactive calculator that accepts height and weight values and calculates the user's BMI.",
    features: [
      "Height input",
      "Weight input",
      "BMI calculation",
      "Result display",
      "Simple user interface",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "MIT Coursework"],
  },
  {
    title: "Wage Calculator",
    status: "COMPLETED",
    description:
      "A calculator designed to determine wages based on work-related inputs.",
    problem:
      "Manual wage calculations can be repetitive and prone to calculation errors.",
    built:
      "An interactive application that processes the user's work information and calculates the corresponding wage.",
    features: [
      "User input handling",
      "Wage calculation",
      "Automatic result display",
      "Interactive interface",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "MIT Coursework"],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    null
  );

  const closeMenu = () => setMenuOpen(false);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  return (
    <main className={lightMode ? "site light-mode" : "site"}>
      <div className="page-grid" />
      <div className="page-orb page-orb-one" />
      <div className="page-orb page-orb-two" />

      <header className="topbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          KAYE<span>.DEV</span>
        </a>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>
            <span>00</span> HOME
          </a>
          <a href="#education" onClick={closeMenu}>
            <span>01</span> EDUCATION
          </a>
          <a href="#skills" onClick={closeMenu}>
            <span>02</span> SKILLS
          </a>
          <a href="#certification" onClick={closeMenu}>
            <span>03</span> CERTIFICATION
          </a>
          <a href="#projects" onClick={closeMenu}>
            <span>04</span> PROJECTS
          </a>
          <a href="#contact" onClick={closeMenu}>
            <span>05</span> CONTACT
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume"
            onClick={closeMenu}
          >
            RESUME ↗
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={() => setLightMode(!lightMode)}
            aria-label="Toggle color theme"
          >
            {lightMode ? "☾" : "☀"}
          </button>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      <section id="home" className="hero section">
        <div className="hero-label">BSIT STUDENT · ASPIRING SOFTWARE ENGINEER</div>

        <h1>
          Hello, I&apos;m
          <br />
          <span>Kaye M. Catabona</span>
        </h1>

        <p className="hero-text">
          I&apos;m an Information Technology student interested in software
          development and building practical digital solutions. I enjoy
          turning ideas into working applications while continuously improving
          my programming and development skills.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="primary-button">
            VIEW PROJECTS
          </a>

          <a href="#contact" className="secondary-button">
            CONTACT ME
          </a>
        </div>

        <div className="hero-stack">
          <span>JAVA</span>
          <span>JAVASCRIPT</span>
          <span>REACT</span>
          <span>NEXT.JS</span>
          <span>GIT</span>
        </div>
      </section>

      <section id="education" className="section content-section">
        <div className="section-heading">
          <span>01</span>
          <h2>Education</h2>
        </div>

        <div className="education-card">
          <div>
            <p className="eyebrow">CURRENTLY STUDYING</p>
            <h3>Bachelor of Science in Information Technology</h3>
            <p>Nueva Vizcaya State University</p>
          </div>

          <div className="education-year">BSIT</div>
        </div>
      </section>

      <section id="skills" className="section content-section">
        <div className="section-heading">
          <span>02</span>
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">
          {[
            "Java",
            "JavaScript",
            "React",
            "Next.js",
            "HTML / CSS",
            "Git / GitHub",
            "VS Code",
            "Vercel",
          ].map((skill) => (
            <div className="skill-card" key={skill}>
              <span>+</span>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="certification" className="section content-section">
        <div className="section-heading">
          <span>03</span>
          <h2>Certification</h2>
        </div>

        <div className="certification-card">
          <div className="certificate-mark">NC II</div>

          <div className="certificate-info">
            <p className="eyebrow">TESDA CERTIFIED</p>
            <h3>Computer Systems Servicing NC II</h3>
            <p>Issued May 10, 2024</p>
            <p>Valid until May 09, 2029</p>
          </div>
        </div>
      </section>

      <section id="projects" className="section content-section">
        <div className="section-heading">
          <span>04</span>
          <h2>Projects</h2>
        </div>

        <p className="section-intro">
          Selected academic and development projects. Click a project to view
          more details.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <button
              className="project-card"
              key={project.title}
              onClick={() => openProject(project)}
            >
              <div className="project-number">
                0{index + 1}
                <span>↗</span>
              </div>

              <div className="project-status">{project.status}</div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tags">
                {project.technologies.slice(0, 3).map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-view">
                VIEW PROJECT <span>→</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="section-heading">
          <span>05</span>
          <h2>Contact</h2>
        </div>

        <div className="contact-layout">
          <div>
            <p className="contact-eyebrow">LET&apos;S CONNECT</p>
            <h2 className="contact-title">
              Have an idea?
              <br />
              Let&apos;s build it.
            </h2>
          </div>

          <div className="contact-links">
            <a href="mailto:catabonakaye@gmail.com">
              <span>EMAIL</span>
              catabonakaye@gmail.com ↗
            </a>

            <a
              href="https://github.com/ctbnkaye"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GITHUB</span>
              github.com/ctbnkaye ↗
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>RESUME</span>
              View Resume ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} KAYE M. CATABONA</span>
        <span>BUILT WITH NEXT.JS</span>
      </footer>

      {selectedProject && (
        <div
          className="project-overlay"
          onClick={closeProject}
          role="presentation"
        >
          <div
            className="project-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={closeProject}
              aria-label="Close project details"
            >
              ✕
            </button>

            <div className="modal-top">
              <span className="modal-status">{selectedProject.status}</span>
              <span className="modal-label">PROJECT DETAILS</span>
            </div>

            <h2>{selectedProject.title}</h2>

            <p className="modal-description">
              {selectedProject.description}
            </p>

            <div className="modal-content">
              <div className="detail-block">
                <span>01</span>
                <div>
                  <h3>Problem</h3>
                  <p>{selectedProject.problem}</p>
                </div>
              </div>

              <div className="detail-block">
                <span>02</span>
                <div>
                  <h3>What I Built</h3>
                  <p>{selectedProject.built}</p>
                </div>
              </div>

              <div className="detail-block">
                <span>03</span>
                <div>
                  <h3>Features</h3>

                  <ul>
                    {selectedProject.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="detail-block">
                <span>04</span>
                <div>
                  <h3>Technologies</h3>

                  <div className="modal-tags">
                    {selectedProject.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button className="modal-bottom-close" onClick={closeProject}>
              CLOSE PROJECT
              <span>↗</span>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}