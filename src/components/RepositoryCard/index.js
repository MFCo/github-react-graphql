import React from 'react';
import PropTypes from 'prop-types';

import Star from '../../icons/star';
import Watch from '../../icons/watch';

import './style.css';

const RepositoryCard = ({ link, name, description, color, language, star, watch }) => (
  <div className="repository-card-layout">

    <h3 className="repository-card--title"> <a href={link}> {name} </a> </h3>
    <p className="repository-card--text"> {description} </p>
    <p className="repository-card--text">
      <span className="repository-card--language-icon" style={{ backgroundColor: color }} />
      {language}
    </p>
    <span className="repository-card--status">
      {watch && <Watch />}
      {star && <Star />}
    </span>
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