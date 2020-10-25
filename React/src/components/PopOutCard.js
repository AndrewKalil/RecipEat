import React, { Component, useEffect, useState } from "react"
import {Link} from "react-router-dom"

function PopOutCard (props){
    const importedData = props

    return (
        <div className="myRcard">
            <div>
                <img src={props.image} alt="" className="myRcardImg"/>
            </div>
            <div className="myRcardTitleandClock">
                <div className="myRcardTitle">
                    <p>{props.label}</p>
                    <p>by: {props.source}</p>
                </div>
                <div className="myClock">
                    <div>{props.totalTime}</div>
                </div>
            </div>
            <div className="myRcardText">
                <p>{props.text}</p>
            </div>
            <div className="myRcardBottom">
                <Link to={{
                    pathname: '/detail',
                    tData: importedData
                }}
                >
                    <button
                        className="btn myRcardButton"
                        onClick={() => props.saveData(importedData)}
                    >
                    Ir</button>
                </Link>
            </div>
        </div>
    )
}

export default PopOutCard