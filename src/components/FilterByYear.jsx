function FilterByYear({ yearFilter, handleChangeYear, years }) {
  const handleSelect = (ev) => {
    handleChangeYear(ev.target.value);
  };
  const renderYears = () => {
    return years.map((year) => (
      <option 
      key={year} 
      value={year}>
      {year}
      </option>
    ));
  };
  return (
    <div className='year'>
      <label className='search_form_label' htmlFor='search'>
        {' '}
        Year...
        <select
          className='search_form_label_select'
          name='select'
          id='select'
          value={yearFilter}
          onChange={handleSelect}
        >
          <option value=''>All years</option>
          {renderYears()}
        </select>
      </label>
    </div>
  );
}

export default FilterByYear;
