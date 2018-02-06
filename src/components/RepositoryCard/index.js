import React from 'react';
import './style.css';

const RepositoryCard = () => (
  <div className="repository-card-layout">
    <h3 className="repository-card--title"> Repository Name </h3>
    <p className="repository-card--text"> Some cool description </p>
    <p className="repository-card--text">
      <span className="repository-card--language-icon" />
      Language
    </p>
  </div>
);

export default RepositoryCard;