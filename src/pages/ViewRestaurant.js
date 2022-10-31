import {Link, Navigate, useNavigate, useParams} from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import api from "../utils/apiConnect"

const API_URL = "http://localhost:5005"

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
            navigate('/city/')
        })
        .catch((error) => console.log(error));
    }

    const getRestaurant = () => {          
        axios
          .get(`${API_URL}/api/restaurants/${restaurantId}`)
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

    return (
        <div>
            <h1>{restaurantDetails.name}</h1>
            <h1>{restaurantDetails.address}</h1>
            <h1>{restaurantDetails.rating}</h1>
            <h1>{restaurantDetails.cuisine}</h1>
            <h1>{restaurantDetails.price}</h1>
            
           <Link to={`/restaurants/update/${restaurantDetails._id}`}>
            <button>Update</button>
           </Link>


            <button onClick={deleteRestaurant}>Delete</button>
        </div>
        
    )
}