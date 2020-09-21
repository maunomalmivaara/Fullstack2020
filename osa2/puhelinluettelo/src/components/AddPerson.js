import React from 'react'

const AddPerson = (props) => {

    const newName = props.newName
    const setNewName = props.setNewName
    const newNumber = props.newNumber
    const setNewNumber = props.setNewNumber
    const addPerson = props.addPerson
    
    const handleNameChange = (event) => {
          setNewName(event.target.value)
    }
    
    const handleNumberChange = (event) => {
          setNewNumber(event.target.value)
    }

    return (
        <div>
            <form onSubmit={addPerson}>
            <div>
                name: <input 
                    value={newName}
                    onChange={handleNameChange}
                />
            </div>
            <div>
                number: <input 
                    value={newNumber}
                    onChange={handleNumberChange}
                />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
      </div>
    )
}

export default AddPerson