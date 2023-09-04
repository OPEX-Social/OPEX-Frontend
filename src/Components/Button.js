import React from 'react';
import PropTypes from 'prop-types';

import './../Styles/Button.css';

const Button = ({ label, onClick, className, disabled }) => {
  return (
    <button
      className={`generic-button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;