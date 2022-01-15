/** @format */

import React, { Fragment, useState } from 'react';
import CustomButton from '../../../Components/CustomButton';
import FormInput from '../../../Components/FormInput';
import SubpageHeader from '../../../Components/SubpageHeader';

function FirstSubpage(props) {
  const [fullname, setFullname] = useState('');
  const [displayName, setDisplayName] = useState('');

  const handlePageSubmit = () => {
    sessionStorage.setItem('FirstName', displayName);
    console.log('Full Name: ', fullname);
    console.log('Display Name: ', displayName);
    props.changePage();
  };

  return (
    <Fragment>
      <div className={props.active ? 'show row' : 'hide row'}>
        <div className='col-12'>
          <SubpageHeader
            title='Welcome! First things first...'
            subtitle='You can always change them later.'
          />
        </div>
        <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 mx-auto'>
          <div className='fullnameArea'>
            <label>Full Name</label>
            <FormInput
              type='text'
              value=''
              className='textInput'
              onChange={(prop) => setFullname(prop)}
            />
          </div>
          <div className='displayNameArea my-4'>
            <label>Display Name</label>
            <FormInput
              type='text'
              value=''
              className='textInput'
              onChange={(prop) => setDisplayName(prop)}
            />
          </div>
          <CustomButton variant='create' size='lg' onClick={handlePageSubmit}>
            Create Workspace
          </CustomButton>
        </div>
      </div>
    </Fragment>
  );
}

export default FirstSubpage;
