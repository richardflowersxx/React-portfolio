import React from "react";
import monkey from "./monkey.png"
import './profile.css'

export default class Profile extends React.Component{
    render(){
        return(
            <section className="profile">
            <div className="profile-body">
                <h1 className="profile-title">Hi I'm Ricardo. Nice to meet you.</h1>
                <h2 className="profile-subtitle">Feel free to look at my awesome Portfolio</h2>
                <img src={monkey} alt="profile" height="300px"/>
            </div>
        </section>
        )
    }
}