import React from "react"
import { CardDeck } from "react-bootstrap"
import exampleFood from "../images/exampleFood.jpg"

const clock = "https://www.flaticon.com/svg/static/icons/svg/154/154448.svg"

class PopOutCard extends React.Component {
    render() {
        return (
            <div className="myRcard">
                <div>
                    <img src={this.props.img} alt="" className="myRcardImg"/>
                </div>
                <div className="myRcardTitleandClock">
                    <div className="myRcardTitle">
                        <p>{this.props.label}</p>
                    </div>
                    <div className="myClock">
                        <div>{this.props.time}</div>
                    </div>
                </div>
                <div className="myRcardText">
                    <p>{this.props.text}</p>
                </div>
                <div className="myRcardButton">
                    <p>Go!</p>
                </div>
            </div>
        )
    }
}

export default PopOutCard