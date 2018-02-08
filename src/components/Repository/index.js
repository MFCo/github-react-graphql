import React from 'react';
import PropTypes from 'prop-types';

import DirectoryTable from '../DirectoryTable';

import { connect } from 'react-redux';

const Repository = ({ name, owner, description, homepage }) => (
  <React.Fragment>
    <h1> <a href={`/${owner}`}> {owner} </a> / {name} </h1>
    <h3> {description} </h3>
    <p> <a href={homepage}> {homepage} </a> </p>
    <DirectoryTable />
  </React.Fragment>
);

Repository.propTypes = {
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  description: PropTypes.string,
  homepage: PropTypes.string
}

const mapStateToProps = ({ repository: { name, owner, description, homepage } }) => ({ name, owner, description, homepage });

export default connect(mapStateToProps)(Repository);