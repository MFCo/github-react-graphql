import React from 'react';

import DescriptionList from '../DescriptionList';

import './style.css';

const UserCard = () => (
  <div className="profile__card-layout">
    <React.Fragment>
      <div className="profile-img" />
      <div className="profile-main-info">
        <h1 className="profile-name"> Name Surname </h1>
        <h2 className="profile-user"> User </h2>
      </div>
    </React.Fragment>
    <p className="profile-bio">
      User bio goes here
    </p>
    <DescriptionList />
  </div>
);

export default UserCard;