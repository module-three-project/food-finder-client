import logo from '../images/foodfinderlogo.png'

export default function HomePage(){
    return(
        <div>
            <h1>Welcome to</h1>
            <img src={logo} alt="logo"></img>
            <h2> Find great restaurants in your city!</h2>
        </div>
    )
}