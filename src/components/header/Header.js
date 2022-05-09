import React from "react"
import "./header.css"
import images from '../../constants/images';


const Header = () => {
    return (
        <section className="app__header-container">
            <div className="app__header-wrapper">
                <p className="app__header-wrapper-p">Chase the new flavour</p>
                <img src={images.spoon} className="app__header-image_spoon" />
                <h1 className="app__header-title">The Key To Find Dining</h1>
                <p className="app__header-title-undertext">Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                <button className="custom__button-header">Explore More</button>
                </div>
                <img src={images.welcome} className="app__header-image_welcome" />
            </section>
    )
}

export default Header; 