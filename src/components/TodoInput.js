import React from 'react';

const TodoInput = (props) => {
  const { className, type, value, onChange, isRequired, autoComplete } = props;
  return (
    <>
      <input
        size="50"
        className={className}
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
  className: '',
  type: 'text',
  value: '',
  onChange: () => {},
  isRequired: 'false',
  autoComplete: 'off',
};

export default TodoInput;
