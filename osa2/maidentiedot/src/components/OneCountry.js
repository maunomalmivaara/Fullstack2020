import React, { useState, useEffect }  from 'react';
import axios from 'axios'

const OneCountry = (props) => {
    const country = props.country
    return (
        <>
        <h1>{country.name}</h1>
        <ul>
            <li><b>Capital: </b>{country.capital}</li>
            <li><b>Population: </b>{country.population}</li>
        </ul>
        <h3>Languages</h3>
        <ul>
            {country.languages.map(l => 
                <li key={l.iso639_2}>
                    {l.name}
                </li>)
            }
        </ul>
        <img src={country.flag} alt="flag" width="300" height="200" style={{ border:'solid' }}/>
        <Weather country={country}/>
        </>
    )
}

const Weather = (props) => {

    const [ weather, setWeather ] = useState({})

    const country = props.country

    const params = {
        access_key: process.env.REACT_APP_API_KEY,
        query: country.capital,
        units: 'm'
    }

    const hook = () => {
        const eventHandler = response => {
            console.log(response.data)
            setWeather(response.data.current)
        }

        axios
            .get('http://api.weatherstack.com/current', {params})
            .then(eventHandler)
    }
    useEffect(hook, [])

    const iconHasLoaded = () => weather.weather_icons ? true : false

    console.log(iconHasLoaded())

    return (
        <>
        <h3>Weather in {country.capital}</h3>
        <p><b>Temperature: </b>{weather.temperature} Celcius</p>
        {iconHasLoaded()
            ?<img src={weather.weather_icons[0]} alt="weather" width="100" height="100" style={{ border:'solid' }}/>
            :<span>Image loading...</span>
        }
        <p><b>Wind speed: </b>{weather.wind_speed} km/h</p>
        <p><b>Wind direction: </b>{weather.wind_dir}</p>
        </>
    )
}

export default OneCountry