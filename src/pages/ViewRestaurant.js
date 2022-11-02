import {Link, useNavigate, useParams} from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import api from "../utils/apiConnect"
import addressLogo from "../images/addressIcon.png"

export default function ViewRestaurant () {
    
    const {restaurantId} = useParams()

    const [restaurantDetails, setRestaurantDetails] = useState({})

    const navigate = useNavigate()
    
    const [isLoading, setLoading] = useState(true)


    const storedToken = localStorage.getItem("authToken")
    


    
    const deleteRestaurant = () => {
        // axios
        // .delete(`${API_URL}/api/restaurants/${restaurantId}`,  { headers: { Authorization: `Bearer ${storedToken}` } })
        api.deleteRestaurant(restaurantId)
        .then(() =>{
          console.log('do i have resto details', restaurantDetails.city)
            navigate(`/cities/${restaurantDetails.city}`)
        })
        .catch((error) => console.log(error));
    }

    const getRestaurant = () => {          
        axios
          .get(`${process.env.REACT_APP_API_URL}/api/restaurants/${restaurantId}`)
          .then((response) => {
            console.log('response:', response)
            const restaurant = response.data;
            setRestaurantDetails(restaurant);
            setLoading(false)
          })
          .catch((error) => console.log(error));
      };

      useEffect(()=> {             
        getRestaurant();
      },[] );

      console.log(restaurantDetails)
      console.log('console tofix ')

    return (
        <div>
            <h1>{restaurantDetails.name}</h1>
            <h3>{restaurantDetails.address}</h3>
            <h1>{restaurantDetails.rating}</h1>
            <h1>{restaurantDetails.cuisine}</h1>
            <h1>{restaurantDetails.price}</h1>
            
           <Link to={`/restaurants/update/${restaurantDetails._id}`}>
            <button>Update</button>
           </Link>


            <button onClick={deleteRestaurant}>Delete</button>
            {/* <button>Like This Restaurant</button> */}
        </div>
        
    )
}