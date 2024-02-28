import React from 'react';
import css from './Counter.module.css';

const Controls = ({ onIncrement, onDecrement }) => {
  return (
    <div>
      <button
        type="button"
        onClick={onIncrement}
        className={css.counterControls}
      >
        Збільшити на 1
      </button>
      <button
        type="button"
        onClick={onDecrement}
        className={css.counterControls}
      >
        Зменшити на 1
      </button>
    </div>
  );
};

export default Controls;
