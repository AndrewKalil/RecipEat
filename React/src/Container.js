import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ResPage from "./ResPage";
import DetailRecipe from "./DetailRecipe";
import LoginReg from "./Login";
import Recipe from "./Recipe";


function Container({ location }) {
    return (
        <TransitionGroup>
            <CSSTransition key={location.key}
            timeout={{ enter:300, exit:300 }}>
                <Switch location={ location }>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={AboutUs} />
                    <Route path='/respage' component={ResPage} />
                    <Route path='/detail' component={DetailRecipe} />
                    <Route path='/login' component={LoginReg} />
                    <Route path='/agregarReceta' component={Recipe} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    );
}

export default withRouter(Container);
