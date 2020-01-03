import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return React.createElement(
//       "div",
//       null,
//       "Hello, world"
//     );
//   }
// }

// class App extends Component {
//   render() {
//     const greeting = "Hi, Tom!"
//     const dom = <h1>{greeting}</h1>
//     return dom;
//   }
// }

// class App extends Component {
//   render() {
//     return <input type="text" onClick={() => {console.log("Hi!")}} />
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onClick={() => {console.log("Hi!")}} />
//       </div>
//     )
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onClick={() => {console.log("Hi!")}} />
//       </React.Fragment>
//     )
//   }
// }

// const App = () => {
//   return <div>Hi!</div>
// }

// const App = () => {
//   return (
//     <div>
//       <Cat />
//       <Cat />
//       <Cat />
//       <Cat />
//     </div>
//   )
// }
// 
// const Cat = () => {
//   return <div>Meow!</div>
// }

const App = () => <Counter></Counter>

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 };
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 })
  }
  
  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render () {
    return (
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    );

  };
}

export default App;
