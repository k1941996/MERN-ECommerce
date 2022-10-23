import React from 'react';
import './index.scss';

const ROOT = `homeContainer`;
const Home = () => {
  return (
    <div className={`${ROOT}__jumbotron`}>
      <h1>Welcome to Admin Dashboard</h1>
    </div>
  );
};

export default Home;
