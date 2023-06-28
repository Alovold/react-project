import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import './App.css';
import { HomePage, FilmsPage, SingleFilmPage } from './pages/index';

function App(props) {

    return (
      <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</ NavLink>
          </li>
          <li>
            <NavLink to="films">Films</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="films" element={<FilmsPage />} />
        <Route path="film/:id" element={<SingleFilmPage />} />
      </Routes>

      </BrowserRouter>
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

export default App;
