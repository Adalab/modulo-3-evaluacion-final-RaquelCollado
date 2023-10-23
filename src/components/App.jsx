import '../styles/App.scss';
import { useEffect, useState } from 'react';
import getDataFromApi from '../services/Api';
import ls from '../services/LocalStorage';
import Header from './Header';
import MovieSceneList from './MovieSceneList';
import MovieSceneDetail from './MovieSceneDetail';
import Filters from './Filters';
import { Route, Routes } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';

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

  const filteredMovies = listMovies
    .filter((movie) => movie.name.toLowerCase().includes(movieFilter))
    .filter((movie) => {
      if (yearFilter === '') {
        return true;
      } else {
        return yearFilter === movie.year;
      }
    })
    .sort((a, b) => a.name.localeCompare(b.name));
 
  const years = listMovies.map((movie) => movie.year);
  const getYears = () => {
    const years = listMovies.map((movie) => movie.year);
    const uniquesYears = new Set(years);
    const uniquesArray = [...uniquesYears];
    return uniquesArray;
  };

//busco el usuario por el id de la ruta

const {pathname} = useLocation();
const routeData = matchPath('/movie/:id', pathname);
const movieId = routeData !== null ? routeData.params.id : '';

//busca usuario por id
const movieData = listMovies.find((movie)=> (movie.id === movieId));

  return (
    <div className='container'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header />
              <main className='container_main'>
                <section className='container_main_filters'>
                  <Filters
                    movieFilter={movieFilter}
                    handleChange={handleChange}
                    yearFilter={yearFilter}
                    handleChangeYear={handleChangeYear}
                    years={getYears()}
                  />
                </section>
                <section className='container_main_movies'>
                  {/*mensaje de error en caso de no encontrar lo filtrado*/}
                  {filteredMovies.length === 0 ? (
                    <p className='errormsg'>
                      The search has not returned results
                    </p>
                  ) : (
                    <MovieSceneList movies={filteredMovies} />
                  )}
                </section>
              </main>
            </>
          }
        ></Route>
        <Route path='/movie/:id'element={<MovieSceneDetail movie={movieData}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
