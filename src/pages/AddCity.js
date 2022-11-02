import { useState } from "react";
import axios from "axios";
import cityAPI from '../utils/apiConnect'
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

export default function AddCity(props) {
    //stateful variables for all form fields
    const [cityName, setCityName] = useState('')
    const [country, setCountry] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate();

    //function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const requestBody = { cityName, country, description };
        // axios.post(`${API_URL}/api/cities`, requestBody)
        cityAPI.addCity(requestBody)
            .then((response) => {
                setCityName("")
                setCountry("")
                setDescription("")
                props.cbToGetCities();
                navigate("/cities")
            })
            .catch((error) => { console.log(error) })
    };

    console.log(props)


    return (
        <div>
        <h2>Add Your City</h2>
            <form onSubmit={handleSubmit}>
                <label>City Name:</label>
                <input
                    type="text"
                    name="cityName"
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                />

                <label>Country:</label>
                <input
                    type="text"
                    name="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />

                <label>Description:</label>
                <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button> Submit </button>
            </form>
        </div>
    )
}