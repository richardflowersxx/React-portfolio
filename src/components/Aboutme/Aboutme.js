import React from "react";
import resume from "./Resume.png"
import './Aboutme.css'

export default class Aboutme extends React.Component{
    render(){
        return(
            <section className= "aboutSec" id="about-me">
            <div className="about-body">
                <h1 className="about-title">About me</h1>
                <p className="aboutParagraph">I am a full stack developer who went to the UNC computer science bootcamp to learn the skill to become a unicorn developer. Before entering bootcamp, I graduated highschool. I also have worked with stores mostly in customer service and I’ve learned skills to communicate and help customers. I also have learned the skill to work in teams to help give good customer service. I have succeeded in many challenges because I am able to brainstorm, be organized, and good at communicating ideas. With all the skill I have obtained so far, I see myself using my skills in the web developer or web designer workplace. </p>
                <div className="profileIcon">
                    <div className="icons" id="github">
                        <a href="https://github.com/richardflowersxx" target="_blank"><i class="fab fa-github fa-10x"></i></a>  
                        <h5>My Github</h5>
                    </div>
                    <div className="icons" id="linkedin">
                        <a href="https://www.linkedin.com/in/ricardo-flores-462626201/" target="_blank"><i class="fab fa-linkedin fa-10x"></i></a> 
                        <h5> My Linkedin</h5> 
                        </div>
                        <div className="icons" id="resume">
                            <img src={resume} alt="resume" width="160px" height="160px"/>
                            <h5> My Resume</h5> 
                            </div>
                </div>
            </div>
        </section>
        )
    }
}