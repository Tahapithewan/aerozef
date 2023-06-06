import React from 'react'
// import Nav from "../Navbar/Nav.css"
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className="navbar navbar-expand-md navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="">User</NavLink>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#NavId" >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="NavId">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="#">Curriculum</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="#">Events</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="#">About</NavLink>
                </li>
            </ul>
        </div>
    </div>
    {/* <div className="NavBar">
        <div className="Brand">
            <div className="forty">4</div>
            <div className="two">2</div>
        </div>
    </div> */}
    </>
  )
}

export default Navbar