import React from 'react';

import s from './Buttons.module.css';

const Buttons = ({ onIncrementGood, onIncrementNeutral, onIncrementBad }) => {
  return (
    <div>
      <button type="button" className={s.buttons} onClick={onIncrementGood}>
        Good
      </button>
      <button type="button" className={s.buttons} onClick={onIncrementNeutral}>
        Neutral
      </button>
      <button type="button" className={s.buttons} onClick={onIncrementBad}>
        Bad
      </button>
    </div>
  );
};

export default Buttons;
