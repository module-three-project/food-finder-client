import axios from "axios";
const storedToken = localStorage.getItem("authToken")

const header = { headers: { Authorization: `Bearer ${storedToken}` } }

class cityAPI {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL
    })
    this.api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('authToken')
        if (token) {
          config.headers = {
            Authorization: `Bearer ${token}`,
          }
        }
        return config
      },
      (error) => {
        throw error
      }
    )
  }
  addCity = (requestBody) => {
    return this.api.post(`api/cities`, requestBody)
  }

  addRestaurant = (requestBody) => {
    return this.api.post(`api/restaurants/`, requestBody)
  }

  deleteRestaurant = (id) => {
    return this.api.delete(`api/restaurants/${id}`)
  }

  updateRestaurant = (requestBody, restaurantId) => {
    return this.api.put(`api/restaurants/${restaurantId}`, requestBody)
  }
  findUser = (profileId) => {
    return this.api.get(`api/profile/${profileId}`)
  }

}

export default new cityAPI()