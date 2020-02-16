import React, { FunctionComponent } from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import { Photo } from "@frontendmasters/pet";

interface IProps {
  name: string;
  animal: string;
  breed: string;
  media: Photo[];
  location: string;
  id: number;
}

const Pet: FunctionComponent<IProps> = props => {
  const { name, animal, breed, media, location, id } = props;
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
  media: PropTypes.array.isRequired,
  location: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Pet;
