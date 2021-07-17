import React from "react";
import './Navbar.css'

export default class Navbar extends React.Component{
    render(){
        return(
            <header>
            <div className="container">
            <nav className="navbarItems">
                        <h1>
                            Ricardo Flores
                        </h1>
                        <ul>
                            <li>
                                <a href="#about-me">About me</a>
                            </li>
                            <li>
                                <a href="#projects">Projects</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
            </nav>
            </div>
            </header>
        )
    }
}