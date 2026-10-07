"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className={`site ${lightMode ? "light-mode" : "dark-mode"}`}>
      {/* =========================
          NAVIGATION
      ========================= */}
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          KAYE<span>.DEV</span>
        </a>

        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            <small>00</small>
            HOME
          </a>

          <a href="#education" onClick={closeMenu}>
            <small>01</small>
            EDUCATION
          </a>

          <a href="#skills" onClick={closeMenu}>
            <small>02</small>
            SKILLS
          </a>

          <a href="#certification" onClick={closeMenu}>
            <small>03</small>
            CERTIFICATION
          </a>

          <a href="#projects" onClick={closeMenu}>
            <small>04</small>
            PROJECTS
          </a>

          <a href="#contact" onClick={closeMenu}>
            <small>05</small>
            CONTACT
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-nav"
            onClick={closeMenu}
          >
            RESUME ↗
          </a>
        </nav>

        <div className="nav-actions">
          <button
            className="theme-button"
            onClick={() => setLightMode(!lightMode)}
            aria-label="Toggle theme"
          >
            {lightMode ? "☾" : "☀"}
          </button>

          <button
            className={`menu-button ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* =========================
          BACKGROUND
      ========================= */}
      <div className="page-grid" />
      <div className="page-orb" />

      {/* =========================
          HERO
      ========================= */}
      <section id="home" className="hero">
        <div className="hero-inner">
          <div className="hero-meta">
            <span>01 — STUDENT DEVELOPER</span>
            <span>PHILIPPINES</span>
          </div>

          <div className="hero-main">
            <p className="eyebrow">
              HELLO, I&apos;M KAYE M. CATABONA
            </p>

            <h1>
              Kaye M.
              <span>Catabona</span>
            </h1>

            <div className="hero-bottom">
              <div>
                <p className="role">
                  BSIT STUDENT / PROGRAMMER
                </p>

                <p className="hero-description">
                  I&apos;m an Information Technology student
                  learning to design and build useful digital
                  experiences through programming, web
                  development, and software projects.
                </p>

                <div className="hero-actions">
                  <a href="#projects" className="primary-button">
                    VIEW PROJECTS
                    <span>↗</span>
                  </a>

                  <a href="#contact" className="secondary-button">
                    CONTACT ME
                  </a>
                </div>
              </div>

              <div className="hero-stack">
                <span>JAVA</span>
                <span>JAVASCRIPT</span>
                <span>REACT</span>
                <span>NEXT.JS</span>
              </div>
            </div>
          </div>

          <div className="hero-footer">
            <span>SCROLL TO EXPLORE</span>
            <div className="scroll-arrow">↓</div>
          </div>
        </div>
      </section>

      {/* =========================
          EDUCATION
      ========================= */}
      <section id="education" className="section">
        <div className="section-top">
          <span>01 / EDUCATION</span>
          <span>BACKGROUND</span>
        </div>

        <div className="section-heading-row">
          <h2>Education</h2>
          <span className="section-index">01</span>
        </div>

        <div className="education-layout">
          <div className="education-year">
            <span>TERTIARY</span>
            <strong>BSIT</strong>
          </div>

          <div className="education-card">
            <div className="card-number">EDU_01</div>

            <p className="card-eyebrow">
              NUEVA VIZCAYA STATE UNIVERSITY
            </p>

            <h3>
              Bachelor of Science
              <br />
              in Information Technology
            </h3>

            <p className="card-description">
              Studying programming, web development,
              software engineering, databases, systems
              integration, and other areas of information
              technology.
            </p>

            <div className="card-footer">
              <span>NVSU — BAYOMBONG</span>
              <span>BSIT</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          SKILLS
      ========================= */}
      <section id="skills" className="section">
        <div className="section-top">
          <span>02 / SKILLS</span>
          <span>TECH STACK</span>
        </div>

        <div className="section-heading-row">
          <h2>What I use</h2>
          <span className="section-index">02</span>
        </div>

        <div className="skills-list">
          <div className="skill-row">
            <span className="skill-number">01</span>

            <div>
              <h3>Programming</h3>
              <p>
                Java, JavaScript, HTML, and CSS.
              </p>
            </div>

            <span className="skill-arrow">↗</span>
          </div>

          <div className="skill-row">
            <span className="skill-number">02</span>

            <div>
              <h3>Frontend</h3>
              <p>
                React, Next.js, responsive interfaces,
                and modern web development.
              </p>
            </div>

            <span className="skill-arrow">↗</span>
          </div>

          <div className="skill-row">
            <span className="skill-number">03</span>

            <div>
              <h3>Development Tools</h3>
              <p>
                VS Code, Git, GitHub, and Vercel.
              </p>
            </div>

            <span className="skill-arrow">↗</span>
          </div>

          <div className="skill-row">
            <span className="skill-number">04</span>

            <div>
              <h3>Currently Learning</h3>
              <p>
                APIs, databases, system design, and
                software development practices.
              </p>
            </div>

            <span className="skill-arrow">↗</span>
          </div>
        </div>
      </section>

      {/* =========================
          CERTIFICATION
      ========================= */}
      <section id="certification" className="section">
        <div className="section-top">
          <span>03 / CREDENTIAL</span>
          <span>CERTIFICATION</span>
        </div>

        <div className="section-heading-row">
          <h2>Certification</h2>
          <span className="section-index">03</span>
        </div>

        <div className="certification">
          <div className="cert-left">
            <span className="cert-label">
              TESDA CERTIFIED
            </span>

            <h3>
              Computer Systems
              <br />
              Servicing NC II
            </h3>

            <p>
              TESDA — CSS NC II
            </p>
          </div>

          <div className="cert-middle">
            <div>
              <span>ISSUED</span>
              <strong>May 10, 2024</strong>
            </div>

            <div>
              <span>VALID UNTIL</span>
              <strong>May 09, 2029</strong>
            </div>
          </div>

          <div className="cert-badge">
            <span>NC</span>
            <strong>II</strong>
          </div>
        </div>
      </section>

      {/* =========================
          PROJECTS
      ========================= */}
      <section id="projects" className="section">
        <div className="section-top">
          <span>04 / PROJECTS</span>
          <span>SELECTED WORK</span>
        </div>

        <div className="section-heading-row">
          <h2>Things I&apos;ve built</h2>
          <span className="section-index">04</span>
        </div>

        <div className="projects">
          <article className="project">
            <div className="project-top">
              <span>01</span>
              <span>IN DEVELOPMENT</span>
            </div>

            <div className="project-number">
              01
            </div>

            <h3>
              Certificate of Appearance
              <br />
              Management System
            </h3>

            <p>
              A web-based system currently being developed
              to manage Certificate of Appearance requests,
              approvals, appearance records, and document
              release for a school setting.
            </p>

            <div className="project-tags">
              <span>Next.js</span>
              <span>React</span>
              <span>TypeScript</span>
            </div>

            <div className="project-bottom">
              <span>2026</span>
              <span className="project-link">CURRENT PROJECT ↗</span>
            </div>
          </article>

          <article className="project">
            <div className="project-top">
              <span>02</span>
              <span>COMPLETED</span>
            </div>

            <div className="project-number">
              02
            </div>

            <h3>
              BMI
              <br />
              Calculator
            </h3>

            <p>
              A calculator application developed as part
              of programming coursework. It calculates BMI
              from user-provided height and weight.
            </p>

            <div className="project-tags">
              <span>Programming</span>
              <span>GUI</span>
              <span>MIT</span>
            </div>

            <div className="project-bottom">
              <span>COURSEWORK</span>
              <span className="project-link">COMPLETED ↗</span>
            </div>
          </article>

          <article className="project">
            <div className="project-top">
              <span>03</span>
              <span>COMPLETED</span>
            </div>

            <div className="project-number">
              03
            </div>

            <h3>
              Wage
              <br />
              Calculator
            </h3>

            <p>
              A programming project created as part of
              coursework that calculates wages from
              provided work and pay information.
            </p>

            <div className="project-tags">
              <span>Programming</span>
              <span>GUI</span>
              <span>MIT</span>
            </div>

            <div className="project-bottom">
              <span>COURSEWORK</span>
              <span className="project-link">COMPLETED ↗</span>
            </div>
          </article>
        </div>

        <div className="projects-note">
          <span>MORE PROJECTS COMING</span>
          <span>AS I KEEP BUILDING →</span>
        </div>
      </section>

      {/* =========================
          CONTACT
      ========================= */}
      <section id="contact" className="contact section">
        <div className="section-top">
          <span>05 / CONTACT</span>
          <span>GET IN TOUCH</span>
        </div>

        <div className="contact-heading">
          <p>HAVE A PROJECT IN MIND?</p>

          <h2>
            Let&apos;s make
            <br />
            something.
          </h2>
        </div>

        <div className="contact-bottom">
          <div>
            <p>
              I&apos;m always open to learning, collaborating,
              and connecting with people interested in
              technology and software development.
            </p>
          </div>

          <div className="contact-links">
            <a
              href="mailto:catabonakaye@gmail.com"
              className="contact-item"
            >
              <span>EMAIL</span>
              <strong>catabonakaye@gmail.com ↗</strong>
            </a>

            <a
              href="https://github.com/ctbnkaye"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <span>GITHUB</span>
              <strong>github.com/ctbnkaye ↗</strong>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <span>RESUME</span>
              <strong>View my resume ↗</strong>
            </a>
          </div>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================= */}
      <footer className="footer">
        <span>KAYE.DEV</span>
        <span>BSIT STUDENT / PROGRAMMER</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}