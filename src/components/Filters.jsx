function Filters() {
  return (
    <div>
        <form className='main_form'>
          <label className='main_form_movie' htmlFor="search_movie">Movie 
            <input className='main_form_movie_input' type="text" name='search_movie' id='search_name' />
          </label>
          <label className='main_form_year' htmlFor="search_year">Year
            <select className='main_form_year_select' type="text" name='search_year' id='search_year'>
              <option value=""></option>
            </select>
          </label>
        </form>
    </div>
  )
}

export default Filters

