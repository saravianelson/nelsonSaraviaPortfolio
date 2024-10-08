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
        <div className='contact-details'>
        <h3>Contact details:</h3>
        <ul>
        <li><a className='mail' href="https://www.icloud.com/mail/" target="_blank" rel="noopener noreferrer">nelsonsaravia2018@icloud.com</a></li>
        <li><p><a href="https://wa.me/9842080020" target="_blank" rel="noopener noreferrer"><b>+529842080020</b></a></p></li>
        <li><p>We can get in touch via <a href="https://www.linkedin.com/in/saravianelson/" target="_blank" rel="noopener noreferrer">Linkedin</a></p></li>
        </ul>
        </div>

        {/* <div className="contact-form">
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
        </div> */}
      </div>
    </div>
  );
}
;