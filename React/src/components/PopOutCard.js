import React from "react"
import {Link} from "react-router-dom"

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
                        <p>by: {this.props.source}</p>
                    </div>
                    <div className="myClock">
                        <div>{this.props.time}</div>
                    </div>
                </div>
                <div className="myRcardText">
                    <p>{this.props.text}</p>
                </div>
                <div className="myRcardButton">
                    <Link to={{
                        pathname: '/detail',
                        tData: this.props
                    }}>
                        <p>Ir!</p>
                    </Link>
                </div>
            </div>
        )
    }
}

export default PopOutCard