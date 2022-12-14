import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import api from "../utils/apiConnect";
import Cuisines from "../cuisines.json"
import './styles/UpdateRestaurant.css'




export default function UpdateRestaurant(props) {
  const { restaurantId } = useParams();

  const [cuisinesArray] = useState(Cuisines)


  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [price, setPrice] = useState("");
  const [city, setCityId] = useState("");



  useEffect(() => {                                  // <== ADD
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/restaurants/${restaurantId}`)
      .then((response) => {
        console.log('response:', response)


        /* 
          We update the state with the project data coming from the response.
          This way we set inputs to show the actual title and description of the project
        */
        const oneResto = response.data;
        setName(oneResto.name);
        setRating(oneResto.rating);
        setCuisine(oneResto.cuisine);
        setPrice(oneResto.price);
        setAddress(oneResto.address);
        setDescription(oneResto.description);
        setCityId(oneResto.city);
      })
      .catch((error) => console.log(error));

  }, [restaurantId]);

  //function to handle the submit 
  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name, cuisine, price, rating, address, city, description };


    api.updateRestaurant(requestBody, restaurantId)
      .then(() => {
        console.log('cityID:', city)
        navigate(`/cities/${city}`)
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
          value={city}
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

        <label>Description</label>
        <textarea
          type="text"
          cols="70"
          rows="5"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

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
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
        >
          {cuisinesArray.map((each) => {
            return <option key={each}>{each}</option>;
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
          <option value="???">???</option>
          <option value="??????">??????</option>
          <option value="?????????">?????????</option>
        </select>

        <button className="submit"> Submit </button>
      </form>
    </div>
  );
}
