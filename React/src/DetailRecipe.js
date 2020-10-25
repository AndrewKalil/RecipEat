import React, {useEffect, useState} from 'react';
import './css/myDetailRecipe.css';
// import Countdown from './components/Timer'
// import TodoQueue from './components/TodoQueue'


function DetailRecipe(props) {

    const tData = JSON.parse(localStorage.getItem('tData'))

    return (
        <div className="myContainer">
            <div className="dPageTitle">
                <h1>{tData.label}</h1>
                <h4>Owner: {tData.source}</h4>
            </div>
            <div className="dPageImg-ingredients">
                <img className="dPageImage" src={tData.image} alt=""/>
                <div className="dPageIngredients">
                    <ul>
                        {tData.ingredients.map((list, index) => <li key={index}>{list}</li>)}
                    </ul>
                </div>
            </div>
            <div className="dPageInstructions">
                <div className="dPageInsText">

                </div>
                <div className ="dPageInsClock">
                    {/* <Countdown
                        time={tData.totalTime}/> */}
                </div>
            </div>

        </div>
    )
}

export default DetailRecipe;