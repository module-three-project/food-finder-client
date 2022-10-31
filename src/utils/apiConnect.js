import axios from "axios";
import {AuthContext} from "../context/auth.context"
const storedToken = localStorage.getItem("authToken")

const header = { headers: { Authorization: `Bearer ${storedToken}` } }

class cityAPI{
    constructor(){
        this.api = axios.create({
            baseURL: "http://localhost:5005/"
        })
    }
    addCity = (requestBody)=> {
        return this.api.post(`api/cities`, requestBody, header) 
    }

    addRestaurant = (requestBody)=>{
        return this.api.post(`api/restaurants/`, requestBody, header )
    }

    deleteRestaurant = (id)=>{
        return this.api.delete(`api/restaurants/${id}`, header )
    }
}

export default new cityAPI()