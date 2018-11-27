// eslint-disable-next-line linebreak-style
import React, { Component } from 'react';
import Menu from './Menu';
import Header from './Header';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <Menu />
      </div>
    );
  }
}
