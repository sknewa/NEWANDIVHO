import './ObjectivesValues.css';

const objectives = [
  { icon: '⭐', title: 'Service Excellence', desc: 'Deliver high-quality IT solutions and services that exceed client expectations.' },
  { icon: '📈', title: 'Market Growth', desc: 'Expand our client base across various industries and sectors.' },
  { icon: '💡', title: 'Innovation', desc: 'Launch our local marketplace web application to support community commerce.' },
  { icon: '🤝', title: 'Community Empowerment', desc: 'Improve locally-owned businesses by giving them visibility within their communities through technology innovation, boosting the local economy and promoting job creation.' },
  { icon: '😊', title: 'Customer Satisfaction', desc: 'Maintain a 95%+ customer satisfaction rate through reliable service delivery.' },
  { icon: '🎓', title: 'Skills Development', desc: 'Continuously upgrade technical expertise to stay ahead of industry trends.' },
  { icon: '🚀', title: 'Business Expansion', desc: 'Diversify our product and service offerings to meet evolving market needs.' },
];

const values = [
  { icon: '💡', title: 'Innovation', desc: 'We push boundaries with technology that reshapes how businesses operate.' },
  { icon: '🤝', title: 'Integrity', desc: 'We build trust through transparency and ethical action in all we do.' },
  { icon: '🏆', title: 'Excellence', desc: 'Every solution, every service, delivered with precision and quality.' },
  { icon: '🌍', title: 'Community', desc: 'We elevate local businesses and create economic opportunities through technology.' },
  { icon: '👥', title: 'Customer-Centricity', desc: 'We deliver reliable, responsive service that exceeds expectations and builds lasting partnerships.' },
];

export default function ObjectivesValues() {
  return (
    <>
      <section id="objectives" className="objectives bg-light">
        <div className="container">
          <div className="accent-bar"></div>
          <h2 className="section-title">Our Objectives</h2>
          <p className="section-subtitle">Strategic goals that drive our growth and community impact</p>
          <div className="obj-grid">
            {objectives.map((o, i) => (
              <div className="obj-card" key={i}>
                <div className="obj-number">{String(i + 1).padStart(2, '0')}</div>
                <div className="obj-icon">{o.icon}</div>
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="values" className="values bg-primary">
        <div className="container">
          <div className="accent-bar"></div>
          <h2 className="section-title" style={{ color: 'white' }}>Our Core Values</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)' }}>
            The principles that guide everything we do
          </p>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-card" key={i}>
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
