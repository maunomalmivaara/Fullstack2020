import React  from 'react';

const FilterForm = (props) => {

    const handleFilterChange = (event) => {
        props.setNewFilter(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                Find countries <input
                    value={props.newFilter}
                    onChange={handleFilterChange}
                />
            </div>
        </form>
    )
}

export default FilterForm