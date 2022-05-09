import React, {useState} from "react"; 
import "./video.css"; 
import {images, meal} from "../../constants"
import { BsFillPlayFill, BsPauseFill } from "react-icons"; 

const Video = () => {
    return (
        <section className="app__video-container">
        <div className="app__video-wrapper">
            <video 
            autoPlay
            loop
            muted
            src={meal}
            width={"auto"}
            height={"auto"}
            className="app__video-video"
            />
          
        
         
        </div>
         </section>
    )
}


export default Video; 