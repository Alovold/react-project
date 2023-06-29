import { useState, useEffect } from "react";
import { filterFilmsByDirector, getListOf, getFilmStats } from "../helpers/film.helpers";
import { Link } from "react-router-dom";

export function FilmsPage(props) {
        const [list, setList] = useState([]);
        const [searchDirector, setSearchDirector] = useState("");

    function getFilms() {
        fetch("https://studioghibliapi-d6fc8.web.app/films")
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            return setList(data);
            // console.log(data[0]);
            // let filmArr = [];
            // for (let i = 0; i < data.length; i++) {
            //     filmArr.push(data[i].title);
            // }
            // setList( filmArr );
        })
        .catch((err)=>{
            return console.error(err);
        })
    }

    useEffect(() => {
        getFilms();
    }, [])

    let filmsByDirector = filterFilmsByDirector(list, searchDirector);
    let directors = getListOf(list, "director");
    let { acc_score, avg_score, latest, total } = getFilmStats(filmsByDirector);
    
    getFilmStats(list)

      return (
        <div>
            <h1>Studio Ghibli Films</h1>
            <form>
                
                <label htmlFor="searchDirector">Filter By Director</label>
                <select
                name="searchDirector"
                id="searchDirector"
                value={searchDirector}
                onChange={(e) => setSearchDirector(e.target.value)}
                >
                        <option value="">All</option>
                        {directors.map((data, id)=> {
                            return (<option key={id + data} value={data}>{data}</option>);
                        })}
                    </select>
                
            </form>
            <div>
  <div>
    <span># Of Films</span>
    <span>{total}</span>
  </div>
  <div>
    <span>Average Rating</span>
    <span>{avg_score.toFixed(2)}</span>
    {/* <br />
    <span>{acc_score}</span> */}
  </div>
  <div>
    <span>Latest Film</span>
    <span>{latest}</span>
  </div>
</div>
            <ul>
                {filmsByDirector.map((film, index)=>{
                return <li key={index + film}><Link to={`film/${film.id}`}>{film.title}</Link></li>
                })}
            </ul>
      </div>
      )
    }

