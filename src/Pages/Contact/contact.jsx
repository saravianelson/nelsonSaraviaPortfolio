import React, { useState } from 'react';
import './contact.css'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario, como una solicitud de API o un correo electrónico.
    console.log('Formulario enviado:', formData);
  };

  return (
    <div id="contact" className="contact-section">
      <div className="contact-headings">
        <h2>Keep in touch</h2>
        <div className="divider"></div>
      </div>

      <div className="container-contact">
        <div className="contact-form">
          <h4>Send me a message...</h4>

          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              placeholder="Place your message here"
              name="message"
              value={formData.message}
              onChange={handleChange}
              cols="30"
              rows="10"
            ></textarea>
            <button className="btn-submit" type="submit">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
;