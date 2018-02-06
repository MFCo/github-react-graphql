import React from 'react';
import './style.css';

import UserCard from '../UserCard';
import RepositoriesGrid from '../RepositoriesGrid';

const Profile = () => (
  <div className="profile-layout">
    <UserCard />
    <RepositoriesGrid />
  </div>
);

export default Profile;