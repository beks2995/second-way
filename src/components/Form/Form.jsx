import React from 'react'
import axios from 'axios'
import './Form.css'

const Form = ({setWeather, setError, city, setCity}) => {
  const API_KEY = 'ef01b80ca05af4a5e26cb6e7b04ea5f8'
    const searchHandler = (e) => {
        e.preventDefault()
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            .then(({ data }) => setWeather(data), setError(false))
            .catch((err) => {
                setWeather(null)
                if(!city){
                    setError(false)
                } else {
                    setError(true)
                }
            })
            setCity('')
    }
    const inputHandler = (e) => {
        setCity(e.target.value)
      }
    return (
        <form className="search-form" onSubmit={searchHandler}>
            <input type="text" className="search-form__input" placeholder='Search city' onChange={inputHandler} value={city} />
            <button type='submit' className="search-form__btn">Seacrh</button>
        </form>
    )
}

export default Form