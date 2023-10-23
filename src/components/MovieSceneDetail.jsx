import { Link } from 'react-router-dom';
import Header from './Header';
import image from '../images/flecha.png';
function movieDetail({ movie }) {
  return (
    <>
      <Header />

      <Link to='/'><img className='arrow' src={image} alt="back" /></Link>
      <main className='main_detail'>
        <div className='main_detail_card'>
          <img
            className='main_detail_card_poster'
            src={movie.image}
            alt={`Poster of ${movie.name}`}
          />
          <p className='main_detail_card_text1'> {movie.name}</p>
          <p className='main_detail_card_text2'>{movie.year}</p>
          <p className='main_detail_card_text3'>"{movie.line}"</p>
          <p className='main_detail_card_text4'>{movie.director}</p>
          <audio controls className='main_detail_card_audio'>
            <source src={movie.audio} type='audio/mpeg' />
            Your browser does not support audio playback.
          </audio>
        </div>
      </main>
    </>
  );
}
export default movieDetail;
