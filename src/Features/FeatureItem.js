import React from 'react';
import Sprite from "../Sprite";


const FeatureItem = (props) => {
   return (
     <div className="feature">
       <Sprite className="feature__icon" name={props.icon}/>
       <h4 className="heading-4 heading-4--dark">{props.name}</h4>
       <p className="feature__text">{props.text}</p>
     </div>
  );
};

export default FeatureItem;