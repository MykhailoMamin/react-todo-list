import React from 'react';
import Controls from './Controls';
import Value from './Value';
import css from './Counter.module.css';

class Counter extends React.Component {
  state = {
    value: 0,
  };

  handleIncrement = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
    this.setState(prevState => ({ value: prevState.value + 1 }));
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };

  render() {
    return (
      <div className={css.counter}>
        <Value spanValue={this.state.value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
