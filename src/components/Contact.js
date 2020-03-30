import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="Contact">
      <img className="avatar" src="https://randomuser.me/api/portraits/women/90.jpg" alt="Avatar"/>
      <div>
        <h4 className="name">Jeanne Foster</h4>
        <div className="status">
          <span className="status-online"></span> 
          <p className="status-text">Online</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
