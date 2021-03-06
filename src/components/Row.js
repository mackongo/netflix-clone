import './Row.css';
import React, { useState, useEffect } from 'react';
import axios from '../axios';

function Row({ title, fetchUrl, isLargeRow }) {

  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();

  }, [fetchUrl]);

  return (

    <div className="row">
      <h2 className="title">{title}</h2>
      <div className="row__posters">
        {movies.map(movie => (
          ((isLargeRow && movie.poster_path) ||
          (!isLargeRow && movie.backdrop_path)) && (
            <img
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              key={movie.id}
              alt={movie.name}
              src={`${base_url}${isLargeRow ? movie?.poster_path : movie.backdrop_path}`} />
          )
        ))}
      </div>
    </div>
  );
}

export default Row;