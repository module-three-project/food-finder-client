import {Link, useNavigate, useParams} from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import api from "../utils/apiConnect"
import addressLogo from "../images/addressIcon2.png"
import star from '../images/star.png'
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import './styles/ViewRestaurant.css'

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

      const {user} = useContext(AuthContext);
      
      const maxWidthForIcon = {
        maxWidth: 30
      }

    return (
        <div className="ViewRestaurant">
            <h1>{restaurantDetails.name}</h1>
            <div className="underTitle">
            <div className="detailsRestaurant">
            <h4><img src={addressLogo} alt="address" style={maxWidthForIcon}/>{restaurantDetails.address}</h4>
            
{restaurantDetails.rating === 1 && <div><img src={star} alt="star"/>    </div>}
{restaurantDetails.rating === 2 && <div><img src={star} alt="star"/><img src={star} alt="star"/></div>}
{restaurantDetails.rating === 3 && <div><img src={star} alt="star"/><img src={star} alt="star"/><img src={star} alt="star"/></div>}
{restaurantDetails.rating === 4 && <div><img src={star} alt="star"/><img src={star} alt="star"/><img src={star} alt="star"/><img src={star} alt="star"/></div>}
{restaurantDetails.rating === 5 && <div><img src={star} alt="star"/><img src={star} alt="star"/><img src={star} alt="star"/><img src={star} alt="star"/><img src={star} alt="star"/></div>}
            <h2>{restaurantDetails.price} </h2>
            <h3> Serves {restaurantDetails.cuisine} food</h3>
           
            <h6>This restaurant was added by:{restaurantDetails?.email}</h6>
            
            {user?.email === restaurantDetails?.email &&
           <Link to={`/restaurants/update/${restaurantDetails._id}`}>
            <button className="update">Update</button>
           </Link>}

           {user?.email === restaurantDetails?.email &&
            <button onClick={deleteRestaurant} className="delete">Delete</button>}
            </div>
            <div className="descriptionDiv">
            <h3>How do people describe this restaurant?</h3>
            <h3>"{restaurantDetails.description}"</h3>
            </div>
            </div>
        </div>
        
    )
}