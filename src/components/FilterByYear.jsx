function FilterByYear() {
  return (
    <div className='search'>
      <form className='search_form'>
        <label className='search_form_label' htmlFor='search'>
          {' '}
          Year...
          <select className='search_form_label_select' name='select' id='select'>
            <option value=''>Choose</option>
            <option value="">{}</option>
          </select>
        </label>
      </form>
    </div>
  );
}

export default FilterByYear;
