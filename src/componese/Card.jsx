import React from 'react'
import { FaCloud, FaArrowDown, FaArrowCircleDown } from "react-icons/fa";

const Card = ({ datas }) => {
    console.log(datas)
    if (JSON.stringify(datas) !== '{}') {
        return (
            <div className='d-flex justify-content-center gap-3 align-items-center flex-column'>

                <h2>{datas.name}, {datas.sys.country}</h2>
                <h1><img src={`http://openweathermap.org//img/w/${datas.weather[0].icon}.png`} /> {datas.main.temp}°C</h1>
                <p className='text-md text-lg fw-bold' >
                    {datas.weather[0].main}</p>
                <p className='text-md' >Humidity: {datas.main.humidity}%</p>
                <p className='text-md' >Visibility: {parseInt(datas.visibility) / 1000}km</p>
            </div>
        )
    } else {
        return (
            <h2>Loading...</h2>
        )
    }
}
export default Card;