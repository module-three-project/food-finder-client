import { useState } from "react";
import axios from "axios";
import cityAPI from "../utils/apiConnect";
import { useNavigate } from "react-router-dom";
import ListOfCities from "./ListOfCities";
import Cuisines from "../cuisines.json";
import './styles/AddRestaurant.css';

const API_URL = "http://localhost:5005";

export default function AddRestaurant(props) {
  const [cuisinesArray] = useState(Cuisines);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [rating, setRating] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [price, setPrice] = useState("");
  const [cityId, setCityId] = useState("");
  const navigate = useNavigate();

  console.log(props);
  console.log(cuisinesArray);

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { name, address, rating, cuisine, price, cityId };
    cityAPI
      .addRestaurant(requestBody)
      .then((response) => {
        setName("");
        setAddress("");
        setRating("");
        setPrice("");
        setCuisine("");
        navigate("/cities");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="AddRestaurant">
    <h2>Add a Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <div className="fieldsContainer"><div>
          <label> Restaurant Name*</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /></div>
        <div> <label>City*</label>
          <select
            placeholder="choose"
            name="city"
            onChange={(e) => setCityId(e.target.value)}
          >
            <option>Choose City</option>
            {props.listOfCities.map((city) => {
              return (<>
                <option key={city._id} value={city._id}>
                  {city.cityName}
                </option> </>
              );
            })}
          </select></div>

        <div><label>Address*</label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          /></div>

        <div><label>Rating*</label>
          <input
            type="number"
            name="rating"
            min={1}
            max={5}
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          /></div>


        <div><label>Cuisine*</label>
          <select
            defaultValue="Select"
            name="cuisine"
            onChange={(e) => setCuisine(e.target.value)}
          >
            <option>Choose Cuisine</option>
            {cuisinesArray.map((each) => {
              console.log(each);
              return <option>{each}</option>;
            })}
          </select></div>

        <div><label>Price*</label>
          <select
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          >
            <option>Choose Price</option>
            <option value="€">€</option>
            <option value="€€">€€</option>
            <option value="€€€">€€€</option>
          </select></div>
</div>
        <button> Submit </button>
      </form>
      <h3>Don't see your city? Use the link at the top to add your city to our website :)</h3>
    </div>
  );
}
