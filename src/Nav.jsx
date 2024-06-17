
import { useState } from "react"
import {Link} from "react-router-dom"
const Nav = () => {
    const [isClicked, setClicked] = useState(false)
    return (
        <>
            <div className="main-nav">
                <div className="navbar">
                    <Link to={`/`} style={{ margin: "0px", textAlign: "center" }} id="h1">FlickFolio</Link>
                    <div className="side-nav">
                        <a href="/search" id="search">Search</a>
                        <a href="/signup" id="register">Register</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Nav;