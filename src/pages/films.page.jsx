import { useState, useEffect } from "react";
import { filterFilmsByDirector, getListOf } from "../helpers/film.helpers";

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
            <ul>
                {filmsByDirector.map((film, index)=>{
                return <li key={index + film}>{film.title}</li>
                })}
            </ul>
      </div>
      )
    }

