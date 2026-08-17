import './Services.css';

const services = [
  { icon: '💻', title: 'Web Development', desc: 'Professional websites and web applications tailored to your business needs.' },
  { icon: '🛠️', title: 'Software Development & Maintenance', desc: 'Custom software solutions and ongoing maintenance to keep your systems running optimally.' },
  { icon: '🔧', title: 'PC Hardware Repair & Optimization', desc: 'Expert hardware troubleshooting, repair, and performance optimization services.' },
  { icon: '📊', title: 'Data Capture & Analysis', desc: 'Accurate data capturing and insightful analysis to support informed business decisions.' },
  { icon: '🖥️', title: 'Supply of Computer Hardware', desc: 'Procurement and supply of quality computer hardware and peripherals.' },
  { icon: '🖨️', title: 'Office Equipment & Stationery', desc: 'Comprehensive supply of office furniture, stationery, and equipment.' },
  { icon: '🧹', title: 'Cleaning Materials Supply', desc: 'Supply of professional cleaning products and materials for workplace maintenance.' },
  { icon: '📦', title: 'General Supply', desc: 'Wide range of general supplies to meet diverse business and operational needs.' },
  { icon: '🌲', title: 'Forestry Activities', desc: 'Forestry-related services and supply activities supporting environmental and operational needs.' },
];

export default function Services() {
  return (
    <section id="services" className="services bg-light">
      <div className="container">
        <div className="accent-bar"></div>
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Comprehensive IT solutions and supply services tailored to your business needs</p>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
