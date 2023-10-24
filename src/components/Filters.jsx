import FilterByMovie from './FilterByMovie';
import FilterByYear from './FilterByYear';
import reset from '../images/reiniciar.png';

function Filters({
  movieFilter,
  handleChange,
  yearFilter,
  handleChangeYear,
  years,
  handleReset,

}) {
 
  return (
    <div className='search'>
      <form className='search_form'>
        <FilterByMovie movieFilter={movieFilter} handleChange={handleChange} />
      </form>
      <form className='search_form'>
        <FilterByYear
          yearFilter={yearFilter}
          handleChangeYear={handleChangeYear}
          years={years}
        />
      </form>
      <button className='search_btn' type='reset' name='reset' onClick={handleReset}>
        <img className='search_btn_reset' src={reset} alt='reset' />
      </button>
    </div>
  );
}

export default Filters;
