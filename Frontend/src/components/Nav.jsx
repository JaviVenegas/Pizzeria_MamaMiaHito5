import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const total = 25000;
    const token = false; 

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
            <a className="navbar-brand p-1" href="/">Pizzeria Mamma Mia</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="/">🍕 Home</Link>

                    </li>
                    <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">🔐 Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">🔐 Register</Link>
                            </li>
                    </>
                </ul>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <Link className="text-light" to="/profile">  👤 Profile</Link>
                    <Link className="btn btn-secondary  text-light" to="/notfound"> 🫓 Ofertas del 18</Link>
                </div>
                <span className="navbar-text text-light p-1">
                    <Link className=" btn btn-secondary " to="/cart">🛒 Total: ${total.toLocaleString()}</Link>
                    
                </span>
            </div>
        </nav>
        </>
    );
}

export default Nav;