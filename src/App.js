
import './App.css';
import { Routes, Route } from "react-router-dom"; 
import HomePage from './pages/HomePage'
import ListOfCities from './pages/ListOfCities';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<HomePage/>}/> 
      <Route path='/cities' element={<ListOfCities/>}/> 
      </Routes>
    </div>
  );
}

export default App;
