import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const VolunteerRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    experience: '',
    skill: '',
  });

  const [highlightedLink, setHighlightedLink] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const navLinkStyle = {
    fontSize: '16px',
    padding: '15px',
    color: '#e6e7fc',
    transition: 'color 0.3s ease-in-out',
    textDecoration: 'none',
    cursor: 'pointer',
  };

  const highlightedNavLinkStyle = {
    color: '#5c79e0',
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link
            href="#home"
            style={{ ...navLinkStyle, ...(highlightedLink === 'home' && highlightedNavLinkStyle) }}
            onMouseEnter={() => setHighlightedLink('home')}
            onMouseLeave={() => setHighlightedLink(null)}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#help"
            style={{ ...navLinkStyle, ...(highlightedLink === 'help' && highlightedNavLinkStyle) }}
            onMouseEnter={() => setHighlightedLink('help')}
            onMouseLeave={() => setHighlightedLink(null)}
          >
            Help
          </Nav.Link>
          <Nav.Link
            href="#about"
            style={{ ...navLinkStyle, ...(highlightedLink === 'about' && highlightedNavLinkStyle) }}
            onMouseEnter={() => setHighlightedLink('about')}
            onMouseLeave={() => setHighlightedLink(null)}
          >
            About
          </Nav.Link>
          <Nav.Link
            href="#services"
            style={{ ...navLinkStyle, ...(highlightedLink === 'services' && highlightedNavLinkStyle) }}
            onMouseEnter={() => setHighlightedLink('services')}
            onMouseLeave={() => setHighlightedLink(null)}
          >
            Services
          </Nav.Link>
          <Nav.Link
            href="#contact"
            style={{ ...navLinkStyle, ...(highlightedLink === 'contact' && highlightedNavLinkStyle) }}
            onMouseEnter={() => setHighlightedLink('contact')}
            onMouseLeave={() => setHighlightedLink(null)}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#2b3035',
        }}
      >
        <div
          className="container registration-container"
          style={{
            color: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(255, 255, 255, 1.2)',
          }}
        >
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h2 className="mb-4">VOLUNTEER REGISTRATION</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="experience" className="form-label">
                    Experience
                  </label>
                  <textarea
                    className="form-control"
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    rows="3"
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="skill" className="form-label">
                    Skill
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="skill"
                    name="skill"
                    value={formData.skill}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Register Me
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerRegistrationForm;
