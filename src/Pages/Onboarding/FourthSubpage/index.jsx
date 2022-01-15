/** @format */

import React, { Fragment } from 'react';
import CustomButton from '../../../Components/CustomButton';
import SubpageHeader from '../../../Components/SubpageHeader';

function FourthSubpage(props) {
  const handlePageSubmit = () => {
    console.log(`Onboarding Complete ${sessionStorage.getItem('FirstName')}!`);
    sessionStorage.removeItem('FirstName');
  };

  return (
    <Fragment>
      <div className={props.active ? 'show' : 'hide'}>
        <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 mx-auto'>
          <svg className='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'>
            <circle className='checkmark__circle' cx='26' cy='26' r='25' fill='none' />
            <path className='checkmark__check' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8' />
          </svg>
        </div>
        <div className='col-12'>
          <SubpageHeader
            title={`Congratulations, ${
              sessionStorage.getItem('FirstName') ? sessionStorage.getItem('FirstName') : 'Eren'
            }!`}
            subtitle='You have completed onboarding, you can start using the Eden!'
          />
        </div>
        <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 mx-auto mt-4'>
          <CustomButton variant='create' size='lg' onClick={handlePageSubmit}>
            Launch Eden
          </CustomButton>
        </div>
      </div>
    </Fragment>
  );
}

export default FourthSubpage;
