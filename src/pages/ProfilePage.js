import axios from "axios"
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import api from "../utils/apiConnect";


export default function ProfilePage(){
    const [user, setUser] = useState(null)
    const {profileId} = useParams()
    const [isLoading, setLoading] = useState(true)

    const getUser = () => {
        const storedToken = localStorage.getItem("authToken")
        console.log(storedToken)
        api.findUser(profileId)
        .then((response) => {
            console.log('response:', response)
            const foundUser = response.data;
            setUser(foundUser);
            setLoading(false)
        })
        .catch((error) => console.log(error));
    };

    useEffect(() => {
        getUser();
    }, []);

    console.log('user', user)
    console.log('userId', profileId)
    
    return(
        <div>
            <h3>Welcome to your profile,</h3>
            <h4>{user?.email}</h4>

        </div>
    )
}