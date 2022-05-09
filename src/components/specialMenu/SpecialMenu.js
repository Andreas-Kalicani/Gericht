import React from "react"; 
import "./specialmenu.css";
import MenuItems from "./menuItems"; 
import {images, data} from "../../constants"; 


const SpecialMenu = () => {
    return(
        <section className="app__specialMenu-container"> 

        <div className="app__specialMenu-title-wrapper">
        <h2 className="app__specialMenu-sub">Menu that fits your palatte</h2>
        <img src={images.spoon} className="app__specialMenu-spoon"/>
        <h1 className="app__specialMenu-title">Today’s Special</h1>
        </div>

        <div className="app__specialMenu-menu-wrapper">

            <div className="app__specialMenu-wineBeers">
                <p className="app__specialMenu-wineBeer-list-name">Wine & Beers</p>
                {data.wines.map((wine, index) => (
                    <MenuItems title={wine.title} price={wine.price} tags={wine.tags} />
                ))}
              
            </div>
             
            <div className="app__specialMenu-image-container">
            <img className="app__specialMenu-image_menu" src={images.menu} />
            </div>

          
            <div className="app__specialMenu-cocktails">
                <p className="app__specialMenu-cocktails-list-name" alt="specialMenu img">Cocktails</p>
                {data.cocktails.map((cocktail, index) => (
                    <MenuItems title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
                ))}
                
            </div>
          
           
        </div>

        <div className="app__specialMenu-button-container">
                <button className="custom__button"> Explore More</button>
                
                </div> 

      
        
        </section>
    )
}

export default SpecialMenu; 