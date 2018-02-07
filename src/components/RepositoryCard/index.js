import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const RepositoryCard = ({ name, description, color, language }) => (
  <div className="repository-card-layout">
    <h3 className="repository-card--title"> {name} </h3>
    <p className="repository-card--text"> {description} </p>
    <p className="repository-card--text">
      <span className="repository-card--language-icon" style={{ backgroundColor: color }} />
      {language}
    </p>
  </div>
);

RepositoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  color: PropTypes.string,
  language: PropTypes.string
};

export default RepositoryCard;