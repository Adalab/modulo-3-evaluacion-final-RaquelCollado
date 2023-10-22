import '../styles/App.scss';
import React from 'react';
import { useEffect, useState } from 'react';
import getDataFromApi from '../services/Api';
import ls from '../services/LocalStorage';
import Header from './Header';
import MovieSceneList from './MovieSceneList';
import MovieSceneItem from './MovieSceneItem';
import Filters from './Filters';

function App() {
  const [listMovies, setListMovies] = useState(ls.get('movies', []));
  const [movieFilter, setMovieFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');

  useEffect(() => {
    if (ls.get('movies', null) === null) {
      getDataFromApi().then((cleanData) => {
        setListMovies(cleanData);
        ls.set('movies', cleanData);
      });
    }
  }, []);

  const handleChange = (value) => {
    setMovieFilter(value);
  };

 const handleChangeYear = (value) => {
    setYearFilter(value === '' ? '' : parseInt(value));
  };

  const filteredMovies = listMovies.filter((movie) =>
    movie.name.toLowerCase().includes(movieFilter)
  ). filter(movie => {
    if(yearFilter === ''){
      return true;
    }else{
      return yearFilter === movie.year;
    }
  })

 
  const years = listMovies.map(movie => movie.year);
  return (
    <div className='container'>
      <Header />
      <main className='container_main'>
        <section className='container_main_filters'>
          <Filters movieFilter={movieFilter} handleChange={handleChange} yearFilter={yearFilter} handleChangeYear={handleChangeYear}
          years={years}/>
        </section>
        <section className='container_main_movies'>
          <MovieSceneList movies={filteredMovies} />
        </section>
      </main>
    </div>
  );
}
export default App;
