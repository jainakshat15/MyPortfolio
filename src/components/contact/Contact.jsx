import { useState } from "react";
import "./contact.scss"
import emailjs from "emailjs-com";

export default function Contact() {
    const [email,setEmail] = useState("");


    const [message,setMessage] = useState("");
    const [messageT,setMessageT] = useState(false);


    function sendEmail(e){
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_iy0dlk2', e.target, 'user_pGAMO5C6Yzx5UXGGLN0JX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setEmail("")
        setMessage("")
        setMessageT(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={sendEmail}>
                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} name="email"/>
                    <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} name="message"></textarea>
                    <button type="submit">Send</button>
                    {messageT && <span>Thanks for your message :)</span> }
                </form>
            </div>
            
        </div>
    )
}
