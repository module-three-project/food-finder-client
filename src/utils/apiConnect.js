import axios from "axios";

class cityAPI{
    constructor(){
        this.api = axios.create({
            baseURL: "http://localhost:5005/"
        })
    }
    addCity = (requestBody)=> {
        return this.api.post(`api/cities`, requestBody) 
    }
}

export default new cityAPI()