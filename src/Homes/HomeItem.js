import React from 'react';
import Sprite from "../Sprite";



const HomeItem = (props) => {
  return (
    <div className="home">
      <img src={props.img} alt={props.imgAlt} className="home__img"/>
      <Sprite className="home__like" name="icon-heart-full"/>
      <h5 className="home__name">{props.name}</h5>
      <div className="home__location">
        <Sprite name="icon-map-pin"/>
        <p>{props.location}</p>
      </div>
      <div className="home__rooms">
        <Sprite name="icon-profile-male"/>
        <p>{props.rooms} rooms</p>
      </div>
      <div className="home__area">
        <Sprite name="icon-expand"/>
        <p>{props.area} m<sup>2</sup></p>
      </div>
      <div className="home__price">
        <Sprite name="icon-key"/>
        <p>${props.price}</p>
      </div>
      <button className="btn home__btn">Contact realtor</button>
    </div>


    // <div className="feature">
    //   <Sprite className="feature__icon" name={props.icon}/>
    //   <h4 className="heading-4 heading-4--dark">{props.name}</h4>
    //   <p className="feature__text">{props.text}</p>
    // </div>
  );
};

export default HomeItem;