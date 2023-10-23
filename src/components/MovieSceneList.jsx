import MovieSceneItem from './MovieSceneItem';
import { Link } from 'react-router-dom';
function MovieSceneList({ movies }) {
  const renderMovies = movies.map((movie) => {
    return (
      <Link to={'/movie/' + movie.id} key={movie.id}>
        <li className='page_ulCard_card' >
          <MovieSceneItem movie={movie} />
        </li>
      </Link>
    );
  });
  return (
    <>
      <section className='container_main_movies'>
        {' '}
        <ul className='page_ulCard'>{renderMovies}</ul>
      </section>
    </>
  );
}

export default MovieSceneList;
