import { useState } from 'react';
//import './App.css';
//import { FilmsList } from "./components/filmsList"

export function HomePage(props) {
  const [list, setList] = useState(["ready", "set", "GO"])
  const [text, setText] = useState("");

function handleSubmit(event) {
  event.preventDefault();

  setList([...list, text])
}




    return (
      <div>
        <h1>Hello World</h1>
        <form onSubmit={handleSubmit}>
        <input type ="text" value={text} onChange={(e) => setText( e.target.value )}></input>
        <button type = "submit">Add</button>
        </form>
        <ul>
          {list.map((item, id) => {
            return <li key={id + item}>{item}</li>;
          })}
        </ul>

      </div>
    );
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

//export default HomePage;
