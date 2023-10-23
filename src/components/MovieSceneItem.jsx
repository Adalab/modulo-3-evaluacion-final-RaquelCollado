
function MovieSceneItem({movie}) {

  return (
    <div>
          <img
            className='page_ulCard_card_poster'
            src={movie.image}
            alt={`Poster of ${movie.name}`}
          />
          <p className='page_ulCard_card_text1'> {movie.name}</p>
          <p className='page_ulCard_card_text2'>{movie.year}</p>
          <p className='page_ulCard_card_text3'>"{movie.line}"</p>
    </div>
  );
}

export default MovieSceneItem;
