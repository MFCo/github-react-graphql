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
        props.history.push(`/${data.viewer.login}`);
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
    return <Profile />
  }
}

export default connect(undefined, { updateUser, updateRepositories })(ProfilePage);