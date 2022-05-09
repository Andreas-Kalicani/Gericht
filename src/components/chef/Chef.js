import React from "react"; 
import "./chef.css"
import {images} from "../../constants"; 

const Chef = () => {
    return (
        <section className="app__chef-container">
        <div className="app__chef-wrapper">

        <div className="app__chef-image-container">
        <img src={images.chef} className="app__chef-image" />
            </div>

            <div className="app__chef-info-container">
            <h3 className="app__chef-sub-title">Chef’s Word</h3>
            <img src={images.spoon} className="app__chef-image-spoon"/>
            <h1 className="app__chef-title">What we believe in</h1>
            <p className="app__chef-quote"><img src={images.quote} className="app__chef-image-quote" />Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
            <p className="app__chef-sub-underquote">auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
            <h3 className="app__chef-name-title">Kevin Luo</h3>
            <p className="app__chef-working-title">Chef & Founder</p>
            <img src={images.sign} className="app__chef-image-sign" />
                </div>

            </div>

            </section>
    )
}


export default Chef; 