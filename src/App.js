
import './App.css';
import { Routes, Route } from "react-router-dom"; 
import HomePage from './pages/HomePage'
import ListOfCities from './pages/ListOfCities';
import Navbar from './components/Navbar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AddCity from './pages/AddCity';
import SignupPage from './pages/SignupPage';
import LoginPage from './LoginPage';
import AddRestaurant from './pages/AddRestaurant';
import SeeRestaurants from './pages/SeeRestaurants';
import ProfilePage from './pages/ProfilePage'
import ViewRestaurant from './pages/ViewRestaurant';
import UpdateRestaurant from './pages/UpdateRestaurant';
import AboutPage from './pages/AboutPage';

const API_URL = "http://localhost:5005";

function App() {
  const [cities, setCities] = useState([])

  const getAllCities = () => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/cities`)
        .then((response) => setCities(response.data))
        .catch((error) => console.log(error));
    };
  
    useEffect(() => {
      getAllCities();
    }, [] );


  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/> 
      <Route path='/cities' element={<ListOfCities listOfCities={cities}/>}/> 
      <Route path='/cities/create' element={<AddCity listOfCities={cities} cbToGetCities={getAllCities}/>}/> 
      <Route path='/restaurants/create' element={<AddRestaurant listOfCities={cities}/>}/> 
      <Route path='/cities/:cityId' element={<SeeRestaurants/>}/> 
      <Route path='/signup' element={<SignupPage/>}/> 
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/about' element={<AboutPage/>}/> 
      <Route path='/profile/' element={<ProfilePage/>}/> 
      <Route path='/restaurants/:restaurantId' element={<ViewRestaurant/>}/>
      <Route path='/restaurants/update/:restaurantId' element={<UpdateRestaurant listOfCities={cities}/>}/> 
      </Routes>
    </div>
  );
}

export default App;
