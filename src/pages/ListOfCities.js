import { useState, useEffect } from "react"
import axios from "axios";

const API_URL = "http://localhost:5005"

export default function ListOfCities(props){

    return(
        <div>
{props.listOfCities.map((city) => {
    return(
        <div>
        <p>{city.cityName}</p>
        <p>{city.country}</p>
        <p>{city.description}</p>
        </div>
    )
    
} )}

        </div>
    )
}