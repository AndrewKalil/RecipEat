import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './css/styles.scss';
import logo from './assets/img/RecipEAT.svg';
import MenuItems from './components/MenuItems';
import Search from './components/search';
import { Button } from './components/Button';

class Header extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }
  render() {
	  return (
      <nav>
        <div className="navBar">
          <Link className="log-url" to="/">
            <img className="logo" src={ logo }/>
          </Link>
          <Search />
          <div className="menu-icon" onClick={ this.handleClick }>
            <i className={ this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
		      <ul className={ this.state.clicked ? 'nav-Items active' : 'nav-Items'}>
            { MenuItems.map((item, index) =>
            {
              return (
              <li key={ index }>
                <Link className={item.cName} to={item.url}>{ item.title }</Link>
              </li>
              )
            })}
            <Button><Link className="btn-log" to="/login"> Login</Link></Button>
          </ul>
        </div>
      </nav>
	  )
    };
}

export default Header;
