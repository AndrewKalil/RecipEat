import React from "react";
import FlipCard from "./components/FlipCard";
import {CardDeck} from "react-bootstrap";
import InfoJason from "./components/InfoJason";
import './css/myAboutUs.css';

class Content extends React.Component {
    constructor() {
        super()
        this.state = {
            info: InfoJason
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }


    render() {
        const front = this.state.info.slice(0, 3).map((item, index) =>
            <FlipCard
                key={index}
                name={item.name}
                text={item.text}
                img={item.image}
                twitter={item.twitter}
                linkedin={item.linkedin}
                github={item.github}
                email={item.email}
                member={item.member}
                especialities={item.especialities}
                education={item.education}
                fullName={item.fullName}
                />
            )
        const back = this.state.info.slice(3, 5).map((item, index) =>
            <FlipCard
                key={index}
                name={item.name}
                text={item.text}
                img={item.image}
                twitter={item.twitter}
                linkedin={item.linkedin}
                github={item.github}
                email={item.email}
                member={item.member}
                especialities={item.especialities}
                education={item.education}
                fullName={item.fullName}
                />
            )
        return (
            <div className="aboutPage">
                <div className="myHeader">
                    <h1 className="glowing">About us</h1>
                </div>
                <div className="myAboutUs">

                    <div className="myContent">
                        <h3 className="myTitles">Historia de origen</h3>
                        <br/>
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
                        <br/>
                        <br/>
                        <div className="myTitles">
                            <h3 style={{color: "royalblue"}}>Front End</h3>
                            <CardDeck className="myCardDeck">
                                {front}
                            </CardDeck>
                            <h3 style={{color: "palevioletred"}}>Back End</h3>
                            <CardDeck className="myCardDeck">
                                {back}
                            </CardDeck>
                        </div>
                        <br/>
                    </div>

                </div>
            </div>
        )
    }
}


class AboutUs extends React.Component {
    render() {
        return (
            <Content/>
        )
    }
}

export default AboutUs