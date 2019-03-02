import React, { Component } from 'react'
import Header from './components/Header'
import Breadcrump from './components/Breadcrump'
import DescriptionSport from './components/DescriptionSport'

import GridContainer from './components/GridContainer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Breadcrump />
        <DescriptionSport />

        <GridContainer />
      </div>
    );
  }
}

export default App;
