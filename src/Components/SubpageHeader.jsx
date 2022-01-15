/** @format */

import React, { Fragment } from 'react';

function SubpageHeader(props) {
  return (
    <Fragment>
      <div className='title'>{props.title}</div>
      <div className='subTitle'>{props.subtitle}</div>
    </Fragment>
  );
}

export default SubpageHeader;
