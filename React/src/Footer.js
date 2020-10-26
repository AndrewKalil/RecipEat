import React, { Component } from 'react';
import logo from './assets/img/recipEat.png';
import './css/styles.scss';

class Footer extends Component {
  render () {
    return (
    <div className="footer">
        <div className="box-footer">
            <div className="img-footer">
                <img src={logo}/>
            </div>
            <p>&copy;2020 RecipEat. All Rights Reserved.</p>
            <div className="net-footer">
                <a className="redes-box" href="#">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 
                        2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 
                        2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"></path>
                    </svg>
                </a>
                <a className="redes-box" href="#">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.162 5.656a8.384 8.384 0 
                        01-2.402.658A4.196 4.196 0 0021.6 
                        4c-.82.488-1.719.83-2.656 1.015a4.182 
                        4.182 0 00-7.126 3.814 11.874 11.874 
                        0 01-8.62-4.37 4.168 4.168 0 00-.566 
                        2.103c0 1.45.738 2.731 1.86 3.481a4.168 
                        4.168 0 01-1.894-.523v.052a4.185 4.185 0 
                        003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 
                        4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 
                        1.732 11.83 11.83 0 006.41 1.88c7.693 0 
                        11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496
                         8.496 0 002.087-2.165z"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    );
    }
}

export default Footer;