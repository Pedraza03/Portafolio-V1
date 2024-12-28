import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import MundoCanvas from '../components/mundo';



const Contacto = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_lastname: '',
    user_email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await emailjs.send(
        'service_t4fn4yp',
        'template_szkq71e',
        {
          user_name: formData.user_name,
          user_lastname: formData.user_lastname,
          user_email: formData.user_email,
          message: formData.message,
        },
        '6ICiXW_jFPQI5TKYU'
      );

      if (result.text === 'OK') {
        alert('¡Mensaje enviado con éxito!');
        setFormData({ user_name: '', user_lastname: '', user_email: '', message: '' });
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el mensaje. Por favor, intenta nuevamente.');
    }
  };

  return (
    <>
      <StyledWrapper id="Contacto">
        <form className="form" onSubmit={handleSubmit}>
          <p className="title">Contactame </p>
          <p className="message">Deja tu mensaje y me pondré en contacto contigo lo antes posible.</p>
          <div className="flex">
            <label>
              <input 
                className="input" 
                type="text" 
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                required 
              />
              <span>Nombre</span>
            </label>
            <label>
              <input 
                className="input" 
                type="text" 
                name="user_lastname"
                value={formData.user_lastname}
                onChange={handleChange}
                required 
              />
              <span>Apellido</span>
            </label>
          </div>  
          <label>
            <input 
              className="input" 
              type="email" 
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required 
            />
            <span>Email</span>
          </label> 
          <label>
            <input 
              className="input" 
              type="text" 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required 
            />
            <span>Mensaje</span>
          </label>
          <button className="submit" type="submit">Enviar</button>
        </form>
        <div className='canvas-container'>
          <MundoCanvas />
        </div>
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;

  .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 450px;
    padding: 30px;
    border-radius: 20px;
    background-color: #1a1a1a;
    color: #fff;
    border: 1px solid #333;
  }

  .canvas-container {
    width: 450px;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 60px;
  }

  .title {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
    color: #00bfff;
  }

  .title::before {
    width: 18px;
    height: 18px;
  }

  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }

  .title::before,
  .title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: #00bfff;
  }

  .message, 
  .signin {
    font-size: 14.5px;
    color: rgba(255, 255, 255, 0.7);
  }

  .signin {
    text-align: center;
  }

  .signin a:hover {
    text-decoration: underline royalblue;
  }

  .signin a {
    color: #00bfff;
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    background-color: #333;
    color: #fff;
    width: 100%;
    padding: 25px 10px 10px 15px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
  }

  .form label .input + span {
    color: rgba(255, 255, 255, 0.5);
    position: absolute;
    left: 10px;
    top: 0px;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input:placeholder-shown + span {
    top: 12.5px;
    font-size: 0.9em;
  }

  .form label .input:focus + span,
  .form label .input:valid + span {
    color: #00bfff;
    top: 0px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .input {
    font-size: medium;
  }

  .submit {
    border: none;
    outline: none;
    padding: 15px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: .3s ease;
    background-color: #00bfff;
    margin-top: 10px;
  }

  .submit:hover {
    background-color: #00bfff96;
  }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }

    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .form {
      max-width: 300px;
      margin: 20px auto 0;
      margin-top: 100px;
    }
    .canvas-container {
      width: 300px;
      height: 300px;
      margin: 20px auto 0;
    }
  }
`;

export default Contacto;
