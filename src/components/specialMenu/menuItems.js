import React from "react"; 
import "./menuitems.css"; 


const MenuItems = ({title, price, tags}) => {
    return (
        <div className="app_menuItem-main-container">

        <div className="app__menuItem-container">
            <p className="app__specialMenu-wineBeer-title">{title}</p>
        </div>
        
        <div className="app__menuItem-dash" />

        <div>
            <p className="app__menuItem-price">{price}</p>
            </div>

          

            <div className="app__menuItem-tags-container">
               
                <p className="app__menuItem-tags" style={{color: "#aaa"}}>{tags}</p>
                </div>
</div>
    )
}

export default MenuItems; 