import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

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
      }, [] );

console.log('city:', city)
console.log('cityRestos:', city.restaurants[0].name)
console.log('cityId:' ,cityId)


    return(
        <div>
            <h1>Restaurants in this city:</h1>
            {/* {city.restaurants.map((restaurant)=>{
                return(<p>{restaurant}</p>)
            })} */}
        </div>
    )
}
