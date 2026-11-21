:root {
  --bg-primary: #0a0f1d;
  --bg-surface: #111827;
  --bg-surface-hover: #1f2937;
  --text-main: #f9fafb;
  --text-muted: #9ca3af;
  --primary: #6366f1;
  --primary-hover: #4f46e5;
  --accent: #38bdf8;
  --border: rgba(255, 255, 255, 0.08);
  --radius: 12px;
  --shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
  --font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-family);
  background-color: var(--bg-primary);
  color: var(--text-main);
  line-height: 1.6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  width: 90%;
  max-width: 1080px;
  margin: 0 auto;
}

/* Navbar */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(12px);
  background-color: rgba(10, 15, 29, 0.85);
  border-bottom: 1px solid var(--border);
}

.nav-container {
  max-width: 1080px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-main);
  text-decoration: none;
}

.logo span {
  color: var(--primary);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.8rem;
}

.nav-links a {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: var(--text-main);
}

.btn-nav {
  padding: 0.5rem 1.1rem;
  background-color: var(--primary);
  color: #fff !important;
  border-radius: 9999px;
  font-weight: 600 !important;
  transition: all 0.2s ease;
}

.btn-nav:hover {
  background-color: var(--primary-hover);
  transform: translateY(-1px);
}

/* Hero Section */
.hero-section {
  padding: 6rem 1.5rem 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: radial-gradient(circle at 50% 20%, rgba(99, 102, 241, 0.15), transparent 70%);
}

.hero-content {
  max-width: 760px;
}

.badge {
  display: inline-block;
  padding: 0.4rem 1rem;
  background-color: rgba(99, 102, 241, 0.15);
  border: 1px solid rgba(99, 102, 241, 0.3);
  color: var(--accent);
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.hero-title {
  font-size: 3.2rem;
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 1.25rem;
}

.gradient-text {
  background: linear-gradient(135deg, #6366f1 0%, #38bdf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--text-muted);
  margin-bottom: 2.2rem;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.btn {
  display: inline-block;
  padding: 0.8rem 1.8rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary {
  background-color: var(--primary);
  color: #fff;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);
}

.btn-primary:hover {
  background-color: var(--primary-hover);
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: var(--bg-surface);
  color: var(--text-main);
  border: 1px solid var(--border);
}

.btn-secondary:hover {
  background-color: var(--bg-surface-hover);
  transform: translateY(-2px);
}

.social-quicklinks {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.social-quicklinks a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.social-quicklinks a:hover {
  color: var(--text-main);
}

/* Sections */
.section {
  padding: 4.5rem 0;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  text-align: center;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 50px;
  height: 4px;
  background: var(--primary);
  margin: 0.75rem auto 0;
  border-radius: 2px;
}

/* About Card */
.about-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 2.5rem;
  box-shadow: var(--shadow);
  text-align: center;
}

.about-card p {
  font-size: 1.15rem;
  color: var(--text-muted);
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.8;
}

.about-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.stat-box {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--accent);
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-muted);
}

/* Skills */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.skill-category {
  background-color: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.8rem;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.skill-category:hover {
  transform: translateY(-4px);
  border-color: rgba(99, 102, 241, 0.4);
}

.skill-category h3 {
  font-size: 1.15rem;
  margin-bottom: 1.2rem;
  color: var(--accent);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.tag {
  background-color: rgba(255, 255, 255, 0.05);
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-main);
  border: 1px solid var(--border);
}

/* Projects */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.project-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: rgba(99, 102, 241, 0.5);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4);
}

.project-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.project-pill {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.6rem;
}

.project-content h3 {
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
}

.project-content p {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.project-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.project-tags span {
  font-size: 0.75rem;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  background-color: rgba(99, 102, 241, 0.12);
  color: var(--primary);
  font-weight: 600;
}

.project-links a {
  color: var(--text-main);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.project-links a:hover {
  color: var(--accent);
}

/* Contact */
.contact-container {
  display: flex;
  justify-content: center;
}

.contact-card {
  background: linear-gradient(180deg, var(--bg-surface) 0%, rgba(17, 24, 39, 0.5) 100%);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 3rem 2rem;
  text-align: center;
  max-width: 600px;
  width: 100%;
}

.contact-card h2 {
  font-size: 2rem;
  margin-bottom: 0.8rem;
}

.contact-card p {
  color: var(--text-muted);
  margin-bottom: 2rem;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-button {
  display: inline-block;
  padding: 0.9rem 1.5rem;
  background-color: var(--primary);
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease;
}

.contact-button:hover {
  background-color: var(--primary-hover);
  transform: translateY(-2px);
}

.contact-button.secondary {
  background-color: var(--bg-surface-hover);
  border: 1px solid var(--border);
}

/* Footer */
.footer {
  margin-top: auto;
  padding: 2.5rem 0;
  border-top: 1px solid var(--border);
  text-align: center;
  color: var(--text-muted);
  font-size: 0.85rem;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }
  .nav-links {
    display: none;
  }
  .about-stats {
    gap: 1.5rem;
  }
}
