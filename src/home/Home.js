import React, { Component } from 'react';

import CoffeeCup from '../coffee-cup/CoffeeCup';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="header brown">
          <CoffeeCup fill="#fff" spinning={true} />
          <h2>Coffee Swoop</h2>
        </div>
        <p className="intro">
          Be nice.  Pickup coffee for somebody.
        </p>
      </div>
    )
  }
}

export default Home;
