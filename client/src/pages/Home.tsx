/**
 * Foundry Black design reminder: use editorial scale, charcoal-to-paper contrast, Foundry Clay accents,
 * monospaced metadata, and a structured personal narrative for an AI/technology portfolio.
 */
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

// Assets in public/ are served from the correct GitHub Pages project path.
const assetUrl = (filename: string) => `${import.meta.env.BASE_URL}images/${filename}`;

const projects = [
  {
    number: "01",
    title: "Pemaneh POS System",
    category: "Freelance / May 2026",
    discipline: "React · Next.js · TypeScript · Supabase",
    logo: assetUrl("pemaneh-logo.webp"),
    ratio: "wide",
  },
  {
    number: "02",
    title: "MS-PlateNet",
    category: "AI / Computer vision / Web application",
    discipline: "YOLOv8 · FastAPI · React · ONNX Runtime",
    image: assetUrl("ms-platenet.jpg"),
    ratio: "offset",
  },
  {
    number: "03",
    title: "ReflectAI Smart Mirror",
    category: "AI / Computer vision",
    discipline: "Python · YOLO · Roboflow · OpenCV",
    image: assetUrl("reflectai-smart-mirror.jpg"),
    ratio: "wide",
  },
  {
    number: "04",
    title: "Haslina Dental Website",
    category: "Web development",
    discipline: "HTML · CSS · JavaScript · Bootstrap",
    image: assetUrl("haslina-dental.jpg"),
    ratio: "offset",
  },
];

const education = [
  {
    period: "Aug 2023 — Present",
    title: "Bachelor of Computer Science (Artificial Intelligence) with Honours",
    organisation: "Universiti Teknikal Malaysia Melaka (UTeM) · Durian Tunggal, Melaka",
    detail: "CGPA 3.63/4.00. Dean’s List recipient for two semesters.",
  },
  {
    period: "Jun 2020 — Mar 2023",
    title: "Diploma in Information Technology (Digital Technology)",
    organisation: "Politeknik Sultan Idris Shah (PSIS) · Sabak Bernam, Selangor",
    detail: "CGPA 3.92/4.00. Dean’s List recipient in every semester.",
  },
];

const experience = [
  {
    period: "May 2026",
    title: "Freelance Developer — Pemaneh POS System",
    organisation: "Pemaneh · Retail point-of-sale and business management PWA",
    detail: "Designed and shipped a full-stack POS platform covering sales, inventory, customers, vendors, expenses, finance, reporting, payments, and role-based access.",
  },
  {
    period: "Feb 2024",
    title: "Data Entry",
    organisation: "Freelance client project",
    detail: "Processed and organised records accurately while self-initiating RPA to reduce repetitive manual input work.",
  },
  {
    period: "Jun 2023 — Aug 2023",
    title: "Inventory Tracking System (ITS) Assistant",
    organisation: "Wonway Manufacturing Sdn. Bhd.",
    detail: "Maintained inventory records, used RPA for data-entry workflows, and supported logistics reporting, preparation, and delivery activities.",
  },
  {
    period: "Oct 2022 — Mar 2023",
    title: "Software Programmer Intern",
    organisation: "Energetic Point Sdn. Bhd.",
    detail: "Developed and maintained ASP.NET MVC web applications, implemented SOAP web services, and contributed to design, coding, debugging, and testing.",
  },
];

const skillGroups = [
  {
    number: "01",
    title: "AI & Data",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing", "YOLO", "OpenCV", "ONNX Runtime", "Roboflow", "Object Detection"],
  },
  {
    number: "02",
    title: "Development",
    skills: ["Python", "C++", "Java", "SQL", "React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
  },
  {
    number: "03",
    title: "Tools & Insights",
    skills: ["UiPath RPA", "Power BI", "FastAPI", "Vite", "ASP.NET MVC", "SOAP Web Services", "PostgreSQL", "PWA Deployment"],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 28);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled && !menuOpen ? "is-scrolled" : ""} ${menuOpen ? "menu-is-open" : ""}`} id="top">
        <a href="#top" className="brand-lockup" aria-label="Muhammad Khairul Afiq Abdullah home">
          <span className="brand-mark-wrap">
            <img src={assetUrl("foundry-mark.png")} alt="" className="brand-mark" />
          </span>
          <span className="brand-name">Khairul Afiq</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#summary">Summary</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </nav>

        <a href="#contact" className="header-contact">
          <span className="signal-dot" />
          Get in touch
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <X size={22} strokeWidth={1.6} /> : <Menu size={23} strokeWidth={1.6} />}
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-inner">
          <span className="eyebrow">Portfolio index</span>
          <a href="#summary" onClick={closeMenu}>Summary <span>01</span></a>
          <a href="#education" onClick={closeMenu}>Education <span>02</span></a>
          <a href="#experience" onClick={closeMenu}>Experience <span>03</span></a>
          <a href="#skills" onClick={closeMenu}>Skills <span>04</span></a>
          <a href="#projects" onClick={closeMenu}>Projects <span>05</span></a>
        </div>
      </div>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-image-wrap" aria-hidden="true">
            <img src={assetUrl("hero-portrait.png")} alt="" className="hero-image user-portrait" />
            <div className="hero-shade" />
          </div>
          <div className="hero-content">
            <div className="hero-topline reveal-one">
              <span className="eyebrow light">Computer Science · Artificial Intelligence</span>
              <span className="availability"><i /> Internship-ready · September 2026</span>
            </div>
            <h1 id="hero-title" className="hero-title">
              <span className="reveal-two">Building intelligence</span>
              <span className="hero-title-shift reveal-three">that works.</span>
            </h1>
            <div className="hero-footer reveal-four">
              <p>Muhammad Khairul Afiq Abdullah — final-year AI student working across computer vision, machine learning, and software development.</p>
              <a href="#summary" className="scroll-cue">
                <span>Explore my story</span>
                <ArrowDown size={18} strokeWidth={1.4} />
              </a>
            </div>
          </div>
        </section>

        <section className="summary-section section-paper" id="summary" aria-labelledby="summary-title">
          <div className="section-rule" />
          <div className="summary-grid">
            <div className="aside-label">
              <span className="eyebrow">01 / Summary</span>
              <span className="locator" />
            </div>
            <div>
              <h2 id="summary-title" className="statement">
                An AI student turning real-world problems into <em>working</em> systems.
              </h2>
              <div className="summary-copy">
                <p>
                  Final-year Computer Science (Artificial Intelligence) student experienced in computer vision and machine learning, with hands-on work in YOLOv8, OpenCV, and ONNX Runtime. Proficient in Python, image processing, and model deployment, and seeking a six-month internship in AI, ML, NLP, data science, or software engineering from September 2026.
                </p>
                <div className="profile-note">
                  <span className="note-number">At a glance</span>
                  <span>Based in Petaling Jaya, Selangor. Available for a six-month internship from September 2026.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="timeline-section education-section" id="education" aria-labelledby="education-title">
          <div className="timeline-heading">
            <div>
              <span className="eyebrow light">02 / Education</span>
              <h2 id="education-title">Learning with<br /><em>intention.</em></h2>
            </div>
            <p>Academic work grounded in artificial intelligence, digital technology, and a consistent record of academic achievement.</p>
          </div>
          <div className="timeline-list">
            {education.map((item, index) => (
              <article className="timeline-item" key={item.title}>
                <div className="timeline-meta">
                  <span className="timeline-index">0{index + 1}</span>
                  <span>{item.period}</span>
                </div>
                <div className="timeline-main">
                  <h3>{item.title}</h3>
                  <p className="timeline-organisation">{item.organisation}</p>
                </div>
                <p className="timeline-detail">{item.detail}</p>
                <ArrowDownRight className="timeline-arrow" size={22} strokeWidth={1.35} />
              </article>
            ))}
          </div>
        </section>

        <section className="timeline-section experience-section section-paper" id="experience" aria-labelledby="experience-title">
          <div className="timeline-heading">
            <div>
              <span className="eyebrow">03 / Work experience</span>
              <h2 id="experience-title">Learning on<br />the <em>job.</em></h2>
            </div>
            <p>Experience across full-stack development, automation, inventory operations, and web application delivery.</p>
          </div>
          <div className="timeline-list">
            {experience.map((item, index) => (
              <article className="timeline-item" key={item.title}>
                <div className="timeline-meta">
                  <span className="timeline-index">0{index + 1}</span>
                  <span>{item.period}</span>
                </div>
                <div className="timeline-main">
                  <h3>{item.title}</h3>
                  <p className="timeline-organisation">{item.organisation}</p>
                </div>
                <p className="timeline-detail">{item.detail}</p>
                <ArrowDownRight className="timeline-arrow" size={22} strokeWidth={1.35} />
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section" id="skills" aria-labelledby="skills-title">
          <div className="skills-heading">
            <div>
              <span className="eyebrow light">04 / Skills</span>
              <h2 id="skills-title">A technical<br /><em>toolkit.</em></h2>
            </div>
            <div className="skills-side-note">
              <span>Languages</span>
              <p>Bahasa Melayu — Native<br />English — Fluent</p>
              <span>Certification</span>
              <p>Oracle Certified Foundations Associate, Database</p>
            </div>
          </div>
          <div className="skills-list">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.title}>
                <span className="skill-number">{group.number}</span>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="work-section" id="projects" aria-labelledby="projects-title">
          <div className="work-heading">
            <div>
              <span className="eyebrow light">05 / Projects</span>
              <h2 id="projects-title">Systems with a<br /><em>purpose.</em></h2>
            </div>
            <p>Selected work in full-stack product development, AI computer vision, real-time detection, and responsive web experiences.</p>
          </div>
          <div className="projects-list">
            {projects.map((project) => (
              <article className={`project-card project-${project.ratio}`} key={project.number}>
                <div className={`project-image-wrap ${project.logo ? "pemaneh-project" : ""}`}>
                  {project.logo ? (
                    <div className="pemaneh-logo-panel">
                      <span className="pemaneh-label">POS &amp; BUSINESS MANAGEMENT</span>
                      <img src={project.logo} alt="Pemaneh logo" className="pemaneh-logo" />
                      <span className="pemaneh-subtitle">Sales · Inventory · Finance · Reporting</span>
                    </div>
                  ) : (
                    <img src={project.image} alt={`${project.title} project preview`} className="project-image" />
                  )}
                  <a href="#contact" aria-label={`Enquire about ${project.title}`} className="project-arrow"><ArrowUpRight size={24} strokeWidth={1.4} /></a>
                </div>
                <div className="project-caption">
                  <span className="project-number">{project.number}</span>
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.discipline}</p>
                  </div>
                  <span className="project-category">{project.category}</span>
                </div>
              </article>
            ))}
          </div>
          <a href="https://github.com/khafieq02" target="_blank" rel="noreferrer" className="all-work-link">
            <span>See more on GitHub</span>
            <span className="circle-arrow"><ArrowRight size={19} strokeWidth={1.4} /></span>
          </a>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-intro">
            <span className="eyebrow light">06 / Contact</span>
            <span className="contact-orbit">●&nbsp; Open to internships</span>
          </div>
          <h2 id="contact-title">Let’s build<br />what <em>matters.</em></h2>
          <div className="contact-direct-links">
            <a className="email-link" href="mailto:khafieq02@gmail.com">
              khafieq02@gmail.com <ArrowUpRight size={31} strokeWidth={1.35} />
            </a>
            <a className="phone-link" href="tel:+601159702434">011-5970 2434</a>
          </div>
          <div className="contact-bottom">
            <p>Available for a six-month internship from September 2026 in AI, machine learning, data science, NLP, or software engineering.</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/khairulafiqabdullah/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/khafieq02" target="_blank" rel="noreferrer">GitHub</a>
              <a href="#top" className="top-link">Back to top <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 Muhammad Khairul Afiq Abdullah</span>
        <span>Artificial intelligence portfolio</span>
        <span className="footer-mark">KA<span className="footer-dot" /></span>
      </footer>
    </div>
  );
}
