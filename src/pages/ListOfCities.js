import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from "axios";
import "./styles/ListOfCities.css"
import cityImg from '../images/cityDefault.png'

const API_URL = "http://localhost:5005"

let cityImgStyle = {
    maxWidth: 290
}

export default function ListOfCities(props){
console.log(props)
    return(
        <div className="ListOfCities">
{props.listOfCities.map((city) => {
    return(
        <div key={city._id} className="singleCity">
       <div> <img src={cityImg} style={cityImgStyle} alt="city"/> </div>
        <h2>{city.cityName}</h2>
        <h4>{city.country}</h4>
        <h5>{city.description}</h5>
        <Link to={`/cities/${city._id}`} >See Restaurants</Link>
        </div>
    )
    
} )}

        </div>
    )
}