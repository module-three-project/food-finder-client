import { useState, useEffect } from "react"
import axios from "axios";

const API_URL = "http://localhost:5005"

export default function ListOfCities(){

const [cities, setCities] = useState([])

const getAllCities = () => {
    axios
      .get(`${API_URL}/api/cities`)
      .then((response) => setCities(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllCities();
  }, [] );

    return(
        <div>
{cities.map((city) => {
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