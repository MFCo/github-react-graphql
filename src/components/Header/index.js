import React, { Component } from 'react';
import './style.css';
import { withRouter } from "react-router-dom";


class Header extends Component {

  searchValue;

  constructor(props) {
    super(props);
    this.searchElement = this.searchElement.bind(this);
  }
  searchElement(event) {
    event.preventDefault();
    this.props.history.push(`/${this.searchValue.value}`);
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
          <input placeholder="Search users on FakeHub by username" ref={(input) => { this.searchValue = input }} className="search-input" type="text" />
        </form>
      </header>
    );
  }
}
export default withRouter(Header);