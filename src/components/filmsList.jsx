import { Component } from "react";

export class FilmsList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }
    }

    getFilms() {
        fetch("https://studioghibliapi-d6fc8.web.app/films")
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            console.log(data[0].title);
            let filmArr = [];
            for (let i = 0; i < data.length; i++) {
                filmArr.push(data[i].title);
            }
            this.setState({ list: filmArr });
        })
        .catch((err)=>{
            console.log(err.message);
        })
    }

    componentDidMount(){
        this.getFilms();
    }

    render() {
      return (
        <div>
      <ul>
        {this.state.list.map((film, index)=>{
        return <li key={index + film}>{film}</li>
      })}
      </ul>
      </div>
      )
    }
  }