import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import { connect } from 'react-redux';

import RepositoryCard from '../RepositoryCard';

const RepositoriesGrid = ({ list, hasNextPage }) => (
  <div className="grid-layout">
    {
      list.map((element) =>
        <RepositoryCard
          name={element.name}
          description={element.description}
          color={element.primaryLanguage && element.primaryLanguage.color}
          language={element.primaryLanguage && element.primaryLanguage.name}
          key={element.name} />
      )
    }
  </div>
);

RepositoriesGrid.propTypes = {
  list: PropTypes.array,
  hasNextPage: PropTypes.bool
};

const mapStateToProps = ({ repositories: { list, hasNextPage } }) => ({ list, hasNextPage });

export default connect(mapStateToProps)(RepositoriesGrid);