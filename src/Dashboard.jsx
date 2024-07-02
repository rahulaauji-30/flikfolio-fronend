import { NavLink, Outlet } from "react-router-dom";
import User from "./User";

const Dashboard = () => {
  return (
    <>
      <div className="main-nav">
        <div className="navbar-main">
          <div className="navbar">
            <NavLink to={`/`} style={{ margin: "0px", textAlign: "center" }} id="h1">FlickFolio</NavLink>
            <div className="side-nav">
              <a href="/search" id="search">Search</a>
              <a href="/signup" id="register">Register</a>
            </div>
          </div>
        </div>
      </div>
      <User/>
      
    </>
  );
}

export default Dashboard;
