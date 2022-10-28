
import './App.css';
import { Routes, Route } from "react-router-dom"; 
import HomePage from './pages/HomePage'
import ListOfCities from './pages/ListOfCities';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/> 
      <Route path='/cities' element={<ListOfCities/>}/> 
      </Routes>
    </div>
  );
}

export default App;
