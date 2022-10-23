import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from './../Header';
import './index.scss';
const ROOT = `component_layout`;
const Layout = () => {
  return (
    <div className={`${ROOT}`}>
      <Header />
      <div className={`${ROOT}__content`}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
