import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import OneCountry from './components/OneCountry'
import ManyCountries from './components/ManyCountries'
import FilterForm from './components/FilterForm'

function App() {
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')
  
  const hook = () => {
    const eventHandler = response => {
      setCountries(response.data)
    }
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(eventHandler)
  }
  useEffect(hook, [])

  const countriesToShow = countries.filter(c => c.name.includes(newFilter))
  const l = countriesToShow.length
  
  return (
    <div>
      <FilterForm newFilter={newFilter} setNewFilter={setNewFilter}/>
      {l > 10
        ? 'Too many matches. Please specify another filter.'
        : (l > 1
            ? <ManyCountries countriesToShow={countriesToShow} setNewFilter={setNewFilter}/>
            : (l === 1
                ? <OneCountry country={countriesToShow[0]}/>
                : 'No matches.'
              )
          )
      }
    </div>
  )
}

export default App;