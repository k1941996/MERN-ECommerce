import React from 'react';

import './index.scss';
const ROOT = `footer-component`;
const Footer = () => {
  return (
    <div className={`${ROOT}__container`}>
      <div className={`${ROOT}__row`}>
        All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
