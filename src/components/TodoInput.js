import React from 'react';

const TodoInput = (props) => {
  const { type, value, onChange, isRequired, autoComplete } = props;
  return (
    <>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={isRequired}
        autoComplete={autoComplete}
      />
    </>
  );
};

TodoInput.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  isRequired: 'false',
  autoComplete: 'off',
};

export default TodoInput;
