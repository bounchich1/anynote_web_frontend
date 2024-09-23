import "./home.scss"
import { Link } from "react-router-dom"

function Home() {
    
    return (
        <div className="home">
            <Link className="home__link" to="/login">Login page</Link>
            <Link className="home__link" to="/register">Register page</Link>
            <Link className="home__link" to="/note">Note edit page</Link>
            <Link className="home__link" to="/notes">All notes page</Link>
        </div>
    )
}

export default Home
