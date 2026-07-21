function HeroSection() {
  return (
    <header className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">Product Manager | Developer Experience</p>
        <h1>Sean O'Brien</h1>
        <p className="hero-text">
          I create thoughtful digital experiences that blend polished interfaces,
          reliable engineering, and a clear sense of purpose.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">
            Explore Projects
          </a>
          <a className="button secondary" href="mailto:sean@theseanobrien.com">
            Contact Me
          </a>
        </div>
        <ul className="social-links">
          <li>
            <a href="https://github.com/statmano" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="www.linkedin.com/in/sean-o-brien-71717650" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:sean@theseanobrien.com">Email</a>
          </li>
        </ul>
      </div>

      <div className="hero-card">
        <img
          className="avatar"
          src="https://file.garden/aHv0Hbj9PThoD4eE/Screenshot%202026-06-24%20120006.png"
          alt="Sean O'Brien"
        />
        <div className="hero-card-copy">
          <p className="card-label">Current focus</p>
          <h2>I'm a free agent!</h2>
          <p>
            I'm open to new opportunities and collaborations. If you're looking for a product manager with a strong background in developer experience, let's connect!
          </p>
        </div>
      </div>
    </header>
  )
}

export default HeroSection
