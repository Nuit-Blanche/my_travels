import React from "react";

const travel = ({ destination, country, photo, distance }) => (
  <figure>
    <img src={photo} alt={photo} />
    <figcaption>
      <blockquote>{country}</blockquote>
      <cite>{destination}</cite>
      <cite>{distance}</cite>      
    </figcaption>
  </figure>
);

export default Travel;