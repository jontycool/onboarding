/** @format */

import React, { useState, Fragment } from 'react';
import FormInput from '../../../Components/FormInput';
import CustomButton from '../../../Components/CustomButton';
import SubpageHeader from '../../../Components/SubpageHeader';

function SecondSubpage(props) {
  const [workspaceName, setWorkspaceName] = useState('');
  const [workspaceUrl, setWorkspaceUrl] = useState('');

  const handlePageSubmit = () => {
    console.log('WorkSpace Name: ', workspaceName);
    console.log(`WorkSpace Url: www.eden.com/${workspaceUrl}`);
    props.changePage();
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
          <div className='workspaceNameArea'>
            <label>Workspace Name</label>
            <FormInput
              type='text'
              value=''
              className='textInput'
              onChange={(prop) => setWorkspaceName(prop)}
            />
          </div>
          <div className='workspaceUrlArea my-4'>
            <label>
              Workspace URL <span>(optional)</span>
            </label>
            <div className='workspaceUrlContainer'>
              <span className='urlPlaceholder'>www.eden.com/</span>
              <FormInput
                type='text'
                value=''
                className='textInput textInputUrl'
                onChange={(prop) => setWorkspaceUrl(prop)}
              />
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

export default SecondSubpage;
