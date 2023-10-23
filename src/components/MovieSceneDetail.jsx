import {Link} from 'react-router-dom';
import Header from './Header';
function movieDetail({movie}) {
  return (
    <div>
        <Header/>
      <Link to='/'>Back</Link>
      <div>
        <img
          className='page_ulCard_card_poster'
          src={movie.image}
          alt={`Poster of ${movie.name}`}
        />
        <p className='page_ulCard_card_text1'> {movie.name}</p>
        <p className='page_ulCard_card_text2'>{movie.year}</p>
        <p className='page_ulCard_card_text3'>"{movie.line}"</p>
        <p>{movie.director}</p>
        <a href={movie.audio}></a>
      </div>
    </div>
  );
}
export default movieDetail;
