import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

const Pet = ({ name, animal, breed, media, location, id }) => {
  let hero = "https://placecorgi.com/300/300";
  if (media.length) {
    hero = media[0].small;
  }
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

Pet.propTypes = {
  name: PropTypes.string.isRequired,
  animal: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  media: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Pet;
