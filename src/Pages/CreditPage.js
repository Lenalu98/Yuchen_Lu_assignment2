import React from 'react';
import '../styles/CreditPageStyles.css';

const CreditPage = () => {
  return (
    <div className="credits-container">
      <h1 className="credits-title">Credits</h1>
      <p className="credits-text">This project was created by Yuchen Lu.</p>
      
      <div className="credits-links">
        <p>Connect with me:</p>
        <ul>
          <li>
            <a href="https://github.com/Lenalu98?tab=repositories" target="_blank" rel="noopener noreferrer">
              GitHub Link - Source Codes
            </a>
          </li>
          <li>
            <a href="https://lenalu98.github.io/Yuchen-Lu-Website/" target="_blank" rel="noopener noreferrer">
              Personal Website
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/yuchen-lu-b8875b231/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CreditPage;