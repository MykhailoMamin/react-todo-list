import React from 'react';
import css from './Counter.module.css';

const Value = ({ spanValue }) => {
  return <span className={css.counterValue}>{spanValue}</span>;
};

export default Value;
