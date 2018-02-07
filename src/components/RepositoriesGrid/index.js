import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import { connect } from 'react-redux';
import actions from '../../actions';

import { nextRepositoryPage } from '../../utils/queries';
import client from '../../utils/graphQLClient';

import RepositoryCard from '../RepositoryCard';

const { addRepositories } = actions;


function handleClick(addRepositories, user, endCursor) {
  client.request(nextRepositoryPage(user, endCursor))
    .then(
    data => {
      addRepositories({
        newList: data.user.repositories.edges.map((element) => element.node),
        newHasNextPage: data.user.repositories.pageInfo.hasNextPage,
        newEndCursor: data.user.repositories.pageInfo.endCursor
      });
    }
    )
}

const RepositoriesGrid = ({ addRepositories, list, hasNextPage, endCursor, user }) => (
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
    {hasNextPage && <button onClick={() => handleClick(addRepositories, user, endCursor)} className="repositories-button"> Load more... </button>}
  </div>
);

RepositoriesGrid.propTypes = {
  list: PropTypes.array,
  hasNextPage: PropTypes.bool
};

const mapStateToProps = ({ repositories: { list, hasNextPage, endCursor }, user: { user } }) => ({ list, hasNextPage, endCursor, user });

export default connect(mapStateToProps, { addRepositories })(RepositoriesGrid);