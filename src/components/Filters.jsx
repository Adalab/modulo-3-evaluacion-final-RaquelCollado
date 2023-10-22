import FilterByMovie from './FilterByMovie';
import FilterByYear from './FilterByYear';

function Filters({movieFilter, handleChange}) {
  return (
    <div className="search">
      <form className="search_form">
        <FilterByMovie movieFilter={movieFilter} handleChange={handleChange}/>
      </form>
      <form className="search_form">
        <FilterByYear />
      </form>
    </div>
  );
}

export default Filters;
