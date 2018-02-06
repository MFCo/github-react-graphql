import React, { Component } from 'react';
import './style.css';

class Header extends Component {

  searchValue;

  constructor(props) {
    super(props);
    this.searchElement = this.searchElement.bind(this);
  }
  searchElement(event) {
    event.preventDefault();
    console.log(this.searchValue.value);
  }

  render() {
    return (
      <header className="header-layout" >
        <h1 className="header-title">
          <a className="header-anchor" href="/">
            FakeHub
          </a>
        </h1>
        <form className="search-form" onSubmit={this.searchElement}>
          <input placeholder="Search users on FakeHub" ref={(input) => { this.searchValue = input }} className="search-input" type="text" />
        </form>
      </header>
    );
  }
}
export default Header;