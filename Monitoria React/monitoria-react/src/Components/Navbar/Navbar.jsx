import './Navbar.css'
import React from 'react'

export default () => {
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="nav">
                    <div className="navLeft">
                        <h3>Monitoria.</h3>
                    </div>
                    <div className="navRight">
                        <ul>
                            <li><a href="./index.html">Home</a></li>
                            <li><a href="./login.html">Login</a></li>
                            <li><a href="#">Sobre</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
}