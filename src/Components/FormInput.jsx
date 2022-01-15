/** @format */

import React, { useState } from 'react';

function FormInput(props) {
  const [inputType] = useState(props.type);
  const [inputValue, setInputValue] = useState(props.value);

  function handleChange(event) {
    setInputValue(event.target.value);
    if (props.onChange) {
      props.onChange(event.target.value);
    }
  }

  return (
    <input
      type={inputType}
      value={inputValue}
      name='input-form'
      onChange={handleChange}
      className={props.className}
    />
  );
}
export default FormInput;
