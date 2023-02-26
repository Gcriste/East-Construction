import React from 'react';

import config from '../config/index.json';

const Contact = () => {
  const { contact } = config;
  const { name, content } = contact;

  return (
    <div className="text-primary" id="contact">
      <h1>{name}</h1>
      <p>{content}</p>
    </div>
  );
};

export default Contact;
