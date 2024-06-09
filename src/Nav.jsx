
import { useState } from "react"
const Nav = () => {
    const [isClicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked((pre) => !pre)
    }
    return (
        <>
            <div className="main-nav">
                <div className="navbar">
                    <h1 style={{ margin: "0px", textAlign: "center" }}>FlickFolio</h1>
                    <div className="side-nav">
                        <a href="/search" id="search">Search</a>
                        <span onClick={handleClick} id="register">Register</span>
                    </div>
                </div>
                <div className="register" style={{ display: isClicked ? "block" : "none" }}>
                    <a href="/login">Log In</a>
                    <br />
                    <a href="/signup">Sign Up</a>
                </div>
            </div>
        </>
    )
}
export default Nav;