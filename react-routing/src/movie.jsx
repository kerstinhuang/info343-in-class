import React from "react";

const baseURL = "http://image.tmdb.org/t/p/";
const defaultSize = "w154"

export default class extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h2>{this.props.movie.title}</h2>
                <p>{this.props.movie.overview}</p>
                <img src= {baseURL + defaultSize + this.props.movie.poster_path}></img>
            </div>
        );
    }

}