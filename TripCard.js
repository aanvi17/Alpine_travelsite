// TripCard.js
import React from 'react';


const TripCard = ({ image, price, days, groupSize, difficulty, title, description, location, locationLink }) => {
  return (
    <div className="trip-card">
      <div className="trip-card-image" style={{ backgroundImage: `url(${image})` }}>
        <div className="trip-card-price">{price}</div>
      </div>
      <div className="trip-card-details">
        <div className="trip-card-stats">
          <div className="trip-card-stat">
            <strong>{days}</strong>
            <span>Days</span>
          </div>
          <div className="trip-card-stat">
            <strong>{groupSize}</strong>
            <span>Group size</span>
          </div>
          <div className="trip-card-stat">
            <strong>{difficulty}</strong>
            <span>Difficulty</span>
          </div>
        </div>
        <h3 className="trip-card-title">{title}</h3>
        <p className="trip-card-description">{description}</p>
        <a href={locationLink} className="trip-card-location">
          {location}
        </a>
      </div>
    </div>
  );
};

export default TripCard;
