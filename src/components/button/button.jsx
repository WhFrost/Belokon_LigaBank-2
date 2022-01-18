import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

function Button(props) {
  const {text, onClick, modificator} = props;
  return (
    <button
      type='button'
      className={`${styles['button']} ${styles[`button--${modificator}`]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  mod: PropTypes.string,
};

export default Button;
