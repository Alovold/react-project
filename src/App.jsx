import { Component } from "react";
//import logo from './logo.svg';
import './App.css';
import { FilmsList } from "./components/filmsList"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["ready", "set", "GO"],
      text: ""
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    let newArr = [...this.state.list, this.state.text];
    this.setState({ list: newArr, text: "" });
  }


  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <form onSubmit={this.onSubmit}>
        <input type ="text" value={this.state.text} onChange={(e) => {return this.setState({ text: e.target.value })}}></input>
        <button type = "submit">Add</button>
        </form>
        <ul>
          {this.state.list.map((item, id) => {
            return <li key={id + item}>{item}</li>;
          })}
        </ul>
        <FilmsList />
      </div>
    );
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>This is the header, I promise</h1>
//         <p>another paragraph before the image!</p>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           React is so cool!
//         </p>
//         <ul>
//           <li>a list item</li>
//           <li>a second list item</li>
//           <li>likely a third list item, time will tell...</li>
//         </ul>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
