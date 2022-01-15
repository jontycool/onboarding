/** @format */

import React, { Fragment, useState } from 'react';
import CustomButton from '../../../Components/CustomButton';
import SubpageHeader from '../../../Components/SubpageHeader';

function ThirdSubpage(props) {
  const [workspaceShare, setWorkspaceShare] = useState('');

  const handlePageSubmit = () => {
    console.log('WorkSpace Type: ', workspaceShare);
    props.changePage();
  };

  const handleOptionSelection = (optionVal) => {
    setWorkspaceShare(optionVal);
  };

  return (
    <Fragment>
      <div className={props.active ? 'show row' : 'hide row'}>
        <div className='col-12'>
          <SubpageHeader
            title="Let's set up a home for all your work"
            subtitle='You can always create another workspace later.'
          />
        </div>
        <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 mx-auto'>
          <div className='optionContainer mb-4'>
            <div
              className={
                workspaceShare === 'Self' ? 'optionArea selfOption active' : 'optionArea selfOption'
              }
              onClick={() => handleOptionSelection('Self')}>
              <div className='optionIcon mb-4'>
                <i className='fa-solid fa-user'></i>
              </div>
              <div className='optionTitle mb-3'>For myself</div>
              <div className='optionText'>Write better. Think more clearly. Stay organized.</div>
            </div>
            <div
              className={
                workspaceShare === 'Team' ? 'optionArea teamOption active' : 'optionArea teamOption'
              }
              onClick={() => handleOptionSelection('Team')}>
              <div className='optionIcon mb-4'>
                <i className='fa-solid fa-users'></i>
              </div>
              <div className='optionTitle mb-3'>With my team</div>
              <div className='optionText'>Wikis, docs, tasks & projects, all in one place.</div>
            </div>
          </div>
          <CustomButton variant='create' size='lg' onClick={handlePageSubmit}>
            Create Workspace
          </CustomButton>
        </div>
      </div>
    </Fragment>
  );
}

export default ThirdSubpage;
