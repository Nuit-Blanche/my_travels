import React from "react";
import Travel from "./Travel"
// src/Travels.js
const travels = [
  {
    destination: "Trip in Barcelona!",
    country: "Espagne",
    photo:
      "https:/www.nacel.fr/medias/_cache/villes/11/imagePrincipale/1920_1440/sejour-linguistique-barcelone.jpg",
    distance: "À 1657,3 km de Marseille"  
  },
  {
    destination: "Welcome to Lisboa!",
    country: "Portugal",
    photo:
    "https://cdn.logitravel.fr/contenidosShared/cruises/port/18/header.jpg",
    distance: "À 506,9 km de Marseille"    
  },
  {
    destination: "Walk in Montréal!",
    country: "Canada",
    photo:
    "https://www.uqat.ca/resources/medias/covers/montreal.jpg",
    distance: "À 6 007 km km de Marseille"   
  },
  {
    destination: "Discover Tokyo!",
    country: "Japan",
    photo:
      "http://goingabroad.org/wp-content/uploads/2015/02/tokyo-tower-night-roppongi-hills-iii.jpg",
    distance: "À 10 084 km de Marseille"  
  },
  {
    destination: "Drink in Dublin!",
    country: "Ireland",
    photo:
      "https://www.riotgames.com/darkroom/1440/0dffc174c72ce3dbaa23a8650557b624:79c68bf22b496b9ffdab7bcb34c930d1/dublin.jpg",
    distance: "À 1794,9 km de Marseille"  
  }
];

const Travels = () => (
  <div>
    {travels.map(travel => (
  <Travel photo={travel.photo} country={travel.country} destination={travel.destination} distance={travel.distance} />
)
    )}
  </div>
);

export default Travels;