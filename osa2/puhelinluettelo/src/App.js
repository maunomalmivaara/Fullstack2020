import React, { useState, useEffect } from 'react'
import AddPerson from './components/AddPerson'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Notification from './components/Notification'
import personService from './services/persons'

const App = () => {

  const [ persons, setPersons] = useState([])
  const [ newFilter, setNewFilter ] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newMessage, setNewMessage ] = useState(null)
  const [ newMessageStyle, setNewMessageStyle ] = useState('success')

  //Function for pulling all persons from the 'database':
  const hook = () => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }
  useEffect(hook, [])

  //Function for adding a new person:
  const addPerson = (event) => {
    event.preventDefault()
    if (!persons.map(p => p.name).includes(newName)) {
      const personObject = {
        name: newName,
        number: newNumber
      }
      personService
        .create(personObject)
        .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            setNewMessage(`Added ${returnedPerson.name}`)
            setNewMessageStyle('success')
            messageTimeOut(5000)
        })
    }
    else {
      if (window.confirm(`${newName} is already added to the phonebook.\nDo you want to replace the old number with a new one?`)) {
          const personToUpdate = persons.find(p => p.name === newName)
          updatePerson(personToUpdate.id)
      }
    }
    setNewName('')
    setNewNumber('')
  }

  //Function for updating a person's number.
    //Called only if the user has tried to add 
    // a person that is already in the system.
  const updatePerson = (id) => {
    const person = persons.find(p => p.id === id)
    const changedPerson = {...person, number: newNumber}

    personService
        .update(id, changedPerson)
        .then(returnedPerson => {
            setPersons(persons.map(p => p.id !== id ? p : returnedPerson))
            setNewMessage(`Updated number for ${returnedPerson.name}`)
            setNewMessageStyle('info')
            messageTimeOut(5000)
        })
        .catch(error => {
          setNewMessage(`Error: Information of ${person.name} has already been removed from the server`)
          setNewMessageStyle('error')
          messageTimeOut(5000)
        })
  }

  //Function for removing a person:
  const remove = (id) => {
    const nameOf = persons.find(p => p.id === id).name
    if (window.confirm(`Do you really want to delete ${nameOf}?`)) { 
      personService
        .remove(id)
        .then(idToDelete => {
          setPersons(persons.filter(p => p.id !== idToDelete))
          setNewMessage(`Successfully removed ${nameOf} from the phonebook`)
          setNewMessageStyle('success')
          messageTimeOut(3000)
        })
    }
  }

  //Function for setting time out for messages:
  const messageTimeOut = (ms) => {
    return setTimeout(() => {setNewMessage(null)}, ms)
  }

  //Function for handling changes in name input field:
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  //Function for handling changes in number input field:
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  //Function for handling changes in filter input field:
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  //Choose which persons to show based on filter:
    //(If filter is an empty string, then shows all)
  const personsToShow = persons.filter(p => p.name.startsWith(newFilter))

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={newMessage} style={newMessageStyle} />

      <Filter
        newFilter={newFilter}
        handleFilterChange={handleFilterChange}
      />

      <h3>Add New:</h3>
      <AddPerson
        newName={newName}
        newNumber={newNumber}
        addPerson={addPerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>
      <Persons 
        personsToShow={personsToShow}
        remove={remove}
      />
    </div>
  )
}

export default App