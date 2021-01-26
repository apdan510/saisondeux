import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Grow...</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="January 2021"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="February 2021"
              label="FEB"
              path="/services"
            />
            <CardItem
              src="images/img-9.jpg"
              text="January 2021"
              label="JAN"
              path="/services"
            />
            <CardItem
              src="images/img-9.jpg"
              text="January 2021"
              label="JAN"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="March 2021"
              label="MAR"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="April 2021"
              label="APRIL"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="May 2021"
              label="MAY"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
