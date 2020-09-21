import React from 'react'

const Filter = (props) => {

    const newFilter = props.newFilter
    const filterPersons = props.filterPersons
    
    const handleFilterChange = (event) => {
        //If filter is empty, show all persons:
        if (event.target.value.length === 0) {
          props.setShowAll(true)
        }
        //If something has been written in the filter field, 
        //don't show all:
        else {
            props.setShowAll(false)
        }
        props.setNewFilter(event.target.value)
    }

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