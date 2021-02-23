import React, { useState } from 'react';
import './sort.sass'

const Sort = ({context}) => {
  const [sort, setSort] = useState(context.filteredSort)
  const sorts = []


  sorts.push(
    <>
      <option key={0} value="featured">
        Sort By:
        </option>
      <option key={1} value="A-Z">
        Name - A to Z
        </option>
      <option key={2} value="Z-A">
        Name - Z to A
        </option>
      <option key={3} value="low">
        Price - Low to High
        </option>
      <option key={4} value="high">
        Price - High to Low
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
          <div className="select" style={{border: "none"}}>
            <select
              defaultvalues={sort}
              onChange={e => handleFilterSort(e.target.value)}
              onBlur={e => handleFilterSort(e.target.value)}
              id="sortBy"
              style={{border: "none", outline: "none"}}
            >
              {sorts}
            </select>
          </div>
        </div>
      </div>
  );
};

export default Sort;