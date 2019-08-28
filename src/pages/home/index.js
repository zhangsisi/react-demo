import React, { Component } from 'react';

class App extends Component {
  render () {
    return (
      <div>
        header menu
        {this.props.children}
      </div>
    );
  }
}

export default App;
