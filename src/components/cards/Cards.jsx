import React from "react";
import './Cards.css';

export const Card = (image) =>
    <div className='card'>
        <img className='img-card' src={image.cardImage} alt={image.imageDis} />
    </div>;
