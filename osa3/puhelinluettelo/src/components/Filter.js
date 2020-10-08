import React from 'react'

const Filter = (props) => {

    const newFilter = props.newFilter
    const handleFilterChange = props.handleFilterChange

    return (
        <>
        <form>
            <div>
            Filter shown with: <input
                value={newFilter}
                onChange={handleFilterChange}
            />
            </div>
      </form>
      </>
    )
}

export default Filter