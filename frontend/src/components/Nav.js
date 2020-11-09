import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {

        // console.log(localStorage.getItem('token'));

        if (localStorage.getItem('token')) {
            // console.log(localStorage.getItem('token'));
            setIsLoggedIn(true);
        }
        else {
            setIsLoggedIn(false);
        }
    }, [isLoggedIn]);
    const logoutHandler = () => {
        localStorage.removeItem('token');
        // console.log(localStorage.getItem('token'));
        setIsLoggedIn(false)
    }
    return (
        <div className="py-3 mb-4 bg-light border">
            <Link to="/" className="ml-3">Home</Link>
            <Link to="/addblog" className="ml-3">Add Blog</Link>
            {!isLoggedIn && <Link to="/signup" className="ml-3">Sign Up</Link>}
            {!isLoggedIn && <Link to="/login" className="ml-3">Log In</Link>}
            {isLoggedIn && <button onClick={logoutHandler} className="ml-3 btn btn-danger">Log Out</button>}

        </div>
    )
}

export default Nav
