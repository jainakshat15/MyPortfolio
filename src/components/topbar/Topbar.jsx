import "./topbar.scss"
import {Person, Mail,Instagram, LinkedIn, GitHub}from "@material-ui/icons"


export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">AKSHAT JAIN</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+91 7597666863</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>15.jain.akshat@gmail.com</span>
                    </div>
                </div>
                
                <div className="right">
                    <div className="socials">
                        <a href="https://github.com/jainakshat15"><GitHub className="github"/></a>
                        <a href="https://www.linkedin.com/in/15-jain-akshat/"><LinkedIn className="linkedin"/></a>
                        <a href="https://www.instagram.com/_.jainakshat._/"><Instagram  className="insta" /></a>
                       
                            
                            
                        
                    </div>
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>

                    </div>
                </div>
            </div>
        </div>
    )
}
