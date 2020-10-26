import React from 'react';
import { BrowserRouter as Router, Switch, Route } from  "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Container from './Container';

function App() {
  return (
    <Router>
        <Header />
        <Container />
        <Footer />
    </Router>
  );
}

export default App;
