import React from 'react';
import history from './history';
import './css/myDetailRecipe.css';
//import Timer from './Components/Timer'

class DetailRecipe extends React.Component {
    constructor() {
        super()
        this.state = {
        }
        this.handleGoBack = this.handleGoBack.bind(this)
    }

    handleGoBack() {
        history.push('/')
    }

    render () {
        const {tData} = this.props.location

        return (
            <div className="myContainer">
                <div className="goBack">
                        <button onClick={this.handleGoBack}>
                            Back
                        </button>
                </div>
                <div className="dPageTitle">
                    <h1>{tData.label}</h1>
                    <h4>Owner: {tData.source}</h4>
                </div>
                <div className="dPageImg-ingredients">
                    <img className="dPageImage" src={tData.img} alt=""/>
                    <div className="dPageIngredients">
                        <ul>
                            {tData.ingredients.map(list => <li>{list}</li>)}
                        </ul>
                    </div>
                </div>
                <div className="dPageInstructions">
                    <div className="dPageInsText">

                    </div>
                    <div className="dPageInsClock">
                        {/* <Timer/> */}

                    </div>
                </div>

            </div>
        )
    }
}

export default DetailRecipe;