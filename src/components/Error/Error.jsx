import React from 'react'
import sad from '../../images/sad.png'
import './Error.css'

const Error = () => {
    return (
        <div className="error">
            <img src={sad} alt="" className='error__img'/>
            oh no Jonny, incorrect city name
        </div>
    )
}

export default Error