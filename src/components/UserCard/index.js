import React from 'react';
import PropTypes from 'prop-types';

import DescriptionList from '../DescriptionList';

import { connect } from 'react-redux';

import './style.css';

const UserCard = ({ name, user, bio, avatar }) => (
  <div className="profile__card-layout">
    <React.Fragment>
      <img className="profile-img" src={`${avatar}`} alt="profile pic" />
      <div className="profile-main-info">
        <h1 className="profile-name"> {name} </h1>
        <h2 className="profile-user"> {user} </h2>
      </div>
    </React.Fragment>
    
    {bio && <p className="profile-bio">
      {bio}
    </p>}

    <DescriptionList />
  </div>
);

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  bio: PropTypes.string
};

const mapStateToProps = ({ user: { name, user, bio, avatar } }) => ({ name, user, bio, avatar })


export default connect(mapStateToProps)(UserCard);