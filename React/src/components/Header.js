import React, { Component } from 'react';
import '../css/styles.scss';
import logo from '../assets/img/recipEat.png';
import MenuItems from '../components/MenuItems';
import Search from '../components/search';
import { Button } from '../components/Button';


class Header extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }
  render() {
	  return (
      <nav>
        <div className="navBar">
          <a className="log-url" href="#">
            <img className="logo" src={ logo }/>
          </a>
          <Search />
          <div className="menu-icon" onClick={ this.handleClick }>
            <i className={ this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
		      <ul className={ this.state.clicked ? 'nav-Items active' : 'nav-Items'}>
            { MenuItems.map((item, index) =>
            {
              return (
              <li key={ index }>
                <a className={ item.cName } href={ item.url }>{ item.title }</a>
              </li>
              )
            })}
            <Button> Login</Button>
          </ul>
        </div>
      </nav>
	  )
    };
}

export default Header;
