import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-tag">Est. September 2024 · Reg. 2026/188845/07</div>
          <h1 className="hero-title">
            NEWANDIVHO <span>(PTY) LTD</span>
          </h1>
          <p className="hero-tagline">Transforming Businesses Through Technology & Innovation</p>
          <div className="hero-divider"></div>
          <p className="hero-overview">
            NEWANDIVHO(PTY)ltd is a dynamic IT solutions company operating in the information
            technology industry. Established in September 2024 and officially registered in February
            2026, by Mr Netshirembe Ndivho who is from a previously disadvantaged background. The
            company specializes in delivering comprehensive technology services to meet the evolving
            needs of modern businesses. Our core offerings include professional web development,
            custom software development and maintenance, as well as reliable PC repair services. In
            addition to our IT solutions, we supply essential office equipment and cleaning materials
            to support complete workplace functionality. With a commitment to quality and innovation,
            NEWANDIVHO(PTY)ltd provides end-to-end IT solutions and office supplies that help
            organizations enhance their digital presence, streamline operations, and maintain optimal
            technology performance. The business exists to uplift the standard of living for the
            community in the region, the district, province and nationwide.
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn-primary">Our Services</a>
            <a href="#contact" className="btn-outline">Get a Quote</a>
          </div>
        </div>

        <div className="hero-image-side">
          <div className="hero-img-wrapper">
            <img src="/coverimage.jpg" alt="NEWANDIVHO" className="hero-cover-img" />
            <div className="hero-badge">
              <span className="badge-level">B-BBEE</span>
              <span className="badge-value">Level 1</span>
            </div>
            <div className="hero-badge-2">
              <span className="badge-level">100%</span>
              <span className="badge-value">Black Owned</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat">
          <span className="stat-number">9+</span>
          <span className="stat-label">Services Offered</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat">
          <span className="stat-number">135%</span>
          <span className="stat-label">Procurement Recognition</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat">
          <span className="stat-number">95%+</span>
          <span className="stat-label">Customer Satisfaction</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat">
          <span className="stat-number">100%</span>
          <span className="stat-label">Black Owned</span>
        </div>
      </div>
    </section>
  );
}
