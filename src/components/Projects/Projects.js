import React from "react";
import Endlesspawsabilities from "./Endless-pawsabilities.png"
import Grogrogro from './grogrogro.png'
import './Projects.css'


export default class Projects extends React.Component{
    render(){
        return(
            <section class="projectSec">
            <div class="project-body">
                <h1 class="project-title">My Projects</h1>
                <div class="multi-projects">
                    <div class="projects">
                        <h2>Endless Pawsabilities</h2>
                    <a href="https://zchalk.github.io/sk8erboyz/" target="_blank"><img src={Endlesspawsabilities} alt="Endless Pawsawilities"/></a>
                    </div>
                    <div class="projects">
                        <h2>Grogrogro</h2>
                    <a href="https://grogrogro.herokuapp.com/" target="_blank"><img src={Grogrogro} alt="Grogrogro" height="233px"/></a>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}