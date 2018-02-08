import React from 'react';
import DirectoryTable from '../DirectoryTable';

const Repository = () => (
  <React.Fragment>
    <h1> User / Repo-name </h1>
    <h3> Description goes here </h3>
    <p> project-url.com </p>
    <DirectoryTable />
  </React.Fragment>
);

export default Repository;