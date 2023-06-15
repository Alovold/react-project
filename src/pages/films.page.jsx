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
            //console.log(data[0]);
            // let filmArr = [];
            // for (let i = 0; i < data.length; i++) {
            //     filmArr.push(data[i].title);
            // }
            // setList( filmArr );
            setList(data);
        })
        .catch((err)=>{
            console.log(err.message);
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
                <div className="form-group">
                    <label></label>
                    <select value={searchDirector} onChange={(option)=> setSearchDirector(option)}>
                        <option value="">All</option>
                        {directors.map((data, id)=> {
                            return <option key={id + data} value={data}>{data}</option>
                        })}
                    </select>
                </div>
            </form>
            <ul>
                {filmsByDirector.map((film, index)=>{
                return <li key={index + film}>{film}</li>
                })}
            </ul>
      </div>
      )
    }

