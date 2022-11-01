import { useEffect, useState } from "react"
import { useParams, Link  } from "react-router-dom"
import axios from "axios"
import { type } from "@testing-library/user-event/dist/type"


const API_URL = "http://localhost:5005"

export default function SeeRestaurants(){
    const [city, setCity]=useState('')
    const {cityId} = useParams()
    const [isLoading, setLoading] = useState(true)

    const getCity = () => {          
        axios
          .get(`${process.env.REACT_APP_API_URL}/api/cities/${cityId}`)
          .then((response) => {
            console.log('response:', response)
            const foundCity = response.data;
            setCity(foundCity);
            setLoading(false)
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
if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  
    return(
        <div>
            <h1>Restaurants in this city:</h1>

            {city.restaurants.map((restaurant)=>{
                console.log(restaurant)
                return(
                    <p><Link to={`/restaurants/${restaurant._id}`}>{restaurant.name}</Link></p>
                )
            })}
        </div>
    )
}
