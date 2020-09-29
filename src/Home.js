import React, { Component } from 'react';
import './css/styles.css';

function Home() {

    
    return ( 
      <div className="container">
          <div class="swiper-container">
            <div class="swiper-wrapper">
            <div class="swiper-slide" style="background-image:url(http://lorempixel.com/600/600/nature/1)"></div>
            <div class="swiper-slide" style="background-image:url(http://lorempixel.com/600/600/nature/2)"></div>
            <div class="swiper-slide" style="background-image:url(http://lorempixel.com/600/600/nature/3)"></div>
        </div>
        <div class="swiper-pagination"></div>
        </div>
      </div>
    );
    
    }


export default Home;