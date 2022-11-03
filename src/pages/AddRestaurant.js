import { useState } from "react";
import axios from "axios";
import cityAPI from "../utils/apiConnect";
import { useNavigate } from "react-router-dom";
import ListOfCities from "./ListOfCities";
import Cuisines from "../cuisines.json";
import './styles/AddRestaurant.css';
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";

const API_URL = "http://localhost:5005";

export default function AddRestaurant(props) {
  const [cuisinesArray] = useState(Cuisines);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [ description, setDescription]= useState("")
  const [rating, setRating] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [price, setPrice] = useState("");
  const [cityId, setCityId] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name: name, address: address, rating: rating, cuisine: cuisine, price:price, description:description, cityId:cityId, };
    const newResto = {
      name: name, address: address, rating: rating, cuisine: cuisine, price:price, cityId:cityId, email:user.email, description:description
    }
  console.log('console log',newResto)
    cityAPI
      .addRestaurant(newResto)
      .then((response) => {
        setName("");
        setAddress("");
        setRating("");
        setPrice("");
        setCuisine("");
        setDescription("")
        navigate("/cities");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription)
      });
  };

  const {user} = useContext(AuthContext);
  console.log("email:",user.email)
 console.log('console')

  return (
    <div className="AddRestaurant">
    

    <div className="textAndForm">
    <div className="divForText">

    <h4>Enter the name of the restaurant, the city where we can find it and the street address. Choose a number between 1 and 5 (where 5 is the best!) to rate it, select the cuisine, and let us know how pricey it is.</h4>
    <h5>Don't see your city? Use the link at the top to add your city to our website :)</h5>
    </div>
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

<div><label>Description*</label>
          <textarea
          cols="30"
          rows="8"
          type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea></div>

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
<div className="buttonDiv">
        <button> Submit </button></div>
      </form>
      { errorMessage && <p className="error-message">{errorMessage}</p> }
      </div>
    </div>
  );
}
