
function FilterByYear() {
  return (
    <div className="year">
        <label className='search_form_label' htmlFor='search'>
          {' '}
          Year...
          <select className='search_form_label_select' name='select' id='select'>
            <option value=''>Choose</option>
            <option value="">{}</option>
          </select>
        </label>
    </div>
  )
}

export default FilterByYear