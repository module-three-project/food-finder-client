import { useState } from "react";
import axios from "axios";
import cityAPI from '../utils/apiConnect'
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

export default function AddRestaurant() {

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [rating, setRating] = useState('')
    const [cuisine, setCuisine] = useState('')
    const [price, setPrice] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const requestBody = { name, address, rating, cuisine, price };
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