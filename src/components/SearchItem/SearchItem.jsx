import React from 'react';
import './SearchItem.css'; // Importez le fichier CSS pour les styles
import { Link } from "react-router-dom"; // Importez Link depuis react-router-dom
const SearchItem = ({ title, distance, description, features, price, image, availabilityLink }) => {
  return (
    <div className="searchItem">
      <img src={image} alt={title} className="siImg" /> 
      <div className="siDesc">
        <h1 className="siTitle">{title}</h1>
        <span className="siDistance">{distance}</span>
        <span className="siSubtitle">{description}</span>
        <span className="siFeatures">{features}</span>
      </div>
      <div className="siDetails">
        <div className="siDetailTexts">
          <span className="siPrice">{price}</span>
          <Link to={availabilityLink}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
