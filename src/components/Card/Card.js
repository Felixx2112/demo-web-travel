import React from "react";
import CardItem from "../CardItem/CardItem";
import { Images } from "../../assets/constants/index";
import "./Card.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={Images.IMAGE9}
              text="Explore the hidden warterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={Images.IMAGE2}
              text="Travel through the Island of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src={Images.IMAGE1}
              text="Travel through the Island of Bali in a Private Cruise"
              label="Vjp"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
