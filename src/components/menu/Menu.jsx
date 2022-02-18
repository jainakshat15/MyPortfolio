import "./menu.scss"
import {Person, Mail,Instagram, LinkedIn, GitHub}from "@material-ui/icons"
export default function Menu({menuOpen,setMenuOpen}) {
    return (
        <div className={"menu "+ (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#home">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#about">About</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#skills">Skills</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#projects">Projects</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
                <li className="resume">
                    <a href="assets/resume.pdf" download >DOWNLOAD RESUME</a>
                </li>
            </ul>

            <div className="bottom">
                <div className="no">
                    <Person className="icon"/>
                    <span>+91 7597666863</span>
                </div>
                <div className="email">
                    <Mail className="icon"/>
                    <span>15.jain.akshat@gmail.com</span>
                </div>
                <div className="socials">
                    <a href="https://www.instagram.com/jainakshat._15/"><Instagram  className="insta" /></a>
                    <a href="https://www.linkedin.com/in/15-jain-akshat/"><LinkedIn className="linkedin"/></a>
                     <a href="https://github.com/jainakshat15"><GitHub className="github"/></a>
                </div>
            </div>
        </div>
    )
}
