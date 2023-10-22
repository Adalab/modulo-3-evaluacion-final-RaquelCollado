import FilterByMovie from './FilterByMovie';
import FilterByYear from './FilterByYear';

function Filters({movieFilter, handleChange, yearFilter, handleChangeYear, years}) {
  return (
    <div className="search">
      <form className="search_form">
        <FilterByMovie movieFilter={movieFilter} handleChange={handleChange}/>
      </form>
      <form className="search_form">
        <FilterByYear yearFilter={yearFilter} handleChangeYear={handleChangeYear}years={years}/>
      </form>
    </div>
  );
}

export default Filters;
