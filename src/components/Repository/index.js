import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import DirectoryTable from '../DirectoryTable';

import actions from '../../actions';

import Star from '../../icons/star';
import Watch from '../../icons/watch';

import { connect } from 'react-redux';

import { addStar, removeStar, updateWatch } from '../../utils/queries';
import client from '../../utils/graphQLClient';

const { starChange, watchChange } = actions;

function handleStar(id, starred, starChange) {
  client.request(starred ? removeStar(id) : addStar(id))
    .then(
      data => { starChange({ newStarred: !starred }) }
    )
}

function handleWatch(id, watching, watchChange) {
  client.request(updateWatch(id, watching ? 'UNSUBSCRIBED' : 'SUBSCRIBED'))
    .then(
      data => { watchChange({ newWatching: !watching }) }
    )
}

const Repository = ({ name, owner, description, homepage, id, starred, watching, starChange, watchChange }) => (
  <React.Fragment>
    <h1> <a href={`/${owner}`}> {owner} </a> / <a href={`/${owner}/${name}`}>{name} </a></h1>
    <span className="wrapper-btn">
      <button onClick={() => { handleStar(id, starred, starChange) }} className="star-btn"> <span className="star-btn__svg"> <Star /> </span>{starred ? 'Unstar' : 'Star'} </button>
      <button onClick={() => { handleWatch(id, watching, watchChange) }} className="star-btn"> <span className="star-btn__svg"> <Watch /> </span>{watching ? 'Unwatch' : 'Watch'} </button>
    </span>
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
  watching: PropTypes.bool,
  starChange: PropTypes.func,
  watchChange: PropTypes.func
}

const mapStateToProps = ({ repository: { name, owner, description, homepage, id, starred, watching } }) => ({ name, owner, description, homepage, id, starred, watching });

export default connect(mapStateToProps, { starChange, watchChange })(Repository);