import React, { Component } from 'react';
init()
function A () {
  console.log('a')
}
function B () {
  console.log('b')
}
function init () {
  A.call(B)
}
class App extends Component {
  componentDidMount () {
    this.init()
  }
  init () {
  }
  render () {
    return (
      <div>
        内容1
      </div>
    );
  }
}

export default App;
