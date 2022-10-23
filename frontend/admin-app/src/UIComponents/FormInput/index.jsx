import React from 'react';
import './index.scss';
const ROOT = `UI_FormInput`;
const FormInput = (props) => {
  const { type, name, onChange, id, className, placeholder, error, label } = props;
  return (
    <div className={`${ROOT}__container ${className? `${className}`:''}`}>
      <label htmlFor={name} className={`${ROOT}__label ${error ? `${ROOT}__label-error` : ''}`}>
        {label}
      </label>
      <input
        type={type || 'text'}
        placeholder={placeholder}
        name={name}
        id={id}
        onChange={onChange}
        className={`${ROOT}__input ${error ? `${ROOT}__input-error` : ``}`}
      />
      {error && <span className={`${ROOT}__error`}>{error}</span>}
    </div>
  );
};

export default FormInput;
