import React from 'react';
const cardImages = ["https://throneandvine.com/wp-content/uploads/2023/02/lago-di-braies-boat-rental.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Glenfinnan_Viaduct_-_2022.jpg/1200px-Glenfinnan_Viaduct_-_2022.jpg", "https://www.sharpholidays.in/images/products/burj-al-arab.jpg"];
const cardHeading = ["Lago di braies", "Glenfinnan viaduct", "United arab emirates"];
const cardSubheading = ["Braies, Italy", "United Kingdom", "Dubai"];
const cardAmount = ["$245"];


export const Crousel = () => {
    return (
        <div className="crousel-container slide">
            <div className="crousel-items d-flex flex-column">
                <img src={cardImages[0]} alt='' className="card-image"/>
                <p className="h4 font-weight-bold mx-3 my-2">{cardHeading[0]}</p>
                <div className="mx-3 d-flex flex-row align-items-center card-subheading">
                    <p className="card-subheading-child"><span class="material-symbols-rounded card-location">location_on</span> {cardSubheading[0]}</p>
                </div>
                <div className="card-amount mx-3"><p><span className="h4 font-weight-bold">{cardAmount[0]}</span>/ Per person</p></div>
                <button className="book-now-btn">Book Now</button>
            </div>
            <div className="crousel-items">
            <img src={cardImages[1]} alt='' className="card-image"/>
                <p className="h4 font-weight-bold mx-3 my-2">{cardHeading[1]}</p>
                <div className="mx-3 d-flex flex-row align-items-center card-subheading">
                    <p className="card-subheading-child"><span class="material-symbols-rounded card-location">location_on</span> {cardSubheading[1]}</p>
                </div>
                <div className="card-amount mx-3"><p><span className="h4 font-weight-bold">{cardAmount[0]}</span>/ Per person</p></div>
                <button className="book-now-btn">Book Now</button>
            </div>
            <div className="crousel-items">
            <img src={cardImages[2]} alt='' className="card-image"/>
                <p className="h4 font-weight-bold mx-3 my-2">{cardHeading[2]}</p>
                <div className="mx-3 d-flex flex-row align-items-center card-subheading">
                    <p className="card-subheading-child"><span class="material-symbols-rounded card-location">location_on</span> {cardSubheading[2]}</p>
                </div>
                <div className="card-amount mx-3"><p><span className="h4 font-weight-bold">{cardAmount[0]}</span>/ Per person</p></div>
                <button className="book-now-btn">Book Now</button>
            </div>
            <div className="crousel-items d-flex flex-column">
                <img src={cardImages[0]} alt='' className="card-image"/>
                <p className="h4 font-weight-bold mx-3 my-2">{cardHeading[0]}</p>
                <div className="mx-3 d-flex flex-row align-items-center card-subheading">
                    <p className="card-subheading-child"><span class="material-symbols-rounded card-location">location_on</span> {cardSubheading[0]}</p>
                </div>
                <div className="card-amount mx-3"><p><span className="h4 font-weight-bold">{cardAmount[0]}</span>/ Per person</p></div>
                <button className="book-now-btn">Book Now</button>
            </div>
            <div className="crousel-items">
            <img src={cardImages[1]} alt='' className="card-image"/>
                <p className="h4 font-weight-bold mx-3 my-2">{cardHeading[1]}</p>
                <div className="mx-3 d-flex flex-row align-items-center card-subheading">
                    <p className="card-subheading-child"><span class="material-symbols-rounded card-location">location_on</span> {cardSubheading[1]}</p>
                </div>
                <div className="card-amount mx-3"><p><span className="h4 font-weight-bold">{cardAmount[0]}</span>/ Per person</p></div>
                <button className="book-now-btn">Book Now</button>
            </div>
            <div className="crousel-items">
            <img src={cardImages[2]} alt='' className="card-image"/>
                <p className="h4 font-weight-bold mx-3 my-2">{cardHeading[2]}</p>
                <div className="mx-3 d-flex flex-row align-items-center card-subheading">
                    <p className="card-subheading-child"><span class="material-symbols-rounded card-location">location_on</span> {cardSubheading[2]}</p>
                </div>
                <div className="card-amount mx-3"><p><span className="h4 font-weight-bold">{cardAmount[0]}</span>/ Per person</p></div>
                <button className="book-now-btn">Book Now</button>
            </div>
            <div className="crousel-items d-flex flex-column">
                <img src={cardImages[0]} alt='' className="card-image"/>
                <p className="h4 font-weight-bold mx-3 my-2">{cardHeading[0]}</p>
                <div className="mx-3 d-flex flex-row align-items-center card-subheading">
                    <p className="card-subheading-child"><span class="material-symbols-rounded card-location">location_on</span> {cardSubheading[0]}</p>
                </div>
                <div className="card-amount mx-3"><p><span className="h4 font-weight-bold">{cardAmount[0]}</span>/ Per person</p></div>
                <button className="book-now-btn">Book Now</button>
            </div>
            <div className="crousel-items">
            <img src={cardImages[1]} alt='' className="card-image"/>
                <p className="h4 font-weight-bold mx-3 my-2">{cardHeading[1]}</p>
                <div className="mx-3 d-flex flex-row align-items-center card-subheading">
                    <p className="card-subheading-child"><span class="material-symbols-rounded card-location">location_on</span> {cardSubheading[1]}</p>
                </div>
                <div className="card-amount mx-3"><p><span className="h4 font-weight-bold">{cardAmount[0]}</span>/ Per person</p></div>
                <button className="book-now-btn">Book Now</button>
            </div>
            <div className="crousel-items">
            <img src={cardImages[2]} alt='' className="card-image"/>
                <p className="h4 font-weight-bold mx-3 my-2">{cardHeading[2]}</p>
                <div className="mx-3 d-flex flex-row align-items-center card-subheading">
                    <p className="card-subheading-child"><span class="material-symbols-rounded card-location">location_on</span> {cardSubheading[2]}</p>
                </div>
                <div className="card-amount mx-3"><p><span className="h4 font-weight-bold">{cardAmount[0]}</span>/ Per person</p></div>
                <button className="book-now-btn">Book Now</button>
            </div>
    </div>
    );
}