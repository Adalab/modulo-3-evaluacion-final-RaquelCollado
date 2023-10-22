import '../styles/App.scss';
import { useEffect, useState } from 'react';
import ls from '../services/LocalStorage';
import getDataFromApi from '../services/Api';
import MovieSceneList from './MovieSceneList';
import Header from './Header';
import MovieSceneItem from './MovieSceneItem';

function App() {
  const [listMovies, setListMovies] = useState(ls.get('movies', []));

  useEffect(() => {
    if (ls.get('movies', null)=== null) {
      getDataFromApi().then((cleanData) => {
        setListMovies(cleanData);
        ls.set('movies', cleanData);
      });
    }
  }, []);

  return (
    <div className='container'>
      <Header />
      <main>
        <section></section>
        <section>
          <MovieSceneList movies={listMovies} />
        </section>
      </main>
    </div>
  );
}
export default App;
