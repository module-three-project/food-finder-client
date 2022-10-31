import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import api from "../utils/apiConnect";
import Cuisines from "../cuisines.json"

const API_URL = "http://localhost:5005";

export default function UpdateRestaurant(props) {
  const { restaurantId } = useParams();

  const [cuisinesArray] = useState(Cuisines)

  const [restaurantDetails, setRestaurantDetails] = useState({});

  const [isLoading, setLoading] = useState(true);

  const storedToken = localStorage.getItem("authToken");

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [rating, setRating] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [price, setPrice] = useState("");
  const [cityId, setCityId] = useState("");
  const navigate = useNavigate();

  const deleteRestaurant = () => {
    // axios
    // .delete(`${API_URL}/api/restaurants/${restaurantId}`,  { headers: { Authorization: `Bearer ${storedToken}` } })
    api
      .deleteRestaurant(restaurantId)
      .then(() => {
        navigate("/city/");
      })
      .catch((error) => console.log(error));
  };

  const updateRestaurant = () => {
    axios
      .get(`${API_URL}/api/restaurants/update/${restaurantId}`)
      .then((response) => {
        console.log("response:", response);
        const restaurant = response.data;
        setRestaurantDetails(restaurant);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  console.log(restaurantDetails)

  useEffect(() => {
    updateRestaurant();
  }, []);

  console.log(restaurantDetails);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name, cuisine, price, rating, address };

    api.updateRestaurant(restaurantId)
    .then(() =>{
        navigate(`/restaurants/${restaurantId}`)
    })
    .catch((error) => console.log(error));
  };

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
        <select
          placeholder="choose"
          name="city"
          onChange={(e) => setCityId(e.target.value)}
        >
          <option>Choose City</option>
          {props.listOfCities.map((city) => {
            return (
              <>
                <option key={city._id} value={city._id}>
                  {city.cityName}
                </option>{" "}
              </>
            );
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
          min={1}
          max={5}
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        {/* <label>Cuisine</label>
                <input
                    type="text"
                    name="cuisine"
                    value={cuisine}
                    onChange={(e) => setCuisine(e.target.value)}
                /> */}

        <label>Cuisine2</label>
        <select
          defaultValue="Select"
          name="cuisine"
          onChange={(e) => setCuisine(e.target.value)}
        >
          {cuisinesArray.map((each) => {
            console.log(each);
            return <option>{each}</option>;
          })}
        </select>

        {/* <label>Price</label>
        <input
          type="text"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        /> */}
        <label>Price</label>
        <select
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        >
          <option value="€">€</option>
          <option value="€€">€€</option>
          <option value="€€€">€€€</option>
        </select>

        <button> Submit </button>
      </form>
    </div>
  );
}
