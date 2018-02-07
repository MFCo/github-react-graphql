import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Profile from '../components/Profile';

import actions from '../actions';

import { initialQuery, searchQuery } from '../utils/queries';
import client from '../utils/graphQLClient';

const { updateUser, updateRepositories } = actions;

function fetchUser(props) {
  props.location.pathname === '/' ?
    client.request(initialQuery())
      .then(
      data => {
        props.updateUser({
          newAvatar: data.viewer.avatarUrl,
          newName: data.viewer.name,
          newUser: data.viewer.login,
          newBio: data.viewer.bio,
          newCompany: data.viewer.company,
          newLocation: data.viewer.location,
          newMail: data.viewer.email,
          newWebsite: data.viewer.websiteUrl
        });
        props.updateRepositories({
          newList: data.viewer.repositories.edges.map((element) => element.node),
          newHasNextPage: data.viewer.repositories.pageInfo.hasNextPage,
          newEndCursor: data.viewer.repositories.pageInfo.endCursor
        });
      })
    :
    client.request(searchQuery(props.location.pathname.substring(1)))
      .then(
      data => {
        props.updateUser({
          newAvatar: data.user.avatarUrl,
          newName: data.user.name,
          newUser: data.user.login,
          newBio: data.user.bio,
          newCompany: data.user.company,
          newLocation: data.user.location,
          newMail: data.user.email,
          newWebsite: data.user.websiteUrl
        });
        props.updateRepositories({
          newList: data.user.repositories.edges.map((element) => element.node),
          newHasNextPage: data.user.repositories.pageInfo.hasNextPage,
          newEndCursor: data.user.repositories.pageInfo.endCursor
        });
      });
}

class ProfilePage extends React.Component {

  static propTypes = {
    updateUser: PropTypes.any,
    updateRepositories: PropTypes.any
  }

  componentWillReceiveProps(newProps) {
    fetchUser(newProps);
  }

  componentDidMount() {
    fetchUser(this.props);
  }

  render() {
    return <Profile />;
  }
}

export default connect(undefined, { updateUser, updateRepositories })(ProfilePage);