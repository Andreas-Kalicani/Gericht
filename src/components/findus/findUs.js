import React from "react"; 
import "./findus.css"; 
import {images} from "../../constants"; 


export default function FindUs() {
    return (
        <section className="app__findus-section-container">
        <div className="app__findus-text-container">
        <p className="app__findus-text-paragraph">Contact</p>
        <img className="app__findus-image-spoon" src={images.spoon} />
        <h1 className="app__findus-title">Find Us</h1>
        <div className="app__findus-wrapper-opening-text">
        <p className="app__findus-subtext-paragraph">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <h3 className="app__findus-openingtext-title">Opening Hours</h3>
        <p className="app__findus-week-paragraph">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="app__findus-weekend-paragraph">Sat - Sun: 10:00 am - 03:00 am</p>
        <div className="app__findus-button-container">
        <button className="app__findus-button">Visit Us</button>
        </div>
            </div>

            </div>
            <div className="app__findus-image-container">
            <div className="app__findus-image-wrapper">
            <img className="app__findus-image-findus" src={images.findus} />

                </div>
                </div>
        
            </section>
    )
}