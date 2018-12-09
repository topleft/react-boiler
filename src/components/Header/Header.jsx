import React from 'react';
import './styles.scss';

class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <h1>topleft</h1>
        <h2>react boiler</h2>
        <div className={'header__links'}>
          {this.props.children}
        </div>
      </header>
    );
  }
}

export default Header;
