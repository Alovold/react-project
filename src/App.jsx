import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is the header, I promise</h1>
        <p>another paragraph before the image!</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React is so cool!
        </p>
        <ul>
          <li>a list item</li>
          <li>a second list item</li>
          <li>likely a third list item, time will tell...</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
