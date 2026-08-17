import './About.css';

export default function About() {
  return (
    <section id="vision" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <div className="accent-bar"></div>
            <h2 className="section-title">Who We Are</h2>
            <div className="about-card vision-card">
              <h3>🎯 Our Vision</h3>
              <p>
                To transform the way businesses operate by delivering accessible, high-quality IT solutions
                and workplace supplies that enable digital transformation and operational excellence.
                Through innovative platforms like our upcoming local marketplace app, we aim to strengthen
                community commerce by connecting customers with businesses in their area, fostering local
                economic growth.
              </p>
            </div>
            <div className="about-card mission-card">
              <h3>🚀 Our Mission</h3>
              <p>
                To provide businesses with comprehensive technology services and essential workplace
                resources, backed by expert support and a commitment to exceeding customer expectations.
              </p>
            </div>
          </div>

          <div className="about-right">
            <div className="about-card compliance-card">
              <h3>✅ Compliance & Certifications</h3>
              <div className="compliance-grid">
                <div className="compliance-item">
                  <span className="comp-label">B-BBEE Level</span>
                  <span className="comp-value">Level 1 Contributor</span>
                </div>
                <div className="compliance-item">
                  <span className="comp-label">Procurement Recognition</span>
                  <span className="comp-value">135%</span>
                </div>
                <div className="compliance-item">
                  <span className="comp-label">Ownership</span>
                  <span className="comp-value">100% Black Owned</span>
                </div>
                <div className="compliance-item">
                  <span className="comp-label">Enterprise Type</span>
                  <span className="comp-value">Exempted Micro Enterprise</span>
                </div>
                <div className="compliance-item">
                  <span className="comp-label">Tax Number</span>
                  <span className="comp-value">9770801190</span>
                </div>
                <div className="compliance-item">
                  <span className="comp-label">Reg. Number</span>
                  <span className="comp-value">2026/188845/07</span>
                </div>
              </div>
            </div>

            <div className="about-card management-card">
              <h3>👤 Management</h3>
              <div className="director-info">
                <div className="director-avatar">NN</div>
                <div>
                  <strong>Mr. Netshirembe Ndivho</strong>
                  <span>Founder & Director</span>
                </div>
              </div>
              <p>
                NEWANDIVHO(PTY)ltd is owned and managed by Mr. Netshirembe Ndivho, who brings
                extensive hands-on experience in software and web development to the company's
                leadership. With a strong technical background and practical expertise in delivering
                IT solutions, Mr. Ndivho guides the company's strategic direction and ensures the
                delivery of high-quality services to clients. His deep understanding of technology
                and commitment to innovation position the company to meet the evolving needs of
                businesses in the digital age.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
