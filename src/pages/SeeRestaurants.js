import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { type } from "@testing-library/user-event/dist/type"

const API_URL = "http://localhost:5005"

export default function SeeRestaurants(){
    const [city, setCity]=useState('')
    const {cityId} = useParams()

    const getCity = () => {          
        axios
          .get(`${API_URL}/api/cities/${cityId}`)
          .then((response) => {
            console.log('response:', response)
            const foundCity = response.data;
            setCity(foundCity);
          })
          .catch((error) => console.log(error));
      };

      useEffect(()=> {             
        getCity();
      },[] );

console.log('city:', city)
console.log('cityRestos:', city.restaurants)
console.log('cityId:' ,cityId)

///////error going on with this where first the code doesnt run until you remove the map and then put it back in 

    return(
        <div>
            <h1>Restaurants in this city:</h1>

            {city.restaurants.map((restaurant)=>{
                console.log(restaurant)
                return(
                    <p>{restaurant.name}</p>
                )
            })}
        </div>
    )
}
