import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005"

export default function ListOfCities(props){
console.log(props)
    return(
        <div>
{props.listOfCities.map((city) => {
    return(
        <div key={city._id}>
        <Link to={`/cities/${city._id}`} >{city.cityName}</Link>
        </div>
    )
    
} )}

        </div>
    )
}