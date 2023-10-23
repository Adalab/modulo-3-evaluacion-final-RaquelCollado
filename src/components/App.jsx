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

 {/*cogemos los años de las pelis para el select,evitamos que se dupliquen (set) los años */ }
  const years = listMovies.map((movie) => movie.year);
  const getYears = ()=>{
    const years = listMovies.map((movie) => movie.year);
    const uniquesYears = new Set(years);
    const uniquesArray = [...uniquesYears];
    return uniquesArray;
  }
  return (
    <div className='container'>
      <Header />
      <main className='container_main'>
        <section className='container_main_filters'>
          <Filters movieFilter={movieFilter} handleChange={handleChange} yearFilter={yearFilter} handleChangeYear={handleChangeYear}
          years={getYears()}/>
        </section>
        <section className='container_main_movies'>
{/*mensaje de error en caso de no encontrar lo filtrado*/ }
        {filteredMovies.length === 0 ? (
            <p className='errormsg'>The search has not returned results</p>
          ) : (
          <MovieSceneList movies={filteredMovies} />)}
        </section>
      </main>
    </div>
  );
}
export default App;
