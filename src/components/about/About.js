import React from "react"; 
import "./about.css"; 
import images from "../../constants/images"; 


const About = () => {
    return (
        <section className="app__about-container" background-image={images.bg}>
            <img src={images.G} className="app__about-image_G"/>
            <div className="app__about-wrapper">
                <div className="app__about-us-wrapper">
                    <h1 className="app__About-title">About Us</h1>
                    <img src={images.spoon} className="app__about-image-spoon-in-about-us" />
                    <p className="p__opensans-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                    <button className="custom__button-about">Know More</button>
                    </div>

                    <img src={images.knife} className="app__about-image_knife" />

                    <div className="app_about-history-wrapper">
                    <h1 className="app__About-history-title">Our History</h1>
                    <img src={images.spoon} className="app__about-image-spoon" />
                    <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                    <button className="custom__button-about">Know More</button>
                    </div>
            </div>
            </section>
    )
}

export default About; 
