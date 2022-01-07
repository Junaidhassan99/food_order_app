import React from 'react';

import './Background.css';


function Background(props) {
  return (
    <div class='background-img-wrapper'>
      <img class='background-img' src='/images/food_img.jpg' alt='food img'/>
      {props.children}
    </div>
  );
}

export default Background;
