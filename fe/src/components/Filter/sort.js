import React, { useState } from 'react';

const Sort = ({context}) => {
  const [sort, setSort] = useState(context.filteredSort)
  const sorts = []


  sorts.push(
    <>
      <option key={0} value="featured">
        Sort By:
        </option>
      <option key={1} value="A-Z">
        Alphabetically, A-Z
        </option>
      <option key={2} value="Z-A">
        Alphabetically, Z-A
        </option>
      <option key={3} value="low">
        Price, low to high
        </option>
      <option key={4} value="high">
        Price, high to low
        </option>
    </>
  )

  const handleFilterSort = (value) =>{
    setSort(value)
    context.updateFilterSort(value)
  }
  
  return (
      <div className="field">
        <div className="control">
          <div className="select">
            <select
              defaultvalues={sort}
              onChange={e => handleFilterSort(e.target.value)}
              onBlur={e => handleFilterSort(e.target.value)}
              id="sortBy"
            >
              {sorts}
            </select>
          </div>
        </div>
      </div>
  );
};

export default Sort;