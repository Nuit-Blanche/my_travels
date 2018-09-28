import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <Travel
          destination="Trip in Barcelona!"
          country="Espagne"
          photo="https://www.nacel.fr/medias/_cache/villes/11/imagePrincipale/1920_1440/sejour-linguistique-barcelone.jpg"
          distance="  À 1657,3 km de Marseille"
        />
        <Travel
          destination="Welcome to Lisboa!"
          country="Portugal"
          photo="https://cdn.logitravel.fr/contenidosShared/cruises/port/18/header.jpg"
          distance="  À 506,9 km de Marseille"       
       
        />
      </div>
    );
  }
}

export default App;