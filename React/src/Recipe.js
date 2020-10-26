import React, { Component } from "react";
import RecipEAT from './assets/img/RecipEAT.svg';
import "./css/styles.scss";

class Recipe extends Component {
    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Agregar Recetas</div>
                <div className="content">
                <div className="image">
                    <img src={RecipEAT} />
                </div>
                <div className="form">
                    <div className="form-group">
                    <label htmlFor="username">Nombre de la Receta</label>
                    <input type="text" name="username" placeholder="username" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="Ana">Ingredientes</label>
                    <input type="text" name="password" placeholder="Anade una Descripcion" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="Ana">Time</label>
                    <input type="text" name="password" placeholder="Anade una Descripcion" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="Ana">Imagen</label>
                    <input type="text" name="password" placeholder="Anade una Descripcion" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="Ana">Descripcion</label>
                    <input type="text" name="password" placeholder="Anade una Descripcion" />
                    </div>
                </div>
                </div>
                <div className="footer-btn">
                <button type="button" className="btn-login">
                    Enviar
                </button>
                </div>
            </div>
        );
    }
}

export default Recipe;