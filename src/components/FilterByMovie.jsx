function FilterByMovie({movieFilter, handleChange}) {

    const handleInput = (ev) =>{
        handleChange(ev.target.value);

    }
  return (
    <div className="movie">
      <label className='search_form_label' htmlFor='search'>
        {' '}
        Movie...
        <input
          className='search_form_label_input'
          type='text'
          name='search'
          id='search'
          placeholder='Search movie'
          value={movieFilter}
          onChange={handleInput}
        />
      </label>
    </div>
  );
}

export default FilterByMovie;
