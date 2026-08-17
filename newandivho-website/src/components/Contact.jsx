import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Contact.css';

const SERVICE_ID = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('--- FORM SUBMIT TRIGGERED ---');
    console.log('Form data:', form);
    console.log('SERVICE_ID:', SERVICE_ID);
    console.log('TEMPLATE_ID:', TEMPLATE_ID);
    console.log('PUBLIC_KEY:', PUBLIC_KEY);

    if (!form.name || !form.email || !form.message) {
      console.warn('Validation failed - missing required fields');
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    setStatus('sending');
    setErrorMsg('');
    console.log('Calling emailjs.send...');

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      phone: form.phone || 'Not provided',
      service: form.service || 'Not specified',
      message: form.message,
      to_email: 'nathannetshirembe@gmail.com',
    };

    console.log('Template params:', templateParams);

    try {
      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      console.log('EmailJS SUCCESS:', result.status, result.text);
      setStatus('success');
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch (error) {
      console.error('EmailJS ERROR:', error);
      console.error('Error status:', error.status);
      console.error('Error text:', error.text);
      setStatus('error');
      setErrorMsg(`Failed to send: ${error.text || error.message || 'Unknown error'}`);
    }
  };

  return (
    <section id="contact" className="contact bg-light">
      <div className="container">
        <div className="accent-bar"></div>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Ready to work with us? Send us a message or reach out directly</p>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon"><FaPhone /></div>
                <div>
                  <span className="ci-label">Phone</span>
                  <a href="tel:0680962778" className="ci-value">068 096 2778</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><FaEnvelope /></div>
                <div>
                  <span className="ci-label">Email</span>
                  <a href="mailto:nathannetshirembe@gmail.com" className="ci-value">nathannetshirembe@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><FaMapMarkerAlt /></div>
                <div>
                  <span className="ci-label">Address</span>
                  <span className="ci-value">Olifantsfontein, Clayville<br />Gauteng, 1666</span>
                </div>
              </div>
            </div>

            <div className="bank-info">
              <h4>Banking Details</h4>
              <div className="bank-row"><span>Bank</span><strong>Standard Bank</strong></div>
              <div className="bank-row"><span>Account No.</span><strong>0000010271454359</strong></div>
              <div className="bank-row"><span>Branch</span><strong>Mall of Tembisa</strong></div>
              <div className="bank-row"><span>Branch Code</span><strong>051001</strong></div>
              <div className="bank-row"><span>SWIFT</span><strong>SBZAZAJJ</strong></div>
            </div>

            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#" aria-label="Facebook"><FaFacebook /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="YouTube"><FaYoutube /></a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {status === 'success' && (
              <div className="success-msg">
                ✅ Thank you! Your message has been sent. We'll get back to you shortly.
              </div>
            )}
            {status === 'error' && (
              <div className="error-msg">
                ❌ {errorMsg}
              </div>
            )}
            {errorMsg && status === 'idle' && (
              <div className="error-msg">❌ {errorMsg}</div>
            )}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Your phone number" />
                </div>
                <div className="form-group">
                  <label>Service Interested In</label>
                  <div className="select-wrapper">
                    <select name="service" value={form.service} onChange={handleChange}>
                      <option value="">Select a service</option>
                      <option>Web Development</option>
                      <option>Software Development & Maintenance</option>
                      <option>PC Hardware Repair & Optimization</option>
                      <option>Data Capture & Analysis</option>
                      <option>Supply of Computer Hardware</option>
                      <option>Office Equipment & Stationery</option>
                      <option>Cleaning Materials Supply</option>
                      <option>General Supply</option>
                      <option>Forestry Activities</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Message *</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project or inquiry..." rows={5} required></textarea>
              </div>
              <button type="submit" className="btn-primary submit-btn" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
