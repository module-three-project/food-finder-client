import axios from "axios"
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const API_URL = "http://localhost:5005"

export default function ProfilePage(){
    // const [user, setUser] = useState('')
    // const {profileId} = useParams()
    // const [isLoading, setLoading] = useState(true)

    // const getUser = () => {
    //     axios
    //     .get(`${API_URL}/api/profile/${profileId}`)
    //     .then((response) => {
    //         console.log('response:', response)
    //         const foundUser = response.data;
    //         setUser(foundUser);
    //         setLoading(false)
    //     })
    //     .catch((error) => console.log(error));
    // };

    // useEffect(() => {
    //     getUser();
    // }, []);

    // console.log('user', user)
    // console.log('userId', profileId)
    
    return(
        <div>
            <h3>This is your profile</h3>

            {/* {userId.user.map((userId) =>{
                console.log(userId)
                return(
                    <p>This is Your Profile</p>
                )
            })} */}
        </div>
    )
}