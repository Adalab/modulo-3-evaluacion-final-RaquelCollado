import MovieSceneItem from './MovieSceneItem';
function MovieSceneList({ movies }) {
  const renderMovies = movies.map((movie) => {
    return (
      <li className='page_ulCard_card' key={movie.id}>
        <MovieSceneItem movie={movie}/>
      </li>
    );
  });
  return (
    <>
      <section className='container_main_movies'>
        {' '}
        <ul className='page_ulCard'>
          {renderMovies}
        </ul>
      </section>
    </>
  );
}

export default MovieSceneList;
