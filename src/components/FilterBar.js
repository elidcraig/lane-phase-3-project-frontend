function FilterBar({handleClick}) {
  return (
    <div className="filter-bar">
      <button className="filter-bar__button" onClick={() => handleClick('highest')}>Highest $$ First</button>
      <button className="filter-bar__button" onClick={() => handleClick('lowest')}>Lowest $$ First</button>
    </div>
  );
}

export default FilterBar;