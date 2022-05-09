import React from "react";
import {images} from "../../constants";  
import "./gallery.css"; 

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {

    
    return (
        <section className="app__gallery-section-container">
        <div className="app__gallery-text-container">
        <p className="app__gallery-paragraph">Instagram</p>
        <img src={images.spoon} className="app__gallery-image-spoon" />
        <h1 className="app__gallery-title">Photo Gallery</h1>
        <p className="app__gallery-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button className="app__gallery-button">View More</button>
            </div>
            <div className="app__gallery-image-container">
            {galleryImages.map((image, index) => (
                <div className="app__gallery-card">
                <img className="app__gallery-image" src={image} key={index} /> 
                </div>
            ))}

                </div>
            </section>
    )
}


export default Gallery; 