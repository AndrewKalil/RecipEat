import React from 'react';
import './css/styles.css';

function Header() {
  return (
      <Navbar>
          <NavItems />
      </Navbar>
    );
}

function Navbar(props) 
{
    return (
        <nav>
            <ul> { props.children } </ul>
        </nav>
    );
}

function NavItems(props)
{
    return (
        <li>Home</li>
    );
}
export default Header;