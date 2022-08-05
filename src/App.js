
import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading : true,
    movies : []
  }
  getMovies = async () => {
    //구조 분해 할당
    const {
      data: {
        data : {movies},
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    //movie state 변경 -> render() 실행
    //key ==변수 -> 변수 이름으로 축약 가능
    //영화 데이터를 가져오고 isLoading 업데이트
    this.setState({movies, isLoading:false });      
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const {isLoading, movies} = this.state;
    return (
      <section className="container">{isLoading ? (
        <div className ="loader">
          <span className ="loader__text">'Loading...' </span>
        </div>)
        : (<div className = "movies">
            {movies.map((movie)=> (
              <Movie 
                key = {movie.id}
                id = {movie.id} 
                year={movie.year} 
                title = {movie.title}
                summary = {movie.summary}
                poster = {movie.medium_cover_image}
                genres = {movie.genres}
              />
          ))}
          </div>
        )}
      </section>
    );
  }
}


export default App;
