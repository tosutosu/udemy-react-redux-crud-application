import React from 'react';

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
      { /* ← JSXの中でjavascriptを許可する */
        profiles.map((profile, index) => <User name={profile.name} age={profile.age} key={index} />)
      /* JSXの中でjavascriptを許可する → */ } 
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

/* デフォルト Props */
User.defaultProps = {
  age: 1
}

export default App;
