import React from 'react';
import PropTypes from 'prop-types';

import s from './Buttons.module.css';

const Buttons = ({ options, onLeaveFeedback }) => {
  const arrayKeysOptions = Object.keys(options);
  const ButtonsItem = item => {
    return (
      <button
        key={arrayKeysOptions.indexOf(item)}
        type="button"
        className={s.buttons}
        onClick={() => onLeaveFeedback(`${item}`)}
      >
        {item}
      </button>
    );
  };

  return arrayKeysOptions.map(ButtonsItem);
};

Buttons.propTypes = {
  options: PropTypes.objectOf(PropTypes.number),
};

export default Buttons;
