import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav>
<Link to='cities'>Cities</Link>
<Link to='cities/create'>Add Your City</Link>
<Link to='restaurants/create'>Add a New Restaurant</Link>
<Link to='about'>About</Link>
<Link to='login'>Login</Link>
<Link to='signup'>Signup</Link>
        </nav>
    )
}