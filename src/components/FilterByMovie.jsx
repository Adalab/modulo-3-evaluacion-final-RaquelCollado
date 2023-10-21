
function FilterByMovie() {
  return (
    <div className="search">
      <form className="search_form">
        <label className="search_form_label" htmlFor="search"> Movie...
          <input className="search_form_label_input" type="text" name="search" id="search" placeholder="Search movie"/>
        </label>
      </form>
    </div>
  )
}

export default FilterByMovie
