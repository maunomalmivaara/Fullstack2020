import React from 'react'

const AddPerson = (props) => {

    const newName = props.newName
    const newNumber = props.newNumber
    const addPerson = props.addPerson
    const handleNameChange = props.handleNameChange
    const handleNumberChange = props.handleNumberChange
    
    return (
        <div>
            <form onSubmit={addPerson}>
            <div>
                Name: <input 
                    value={newName}
                    onChange={handleNameChange}
                />
            </div>
            <div>
                Number: <input 
                    value={newNumber}
                    onChange={handleNumberChange}
                />
            </div>
            <div>
                <br/>
                <button type="submit">Add</button>
            </div>
        </form>
      </div>
    )
}

export default AddPerson