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
import { connect } from 'react-redux';

import { increment, decrement } from '../actions'

class App extends Component {

  render() {
    const props = this.props;

    return (
      <React.Fragment>
        <div>count: { props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    );

  }
}

const mapStateToProps = state => ({ value: state.count.value });
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
});
// ショートハンド
// const mapDispatchToProps = ({increment, decrement});

export default connect(mapStateToProps, mapDispatchToProps)(App);

