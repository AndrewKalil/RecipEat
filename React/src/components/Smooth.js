import React, { Component } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import $ from 'jquery';
import gsap from "gsap";
import '../css/styles.scss';
import Scrollbar from 'react-scrollbar';


function Smooth() {
    
        return (
            <div className="container-scroll">
                <section className="scroll"></section>
                <section className="c"></section>
                <section className="pin">
                    <div className="horizontal-text"></div>
                </section>
            </div>
        );
    }

export default Smooth;