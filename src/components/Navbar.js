import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

export default function Navbar() {
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
    return (
        <nav>
            <Link to='cities'>Cities</Link>
            <Link to='about'>About</Link>
            {isLoggedIn && (<>
                <Link to='cities/create'>Add Your City</Link>
                <Link to='restaurants/create'>Add a New Restaurant</Link>
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