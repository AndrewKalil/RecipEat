import React from "react";
import FlipCard from "./components/FlipCard";
import {CardDeck, Jumbotron} from "react-bootstrap";
import InfoJason from "./components/InfoJason";
import './css/myAboutUs.css';

class Content extends React.Component {
    constructor() {
        super()
        this.state = {
            info: InfoJason
        }
    }
    render() {
        const inf = this.state.info.map(pInfo => <FlipCard
            id={pInfo.id}
            name={pInfo.name}
            text={pInfo.text}
            img={pInfo.image}
            twitter={pInfo.twitter}
            linkedin={pInfo.linkedin}
            github={pInfo.github}
            email={pInfo.email}/>)
        return (
            <div>
                <div className="myHeader">
                    <h1 className="aboutUsh1">About us</h1>
                    <CardDeck className="myCardDeck">
                        {inf}
                    </CardDeck>
                </div>
                <Jumbotron className="myAboutUs">
                    <div className="myContent">
                        <h3 className="myTitles">Historia de origen</h3>
                        <p>
                            RecipEat es una aplicación que como otras aplicaciones nació de una necesidad.
                            El propósito principal es sugerirle al usuario recetas fáciles y deliciosas
                            que se puedan preparar en casa, teniendo en cuenta el tiempo adecuado para cada
                            paso. La aplicación es capaz de hacer una búsqueda en la base de datos, la cual
                            tiene recetas tanto de usuarios como de otras personas alrededor del mundo, para
                            así retornar un resultado al usuario. Adicionalmente, la aplicación muestra una
                            sección de sugerencias de recetas que pueden ser preparadas con uno o dos
                            ingredientes más.
                        </p>
                        <br/>
                        <p>
                            En el equipo de RecipEat, trabajamos constantemente para brindar la mejor
                            experiencia para nuestros usuarios. Brindándoles la forma más fácil de obtener
                            las mejores recetas de cocina e interactuar con otros RecipEaters. Por eso, se
                            espera que la aplicación mejorara gradualmente.
                        </p>
                        <br/>
                        <p>
                            Actualmente nuestra aplicación favorece más los países de Latinoamérica porque
                            queremos crecer que nuestras recetas latinas tengan más reconocimiento
                            mundialmente. Sin embargo, esta está abierta a personas de todos los rincones
                            del mundo.
                        </p>
                    </div>

                </Jumbotron>
            </div>
        )
    }
}

/*class Content extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <header className="navbar hero" role="banner">
                    <div className="container">
                        <div className="navbar-header">
                            <a href="#" className="navbar-brand">
                                <p>
                                    <img
                                        src={logo}
                                    />
                                    RecipEat
                                </p>
                            </a>

                        </div>
                    </div>
                </header>
            </div>
        )
    }
}*/

class AboutUs extends React.Component {
    render() {
        return (
            <Content/>
        )
    }
}

export default AboutUs