function MovieSceneItem({movie}) {
  return (
    // image: item.poster,
    // name: item.movie,
    // year: item.year,
    // line: item.full_line,
    // director: item.director,
    // audio: item.audio,
    // id: uuid(),
    <div>
        <a href='#'>
          <img
            className='page_ulCard_card_poster'
            src={movie.image}
            alt={`Poster of ${movie.name}`}
          />
          <p className='page_ulCard_card_text1'> {movie.name}</p>
          <p className='page_ulCard_card_text2'>{movie.year}</p>
          <p className='page_ulCard_card_text3'>"{movie.line}"</p>
        </a>
    </div>
  );
}

export default MovieSceneItem;
