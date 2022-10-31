import axios from "axios";
import {AuthContext} from "../context/auth.context"
const storedToken = localStorage.getItem("authToken")


class cityAPI{
    constructor(){
        this.api = axios.create({
            baseURL: "http://localhost:5005/"
        })
    }
    addCity = (requestBody)=> {
        return this.api.post(`api/cities`, requestBody, { headers: { Authorization: `Bearer ${storedToken}` } }) 
    }

    addRestaurant = (requestBody)=>{
        return this.api.post(`api/restaurants`, requestBody)
    }
}

export default new cityAPI()