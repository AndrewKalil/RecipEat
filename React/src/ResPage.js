import React, {Component} from 'react';
import "./css/myResultPage.css";
import "./css/styles.scss";
import { CardDeck } from 'react-bootstrap';


const ResPage = (props) => 
    <div className="container">
        <CardDeck>
            {props.ResultSearch}
        </CardDeck>
    </div>

export default ResPage;