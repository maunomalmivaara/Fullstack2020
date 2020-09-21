import React from 'react'

const Filter = (props) => {

    const newFilter = props.newFilter
    const filterPersons = props.filterPersons
    const handleFilterChange = props.handleFilterChange

    return (
        <>
        <form onSubmit={filterPersons}>
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