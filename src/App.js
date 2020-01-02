import React from 'react';
import PropTypes from 'prop-types'

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

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5},
    { name: "Noname" }
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => <User name={profile.name} age={profile.age} key={index} />)
      } 
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

/* PropTypes */
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
