import React, { useState } from 'react'
import Form from '../Form'
import WeatherData from '../WeatherData'
import Error from '../Error'
import './App.css'
import hasbula from '../../images/has.png'

const App = () => {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState('')
  const [error, setError] = useState(false)

  return (
    <div className='app'>
      <div className="app-container">
        <Form
          setWeather={setWeather}
          setError={setError}
          city={city}
          setCity={setCity}
        />

        {
          !error && !weather
            ? <div className='hasb'>
              <img src={hasbula} alt="" />
              Введите город в поиск выше и нажмите кнопку search
            </div>
            :
            !error
              ? <WeatherData weather={weather} />
              :
              <Error />
        }
      </div>
    </div>
  )
}

export default App