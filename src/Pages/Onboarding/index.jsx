/** @format */

import React, { useState, Fragment } from 'react';
import FirstSubpage from './FirstSubpage';
import FourthSubpage from './FourthSubpage';
import SecondSubpage from './SencondSubPage';
import ThirdSubpage from './ThirdSubpage';

function Onboarding() {
  const [currentSubpage, setSubpage] = useState(1);

  return (
    <Fragment>
      <div className='row'>
        <div className='col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6 mx-auto'>
          <div className='logoArea'>
            <span className='mainLogo'></span>
            <span className='brandName'>Eden</span>
          </div>
          <div className='onboardingProgress'>
            <ul className='progressContainer'>
              <li className={currentSubpage >= 1 ? 'active' : ''} onClick={() => setSubpage(1)}>
                1
              </li>
              <li className={currentSubpage >= 2 ? 'active' : ''} onClick={() => setSubpage(2)}>
                2
              </li>
              <li className={currentSubpage >= 3 ? 'active' : ''} onClick={() => setSubpage(3)}>
                3
              </li>
              <li className={currentSubpage >= 4 ? 'active' : ''} onClick={() => setSubpage(4)}>
                4
              </li>
            </ul>
          </div>
          <div className='subpageArea'>
            <FirstSubpage
              active={currentSubpage === 1 ? true : false}
              changePage={() => setSubpage(currentSubpage + 1)}
            />
            <SecondSubpage
              active={currentSubpage === 2 ? true : false}
              changePage={() => setSubpage(currentSubpage + 1)}
            />
            <ThirdSubpage
              active={currentSubpage === 3 ? true : false}
              changePage={() => setSubpage(currentSubpage + 1)}
            />
            <FourthSubpage
              active={currentSubpage === 4 ? true : false}
              changePage={() => setSubpage(currentSubpage + 1)}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Onboarding;
