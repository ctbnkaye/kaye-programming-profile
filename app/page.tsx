export default function Home() {
  return (
    <main>
      
{/* Navigation */}
<nav>
  <h2>KAYE.DEV</h2>

  <div>
    <a href="#home">Home</a>
    <a href="#education">Education</a>
    <a href="#skills">Skills</a>
    <a href="#certification">Certification</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </div>
</nav>

{/* Home / About Me */}
<section id="home">
  <div className="home-content">

    <p className="home-greeting">
      Hello, I'm Kaye M. Catabona
    </p>

    <p className="home-role">
      BSIT STUDENT / PROGRAMMER
    </p>

    <h1>
      Kaye M.
      <br />
      <span>Catabona</span>
    </h1>

    <p className="home-description">
      An Information Technology student learning to
      build useful and creative software solutions.
      I am currently developing my skills in programming,
      web development, and software development.
    </p>

    <div className="home-buttons">
      <a href="#projects" className="button-primary">
        View Projects
      </a>

      <a
        href="mailto:your-email@example.com"
        className="button-secondary"
      >
        Contact Me
      </a>
    </div>

    <div className="home-tech">
      <span>Java</span>
      <span>JavaScript</span>
      <span>React</span>
      <span>Next.js</span>
    </div>

  </div>
</section>
{/* Education */}
<section id="education">

  <div className="section-label">
    01 / EDUCATION
  </div>

  <h2 className="section-title">
    My Education
  </h2>

  <div className="education-card">

    <div className="education-main">
      <p className="education-year">
        2024 — PRESENT
      </p>

      <h3>
        Nueva Vizcaya State University
      </h3>

      <p className="education-degree">
        Bachelor of Science in Information Technology
      </p>
    </div>

    <div className="education-details">
      <p>
        Currently developing knowledge and practical
        skills in programming, web development,
        software engineering, databases, and
        systems integration.
      </p>
    </div>

  </div>

</section>

{/* Programming Skills */}
<section id="skills">

  <div className="section-label">
    02 / SKILLS
  </div>

  <h2 className="section-title">
    What I Work With
  </h2>

  <div className="skills-grid">

    <div className="skill-card">
      <div className="skill-top">
        <span>01</span>
        <span>LANGUAGES</span>
      </div>

      <h3>Programming</h3>

      <div className="skill-items">
        <span>Java</span>
        <span>JavaScript</span>
        <span>HTML</span>
        <span>CSS</span>
      </div>
    </div>

    <div className="skill-card">
      <div className="skill-top">
        <span>02</span>
        <span>FRAMEWORKS</span>
      </div>

      <h3>Web Development</h3>

      <div className="skill-items">
        <span>React</span>
        <span>Next.js</span>
        <span>Tailwind CSS</span>
      </div>
    </div>

    <div className="skill-card">
      <div className="skill-top">
        <span>03</span>
        <span>TOOLS</span>
      </div>

      <h3>Development Tools</h3>

      <div className="skill-items">
        <span>VS Code</span>
        <span>Git</span>
        <span>GitHub</span>
        <span>Vercel</span>
      </div>
    </div>

    <div className="skill-card">
      <div className="skill-top">
        <span>04</span>
        <span>LEARNING</span>
      </div>

      <h3>Currently Learning</h3>

      <div className="skill-items">
        <span>APIs</span>
        <span>Databases</span>
        <span>System Design</span>
        <span>Software Development</span>
      </div>
    </div>

  </div>

</section>

{/* Certification */}
<section id="certification">

  <div className="section-label">
    03 / CREDENTIAL
  </div>

  <h2 className="section-title">
    Certification
  </h2>

  <div className="certification-card">

    <div className="certification-info">

      <p className="certification-status">
        TESDA CERTIFIED
      </p>

      <h3>
        Computer Systems Servicing NC II
      </h3>

      <p className="certification-name">
        TESDA — CSS NC II
      </p>

      <div className="certification-dates">
        <div>
          <span>ISSUED</span>
          <strong>May 10, 2024</strong>
        </div>

        <div>
          <span>VALID UNTIL</span>
          <strong>May 09, 2029</strong>
        </div>
      </div>

    </div>

    <div className="certification-mark">
      NC II
    </div>

  </div>

</section>

{/* Projects */}
<section id="projects">

  <div className="section-label">
    04 / PROJECTS
  </div>

  <h2 className="section-title">
    Things I've Built
  </h2>

  <div className="projects-grid">

    {/* PROJECT 01 */}
    <article className="project-card">

      <div className="project-header">
        <span className="project-number">01</span>

        <span className="project-type">
          CURRENT PROJECT
        </span>
      </div>

      <h3>
        Certificate of Appearance
        Management System
      </h3>

      <p>
        A web-based system currently being developed
        to manage Certificate of Appearance requests,
        approvals, attendance records, and document
        release for a school setting.
      </p>

      <div className="project-tech">
        <span>Next.js</span>
        <span>React</span>
        <span>TypeScript</span>
      </div>

      <div className="project-links">
        <a href="#" className="github-link">
          GitHub ↗
        </a>

        <span className="project-status">
          In Development
        </span>
      </div>

    </article>


    {/* PROJECT 02 */}
    <article className="project-card">

      <div className="project-header">
        <span className="project-number">02</span>

        <span className="project-type">
          MIT PROJECT
        </span>
      </div>

      <h3>
        BMI Calculator
      </h3>

      <p>
        A simple application developed as part of
        MIT coursework that calculates Body Mass Index
        using a user's height and weight and displays
        the resulting BMI.
      </p>

      <div className="project-tech">
        <span>Programming</span>
        <span>GUI</span>
        <span>MIT</span>
      </div>

      <div className="project-links">
        <a href="#" className="github-link">
          GitHub ↗
        </a>

        <a href="#" className="demo-link">
          Details ↗
        </a>
      </div>

    </article>


    {/* PROJECT 03 */}
    <article className="project-card">

      <div className="project-header">
        <span className="project-number">03</span>

        <span className="project-type">
          MIT PROJECT
        </span>
      </div>

      <h3>
        Wage Calculator
      </h3>

      <p>
        A programming project developed as part of
        MIT coursework that calculates an employee's
        wage based on the provided work information
        and input values.
      </p>

      <div className="project-tech">
        <span>Programming</span>
        <span>GUI</span>
        <span>MIT</span>
      </div>

      <div className="project-links">
        <a href="#" className="github-link">
          GitHub ↗
        </a>

        <a href="#" className="demo-link">
          Details ↗
        </a>
      </div>

    </article>

  </div>

</section>

{/* Contact */}
<section id="contact">

  <div className="section-label">
    05 / CONTACT
  </div>

  <h2 className="section-title">
    Let's Connect
  </h2>

  <div className="contact-content">

    <p className="contact-text">
      Interested in working together, discussing a project,
      or simply connecting? Feel free to reach out.
    </p>

    <a
      href="mailto:catabonakaye@gmail.com"
      className="contact-email"
    >
      catabonakaye@gmail.com ↗
    </a>

  </div>

</section>

      {/* Footer */}
      <footer>
        <p>© 2026 Kaye M. Catabona</p>
        <p>Student Programmer</p>
      </footer>
    </main>
  );
}