import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import DirectoryTable from '../DirectoryTable';

import actions from '../../actions';

import Star from '../../icons/star';

import { connect } from 'react-redux';

import { addStar, removeStar } from '../../utils/queries';
import client from '../../utils/graphQLClient';

const { starChange } = actions;

function handleStar(id, starred, starChange) {
  client.request(starred ? removeStar(id) : addStar(id))
    .then(
      data => { starChange({ newStarred: !starred }) }
    )
}

const Repository = ({ name, owner, description, homepage, id, starred, starChange }) => (
  <React.Fragment>
    <h1> <a href={`/${owner}`}> {owner} </a> / <a href={`/${owner}/${name}`}>{name} </a></h1>
    <button onClick={() => { handleStar(id, starred, starChange) }} className="star-btn"> <span className="star-btn__svg"> <Star /> </span>{starred ? 'Unstar' : 'Star'} </button>
    <h3> {description} </h3>
    <p> <a href={homepage}> {homepage} </a> </p>
    <DirectoryTable />
  </React.Fragment>
);

Repository.propTypes = {
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  description: PropTypes.string,
  homepage: PropTypes.string,
  id: PropTypes.string,
  starred: PropTypes.bool,
  starChange: PropTypes.func
}

const mapStateToProps = ({ repository: { name, owner, description, homepage, id, starred } }) => ({ name, owner, description, homepage, id, starred });

export default connect(mapStateToProps, { starChange })(Repository);