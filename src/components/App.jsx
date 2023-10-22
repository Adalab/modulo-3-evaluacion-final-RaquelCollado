import '../styles/App.scss';
import { useEffect, useState } from 'react';
import getDataFromApi from '../services/Api';
import MovieSceneList from './MovieSceneList';
import Header from './Header';
import MovieSceneItem from './MovieSceneItem';

function App() {
  const [listMovies, setListMovies] = useState([]);

  useEffect(() => {
    getDataFromApi().then((cleanData) => {
      setListMovies(cleanData);
    });
  }, []);

  return (
    <div className='container'>
      <Header />
      <main>
        <section>
          
        </section>
        <section>
          <MovieSceneList movies= {listMovies} />
        </section>
      </main>
    </div>
  );
}
export default App;
