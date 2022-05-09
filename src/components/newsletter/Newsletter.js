import React, {useState} from "react"; 
import "./newsletter.css"

import {images} from "../../constants"





export default function Newsletter () {

    const [text, setText] = useState();

    const SearchInput = (e) => {
        return setText(e.target.value); 
    }
    const handleSumbit = (event) => {
        return event.preventDefault();
    } 

    return (
        <section className="app__newsletter-section">
        <div className="app__newsletter-container">
        <div className="app__newsletter-wrapper">
        <p className="app__newsletter-paragraph">Newsletter</p>
        <img className="app__newsletter-spoon" src={images.spoon} />
        <h1 className="app__newsletter-title">Subscribe To Our Newsletter</h1>
        <p className="app_newsletter-sub-paragraph">And never miss latest Updates</p>
        <form className="app__newsletter-form" onSubmit={handleSumbit} >
            <input className="app__newsletter-input" type="email" maxLength="100" value={text} onChange={SearchInput} ></input>
            <button type="submit" className="app__newsletter-button">Subscibe</button>
            </form> 
            </div>
            </div>
            <div className="app__newsletter-footer-container">
            <div className="app__newsletter-footer-wrapper">

            <div className="app__newsletter-box-contact">
            <h3 className="app__newsletter-contactus">Contact Us</h3>
            <p className="app__newsletter-address">9 W 53rd St, New York, NY 10019, USA</p>
            <p className="app__newsletter-phone1">+1 212-344-1230</p>
            <p className="app__newsletter-phone2">+1 212-344-1230</p>
                </div>

                <div className="app__newsletter-box-gericht">
                <h1 className="app__newsletter-gericht-header">Gerícht</h1>
                <p className="app__newsletter-quote">"The best way to find yourself is to lose yourself in the service of others.”</p>
                <img className="app__newsletter-spoon-footer" src={images.spoon} />
                </div>

                <div className="app__newsletter-box-working">
                <h3 className="app__newsletter-working-title">Working Hours</h3>
                <p className="app__newsletter-week">Monday-Friday:</p>
                <p className="app__newsletter-weekhours">08:00 am -12:00 am</p>
                <p className="app__newsletter-weekend">Saturday-Sunday</p>
                <p className="app__newsletter-weekendhours">07:00am -11:00 pm</p>
                </div>

            </div>
            <div className="app__newsletter-footer-reserved-container">
            <p className="app__newsletter-footer-reserved-text">2021 Gerícht. All Rights reserved.</p>
                </div>


                </div>
            </section>
    )
}