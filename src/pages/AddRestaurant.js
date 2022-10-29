import { useState } from "react";
import axios from "axios";
import cityAPI from '../utils/apiConnect'
import { useNavigate } from "react-router-dom";
import ListOfCities from "./ListOfCities";

const API_URL = "http://localhost:5005";

export default function AddRestaurant(props) {

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [rating, setRating] = useState('')
    const [cuisine, setCuisine] = useState('')
    const [price, setPrice] = useState('')
    const [cityId, setCityId] = useState('')
    const navigate = useNavigate();

console.log(props)

    const handleSubmit = (e) => {
        e.preventDefault();

        const requestBody = { name, address, rating, cuisine, price, cityId };
        cityAPI.addRestaurant(requestBody)
            .then((response) => {
                setName("")
                setAddress("")
                setRating("")
                setPrice("")
                setCuisine("")
                navigate("/cities")
            })
            .catch((err) => { console.log(err) })
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                 <label>City</label>
                <select defaultValue="Select" name="city" onChange={(e) => setCityId(e.target.value)}>
                {props.listOfCities.map((city)=>{
                    return(
                        <option key={city._id} value={city._id}>{city.cityName}</option>
                    )
                })}
                </select>

                <label>Address</label>
                <input
                    type="text"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />

                <label>Rating</label>
                <input
                    type="number"
                    name="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />
                <label>Cuisine</label>
                <input
                    type="text"
                    name="cuisine"
                    value={cuisine}
                    onChange={(e) => setCuisine(e.target.value)}
                />
                <label>Price</label>
                <input
                    type="text"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <button> Submit </button>
            </form>
        </div>
    )
}