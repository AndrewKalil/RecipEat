import React from 'react';
import { BrowserRouter as Router, Switch, Route } from  "react-router-dom";
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import AboutUs from './AboutUs';
import ResPage from "./ResPage";
import DetailRecipe from "./DetailRecipe.js";
import './css/myAboutUs.css';
import Container from './Container';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Container />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
