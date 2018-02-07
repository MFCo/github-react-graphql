import React from 'react';

import { connect } from 'react-redux';
import Profile from '../components/Profile';

import actions from '../actions';

import { initialQuery, searchQuery } from '../utils/queries';
import client from '../utils/graphQLClient';


const { updateUser } = actions;

class ProfilePage extends React.Component {
  componentDidMount() {
    this.props.location.pathname === '/' ?
      client.request(initialQuery())
        .then(
        data => {
          this.props.updateUser({
            newAvatar: data.viewer.avatarUrl,
            newName: data.viewer.name,
            newUser: data.viewer.login,
            newBio: data.viewer.bio,
            newCompany: data.viewer.company,
            newLocation: data.viewer.location,
            newMail: data.viewer.email,
            newWebsite: data.viewer.websiteUrl
          });
        })
        :
        client.request(searchQuery(this.props.location.pathname.substring(1)))
        .then(
        data => {
          this.props.updateUser({
            newAvatar: data.user.avatarUrl,
            newName: data.user.name,
            newUser: data.user.login,
            newBio: data.user.bio,
            newCompany: data.user.company,
            newLocation: data.user.location,
            newMail: data.user.email,
            newWebsite: data.user.websiteUrl
          });
        });
  }

  render() {
    return <Profile />;
  }
}

export default connect(undefined, { updateUser })(ProfilePage);