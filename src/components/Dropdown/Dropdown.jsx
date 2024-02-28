import React from 'react';
import css from './Dropdown.module.css';

class Dropdown extends React.Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  //   show = () => {
  //     this.setState({ visible: true });
  //   };

  //   hide = () => {
  //     this.setState({ visible: false });
  //   };

  render() {
    return (
      <div className={css.dropdown}>
        <button type="button" onClick={this.toggle}>
          {this.state.visible ? 'Hide Menu' : 'Show Menu'}
        </button>
        {this.state.visible && (
          <div className={css.dropdownMenu}>Dropdown Menu</div>
        )}
      </div>
    );
  }
}

export default Dropdown;
