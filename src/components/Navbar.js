import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import "./Navbar.css"

export default function Navbar() {
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
    return (
        <nav className="topnav">
        <Link to='about'>About</Link>
            <Link to='cities'>Cities</Link>
            
            {isLoggedIn && (<>
                <Link to='cities/create'>Add Your City</Link>
                <Link to='restaurants/create'>Add a New Restaurant</Link>
                <Link to={`/profile/${user._id}`}>Profile</Link>
                <button onClick={logOutUser}>Logout</button>
                <span>{user && user.name}</span>
                
            </>)}

            {!isLoggedIn && (
                <>
                    <Link to='login'>Login</Link>
                    <Link to='signup'>Signup</Link>
                </>
            )}

        </nav>
    )
}