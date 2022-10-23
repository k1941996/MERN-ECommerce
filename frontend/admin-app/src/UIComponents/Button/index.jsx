import React from 'react';
import './index.scss';
const ROOT = `UI_Button`;
const Button = (props) => {
  const { onClick, name, className } = props;
  return (
    <button onClick={onClick} className={`${ROOT}__button ${className ? `${className}` : ''}`}>
      {name}
    </button>
  );
};

export default Button;
