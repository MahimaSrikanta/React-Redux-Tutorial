import React from 'react';
import Navigation from './Navigations'

class App extends React.Component {
  render () {
    return(
      <div className="container">
      <Navigation />
      {this.props.children}
      </div>
    )
  }
}

export default App;