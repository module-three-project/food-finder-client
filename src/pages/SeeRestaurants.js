import { useEffect, useState } from "react"
import { useParams, Link  } from "react-router-dom"
import axios from "axios"
import './styles/SeeRestaurants.css'




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
console.log('restaurantslength', city?.restaurants?.length)
console.log('cityId:' ,cityId)

///////error going on with this where first the code doesnt run until you remove the map and then put it back in 
if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  
    return(
        <div className="SeeRestaurants">
            <h1>Restaurants in {city.cityName}</h1>
<div className="allRestaurants">
            {city?.restaurants.length !== 0 ? 
              city.restaurants.map((restaurant)=>{
                return(<div className="restoCard">
                    <h1><Link to={`/restaurants/${restaurant._id}`}>{restaurant.name} </Link></h1>
                   <div> <p>Serves:{restaurant.cuisine}</p> </div>
                   <div> <p>Cost:{restaurant.price}</p> </div>
</div>
                )
            }) : <div>
            <h3>Sorry no restaurants yet</h3>
            <h3><Link to='/restaurants/create'>Add one?</Link></h3>
            </div>
             }
             </div>
        </div>
    )
}
