import { useState, useEffect } from "react";

export function FilmsList(props) {
        const [list, setList] = useState([]);

    function getFilms() {
        fetch("https://studioghibliapi-d6fc8.web.app/films")
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            //console.log(data[0].title);
            let filmArr = [];
            for (let i = 0; i < data.length; i++) {
                filmArr.push(data[i].title);
            }
            setList( filmArr );
        })
        .catch((err)=>{
            console.log(err.message);
        })
    }

    useEffect(() => {
        getFilms();
    }, [])




      return (
        <ul>
        {list.map((film) => {
          return <li key={film.id}>{film.title}</li>;
        })}
      </ul>
      )
    }

