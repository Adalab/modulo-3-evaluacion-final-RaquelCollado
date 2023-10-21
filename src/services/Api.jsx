import React from 'react';
import { useState, useEffect } from 'react';

function Api() {
  const [listMovies, setListMovies] = useState([]);

  useEffect(() => {
    fetch('https://owen-wilson-wow-api.onrender.com/wows/random?results=50')
      .then((response) => response.json())
      .then((data) => {
        const cleanData = data.map((movie, index) => {
          return {
            poster: movie.poster,
            movie: movie.movie,
            year: movie.year,
            director: movie.director,
            fullLine: movie.full_line,
            audio: movie.audio,
            id: index,
          };
        });
        setListMovies(cleanData);
      });
  }, []);

  return (
    <div className='page'>
      <ul className='page_ulCard'>
        {listMovies.map((movie) => (
          <li className='page_ulCard_card' key={movie.id}>
            <img className='page_ulCard_card_poster' src={ movie.poster } alt={`Poster of ${movie.movie}`}/>
            <p className='page_ulCard_card_text1' > { movie.movie }</p> 
            <p className='page_ulCard_card_text2' >{ movie.year }</p> 
            <p className='page_ulCard_card_text3' >"{ movie.fullLine }"</p> 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Api;
