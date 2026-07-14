function ExperienceSection({ timeline }) {
  return (
    <section id="experience" className="section">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2>Career highlights</h2>
      </div>
      <div className="timeline">
        {timeline.map((item) => (
          <article className="timeline-card" key={item.title}>
            <div className="timeline-period">{item.period}</div>
            <h3>{item.title}</h3>
            <p className="company">{item.company}</p>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
