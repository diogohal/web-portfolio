import React from "react";
import email from "../Images/email.png"
import instagram from "../Images/instagram.png"
import linkedin from "../Images/linkedin.png"
import github from "../Images/github.png"

export default function Footer() {
    return (
        <div className="footer">
            <a href="mailto: diogobr.2014@outlook.com" rel="noreferrer">
                <img src={email} alt="email icon"/>
            </a>
            <a href="https://www.linkedin.com/in/diogohal/" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="linkedin icon"/>
            </a>
            <a href="https://www.github.com/diogohal/" target="_blank" rel="noreferrer">
                <img src={github} alt="github icon"/>
            </a>
            <a href="https://www.instagram.com/diogohal/" target="_blank" rel="noreferrer">
                <img src={instagram} alt="instagram icon"/>
            </a>
        </div>
    )
}