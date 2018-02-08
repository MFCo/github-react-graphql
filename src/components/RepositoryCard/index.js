import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const RepositoryCard = ({ link, name, description, color, language }) => (
  <div className="repository-card-layout">
    <h3 className="repository-card--title"> <a href={link}> {name} </a> </h3>
    <p className="repository-card--text"> {description} </p>
    <p className="repository-card--text">
      <span className="repository-card--language-icon" style={{ backgroundColor: color }} />
      {language}
    </p>
  </div>
);

RepositoryCard.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  color: PropTypes.string,
  language: PropTypes.string
};

export default RepositoryCard;