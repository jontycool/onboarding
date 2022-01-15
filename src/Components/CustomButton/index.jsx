/** @format */

import React, { useState } from 'react';
import './/CustomButton.scss';

function CustomButton(props) {
  const [size] = useState(props.size);
  const [variant] = useState(props.variant);

  return (
    <button className={`btn-${variant} btn-${size}`} onClick={() => props.onClick()}>
      {props.children}
    </button>
  );
}

export default CustomButton;
