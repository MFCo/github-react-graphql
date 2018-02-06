import React from 'react';
import './style.css';

import RepositoryCard from '../RepositoryCard';

const RepositoriesGrid = () => (
  <div className="grid-layout">
    <RepositoryCard />
    <RepositoryCard />
    <RepositoryCard />
    <RepositoryCard />
    <RepositoryCard />
    <RepositoryCard />
  </div>
);

export default RepositoriesGrid;