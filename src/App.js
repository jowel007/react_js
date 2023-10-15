import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    // creating a state/assigning state

    this.state = {
      personName:'jowel',
      counter: 1
    }

  }

  clickHandler = (eventData) => {
    // this.personName = 'rohan';
    this.setState({
      personName:'rana'
    })
    console.log(this.state.personName);
  };

  incrementHandler = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  };

  render() {
    return (
      <div className="main">
        <h1>hello, {this.state.personName}</h1>
        <h2>Count: {this.state.counter}</h2>
        <button className="btn" onClick={this.clickHandler}>
          Click Me
        </button><hr></hr>
        <button className="btn" onClick={this.incrementHandler}>Increment</button>
      </div>
    );
  }
}

export default App;
