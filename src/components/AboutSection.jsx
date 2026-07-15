function AboutSection({ highlights }) {
  return (
    <section id="about" className="section">
      <div className="section-heading">
        <p className="eyebrow">About</p>
        <h2>Professional profile</h2>
      </div>
      <div className="about-grid">
        <p>
          I’m a Product Manager with wide-ranging experience who enjoys translating complex ideas into elegant,
          intuitive products. My work sits at the intersection of strategy,
          interface quality, and execution, with a strong emphasis on collaboration.
        </p>
        <ul className="highlights">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default AboutSection
