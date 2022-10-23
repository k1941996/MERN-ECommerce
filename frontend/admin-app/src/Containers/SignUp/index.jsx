import React, { useState } from 'react';
import Button from '../../UIComponents/Button';
import FormInput from '../../UIComponents/FormInput';
import './index.scss';

const ROOT = `signUpContainer`;
const SignUp = () => {
  const [details, setDetails] = useState({});
  const modifyDetails = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnClick = () => {
    console.log('Clicked', details);
  };

  return (
    <div className={`${ROOT}__upperContainer`}>
      <div className={`${ROOT}__container`}>
        <div className={`${ROOT}__row`}>
          <FormInput
            name="firstName"
            value={details.fname}
            onChange={modifyDetails}
            label={`First Name`}
          />
          <FormInput
            name="lastName"
            value={details.lname}
            onChange={modifyDetails}
            label={`Last Name`}
          />
        </div>
        <div className={`${ROOT}`}>
          <FormInput name="email" value={details.email} onChange={modifyDetails} label={`Email`} />
        </div>
        <div className={`${ROOT}`}>
          <FormInput
            name="password"
            type={'password'}
            value={details.password}
            onChange={modifyDetails}
            label={`Password`}
          />
        </div>
        <div className={`${ROOT}__submitContainer`}>
          <Button
            type="submit"
            name={`Submit`}
            className={`${ROOT}__submit-button`}
            onClick={handleOnClick}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
