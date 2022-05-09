import React from "react"; 
import images from "../../constants/images"; 
import "./laurel.css"


const Laurel = () => {
    return (
        <section className="app__laurel-container">
        <div className="app__laurel-image-logo-wrapper">
        <img className="app__laurel-image-logo" src={images.logo} alt="logo in laurel" />
            </div>
            <div className="app__laurel-info-container">
            <div className="app__laruel-info-wrapper">
            <div className="app__Laruel-info-text-wrapper">
           <p className="app__laurel-paragraph-text">Awards & recognition</p>
           <img src={images.spoon} className="app__laurel-image-spoon" />
           <h1 className="app__laurel-info-title">Our Laurels</h1>
           </div>
           <div className="app_laruel-awards-container">
           <div className="app_laruel-awards-wrapper">
           <img  className="app__laruel-awards2-image" src={images.award02} />
           <div className="app__laruel-awards-text-wrapper">
           <h3 className="app__laurel-awards-title">Bib Gourmond</h3>
           <p className="app__laruel-awards-paragraph">Lorem ipsum dolor sit amet, consectetur.</p>
           </div>
           </div>
           <div className="app_laruel-awards-wrapper">
           <img  className="app__laruel-awards2-image" src={images.award01} />
           <div className="app__laruel-awards-text-wrapper">
           <h3 className="app__laurel-awards-title">Rising Star</h3>
           <p className="app__laruel-awards-paragraph">Lorem ipsum dolor sit amet, consectetur.</p>
           </div>
           </div>
           <div className="app_laruel-awards-wrapper">
           <img  className="app__laruel-awards2-image" src={images.award05} />
           <div className="app__laruel-awards-text-wrapper">
           <h3 className="app__laurel-awards-title">AA Hospitality</h3>
           <p className="app__laruel-awards-paragraph">Lorem ipsum dolor sit amet, consectetur.</p>
           </div>
           </div>
           <div className="app_laruel-awards-wrapper">
           <img  className="app__laruel-awards2-image" src={images.award03} />
           <div className="app__laruel-awards-text-wrapper">
           <h3 className="app__laurel-awards-title">Outstanding Chef</h3>
           <p className="app__laruel-awards-paragraph">Lorem ipsum dolor sit amet, consectetur.</p>
           </div>
           </div>
           </div>

                </div>
                <div className="app__laurel-info-image-wrapper">
                <div className="app__laurel-info-image-g-wrapper">
                <img className="app__laurel-image-laurel" src={images.laurels} />
                    </div>


                </div>
                </div>
        

            </section>
    )
}

export default Laurel; 