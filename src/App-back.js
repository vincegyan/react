import React, { Component } from 'react';
import MyComponent from './MyComponent';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //name: 'Initial name'
      //checked: true
      shouldRenderTitle: true
    };

    //this.updateCheck = this.updateCheck.bind(this);
  }

  //updateCheck() {
    //this.setState({ checked: !this.state.checked });
 //}

 renderTitle(){
    if(!this.state.shouldRenderTitle) { return null; } 
    
    return <h1>Title</h1>;
 }
  
  render() {
    return (
      <div className="App">
        {
          this.state.shouldRenderTitle
            ? <h1>Title</h1>
            : null
        }
      </div>
    );
  }
}

export default App;